import {profileAPI} from "../api/api"
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const ADD_AVATAR = 'ADD_AVATAR'
const SET_AVATAR_IN_CHANGING_PROCESS = 'IS_AVATAR_IN_CHANGING_PROCESS'
const UPDATE_PROFILE = 'UPDATE_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hellow', likes: 1},
        {id: 2, message: 'Hello', likes: 13},
        {id: 3, message: 'How are you', likes: 121},
        {id: 4, message: 'Oleg', likes: 22},
        {id: 5, message: 'VVVV', likes: 33},
    ],
    profile: null,
    status: '',
    isAvatarInChangeProcess: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.message,
                likes: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        case ADD_AVATAR: {
            return {...state, profile: {...state.profile, photos: action.avatar}}
        }
        case SET_AVATAR_IN_CHANGING_PROCESS: {
            return {...state, isAvatarInChangeProgress: action.isInProgress}
        }
        case UPDATE_PROFILE: {
            return {...state, profile: {...action.profileInfo}}
        }
        default:
            return state;
    }
}

export const addPost = (message) => ({type: ADD_POST, message});


export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}

export const addAvatar = (avatar) => {
    return {type: ADD_AVATAR, avatar}
}

export const setAvatarInChangeProcess = (isInProgress) => {
    return {type: SET_AVATAR_IN_CHANGING_PROCESS, isInProgress}
}



//thunks
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const changeAvatar = (avatar) => async (dispatch) => {
    dispatch(setAvatarInChangeProcess(true))
    let data = await profileAPI.uploadAvatar(avatar)
    if (data.resultCode === 0) {
        dispatch(addAvatar(data.data.photos))
    }
    dispatch(setAvatarInChangeProcess(false))
}

export const updateProfileInfo = (profileInfo) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.updateProfileInfo(profileInfo)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}

export default profileReducer;