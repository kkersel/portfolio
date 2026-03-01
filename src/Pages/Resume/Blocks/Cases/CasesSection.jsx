import React, { useEffect, Suspense, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import { casesData, caseComponents } from './caseData';

const CasesSection = ({ darkTheme, setDarkTheme }) => {
    const { caseId } = useParams();
    const navigate = useNavigate();

    const mountedRef = useRef(false);

    useEffect(() => {
        if (!mountedRef.current) {
            window.scrollTo(0, 0);
            mountedRef.current = true;
        }
    }, []);

    const renderCaseCards = () => (
        <div className={workExpStyles.casesGrid}>
            {casesData.map((caseItem) => (
                <Link to={`/case/${caseItem.id}`} key={caseItem.id} className={workExpStyles.caseCard}>
                    <div className={workExpStyles.caseImageContainer}>
                        <img src={caseItem.image} alt={caseItem.title} className={workExpStyles.caseImage}/>
                    </div>
                    <div className={workExpStyles.caseContent}>

                        <div className={workExpStyles.title}>
                            <h4 className={workExpStyles.caseTitle}>{caseItem.title}</h4>
                            <p className={workExpStyles.caseDescription}>{caseItem.description}</p>
                        </div>

                        <div className={workExpStyles.caseHoverEmoji}>👀</div>
                        {/*<div className={workExpStyles.caseTechnologies}>*/}
                        {/*    {caseItem.technologies.map((tech, index) => (*/}
                        {/*        <span key={index} className={workExpStyles.technologyBadge}>{tech}</span>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

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
                <div>
                    {renderCaseCards()}
                </div>
            )}

            {(caseId) && (
                <div className={workExpStyles.casesContainer}>
                    {caseId && (
                        <div className={workExpStyles.caseDetailHeader}>
                            <button
                                className={workExpStyles.backButton}
                                onClick={() => navigate('/')}
                                aria-label="Вернуться назад"
                            >
                                Назад
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