import css from "./friends.module.css"
import PropTypes from 'prop-types';

const FriendList = ({friends}) =>{
return (<ul className={css.friend_list}>
{friends.map(({id, avatar, name, isOnline}) => (<li className={css.item} key = {id}>
  {isOnline ? (
        <span className={css.status_online}/>
      ) : (
        <span className={css.status_offline}/>
      )}
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li> ))}
</ul>)}


FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  // id: PropTypes.number.isRequired,
};

export default FriendList
