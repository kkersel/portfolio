import React from 'react';
import styles from './CompanyInfo.module.scss';

const CompanyInfo = ({ companyData }) => {
  const { title, description, logo, link, isExternal = true } = companyData;

  const handleClick = (e) => {
    if (link) {
      e.preventDefault();
      if (isExternal) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        // Для внутренних ссылок
        window.location.href = link;
      }
    }
  };

  const renderContent = () => (
    <div className={styles.companyInfo}>
      <img src={logo} alt={title} className={styles.companyLogo} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        onClick={handleClick}
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.info}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <div className={styles.info}>
      {renderContent()}
    </div>
  );
};

export default CompanyInfo;