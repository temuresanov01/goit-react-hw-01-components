import React from 'react';

import styles from './Statistics.module.css';

const randomBgColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: randomBgColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticItem;
