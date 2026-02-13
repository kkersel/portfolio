import React from 'react';

export const casesData = [
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
        id: 'botdev',
        title: 'BOT-DEV',
        description: 'Роль дизайнера на проекте, собирать user-flow для телеграм ботов',
        image: '/Preview/Bot.png',
        category: 'web'
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
        image: '/Preview/Chatlab.png',
        category: 'web'
    },
    {
        id: 'tennisbooking',
        title: 'Tennis Booking',
        description: 'Full Stack 2025 – now',
        image: '/Preview/Tennis.png',
        category: 'web'
    },
    {
        id: 'tinkoff',
        title: 'Tinkoff',
        description: 'Product designer. 2023',
        image: '/Preview/Tinkoff.png',
        category: 'web'
    }
];

export const categories = [
    { id: 'all', label: 'Все' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Мобилка' }
];

// Маппинг ID кейса в компонент
export const caseComponents = {
    sparta: React.lazy(() => import('./Sparta')),
    bazgain: React.lazy(() => import('./Bazgain')),
    botdev: React.lazy(() => import('./BotDev')),
    hrdep: React.lazy(() => import('./HRDep')),
    chatlab: React.lazy(() => import('./Chatlab')),
    tennisbooking: React.lazy(() => import('./TennisBooking')),
    tinkoff: React.lazy(() => import('./Tinkoff'))
};