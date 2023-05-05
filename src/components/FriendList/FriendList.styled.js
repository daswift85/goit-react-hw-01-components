import styled from 'styled-components';

export const StyledFriendListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 200px;
  box-shadow: 3px 3px 3px lightgrey;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
