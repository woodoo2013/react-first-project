import React from "react";
import User from "./User";
import Paginator from "../common/Paginator";

let Users = (props) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
            {props.users.map((user) => <User key={user.id} user={user}
                                             followingInProgress={props.followingInProgress}
                                             follow={props.follow}
                                             unfollow={props.unfollow}/>)}
        </div>
    )
}

export default Users;
