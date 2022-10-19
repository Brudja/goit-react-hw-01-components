import css from "../Friends.module.css";
import PropTypes from 'prop-types';

function FriendsItem({name, avatar, isOnline}){
return(
<li className={css.item}>
  {isOnline ? (
        <span className={css.status_online}/>
      ) : (
        <span className={css.status_offline}/>
      )}
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li> )}

export default FriendsItem

FriendsItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    // id: PropTypes.number.isRequired,
  };