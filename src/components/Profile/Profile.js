import { BiAt } from 'react-icons/bi';
import {
  ProfileImg,
  ProfileDescription,
  ProfileSection,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileItem,
  ProfileLabel,
  ProfileQuantity,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileSection>
      <ProfileDescription>
        <ProfileImg src={avatar} alt="User avatar" className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>
          <BiAt />
          {tag}
        </ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <ProfileItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </ProfileItem>
      </ProfileStats>
    </ProfileSection>
  );
};

Profile.prototype = {};
