import React from 'react';
import styles from './CommonBlocks.module.scss';
import Button from "../../../../Components/Buttons/Button/Button";

const TennisBooking = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Tennis Booking</h2>
                <p className={styles.BlockDescription}>
                    Pet-проект: приложение для бронирования теннисных кортов.
                </p>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    Надипкодил WebApp в tg для бронирования теннисных кортов;<br/>
                    Создал админ-панель для управления кортами и просмотра аналитики;
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема</h2>
                <p className={styles.BlockDescription}>
                    Сейчас люди бронируют теннисные корты через телеграм чаты, что ужасно неудобно
                </p>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/tennis1.png" alt=""/>
                <img className={styles.VideoElement} src="/tennis2.png" alt=""/>
            </div>


            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Подтверждение востребованности</h2>
                <p className={styles.BlockDescription}>
                    В общем чате кортов закинул идею и получил положительный фидбэк от людей
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>MVP</h2>
                <p className={styles.BlockDescription}>
                    Приложение работает в бета-тесте; <br/>
                    Можно забронировать корт, найти спарринг-партнера и определить свой уровень игры
                </p>

                <p className={styles.BlockDescription}>
                    *дизайн еще не реализован
                </p>
            </div>

            <div className={styles.GalleryBlock}>
                <div className={styles.GalleryContainer}>
                    <video
                        className={styles.VideoElementTennis}
                        autoPlay
                        controlsList="nodownload"
                        loop
                        muted
                    >
                        <source src="/Tennis.webm" type="video/webm"/>
                        Ваш браузер не поддерживает видео
                    </video>
                </div>
                <div className={styles.AppStoresBlock}>
                    <a href="https://t.me/tbookcao_bot" target="_blank" rel="noopener noreferrer">
                        <Button variant='secondary'>Открыть WebApp</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TennisBooking;