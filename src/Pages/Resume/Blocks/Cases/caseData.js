import React from 'react';

export const casesData = [
    {
        id: 'sparta',
        title: 'Система для рассылок внутри телеграм • Sparta',
        description: '',
        image: '/Preview/Sparta.png',
        category: 'web',
        date: '2023',
        technologies: ['WEB','B2E']
    },
    {
        id: 'bazgain',
        title: 'Сервис для путешествий • Bazgain',
        description: 'ДС, Управление командой, MVP',
        image: '/Preview/Bazgain.gif',
        category: 'mobile',
        date: '2023',
        technologies: ['MOBILE', 'WEB']
    },

    {
        id: 'tinkoff',
        title: 'Tinkoff – Perfomance review',
        description: 'Редизайн платформы',
        image: '/Preview/Tinkoff.png',
        category: 'web',
        date: '2023',
        technologies: ['React', 'TypeScript', 'Styled Components']
    },

    {
        id: 'botdev',
        title: 'Ускорил разработку новых tg-ботов',
        description: 'Выстроил процесс, ускорил TTM',
        image: '/Preview/Bot.png',
        category: 'web',
        date: '2022',
        technologies: ['JavaScript', 'Node.js', 'Express']
    },
    {
        id: 'hrdep',
        title: 'HR Department',
        description: 'UX онбординг бота для новых сотрудников',
        image: '/cat.png',
        category: 'web',
        date: '2022',
        technologies: ['Figma', 'React', 'Chatbots']
    },
    {
        id: 'chatlab',
        title: 'ChatLab',
        description: 'Агрегатор мессенджеров и социальных сетей',
        image: '/Preview/Chatlab.png',
        category: 'web',
        date: '2023',
        technologies: ['React', 'Socket.io', 'MongoDB']
    },
    {
        id: 'tennisbooking',
        title: 'Tennis Booking',
        description: 'Делаю свое приложение для бронирования общественных кортов',
        image: '/Preview/Tennis.png',
        category: 'web',
        date: '2024',
        technologies: ['React', 'Node.js', 'PostgreSQL']
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