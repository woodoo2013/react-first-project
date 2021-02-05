import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers,
} from "../../redux/users-reducer";
import Loader from "../common/Loader/Loader";
import {
    followingInProgress,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (page) =>  {
        this.props.setCurrentPage(page)
        this.props.getUsers(this.props.pageSize, page)
    }

    render() {
        return <> {this.props.isFetching ? <Loader /> :  null}
            <Users  totalUsersCount={this.props.totalUsersCount}
                                                                 pageSize = {this.props.pageSize}
                                                                 currentPage = {this.props.currentPage}
                                                                 users = {this.props.users}
                                                                 follow = {this.props.follow}
                                                                 unfollow = {this.props.unfollow}
                                                                 onPageChanged = {this.onPageChanged}
                                                                 toggleFollowingProgress={this.props.toggleFollowingProgress}
                                                                 followingInProgress={this.props.followingInProgress}
                                                                    />

              </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: followingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersContainer);
