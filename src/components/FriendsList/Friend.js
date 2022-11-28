import PropTypes from 'prop-types';
import { FriendStatus, FriendImg, FriendName } from './FriendList.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
