import React from "react";
import style from './Users.module.css'
import defaultAvatar from '../../assets/images/defaultAvatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                return <span onClick={(event) => {
                    props.onPageChanged(page)
                }} className={props.currentPage === page ? style.selectedPage : ''}>{page}</span>
            })}
        </div>
        {props.users.map((user) => <div key={user.id}>
            <div className={style.userItem}>
                <div className={style.avatar}>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "b056e955-f282-4352-b6fe-b9e9a2109db5"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(user.id)
                                    }
                                })}
                        }>UnFollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "b056e955-f282-4352-b6fe-b9e9a2109db5"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(user.id)
                                    }
                                })}
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
