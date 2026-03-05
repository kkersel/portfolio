import React from 'react';
import styles from './CommonBlocks.module.scss';

const BotDev = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>BOT-DEV</h2>
                <p className={styles.BlockDescription}>
                    проектирование user-flow для телеграм ботов
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>
                        – Разработчики часто путались и допускали ошибки в работе из-за плохой навигации и перегруженного визуала в макетах
                        <br/>
                        – Отсутствие консистенции в макетах
                    </p>
                </div>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    – Собрал обратную связь от разработчиков;<br/>
                    – Спроектировал тестовый флоу с новым UI;<br/>
                    – Презентовал решение команде;<br/>
                    – Выстроил процесс между PM, дизайнером и разработкой;<br/>
                    – Внедрил новый UI-kit в работу;<br/>
                    – Провел демо для дизайнера
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
                        <source src="/Area.mp4" type="video/webm" />
                        Ваш браузер не поддерживает видео
                    </video>
                </div>
            </div>

            <div className={styles.GoldBlock}>
                <h2>TIME TO MARKET -20%</h2>
            </div>
        </div>
    );
};

export default BotDev;