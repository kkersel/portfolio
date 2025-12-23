import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Badge } from '../UI';
import { supabase } from '../../utils/supabaseClient';
import styles from './FeedbackModal.module.scss';

const FeedbackModal = ({ isOpen, onClose, onSubmit, sessionDurationSeconds }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedbackText, setFeedbackText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const options = [
    "Нет релевантного опыта",
    "Нехватило описания кейсов",
    "Слабая преза",
    "Все супер"
  ];

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = async () => {
    // Проверяем, что хотя бы одно из полей заполнено
    if (!selectedOptions.length && !feedbackText.trim()) {
      setSubmitError('Пожалуйста, выберите хотя бы один вариант или введите текст отзыва');
      return;
    }
    
    setIsLoading(true);
    setSubmitError(null);
    
    try {
      // Отправляем данные в Supabase
      const { error } = await supabase
        .from('exit_feedback')
        .insert([{
          options: selectedOptions,
          feedback_text: feedbackText,
          page_url: window.location.href,
          user_agent: navigator.userAgent,
          session_duration_seconds: sessionDurationSeconds || 0
        }]);

      if (error) {
        console.error('Error saving feedback:', error);
        setSubmitError('Ошибка при отправке обратной связи. Пожалуйста, попробуйте еще раз.');
      } else {
        // Успешно отправлено
        onSubmit({
          options: selectedOptions,
          feedback: feedbackText
        });
        onClose();
      }
    } catch (error) {
      console.error('Error saving feedback:', error);
      setSubmitError('Ошибка при отправке обратной связи. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  
  if (!modalRoot) {
    console.error('Modal root element not found');
    return null;
 }

  return createPortal(
    <div className={styles.feedbackModalOverlay}>
      <div className={styles.feedbackModal}>
        <div className={styles.feedbackModalHeader}>
          <h2>Не зацепил? Помоги мне стать лучше</h2>
          <button className={styles.feedbackModalClose} onClick={onClose}>×</button>
        </div>
        
        <div className={styles.feedbackModalContent}>
          <div className={styles.feedbackOptions}>
            {options.map((option, index) => (
              <Badge
                key={index}
                variant={selectedOptions.includes(option) ? 'primary' : 'default'}
                size="large"
                onClick={() => toggleOption(option)}
                className={`${styles.feedbackBadge} ${selectedOptions.includes(option) ? styles.selected : ''}`}
              >
                {option}
              </Badge>
            ))}
          </div>
          
          <div className={styles.feedbackTextarea}>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Пара слов, что можно улучшить"
              className={styles.feedbackInput}
            />
          </div>
          
          {submitError && (
            <div className={styles.feedbackError}>
              {submitError}
            </div>
          )}
          <button
            className={styles.feedbackSubmitButton}
            onClick={handleSubmit}
            disabled={(!selectedOptions.length && !feedbackText.trim()) || isLoading}
          >

            {isLoading ? 'Отправка...' : 'Отправить'}
          </button>
        </div>
      </div>
    </div>,
    modalRoot
 );
};

export default FeedbackModal;