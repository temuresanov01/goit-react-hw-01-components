import React from 'react';
import PropTypes from 'prop-types';

import TransactionHistoryItem from './TransactionHistoryItem';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <TransactionHistoryItem {...item} key={item.id} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
