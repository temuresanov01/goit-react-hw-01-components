import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.defaultProps = {
  isOnline: false,
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  name: 'unknown user',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
