import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem';
import { FriendsWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => (
    <FriendsWrapper>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </FriendsWrapper>
  );
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };