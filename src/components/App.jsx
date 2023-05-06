import { Profile } from './Profile/Profile';
import user from '../Data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../Data/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../Data/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../Data/transactions.json'
import { GlobalStyle } from "./GlobalStyle"

export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
