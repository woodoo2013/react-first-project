import React from "react";
import style from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    changeAvatar,
    getUserProfile,
    getUserStatus,
    updateProfileInfo,
    updateUserStatus
} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import Loader from "../common/Loader/Loader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            let userId = this.props.match.params.userId
            if(!userId) {
                userId = this.props.authorizedUserId
            }
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    render() {
        if(!this.props.profile) {
            return <Loader/>
        }
        return (
            <div className={style.profile}>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         changeAvatar={this.props.changeAvatar}
                         isAvatarInChangeProgress={this.props.isAvatarInChangeProgress}
                         isOwner={!this.props.match.params.userId}
                         updateProfileInfo={this.props.updateProfileInfo}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAvatarInChangeProgress: state.profilePage.isAvatarInChangeProgress
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus,
                                                updateUserStatus, changeAvatar, updateProfileInfo}),
    withRouter,
)(ProfileContainer)