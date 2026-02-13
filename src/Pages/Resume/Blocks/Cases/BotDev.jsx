import React from 'react';
import styles from './CommonBlocks.module.scss';

const BotDev = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>BOT-DEV</h2>
                <p className={styles.BlockDescription}>
                    Роль дизайнера на проекте, собирать user-flow для телеграм ботов
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>
                        – Большое кол-во обращений от разработчиков с целью уточнения инфы (часто путались в флоу из-за плохой навигации)
                        <br/>
                        – Отсутствие консистенции в макетах
                    </p>
                </div>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    – Собрал обратную связь от разработчиков <br/>
                    – Спроектировал тестовый флоу с новым UI <br/>
                    – Презентовал решение команде
                    – Выстроил процесс между PM, дизайнером и разработкой <br/>
                    – Внедрил новый UI-kit в работу <br/>
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
        </div>
    );
};

export default BotDev;