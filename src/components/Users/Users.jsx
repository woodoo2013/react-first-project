import React from "react";
import style from './Users.module.css'
import defaultAvatar from '../../assets/images/defaultAvatar.png'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(page => {
            return <span onClick={(event) => {
                props.onPageChanged(page)
            }} className={props.currentPage === page ? style.selectedPage : ''}>{page}</span>
        })}
        {props.users.map((user) => <div key={user.id}>
            <div className={style.userItem}>
                <div className={style.avatar}>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollow(user.id)}}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                    <img src={user.photos.small != null ? user.photos.small : defaultAvatar}></img>
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
