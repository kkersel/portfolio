import React from 'react';
import a from './IntroCard.module.scss';
import Line from '../../../../Components/Line'

const IntroCard = ({ title, subtitle, description, image, additionalContent }) => {
 return (
    <div className={a.IntroCard}>
      <p className={a.IntroTitle}>Привет!</p>
      <div className={a.IntroBlock}>
        <p className={a.IntroText}>
          Я Саша, Product Designer. В дизайне 5 лет, работал с B2E, B2B, B2C: от
          стартапов до крупных компаний. <br/> Делаю сложное – понятным, с чистым UI
        </p>
        <Line/>

        <p className={a.IntroText}>
          Сейчас: менторю в <a href="https://productstar.ru/" target="_blank" rel="noopener noreferrer">PRODUCTSTAR x РБК</a> и делаю сервис для бронирования теннисных кортов – <a href="https://t.me/tbookcao_bot" target="_blank" rel="noopener noreferrer">Tennis Booking</a>
        </p>

        <p className={a.IntroText}>
          В <a href="https://mar-lab.ru/" target="_blank" rel="noopener noreferrer">Market Lab</a> проектировал систему для рассылок в тг, агрегатор мессенжеров, саппортил HR департамент и делал webApp ботов
        </p>

        <p className={a.IntroText}>
          В <a href="https://www.tbank.ru/" target="_blank" rel="noopener noreferrer">Tinkoff</a> работал над perfomance review
        </p>

        <p className={a.IntroText}>
          В <a href="https://apps.apple.com/us/app/bazgain-tourism/id6745242907" target="_blank" rel="noopener noreferrer">Bazgain</a> и Speech делал мобильные приложения
        </p>

        <p className={a.IntroText}>
          Тут <a href="https://t.me/Farsh_burger_bot" target="_blank" rel="noopener noreferrer">UP2U</a> проектировал сервисы для онлайн бронирований
        </p>

        <p className={a.IntroText}>
          А еще работал front-end разработчиком – <a href="https://okzo-systems.ru" target="_blank" rel="noopener noreferrer">okzo-systems</a>
        </p>
      </div>
    </div>
  );
};

export default IntroCard;