import React from "react";
import style from './Users.module.css'
import defaultAvatar from '../../assets/images/defaultAvatar.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length == 30 ) {
            break
        }
        pages.push(i);
    }

    return <div>
        <div className={style.pagesContainer}>
            {pages.map(page => {
                return <span key={page} onClick={(event) => {
                    props.onPageChanged(page)
                }} className={props.currentPage === page ? style.selectedPage : ''}>{page}</span>
            })}
        </div>
        {props.users.map((user) => <div key={user.id}>
            <div className={style.userItem}>
                <div className={style.avatar}>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollow(user.id) }
                        }>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.follow(user.id) }
                        }>Follow</button>}
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : defaultAvatar}></img>
                    </NavLink>
                </div>
                <div className={style.info}>
                    <div>{user.name}</div>

                    <div>{user.city}</div>
                </div>
            </div>
        </div>)}
    </div>
}

export default Users;
