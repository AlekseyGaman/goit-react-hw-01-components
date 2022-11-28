import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import { GlobalStyle } from 'components/GlobalStyle';

import friends from './FriendsList/friends.json';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
