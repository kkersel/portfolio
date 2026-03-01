import React from 'react';
import styles from './CommonBlocks.module.scss';

const Sparta = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>MarketLab • Sparta</h2>
                <b>О проекте:</b>
                <p className={styles.BlockDescription}>
                    Внутренняя система для управления рассылками в telegram.<br/>
                    Система обеспечивает работу 6 отделов внутри одного продукта: <br/>
                    Создание ботов, каналов и аккаунтов<br/>
                    Создание шаблонов, перевод контента на разные языки, постинг и управление командой<br/>
                    Аналитика и фин. отчеты
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>
                        Основные сценарии сотрудников, сильно тормозили процесс из-за сложного UX'a.<br/>
                        Хаос внутри разделов и большое кол-во ошибок пользователей в процессе работы приводили к большим убыткам<br/>

                        В добавок ко всему, решение было завязано на одном разработчике
                    </p>
                </div>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Цель</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>
                        Спроектировать удобный и понятный продукт, в котором сотрудники смогут быстрее закрывать свои задачи.
                        Сделать систему масштабируемой.
                    </p>
                </div>
            </div>


            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    – Собрал фидбэк от пользователей и выделил основные проблемы существующей системы; <br/>
                    – Выстроил IA совместо с продактом; <br/>
                    – Спроектировали все основные сценарии пользователей; <br/>
                    – Провел A/B тестирование;
                </p>
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

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/Sparta.png" alt="Скриншоты проекта Sparta"/>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/Sparta2.png" alt="Скриншоты проекта Sparta"/>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/Sparta3.png" alt="Скриншоты проекта Sparta"/>
            </div>

            <div className={styles.GoldBlock}>
                <h2>Производительность при работе с новым продуктом выросла на 150%</h2>
            </div>
        </div>
    );
};

export default Sparta;