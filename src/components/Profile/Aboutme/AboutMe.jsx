import React, {useState} from "react";
import style from './AboutMe.module.css'
import Loader from "../../common/Loader/Loader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import Avatar from "../../common/Avatar/Avatar";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileInfo from "./ProfileInfo";


const AboutMe = (props) => {
    const [editMode, setEditMode] = useState(false)

    let onSubmit = (data) => {
        props.updateProfileInfo(data)
        setEditMode(false)

    }

    let changeEditMode = () => {
        setEditMode(!editMode)
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.changeAvatar(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div className={style.aboutMe}>
            <div className={style.avatar}>
                <Avatar avatar={props.profile.photos.large}/>
            </div>
            <div>
                <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                {editMode ? <ProfileInfoForm onSubmit={onSubmit} setEditMode={setEditMode} profile={props.profile}/> :
                    <ProfileInfo changeEditMode={changeEditMode} profile={props.profile}/>}
                {props.isOwner &&
                <div>
                    <strong>Сменить аватар</strong>
                    {!props.isAvatarInChangeProgress ?
                        <input onChange={onMainPhotoSelected} type="file"></input> : <Loader/>
                    }
                </div>
                }
            </div>
        </div>
    )
}


export default AboutMe;