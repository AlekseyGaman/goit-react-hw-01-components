import { BiAt } from 'react-icons/bi';
import { ProfileImg } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <ProfileImg src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">
          <BiAt />
          {tag}
        </p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.prototype = {};
