import { Friend } from './Friend';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};
