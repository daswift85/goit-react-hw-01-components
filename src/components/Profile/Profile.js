import PropTypes from 'prop-types'
import { Card, Avatar, Username, Tag, Location, StatsList, StatsItem, StatValue, StatName } from "./Profile.styled";

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
<Card>
      <Avatar src={avatar} alt={username} />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      <StatsList>
        <StatsItem>
          <StatName>Followers</StatName>
          <StatValue>{stats.followers}</StatValue>
        </StatsItem>
        <StatsItem>
          <StatName>Views</StatName>
          <StatValue>{stats.views}</StatValue>
        </StatsItem>
        <StatsItem>
          <StatName>Likes</StatName>
          <StatValue>{stats.likes}</StatValue>
        </StatsItem>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};