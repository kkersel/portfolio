import React, {useState, useEffect, useRef, lazy, Suspense} from 'react';
import a from './Resume.module.scss';
import LeftSide from './LeftSide';
import FeedbackModal from "../../Components/FeedbackModal/FeedbackModal";
import Footer from "./Blocks/Footer/Footer";
import {useNavigate} from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// Ленивая загрузка компонентов для оптимизации
const VirtualInterviewComponent = lazy(() => import("./Blocks/Interview/VirtualInterviewComponent"));
const AboutMe = lazy(() => import("./Blocks/About me/AboutMe"));
const Chatlab = lazy(() => import("./Blocks/Cases/Chatlab"));
const WorkExp = lazy(() => import("./Blocks/WorkExp/WorkExp"));
const Bazgain = lazy(() => import("./Blocks/Cases/Bazgain"));
const TennisBooking = lazy(() => import("./Blocks/Cases/TennisBooking"));
const Tinkoff = lazy(() => import("./Blocks/Cases/Tinkoff"));
const Sparta = lazy(() => import("./Blocks/Cases/Sparta"));
const HRDep = lazy(() => import("./Blocks/Cases/HRDep"));

// Заглушка для ленивой загрузки
const LoadingComponent = ({ children }) => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {children}
  </div>
);

const Resume = () => {
    const navigate = useNavigate(); // eslint-disable-line no-unused-vars
    const [darkTheme, setDarkTheme] = useState(true);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const visitStartTime = useRef(null);
    const [hasSubmittedFeedback, setHasSubmittedFeedback] = useState(false);
    const [hasTriggeredFeedback, setHasTriggeredFeedback] = useState(false);
    useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Добавляем или удаляем класс для темной темы
    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [darkTheme]);

    // Инициализируем время начала визита
    useEffect(() => {
        visitStartTime.current = Date.now();

        const handleBeforeUnload = (e) => {
            const visitDuration = Date.now() - visitStartTime.current;
            const visitDurationInSeconds = visitDuration / 1000;

            if (visitDurationInSeconds < 30 && !hasSubmittedFeedback && !hasTriggeredFeedback) {
                // Показываем модальное окно перед уходом
                setShowFeedbackModal(true);
                setHasTriggeredFeedback(true);
                // Браузер покажет свое стандартное предупреждение
                e.preventDefault();
                e.returnValue = 'Вы не оставили обратную связь. Уверены, что хотите уйти?';
                return 'Вы не оставили обратную связь. Уверены, что хотите уйти?';
            }
        };

        // Событие при уходе курсора с области окна браузера
        // Это сработает, когда пользователь уводит курсор в область вкладок или закрывает браузер
        const handleMouseLeave = (e) => {
            // Проверяем, действительно ли курсор покидает окно (а не просто перемещается между элементами)
            // e.clientY <= 0 срабатывает при уходе в область вкладок/адресной строки
            if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
                const visitDuration = Date.now() - visitStartTime.current;
                const visitDurationInSeconds = visitDuration / 1000;

                if (visitDurationInSeconds < 30 && !hasSubmittedFeedback && !hasTriggeredFeedback) {
                    // Показываем модальное окно немедленно и устанавливаем флаг
                    setShowFeedbackModal(true);
                    setHasTriggeredFeedback(true);
                }
            }
        };

        // Событие при возвращении курсора на страницу
        const handleMouseEnter = () => {
            // Если пользователь вернулся, но еще не был триггер ухода, можно скрыть модальное окно
            // После триггера ухода модальное окно остается показанным
        };

        // Также отслеживаем переключение вкладок
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Пользователь переключился на другую вкладку
                const visitDuration = Date.now() - visitStartTime.current;
                const visitDurationInSeconds = visitDuration / 1000;

                if (visitDurationInSeconds < 30 && !hasSubmittedFeedback && !hasTriggeredFeedback) {
                    // Показываем модальное окно при переключении на другую вкладку
                    setShowFeedbackModal(true);
                    setHasTriggeredFeedback(true);
                }
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [hasSubmittedFeedback, hasTriggeredFeedback]);

    const handleFeedbackSubmit = async (feedbackData) => {
        // Обновляем состояние, чтобы предотвратить повторный показ модального окна
        setHasSubmittedFeedback(true);
    };

    return (
       <div className={a.ResumePage}>
           <div className={a.ContentLayout}>
               <div className={a.RightSide}>
                   <div className={a.WrapperInfo}>
                       <div className={a.WrapperHeader}>
                           <div className={a.IntroCard}>
                               <p className={a.IntroTitle}>Привет!</p>
                               <div className={a.IntroBlock}>
                                   <p className={a.IntroText}>
                                       Я Саша, Product Designer с 5-летним опытом. Работал в B2E, B2B, B2C проектах: от
                                       стартапов до крупных компаний. За все время работы помог компаниям скорить TTM, повышал конверсию, поднимал вовлеченность, снижал нагрузку на сотрудников и поддержку, спроектировал дизайн для 3 MVPшек с нуля.
                                   </p>
                               </div>
                           </div>
                           <Suspense fallback={<LoadingComponent>Загрузка профиля...</LoadingComponent>}>
                               <WorkExp/>
                           </Suspense>
                       </div>

                       {/*Cases - ленивая загрузка для улучшения производительности */}
                       <Suspense fallback={<LoadingComponent>Загрузка кейса...</LoadingComponent>}>
                           <Bazgain/>
                       </Suspense>
                       <Suspense fallback={<LoadingComponent>Загрузка кейса...</LoadingComponent>}>
                           <Sparta/>
                       </Suspense>
                       <Suspense fallback={<LoadingComponent>Загрузка кейса...</LoadingComponent>}>
                           <HRDep/>
                       </Suspense>
                       <Suspense fallback={<LoadingComponent>Загрузка кейса...</LoadingComponent>}>
                           <Chatlab/>
                       </Suspense>
                       <Suspense fallback={<LoadingComponent>Загрузка кейса...</LoadingComponent>}>
                           <Tinkoff/>
                       </Suspense>
                       <Suspense fallback={<LoadingComponent>Загрузка кейса...</LoadingComponent>}>
                           <TennisBooking/>
                       </Suspense>

                       <Suspense fallback={<LoadingComponent>Загрузка интервью...</LoadingComponent>}>
                           <VirtualInterviewComponent/>
                       </Suspense>
                   </div>
               </div>
               <LeftSide darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
               <FeedbackModal
                   isOpen={showFeedbackModal}
                   onClose={() => setShowFeedbackModal(false)}
                   onSubmit={handleFeedbackSubmit}
                   sessionDurationSeconds={Math.floor((Date.now() - visitStartTime.current) / 1000)}
               />
           </div>
           <Suspense fallback={<LoadingComponent>Загрузка информации обо мне...</LoadingComponent>}>
               <AboutMe/>
           </Suspense>
           <Footer/>
       </div>
   )
       ;
};

export default Resume;