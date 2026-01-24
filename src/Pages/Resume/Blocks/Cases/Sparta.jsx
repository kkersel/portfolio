import React from 'react';
import styles from './CommonBlocks.module.scss';

const Sparta = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>MarketLab • Sparta</h2>
                <b>О проекте:</b>
                <p className={styles.BlockDescription}>
                    Внутренняя CRM-система для управления рассылками в telegram.<br/>
                    Система позволяет полностью автоматизировать весь процесс работы 6 отделов: <br/>
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
                <h2 className={styles.BlockTitle}>Цель проекта</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>
                        Спроектировать для компании удобный и понятный продукт, в котором отделы и сотрудники смогут быстрее закрывать свои задачи.
                        Сделать систему масштабируемой и понятной.
                    </p>
                </div>
            </div>


            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    – Собрали бизнес требования к продукту; <br/>
                    – Собрал фидбэк от пользователей и предложил пул новых фичей; <br/>
                    – Выстроил архитектуру совместо с продактом; <br/>
                    – Спроектировали все основные сценарии пользователей интерфейсы; <br/>
                    – Провел A/B тестирование;
                </p>
                <p className={styles.BlockDescription}>Время работы сотрудников на новом продукте сократилось в 2.5 раза</p>
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