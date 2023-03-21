import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className={css.profile}>
      <div className={css.profile__card}>
        <div className={css.description}>
          <img src={avatar} alt={username} className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>aka @{tag}</p>
          <p className={css.location}>from '{location}'</p>
        </div>
        <ul className={css.stats}>
          <li>
            <span className={css.title}>Followers</span>
            <span className={css.numbers}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.title}>Views</span>
            <span className={css.numbers}>{stats.views}</span>
          </li>
          <li>
            <span className={css.title}>Likes</span>
            <span className={css.numbers}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
