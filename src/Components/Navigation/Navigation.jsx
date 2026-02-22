import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from './Navigation.module.scss';

const Navigation = ({ darkTheme, setDarkTheme, hideOnMainPage = false }) => {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    // Инициализация Supabase клиента
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase URL или ANON_KEY не установлены в .env файле');
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Создание уникального идентификатора сессии
    const sessionId = crypto.randomUUID();

    // Подписка на изменения в таблице user_sessions
    const channel = supabase
      .channel('user_sessions_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_sessions',
        },
        (payload) => {
          // Обновление количества онлайн-пользователей
          // Здесь можно получить количество строк в таблице user_sessions
          supabase
            .from('user_sessions')
            .select('*', { count: 'exact' })
            .then(({ count }) => {
              setOnlineCount(count || 0);
            });
        }
      )
      .subscribe();

    // Получение IP-адреса и User-Agent (IP-адрес должен быть получен на сервере, но для демонстрации используем 'unknown')
    const ipAddress = 'unknown'; // В реальном приложении IP-адрес должен быть получен на сервере
    const userAgent = navigator.userAgent;
    const startTime = new Date().toISOString();

    // Создание записи о сессии при монтировании компонента
    supabase.from('user_sessions').insert([{ id: sessionId, ip_address: ipAddress, user_agent: userAgent, start_time: startTime }]).then((result) => {
      if (result.error) {
        console.error('Ошибка при создании сессии:', result.error);
      }
    });

    // Функция для обновления времени окончания сессии
    const updateEndTime = async () => {
      const endTime = new Date().toISOString();

      try {
        const { error } = await supabase
          .from('user_sessions')
          .update({ end_time: endTime })
          .eq('id', sessionId);

        if (error) {
          console.error('Ошибка при обновлении сессии:', error);
        }
      } catch (error) {
        console.error('Ошибка при обновлении сессии:', error);
      }
    };

    // Обработчик события beforeunload для обновления end_time при закрытии вкладки
    const handleBeforeUnload = () => {
      updateEndTime();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Обновление времени окончания сессии и расчета продолжительности при размонтировании компонента
    return () => {
      updateEndTime();

      // Удаляем обработчик события beforeunload
      window.removeEventListener('beforeunload', handleBeforeUnload);

      // Отписка от канала
      supabase.removeChannel(channel);
    };
  }, []);

  // Если скрытие навигации включено и мы на главной странице, не отображаем навигацию
  if (hideOnMainPage) {
    return null;
  }

  return (
    <nav className={styles.Navigation}>
      <div className={styles.NavContent}>
        <div className={styles.NavContentTop}>
          {/* Кнопка переключения темы */}

          <div className={styles.ThemeAndOnline}>
            <button
              className={styles.ThemeButton}
              onClick={() => setDarkTheme(!darkTheme)}
              tabIndex={-1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2048 2048">
                <path fill="currentColor"
                      d="M960 512q93 0 174 35t142 96t96 142t36 175q0 93-35 174t-96 142t-142 96t-175 36q-93 0-174-35t-142-96t-96-142t-36-175q0-93 35-174t96-142t142-96t175-36zm0 768q66 0 124-25t101-69t69-102t26-124q0-6-25-124t-69-101t-102-69t-124-26q-35 0-64 7v626q29 7 64 7zm64-896H896V0h128v384zM896 1536h128v384H896v-384zm1024-640v128h-384V896h384zM384 1024H0V896h384v128zm123-426L236 326l90-90l272 271l-91 91zm906 724l271 272l-90 90l-272-271l91-91zm0-724l-91-91l272-271l90 90l-271 272zm-906 724l91 91l-272 271l-90-90l271-272z"></path>
              </svg>
            </button>

            {/* Индикатор онлайн-пользователей */}
            <button className={styles.OnlineButton}>
               {onlineCount}
            </button>
          </div>

          {/* Кнопки навигации для десктопа */}
          <div className={styles.NavButtonsDesktop}>
            <a href={'/CV — Соловьев Александр.pdf'} download className={styles.NavButton}>
              <p className={styles.ButtonText}>📄 Скачать резюме в pdf.</p>
            </a>
            <a target='_blank' href="https://calendly.com/alexandrsolovev/" className={styles.NavButton}
               rel="noreferrer">
              <p className={styles.ButtonText}>📅 Забронировать встречу</p>
            </a>
            <a target='_blank' href="https://t.me/innv1" className={styles.NavButton} rel="noreferrer">
              <p className={styles.ButtonText}>👋 Написать в телеграм</p>
            </a>
          </div>

          {/* Кнопки навигации для мобильных устройств */}
          <div className={styles.NavButtonsMobile}>
            <a href={'/CV — Соловьев Александр.pdf'} download className={styles.NavButtonMobile}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <a target='_blank' href="https://calendly.com/alexandrsolovev/screening?back=1&month=2025-12" className={styles.NavButtonMobile} rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </a>
            <a target='_blank' href="https://t.me/innv1" className={styles.NavButtonMobile} rel="noreferrer">
                <p className={styles.ButtonText}>👋 Написать в телеграм</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;