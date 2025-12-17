import React, {useState, useEffect} from 'react';
import styles from './CommonBlocks.module.scss';
import Button from "../../../../Components/Buttons/Button/Button";

const Bazgain = () => {
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(null);

    // Массив скриншотов для галереи
    const screenshots = [
        '/place.png',
        '/cars.png',
        '/review.png'
    ];

    const nextScreenshot = () => {
        setAnimationDirection('next');
        setCurrentScreenshotIndex((prevIndex) =>
            prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevScreenshot = () => {
        setAnimationDirection('prev');
        setCurrentScreenshotIndex((prevIndex) =>
            prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
        );
    };

    const goToScreenshot = (index) => {
        setAnimationDirection(index > currentScreenshotIndex ? 'next' : 'prev');
        setCurrentScreenshotIndex(index);
    };

    // Сброс направления анимации после завершения перехода
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationDirection(null);
        }, 300); // Длительность анимации

        return () => clearTimeout(timer);
    }, [currentScreenshotIndex]);

    return (
        <div className={styles.Wrapper}>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Bazgain Туризм</h2>
                <p className={styles.BlockDescription}>
                    Мобильное приложение для поиска крутых маршрутов и аренды авто в Дагестане.
                </p>
            </div>

            <img className={styles.VideoElement} src="/bazgain1.png" alt="Макеты проекта Sparta"/>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    Выстроил процесс внутри дизайн-команды; Генерил и валидировал гипотезы; <br/>
                    Собрал дизайн-систему; Описал правила работы с макетами и передачу в разработку; <br/>
                    Спроектировал все основные сценарии продукта;
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Design System</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>Без ДС проект превращался бы в бесконечный поток несогласованных
                        экранов, ошибок и правок.</p>
                    <p className={styles.Paragraph}>&nbsp;</p>
                    <p className={styles.Paragraph}>Я взял за основу несколько стабильных систем (VKUI, Atomaro),
                        пересобрал палитру, подобрал наборы иконок и оформил компоненты так, чтобы сократить кол-во
                        ошибок от джунов.</p> <br/>
                    <p className={styles.Paragraph}>Главная цель была простая: дать команде единый язык интерфейса и
                        сократить время на проектирование и разработку в долгосрок.</p>
                </div>
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
                        <source src="/DS.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Процесс</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>Продукт рос сразу в трёх направлениях — мобильное приложение,
                        веб-версия и админка — но при этом у команды не было единого подхода и гайдлайнов.</p>
                    <p className={styles.Paragraph}>&nbsp;</p>
                    <p className={styles.Paragraph}>Работа строилась итеративно, собирая типовые сценарии и закрывая
                        первичные пользовательские задачи.</p>
                    <p className={styles.Paragraph}>&nbsp;</p>
                    <p className={styles.Paragraph}>Моя задача была:</p>
                    <p className={styles.Paragraph}>— держать целостность продукта,</p>
                    <p className={styles.Paragraph}>— выстраивать архитектуру,</p>
                    <p className={styles.Paragraph}>— объяснять дизайнерам логику принятия решений,</p>
                    <p className={styles.Paragraph}>— дизайн и фронт ревью.</p>
                    <p className={styles.Paragraph}>— валидировать гипотезы и предлагать идеи.</p>
                </div>
            </div>

            <div className={styles.GalleryBlock}>
                <div className={styles.GalleryContainer}>
                    <div
                        className={`${styles.ScreenshotContainer} ${animationDirection ? styles[animationDirection] : ''}`}>
                        <img
                            src={screenshots[currentScreenshotIndex]}
                            alt={`Скриншот экрана Bazgain ${currentScreenshotIndex + 1}`}
                            className={styles.ScreenshotImage}
                        />
                    </div>
                    <button
                        className={`${styles.NavButton} ${styles.PrevButton}`}
                        onClick={prevScreenshot}
                        aria-label="Предыдущий скриншот"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                            <path
                                d="M6.53958 13.825L1.10625 8.39167C0.464583 7.75 0.464583 6.7 1.10625 6.0583L6.53958 0.625"
                                stroke="#0E117" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                        className={`${styles.NavButton} ${styles.NextButton}`}
                        onClick={nextScreenshot}
                        aria-label="Следующий скриншот"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                            <path
                                d="M1.46042 0.175L6.89375 5.6083C7.53542 6.25 7.53542 7.3 6.89375 7.9417L1.46042 13.375"
                                stroke="#0E17" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className={styles.Indicators}>
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.Indicator} ${index === currentScreenshotIndex ? styles.ActiveIndicator : ''}`}
                                onClick={() => goToScreenshot(index)}
                                aria-label={`Перейти к скриншоту ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.AppStoresBlock}>
                    <div className={styles.ButtonsContainer}>
                        <a href="https://apps.apple.com/us/app/%D0%B1%D0%B0%D0%B7%D0%B3%D0%B0%D0%B8%D0%BD-%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%BC/id6745242907?l=ru"
                           target="_blank" rel="noopener noreferrer">
                            <Button variant='secondary'>AppStore</Button>
                        </a>
                        <a href="https://www.rustore.ru/catalog/app/com.wayflare.bazgain" target="_blank"
                           rel="noopener noreferrer">
                            <Button variant='secondary'>RuStore</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bazgain;