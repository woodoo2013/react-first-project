import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.navLinks}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.navLinks}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.navLinks}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.navLinks}>
                <NavLink to='music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={`${style.navLinks} ${style.settings}`}>
                <NavLink to='settings' activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;