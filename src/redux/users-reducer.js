import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case CHANGE_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
}

export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPage = (page) => {
    return {type: CHANGE_PAGE, currentPage: page}
}

export const setTotalUsers = (totalUsersCount) => {
    return {type: SET_USERS_COUNT, totalUsersCount}
}

export const toggleIsFetching = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}

//thunk creators
export const getUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export default usersReducer;