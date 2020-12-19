import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer'
import SendPost from "./SendPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost)


export default SendPostContainer