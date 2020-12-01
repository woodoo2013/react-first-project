import React from "react";
import SentPosts from "./SentPosts";


const MyPosts = () => {
    return (
        <div className='my-posts'>
            <div className='send-post'>
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