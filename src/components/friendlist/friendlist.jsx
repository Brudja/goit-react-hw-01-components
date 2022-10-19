import css from "./Friends.module.css"
import FriendsItem from "./FreindsItem/FriendsItem"

const FriendList = ({friends}) =>{
return (<ul className={css.friend_list}>
        {friends.map(item => (<FriendsItem key = {item.id} avatar = {item.avatar} name={item.name} isOnline={item.isOnline}/>))}
        </ul>)}


export default FriendList
