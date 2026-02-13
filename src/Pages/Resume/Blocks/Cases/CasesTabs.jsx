import React, {useState} from 'react';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import {casesData, categories} from './caseData';
import CaseList from './CaseList';
import CaseCard from './CaseCard';

const CasesTabs = ({darkTheme, setDarkTheme}) => {
    const [activeTab, setActiveTab] = useState('cases-grid'); // 'cases-grid', 'cases-all'
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredCases = selectedCategory === 'all'
        ? casesData
        : casesData.filter(caseItem => caseItem.category === selectedCategory);

    // Первый тип отображения - карточки с изображениями и кнопкой "Подробнее"
    const renderCaseCards = () => (
        <div className={workExpStyles.casesGrid}>
            {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
        </div>
    );

    // Второй тип отображения - как в оригинальном Resume.jsx (все кейсы подряд)
    const renderAllCases = () => {
        const caseIds = filteredCases.map(caseItem => caseItem.id);
        return <CaseList caseIds={caseIds} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />;
    };

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

            {activeTab === 'cases-all' && renderAllCases()}
        </div>
    );
};

export default CasesTabs;