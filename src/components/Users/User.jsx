import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

const User = ({user, follow, unfollow, followingInProgress}, ...props) => {
    return (
        <div className={style.userItem}>
            <div className={style.avatar}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {unfollow(user.id)
                    }
                    }>UnFollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }
                    }>Follow</button>}
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : defaultAvatar} alt=""/>
                </NavLink>
            </div>
            <div className={style.info}>
                <div>{user.name}</div>

                <div>{user.city}</div>
            </div>
        </div>
    )
}

export default  User