import React from 'react';
import styles from './Badge.module.scss';

const Badge = ({ 
 children, 
  variant = 'default', 
  size = 'medium', 
  className = '', 
  ...props 
}) => {
  const badgeClasses = [
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${size}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;