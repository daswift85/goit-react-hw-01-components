import PropTypes from 'prop-types'
import { StyledFriendListItem } from "./FriendList.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <StyledFriendListItem isOnline={isOnline}>
  <span></span>
  <img src={avatar} alt={name} />
  <p>{name}</p>
</StyledFriendListItem>
  );
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
