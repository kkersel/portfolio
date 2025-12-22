import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.NavContent}>
        {/* Кнопка переключения темы */}
        <button className={styles.ThemeButton} onClick={() => setDarkTheme(!darkTheme)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2048 2048">
            <path fill="currentColor"
                  d="M960 512q93 0 174 35t142 96t96 142t36 175q0 93-35 174t-96 142t-142 96t-175 36q-93 0-174-35t-142-96t-96-142t-36-175q0-93 35-174t96-142t142-96t175-36zm0 768q66 0 124-25t101-69t69-102t26-124q0-6-25-124t-69-101t-102-69t-124-26q-35 0-64 7v626q29 7 64 7zm64-896H896V0h128v384zM896 1536h128v384H896v-384zm1024-640v128h-384V896h384zM384 1024H0V896h384v128zm123-426L236 326l90-90l272 271l-91 91zm906 724l271 272l-90 90l-272-271l91-91zm0-724l-91-91l272-271l90 90l-271 272zm-906 724l91 91l-272 271l-90-90l271-272z"></path>
          </svg>
        </button>

        {/* Кнопки навигации */}
        <div className={styles.NavButtons}>
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
      </div>
    </nav>
  );
};

export default Navigation;