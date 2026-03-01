import React from 'react';
import styles from './CommonBlocks.module.scss';

const Tinkoff = ({darkTheme, setDarkTheme}) => {
    return (
        <div className={styles.Wrapper}>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/Preview/Tinkoff.png" alt="Скриншоты проекта Sparta"/>
            </div>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Tinkoff</h2>
                <p className={styles.BlockDescription}>
                    Perfomance review
                </p>
            </div>


            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема #1</h2>
                <p className={styles.Paragraph}>
                    Перегруженная страница оценки сотрудников. <br/> Отсутствие иерархии и 15 обязательных вопросов <br/>
                    Среднее время на один отзыв ~15 мин.
                </p>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>

                <p className={styles.Paragraph}>
                    Сгрупировали вопросы в три категории. Теперь сотрудник может быстро оценить каждую группу. При этом
                    мы добавили кнопку «Подробнее», чтобы, при желании, можно было оценить каждый пункт группы отдельно.

                    <br/>
                    <br/>

                    Заметно улучшил UI, что снизило когнетивную нагрузку на пользователей
                </p>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/tpage.png" alt="Скриншоты проекта Sparta"/>
            </div>


            <br/>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема #2</h2>
                <p className={styles.Paragraph}>
                    Процесс оценки был неочевидным и занимал много времени, люди ставили оценку интуитивно из-за слайдера
                </p>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/rate.png" alt="Скриншоты проекта Sparta"/>
            </div>

            <div className={styles.ResultBlock}>
                <h2 className={styles.BlockTitle}>Что сделал?</h2>
                <p className={styles.Paragraph}>
                    Упростил механику оценки и добавил понятные градации с визуальной обратной связью
                </p>
            </div>

            <br/>

            <div className={styles.BlockContainer}>
                <h2 className={styles.BlockTitle}>Проблема #3</h2>
                <p className={styles.Paragraph}>
                    Конфиденциальность: <br/>
                    1. Сотрудники часто не оставляли честную ОС, так как автора отзыва было видно, что снижало качество. <br/>
                    2. Так же у некоторых пользователь был страх проходить ревью на рабочем месте, т.к другие сотрудники могли увидеть кому ты оставляешь отзыв
                </p>
            </div>

            <div className={styles.ResultBlock}>
                <p className={styles.Paragraph}>
                    Добавили выбор типа отзыва: анонимный или открытый<br/>
                    Реализовали возможность скрыть имя получателя отзыва при прохождения ревью
                </p>
            </div>

            <div className={styles.VideoBlock}>
                <img className={styles.VideoElement} src="/tuser.png" alt="Скриншоты проекта Sparta"/>
            </div>

            <div className={styles.GoldBlock}>
                <h2>Сократил time on task сотрудников в 2 раза</h2>
            </div>



            {/*<div className={styles.ResultBlock}>*/}
            {/*    <h2 className={styles.BlockTitle}>Что сделал?</h2>*/}
            {/*    <p className={styles.BlockDescription}>*/}

            {/*        Провёл анализ текущих процессов, кастдевы и исследования с руководителями и топ-менеджерами; собрал интерактивные прототипы, тестировал их с пользователями;*/}
            {/*        <br/> <br/>*/}

            {/*        •	Упростил механику оценки (фиксированные уровни)*/}
            {/*        •	Добавил понятные градации и визуальную обратную связь*/}
            {/*        •	Сократил количество шагов до публикации отзыва*/}

            {/*        – Сократил time on task сотрудников; <br/>*/}
            {/*        – Снизил нагрузку на пользователей; <br/>*/}
            {/*        – Повысил качество работы и производительность;<br/>*/}
            {/*        – Внедрил новые интерфейсы "Performance Review";*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
};

export default Tinkoff;