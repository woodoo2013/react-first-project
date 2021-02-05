import React from "react";
import PostReduxForm from "./Post/PostForm";
import style from './Posts.module.css'
import Post from "./Post/Post";
import {useState} from "react";
import {useEffect} from "react";

const Posts = (props) => {
    let onSubmit = (data) => {
        if(data.message) {
            props.addPost(data.message)
        }
    }

    let [profile, setProfile] = useState(props.profilePage.profile)
    useEffect(() => {
        setProfile(props.profilePage.profile)
    }, [props.profilePage.profile])

    return (
        <div className={style.myPosts}>
            <h2>My posts</h2>
            <PostReduxForm onSubmit={onSubmit} />
            {props.profilePage.posts.map((post) => {
            return <Post key={post.id} id={post.id} message={post.message} likes={post.likes} profile={profile} />
            })}
        </div>
    )
}

export default Posts;