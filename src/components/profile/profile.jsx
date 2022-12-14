// import { fragment } from "react"
// фрагмент который не отборажается в реальном доме, только в вирууальном
import css from "./Profile.module.css"
import PropTypes from 'prop-types';

const UserProfile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
  <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"       
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,}


export default UserProfile;