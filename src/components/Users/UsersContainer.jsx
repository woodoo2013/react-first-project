import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import { follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unfollow} from "../../redux/users-reducer";
import Loader from "../common/Loader/Loader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
        })
    }

    onPageChanged = (page) =>  {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, page)
            .then(data => {
            this.props.setUsers(data.items);
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching,
})(UsersContainer);
