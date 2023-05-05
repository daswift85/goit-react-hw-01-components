import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json'
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
