import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { FriendStyleList, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendStyleList>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Friend friend={friend} />
        </FriendItem>
      ))}
    </FriendStyleList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
