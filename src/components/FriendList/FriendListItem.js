import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import defaultImage from '../images/defaultImage.jpg';

// const FriendListItem = ({ friend: { avatar = defaultImage, name, isOnline } }) => (
const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="46px" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  // friend: PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
  // }).isRequired,
};

export default FriendListItem;
