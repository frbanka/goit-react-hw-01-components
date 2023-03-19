import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.class}>
      <div className={css.class}>
        <img src={avatar} alt={username} className={css.class} />
        <p className={css.class}>{username}</p>
        <p className={css.class}>{tag}</p>
        <p className={css.class}>{location}</p>
      </div>
      <ul className={css.class}>
        <li>
          <span className={css.class}>Followers</span>
          <span className={css.class}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.class}>Views</span>
          <span className={css.class}>{stats.views}</span>
        </li>
        <li>
          <span className={css.class}>Likes</span>
          <span className={css.class}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
