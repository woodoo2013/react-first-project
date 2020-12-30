import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    changePageActionCreator,
    followActionCreator, isFetchingActionCreator, setTotalUsersActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import * as axios from "axios";
import Loader from "../common/Loader/Loader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (page) =>  {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <> {this.props.isFetching ? <Loader /> :  <Users  totalUsersCount={this.props.totalUsersCount}
                                                                 pageSize = {this.props.pageSize}
                                                                 currentPage = {this.props.currentPage}
                                                                 users = {this.props.users}
                                                                 follow = {this.props.follow}
                                                                 unfollow = {this.props.unfollow}
                                                                 onPageChanged = {this.onPageChanged} /> }
              </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (page) => {
            dispatch(changePageActionCreator(page));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersActionCreator(totalUsersCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(isFetchingActionCreator(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
