import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import { GlobalStyle } from 'components/GlobalStyle';

import friends from './FriendsList/friends.json';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
