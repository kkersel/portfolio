import React from 'react';
import styles from './CommonBlocks.module.scss';


const Chatlab = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>MarketLab • Chatlab</h2>
                <p className={styles.BlockDescription}>
                    Агрегатор мессенджеров и социальных сетей.
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>Маркетинг пришел с проблемой, юзеры уходят при добавлении новых мессенжеров</p>
                    <p className={styles.Paragraph}>&nbsp;</p>
                    <p className={styles.Paragraph}>Я провёл короткие интервью с теми, кто бросал процесс. Основной страх – люди не понимали, кто увидит их переписки и куда могут уйти пароли. Недоверие возникало ровно в моменте ввода данных.</p>
                    <p className={styles.Paragraph}>&nbsp;</p>
                    <p className={styles.Paragraph}>Решение: Добавил баннер, где объяснили пользователям, что их данные зашифрованы и у платформы нет к ним доступа</p>
                </div>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    – Повысил конверсию подключения мессенджеров на 7%
                </p>
            </div>

            <div className={styles.VideoBlock}>
                <div className={styles.VideoContainer}>
                    <video
                        className={styles.VideoElement}
                        autoPlay
                        controlsList="nodownload"
                        loop
                        muted
                    >
                        <source src="/Chatlab.webm" type="video/webm" />
                        Ваш браузер не поддерживает видео
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Chatlab;