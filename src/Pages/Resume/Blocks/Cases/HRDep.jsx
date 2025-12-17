import React from 'react';
import styles from './CommonBlocks.module.scss';

const HRDep = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>MarketLab • HR Department</h2>
            </div>

            <img className={styles.VideoElement} src="/cat.png" alt="Скриншоты проекта Sparta"/>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.BlockDescription}>
                    – Спроектировал UX для онбординг бота; <br/>
                    – Создал удобные шаблоны с инструкциями для HRов в фигме; <br/>
                    – Сократил время на онбординг новых сотрудников с 2-3 дней до 1 дня; <br/>
                    – Снизили обращение к HR на 30%; <br/>
                    – Отрисовал весь коммуникационный дизайн для бота и конфлюенса;
                </p>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема:</h2>
                <div className={styles.BlockText}>
                    <p className={styles.Paragraph}>HRы тратили слишком много времени на закрытие типовых вопросов от
                        новых сотрудников.</p>
                    <p className={styles.Paragraph}>Отсутствие консистентности и редполитики.</p>
                </div>
            </div>

        </div>
    );
};

export default HRDep;