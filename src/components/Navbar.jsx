import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.navLinks}>
                <a href='#'>Profile</a>
            </div>
            <div className={style.navLinks}>
                <a href='#'>Messages</a>
            </div>
            <div className={style.navLinks}>
                <a href='#'>News</a>
            </div>
            <div className={style.navLinks}>
                <a href='#'>Music</a>
            </div>
            <div className={`${style.navLinks} ${style.settings}`}>
                <a href='#'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;