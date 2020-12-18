import React from "react";
import Post from "./Post/Post";
import SendPost from "./SendPost/SendPost";
import style from './Posts.module.css'



const Posts = (props) => {

    let posts = props.state.profilePage.posts.map( (post) => {
        return <Post id={post.id} message={post.message} likes={post.likes} />
    })

    return (
        <div className={style.myPosts}>
            <SendPost state={props.state} store={props.store}/>
            {posts}
        </div>
    )
}

export default Posts;