import React from 'react';
import style from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={style.item}>
            <img src={props.avatar} alt=""/>
            <div>{props.name}</div>
        </div>
    )
}

export default FriendItem;