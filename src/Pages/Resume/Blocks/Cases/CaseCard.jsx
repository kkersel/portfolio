import React from 'react';
import { Link } from 'react-router-dom';
import workExpStyles from '../WorkExp/WorkExp.module.scss';

const CaseCard = ({ caseItem }) => {
    return (
        <Link to={`/case/${caseItem.id}`} className={workExpStyles.caseCard}>
            <div className={workExpStyles.caseImageContainer}>
                <img src={caseItem.image} alt={caseItem.title} className={workExpStyles.caseImage}/>
            </div>
            <div className={workExpStyles.caseContent}>
                <h4 className={workExpStyles.caseTitle}>{caseItem.title}</h4>
                <p className={workExpStyles.caseDescription}>{caseItem.description}</p>
                <button className={workExpStyles.detailButton}>Подробнее</button>
            </div>
        </Link>
    );
};

export default CaseCard;