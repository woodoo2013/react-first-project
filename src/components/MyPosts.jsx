import React from "react";
import SentPosts from "./SentPosts";
import style from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={style.myPosts}>
            <div className={style.sendPost}>
                <h2>My posts</h2>
                <input type="text" placeholder='Send anything' size='120'/>
                <a href='#'>Send</a>
            </div>
            <SentPosts />
            <SentPosts />
        </div>
    )
}

export default MyPosts;