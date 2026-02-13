import React from 'react';
import { casesData, caseComponents } from './caseData';
import workExpStyles from '../WorkExp/WorkExp.module.scss';

const CaseList = ({ caseIds = null, darkTheme, setDarkTheme, orderedCaseId = null }) => {
    // Если передан orderedCaseId, перемещаем этот кейс в начало
    let orderedCases = caseIds
        ? casesData.filter(caseItem => caseIds.includes(caseItem.id))
        : [...casesData];
    
    if (orderedCaseId) {
        const activeCaseIndex = orderedCases.findIndex(c => c.id === orderedCaseId);
        if (activeCaseIndex !== -1) {
            const [activeCase] = orderedCases.splice(activeCaseIndex, 1);
            orderedCases.unshift(activeCase);
        }
        // Если orderedCaseId не найден, всё равно отображаем доступные кейсы
    }

    return (
        <div className={workExpStyles.casesContainer}>
            {orderedCases.map((caseItem) => {
                const Component = caseComponents[caseItem.id];
                
                // Для BotDev передаем специальный пропс:
                // - если это активный кейс (orderedCaseId), то включаем видео (enableVideo: true)
                // - если это не активный кейс в списке, то отключаем видео (enableVideo: false)
                if (caseItem.id === 'botdev') {
                    const enableVideo = caseItem.id === orderedCaseId;
                    return (
                        <React.Suspense key={caseItem.id} fallback={<div>Загрузка кейса...</div>}>
                            {Component ? React.createElement(Component, { darkTheme, setDarkTheme, enableVideo }) : null}
                        </React.Suspense>
                    );
                } else {
                    // Для остальных кейсов используем обычную логику
                    return (
                        <React.Suspense key={caseItem.id} fallback={<div>Загрузка кейса...</div>}>
                            {Component ? React.createElement(Component, { darkTheme, setDarkTheme }) : null}
                        </React.Suspense>
                    );
                }
            })}
        </div>
    );
};

export default CaseList;