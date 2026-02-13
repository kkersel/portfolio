import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';
import a from '../../Resume.module.scss';
import CaseList from './CaseList';
import { casesData } from './caseData';

const AllCases = ({ darkTheme, setDarkTheme }) => {
    const { caseId } = useParams();
    const navigate = useNavigate();
    const [validCase, setValidCase] = useState(true);

    useEffect(() => {
        // Проверяем, существует ли кейс с таким ID
        const caseExists = casesData.some(c => c.id === caseId);
        if (!caseExists) {
            // Если кейс не найден, перенаправляем на главную
            navigate('/');
        } else {
            setValidCase(true);
        }
    }, [caseId, navigate]);

    if (!validCase) {
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

                        <CaseList orderedCaseId={caseId} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCases;