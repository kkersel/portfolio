import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import Sparta from './Sparta';
import Bazgain from './Bazgain';
import HRDep from './HRDep';
import Chatlab from './Chatlab';
import Tinkoff from './Tinkoff';
import TennisBooking from './TennisBooking';

// Данные для кейсов
const casesData = [
  {
    id: 'sparta',
    title: 'MarketLab • Sparta',
    description: 'Система для рассылок внутри телеграм.',
    image: '/Preview/Sparta.png',
    category: 'web'
  },
  {
    id: 'bazgain',
    title: 'Bazgain Туризм',
    description: 'Мобильное приложение для поиска крутых маршрутов и аренды авто в Дагестане.',
    image: '/Preview/Bazgain.gif',
    category: 'mobile'
  },
  {
    id: 'hrdep',
    title: 'MarketLab • HR Department',
    description: 'UX для онбординг бота',
    image: '/cat.png',
    category: 'web'
  },
  {
    id: 'chatlab',
    title: 'ChatLab',
    description: 'Агрегатор мессенджеров и социальных сетей.',
    image: '/ChatLab.png',
    category: 'web'
  },
  {
    id: 'tennisbooking',
    title: 'Tennis Booking',
    description: 'Full Stack 2025 – now',
    image: '/TB.jpg',
    category: 'web'
  },
  {
    id: 'tinkoff',
    title: 'Tinkoff',
    description: 'Product designer. 2023',
    image: '/tinkoff.png',
    category: 'web'
  }
];

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'web', label: 'Веб' },
  { id: 'mobile', label: 'Мобильные' }
];

const CasesTabs = () => {
  const [activeTab, setActiveTab] = useState('cases-grid'); // 'cases-grid', 'cases-all'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCases = selectedCategory === 'all'
    ? casesData
    : casesData.filter(caseItem => caseItem.category === selectedCategory);

  // Первый тип отображения - карточки с изображениями и кнопкой "Подробнее"
  const renderCaseCards = () => (
    <div className={workExpStyles.casesGrid}>
      {filteredCases.map((caseItem) => (
        <Link to={`/case/${caseItem.id}`} key={caseItem.id} className={workExpStyles.caseCard}>
          <div className={workExpStyles.caseImageContainer}>
            <img src={caseItem.image} alt={caseItem.title} className={workExpStyles.caseImage} />
          </div>
          <div className={workExpStyles.caseContent}>
            <h4 className={workExpStyles.caseTitle}>{caseItem.title}</h4>
            <p className={workExpStyles.caseDescription}>{caseItem.description}</p>
            <button className={workExpStyles.detailButton}>Подробнее</button>
          </div>
        </Link>
      ))}
    </div>
  );

  // Второй тип отображения - как в оригинальном Resume.jsx (все кейсы подряд)
  const renderAllCases = () => (
    <div>
      <Sparta />
      <Bazgain />
      <HRDep />
      <Chatlab />
      <Tinkoff />
      <TennisBooking />
    </div>
  );

  return (
    <div className={workExpStyles.casesSection}>
      {/* Табы для переключения между видами отображения */}
      <div className={workExpStyles.tabsContainer}>
        <button
          className={`${workExpStyles.tabButton} ${activeTab === 'cases-grid' ? workExpStyles.activeTab : ''}`}
          onClick={() => setActiveTab('cases-grid')}
        >
          <span className={workExpStyles.icon}>▦</span> Плитка
        </button>
        <button
          className={`${workExpStyles.tabButton} ${activeTab === 'cases-all' ? workExpStyles.activeTab : ''}`}
          onClick={() => setActiveTab('cases-all')}
        >
          <span className={workExpStyles.icon}>☰</span> Все подряд
        </button>
      </div>

      {activeTab === 'cases-grid' && (
        <div>
          {/* Табы для категорий кейсов */}
          <div className={workExpStyles.categoriesContainer}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${workExpStyles.categoryTab} ${selectedCategory === category.id ? workExpStyles.activeCategory : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {renderCaseCards()}
        </div>
      )}
      
      {activeTab === 'cases-all' && renderAllCases()}
    </div>
  );
};

export default CasesTabs;