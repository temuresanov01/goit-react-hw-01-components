import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticsItem';
import styles from './Statistics.module.css';

const Statistics = ({ title, statistics }) => {
  return (
    <section className={styles.statistics}>
      <div>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statlist}>
          {statistics.map(prop => (
            <StatisticItem {...prop} key={prop.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  prop: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
