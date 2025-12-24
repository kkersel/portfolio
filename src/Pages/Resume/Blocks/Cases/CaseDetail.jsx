import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import a from '../../Resume.module.scss'; // Импортируем стили главной страницы

// Импорты компонентов кейсов
const Sparta = React.lazy(() => import('./Sparta'));
const Bazgain = React.lazy(() => import('./Bazgain'));
const HRDep = React.lazy(() => import('./HRDep'));
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

const CaseDetail = ({ darkTheme, setDarkTheme }) => {
    const {caseId} = useParams();
    const navigate = useNavigate();
    const [currentCase, setCurrentCase] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundCase = casesData.find(c => c.id === caseId);
        if (foundCase) {
            setCurrentCase(foundCase);
        } else {
            // Если кейс не найден, перенаправляем на главную
            navigate('/');
        }
        setLoading(false);
    }, [caseId, navigate]);

    // Находим индексы соседних кейсов для навигации
    const currentIndex = casesData.findIndex(c => c.id === caseId);
    const prevCase = currentIndex > 0 ? casesData[currentIndex - 1] : null;
    const nextCase = currentIndex < casesData.length - 1 ? casesData[currentIndex + 1] : null;

    if (loading) {
        return (
            <div className={a.ResumePage}>
                <div>Загрузка...</div>
            </div>
        );
    }

    if (!currentCase) {
        return (
            <div className={a.ResumePage}>
                <div>Кейс не найден</div>
            </div>
        );
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

                        {/* Основной контент кейса */}
                        <React.Suspense fallback={<div>Загрузка кейса...</div>}>
                            {React.createElement(currentCase.component, { darkTheme, setDarkTheme })}
                        </React.Suspense>

                        {/* Навигация между кейсами */}
                        <div className={workExpStyles.caseNavigation}>
                            {prevCase && (
                                <Link to={`/case/${prevCase.id}`} className={workExpStyles.navLink}>
                                    ← {prevCase.title}
                                </Link>
                            )}

                            {!prevCase && <div></div>} {/* Пустой div для выравнивания */}

                            {nextCase && (
                                <Link to={`/case/${nextCase.id}`} className={workExpStyles.navLink}>
                                    {nextCase.title} →
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseDetail;