import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import Avatar from "../common/Avatar/Avatar";


const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.userLogout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}


export default Header;