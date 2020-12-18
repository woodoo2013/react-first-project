import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.item + ' ' + style.active}>
            <img className={style.avatar} src={'' + props.avatar} alt=""/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
