import React, { useState, useEffect, Suspense } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import { casesData, categories, caseComponents } from './caseData';

const CasesSection = ({ darkTheme, setDarkTheme }) => {
    const { caseId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(caseId ? 'cases-all' : 'cases-grid');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredCases = selectedCategory === 'all'
        ? casesData
        : casesData.filter(caseItem => caseItem.category === selectedCategory);

    const renderCaseCards = () => (
        <div className={workExpStyles.casesGrid}>
            {filteredCases.map((caseItem) => (
                <Link to={`/case/${caseItem.id}`} key={caseItem.id} className={workExpStyles.caseCard}>
                    <div className={workExpStyles.caseImageContainer}>
                        <img src={caseItem.image} alt={caseItem.title} className={workExpStyles.caseImage}/>
                    </div>
                    <div className={workExpStyles.caseContent}>
                        <h4 className={workExpStyles.caseTitle}>{caseItem.title}</h4>
                        <p className={workExpStyles.caseDescription}>{caseItem.description}</p>
                        {/*<button className={workExpStyles.detailButton}>Подробнее</button>*/}
                    </div>
                </Link>
            ))}
        </div>
    );

    const renderAllCases = () => {
        let orderedCases = [...casesData];

        if (caseId) {
            const activeCaseIndex = orderedCases.findIndex(c => c.id === caseId);
            if (activeCaseIndex !== -1) {
                const [activeCase] = orderedCases.splice(activeCaseIndex, 1);
                orderedCases.unshift(activeCase);
            }
        }

        return (
            <div className={workExpStyles.casesContainer}>
                {orderedCases.map((caseItem, index) => {
                    const Component = caseComponents[caseItem.id];
                    return (
                        <React.Fragment key={caseItem.id}>
                            <Suspense fallback={<div>Загрузка кейса...</div>}>
                                {Component ? React.createElement(Component, { darkTheme, setDarkTheme }) : null}
                            </Suspense>
                            {index < orderedCases.length - 1 && (
                                <div className={workExpStyles.caseSeparator}>
                                    <img src="/s1.png" alt="Separator" className={workExpStyles.separatorImage} />
                                    <img src="/s2.png" alt="Separator" className={workExpStyles.separatorImage} />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={`${workExpStyles.casesSection} ${caseId ? workExpStyles.caseDetailPage : ''}`}>
            {!caseId && (
                <>
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
                            <span className={workExpStyles.icon}>☰</span> Смотреть все подряд
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
                </>
            )}

            {(activeTab === 'cases-all' || caseId) && (
                <div className={workExpStyles.casesContainer}>
                    {caseId && (
                        <div className={workExpStyles.caseDetailHeader}>
                            <button
                                className={workExpStyles.backButton}
                                onClick={() => navigate('/')}
                                aria-label="Вернуться назад"
                            >
                                ← Назад
                            </button>
                        </div>
                    )}
                    {renderAllCases()}
                </div>
            )}
        </div>
    );
};

export default CasesSection;