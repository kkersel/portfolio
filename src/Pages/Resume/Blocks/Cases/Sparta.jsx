import React from 'react';
import styles from './CommonBlocks.module.scss';

const Sparta = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>MarketLab • Sparta</h2>
                <p className={styles.BlockDescription}>
                    Система для рассылок внутри телеграм.
                </p>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/Sparta.png" alt="Скриншоты проекта Sparta"/>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    – Собрали бизнес требования к продукту; <br/>
                    – Собрали фидбэк от пользователей и сформировал пул новых фичей; <br/>
                    – Выстроил архитектуру совместо с продактом; <br/>
                    – Спроектировали все основные сценарии пользователей и интерфейсы; <br/>
                    – Провел A/B тестирование;
                </p>
                <p className={styles.BlockDescription}>Время работы сотрудников на новом продукте сократилось в 2.5 раза</p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>Бизнес был зависим от одного разработчика и старое решение было сложно масштабировать</p>
                    <p className={styles.Paragraph}>&nbsp;</p>
                    <p className={styles.Paragraph}>Была сформирована продуктовая команда, для разработки нового продукта с учетом всех необходимых бизнес требований и запросов от пользователей</p>
                </div>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Информационная архитектура</h2>
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
                        <source src="/Sparta.webm" type="video/webm" />
                        Ваш браузер не поддерживает видео
                    </video>
                </div>
            </div>

            <div className={styles.BlockContainer}>
                <p className={styles.Paragraph}>Спроектировал 15 разделов, собрал 600+ экранов</p>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/maket.png" alt="Макеты проекта Sparta"/>
            </div>
        </div>
    );
};

export default Sparta;