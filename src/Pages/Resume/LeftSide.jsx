import React from 'react';
import styles from './Resume.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const LeftSide = ({ darkTheme, setDarkTheme }) => {
  const [faqRef] = useIntersectionObserver({
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

      </div>
    </div>
  );
};

export default LeftSide;