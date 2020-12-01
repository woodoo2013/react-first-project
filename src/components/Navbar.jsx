import React from "react";


const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-links'>
                <a href='#'>Profile</a>
            </div>
            <div className='nav-links'>
                <a href='#'>Messages</a>
            </div>
            <div className='nav-links'>
                <a href='#'>News</a>
            </div>
            <div className='nav-links'>
                <a href='#'>Music</a>
            </div>
            <div className='nav-links settings'>
                <a href='#'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;