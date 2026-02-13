import React from 'react';

export const casesData = [
    {
        id: 'sparta',
        title: 'MarketLab • Sparta',
        description: 'Система для рассылок внутри телеграм',
        image: '/Preview/Sparta.png',
        category: 'web'
    },
    {
        id: 'bazgain',
        title: 'Сервис для путешествий',
        description: 'ДС, Управление командой, MVP',
        image: '/Preview/Bazgain.gif',
        category: 'mobile'
    },
    {
        id: 'botdev',
        title: 'Проект Bot-Dev',
        description: 'Выстроил процесс, ускорил TTM',
        image: '/Preview/Bot.png',
        category: 'web'
    },
    {
        id: 'hrdep',
        title: 'HR Department',
        description: 'UX онбординг бота для новых сотрудников',
        image: '/cat.png',
        category: 'web'
    },
    {
        id: 'chatlab',
        title: 'ChatLab',
        description: 'Агрегатор мессенджеров и социальных сетей',
        image: '/Preview/Chatlab.png',
        category: 'web'
    },
    {
        id: 'tennisbooking',
        title: 'Tennis Booking',
        description: 'Делаю свое приложение для бронирования общественных кортов',
        image: '/Preview/Tennis.png',
        category: 'web'
    },
    {
        id: 'tinkoff',
        title: 'Tinkoff – Perfomance review',
        description: 'Редизайн платформы',
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