import React from 'react';
import styles from './CommonBlocks.module.scss';

const Tinkoff = () => {
    return (
       <div className={styles.Wrapper}>
           <div className={styles.BlockContainer}>
               <h2 className={styles.BlockTitle}>Tinkoff</h2>
               <p className={styles.BlockDescription}>
                   Perfomance review
               </p>
           </div>


           <div className={styles.ResultBlock}>
               <h2 className={styles.BlockTitle}>Что сделал?</h2>
               <p className={styles.BlockDescription}>
                   Сократил time on task сотрудников, снизил нагрузку на пользователей, повысил качество работы и производительность; внедрил новые интерфейсы "Performance Review".
               </p>
           </div>

           <div className={styles.BlockContainer}>
               <h2 className={styles.BlockTitle}>Проблема</h2>
               <p className={styles.BlockDescription}>
                   Перегруженность пользователей
               </p>
               <p className={styles.BlockDescription}>
                   Провёл анализ текущих процессов, кастдевы и исследования с руководителями и топ-менеджерами; собрал интерактивные прототипы, тестировал их с пользователями;
               </p>
           </div>
       </div>
    );
};

export default Tinkoff;