import React from "react";
import Post from "./Post/Post";
import style from './Posts.module.css'
import SendPostContainer from "./SendPost/SendPostContainer";



const Posts = (props) => {

    let posts = props.state.profilePage.posts.map( (post) => {
        return <Post id={post.id} message={post.message} likes={post.likes} />
    })

    return (
        <div className={style.myPosts}>
            <SendPostContainer />
            {posts}
        </div>
    )
}

export default Posts;