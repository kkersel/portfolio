import React from 'react';
import styles from './Resume.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const LeftSide = () => {
  const [faqRef, isFaqVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  return (
    <div className={styles.LeftSide}>
      {/* Скрытый элемент для отслеживания видимости FAQ */}
      <div ref={faqRef} style={{ position: 'absolute', top: 'calc(100vh - 10px)', left: 0, width: '1px', height: '1px', pointerEvents: 'none' }}></div>

      <div className={styles.Profile}>
        <div className={styles.Avatar}>
          <img
            alt=""
            className={styles.AvatarImage}
            src="/Ava.png"
          />
        </div>
        <div className={styles.ProfileInfo}>
          <p className={styles.ProfileName}>
            Александр Соловьев
          </p>
        </div>
        {/*<p className={styles.ProfileDescription}>*/}
        {/*  Product Designer с 5-летним опытом. Работал в B2C, B2B, B2E проектах: от стартапов до*/}
        {/*  крупных компаний. Создаю решения от идеи до внедрения, измеряю влияние на*/}
        {/*  бизнес-метрики.*/}
        {/*</p>*/}
      </div>
      <div className={styles.ProfileButtons}>
        <a href={'/CV — Соловьев Александр.pdf'} download className={styles.ProfileButton}>
          <p className={styles.ButtonText}>📄 Скачать резюме в pdf.</p>
        </a>
        <a target='_blank' href="https://calendly.com/alexandrsolovev/" className={styles.ProfileButton}
           rel="noreferrer">
          <p className={styles.ButtonText}>📅 Забронировать встречу</p>
        </a>
        <a target='_blank' href="https://t.me/innv1" className={`${styles.ProfileButton} ${isFaqVisible ? styles.GradientButton : ''}`} rel="noreferrer">
          <p className={styles.ButtonText}>👋 Написать в телеграм</p>
        </a>
      </div>
    </div>
  );
};

export default LeftSide;