import user from "../data/user.json";
import UserProfile from './Profile/Profile';
import Stats from "./Statistics/Statistics"
import FriendList from "./Friendlist/Friendlist";
import friends from "../data/friends.json"
import TransactionHistory from "./Transactionhistory/Transactionhistory"
import transactions from "../data/transactions.json"
import data from "../data/data.json"

function App() {
    const myTitle = "Upload stats"
    return (<>
        <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/>
      
        <Stats title={myTitle} data = {data}/>
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions}/>
      </>
    );
  }
  export default App;
