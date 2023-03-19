import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.friends__item} key={id}>
          <span className={`${css.friends__status} ${css[isOnline]}`}>
            {isOnline}
          </span>
          <img className={css.avatar} src={avatar} alt={name} />
          <p className={css.friends__name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
