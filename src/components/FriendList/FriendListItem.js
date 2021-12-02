import React from 'react';
//import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

/* FriendListItem.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  name: 'unknown user',
  isOnline: false,
};
FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}; */

export default FriendListItem;
