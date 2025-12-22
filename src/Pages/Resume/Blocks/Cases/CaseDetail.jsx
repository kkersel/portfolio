import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import a from '../../Resume.module.scss'; // Импортируем стили главной страницы

// Данные для кейсов
const casesData = [
    {
        id: 'sparta',
        title: 'MarketLab • Sparta',
        description: 'Система для рассылок внутри телеграм.',
        component: React.lazy(() => import('./Sparta')),
        category: 'web'
    },
    {
        id: 'bazgain',
        title: 'Bazgain Туризм',
        description: 'Мобильное приложение для поиска крутых маршрутов и аренды авто в Дагестане.',
        component: React.lazy(() => import('./Bazgain')),
        category: 'mobile'
    },
    {
        id: 'hrdep',
        title: 'MarketLab • HR Department',
        description: 'UX для онбординг бота',
        component: React.lazy(() => import('./HRDep')),
        category: 'web'
    },
    {
        id: 'chatlab',
        title: 'ChatLab',
        description: 'Агрегатор мессенджеров и социальных сетей.',
        component: React.lazy(() => import('./Chatlab')),
        category: 'web'
    },
    {
        id: 'tennisbooking',
        title: 'Tennis Booking',
        description: 'Full Stack 2025 – now',
        component: React.lazy(() => import('./TennisBooking')),
        category: 'web'
    },
    {
        id: 'tinkoff',
        title: 'Tinkoff',
        description: 'Product designer. 2023',
        component: React.lazy(() => import('./Tinkoff')),
        category: 'web'
    }
];

const CaseDetail = () => {
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
        return <div className={a.ResumePage}>Загрузка...</div>;
    }

    if (!currentCase) {
        return <div className={a.ResumePage}>Кейс не найден</div>;
    }

    // Получаем компонент кейса
    const CaseComponent = currentCase.component;

    return (
        <div className={a.ResumePage}>
            <div className={a.ContentLayout}>
                <div className={a.RightSide} style={{gridColumn: "span 12"}}>
                    <div className={a.WrapperInfo}>
                        {/* Кнопка "назад" */}
                        <div className={workExpStyles.caseDetailHeader}>
                            <button
                                className={workExpStyles.backButton}
                                onClick={() => navigate(-1)}
                                aria-label="Вернуться назад"
                            >
                                ← Назад
                            </button>
                            <h1 className={workExpStyles.caseTitle}>{currentCase.title}</h1>
                        </div>

                        {/* Основной контент кейса */}
                        <React.Suspense fallback={<div>Загрузка кейса...</div>}>
                            <CaseComponent/>
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