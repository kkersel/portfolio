import React from 'react';
import styles from './CommonBlocks.module.scss';
import { Button } from "../../../../Components/UI";

const TennisBooking = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Tennis Booking</h2>
                <p className={styles.Paragraph}>
                    Pet-проект: приложение для бронирования теннисных кортов.
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема</h2>
                <p className={styles.Paragraph}>
                    Сейчас люди бронируют теннисные корты через телеграм чаты, что ужасно неудобно
                </p>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.Paragraph}>
                    – Нашел и подтвердил проблему;<br/>
                    – Навайбкодил WebApp для бронирования теннисных кортов;<br/>
                    – Добавил оценку уровня игры с помощью тестирования; <br/>
                    – Создал админ-панель для управления кортами и просмотра аналитики;
                </p>
            </div>

            <div className={styles.VideoBlock}>
                {/*<img className={styles.VideoElement} src="/tennis1.png" alt=""/>*/}
                <img className={styles.VideoElement} src="/tennis2.png" alt=""/>
            </div>


            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Подтверждение востребованности</h2>
                <p className={styles.Paragraph}>
                    В общем чате кортов закинул идею и получил положительный фидбэк от людей
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>MVP</h2>
                <p className={styles.Paragraph}>
                    Приложение работает в бета-тесте; <br/>
                    Можно забронировать корт, определить свой уровень игры через тест и найти спарринг-партнера, управлять кортами через админ-панель
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <p className={styles.Paragraph}>
                    *UI еще не реализован
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
                        <Button variant='secondary'>Открыть Tennis Booking (VPN)</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TennisBooking;