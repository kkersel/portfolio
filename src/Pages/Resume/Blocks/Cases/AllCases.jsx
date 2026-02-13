import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import a from '../../Resume.module.scss';

// Импорты компонентов кейсов
const Sparta = React.lazy(() => import('./Sparta'));
const Bazgain = React.lazy(() => import('./Bazgain'));
const HRDep = React.lazy(() => import('./HRDep'));
const BotDev = React.lazy(() => import('./BotDev'));
const Chatlab = React.lazy(() => import('./Chatlab'));
const TennisBooking = React.lazy(() => import('./TennisBooking'));
const Tinkoff = React.lazy(() => import('./Tinkoff'));

// Данные для кейсов
const casesData = [
    {
        id: 'sparta',
        title: 'MarketLab • Sparta',
        description: 'Система для рассылок внутри телеграм.',
        component: Sparta,
        category: 'web'
    },
    {
        id: 'bazgain',
        title: 'Bazgain Туризм',
        description: 'Мобильное приложение для поиска крутых маршрутов и аренды авто в Дагестане.',
        component: Bazgain,
        category: 'mobile'
    },
    {
        id: 'hrdep',
        title: 'MarketLab • HR Department',
        description: 'UX для онбординг бота',
        component: HRDep,
        category: 'web'
    },
    {
        id: 'botdev',
        title: 'BOT-DEV',
        description: 'Роль дизайнера на проекте, собирать user-flow для телеграм ботов',
        component: BotDev,
        category: 'web'
    },
    {
        id: 'chatlab',
        title: 'ChatLab',
        description: 'Агрегатор мессенджеров и социальных сетей.',
        component: Chatlab,
        category: 'web'
    },
    {
        id: 'tennisbooking',
        title: 'Tennis Booking',
        description: 'Full Stack 2025 – now',
        component: TennisBooking,
        category: 'web'
    },
    {
        id: 'tinkoff',
        title: 'Tinkoff',
        description: 'Product designer. 2023',
        component: Tinkoff,
        category: 'web'
    }
];

const AllCases = ({ darkTheme, setDarkTheme }) => {
    const { caseId } = useParams();
    const navigate = useNavigate();

    // Находим индекс активного кейса
    const activeCaseIndex = casesData.findIndex(c => c.id === caseId);

    // Если указан активный кейс, перемещаем его в начало
    let orderedCases = [...casesData];
    if (activeCaseIndex !== -1) {
        const [activeCase] = orderedCases.splice(activeCaseIndex, 1);
        orderedCases.unshift(activeCase);
    }

    return (
        <div className={a.ResumePage}>
            <div className={a.ContentLayout}>
                <div className={a.RightSide} style={{gridColumn: "span 12"}}>
                    <div className={a.WrapperInfo}>
                        {/* Кнопка "назад" */}
                        <div className={workExpStyles.caseDetailHeader}>
                            <button
                                className={workExpStyles.backButton}
                                onClick={() => navigate('/')}
                                aria-label="Вернуться назад"
                            >
                                ← Назад
                            </button>
                        </div>

                        <div className={workExpStyles.casesContainer}>
                            {orderedCases.map((caseItem) => (
                                <React.Suspense key={caseItem.id} fallback={<div>Загрузка кейса...</div>}>
                                    {React.createElement(caseItem.component, { darkTheme, setDarkTheme })}
                                </React.Suspense>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCases;