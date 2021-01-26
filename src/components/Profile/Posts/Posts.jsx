import React from "react";
import PostReduxForm from "./Post/PostForm";
import style from './Posts.module.css'

const Posts = (props) => {
    let onSubmit = (data) => {
        if(data.message) {
            props.addPost(data.message)
        }
    }
    return (
        <div className={style.myPosts}>
            <h2>My posts</h2>
            <PostReduxForm onSubmit={onSubmit} />
            {props.posts}
        </div>
    )
}

export default Posts;