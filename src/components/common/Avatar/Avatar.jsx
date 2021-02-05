import defaultAvatar from "../../../assets/images/defaultAvatar.png"
import React from "react"



const Avatar = (props) => {
    return (
        <div>
            <img src={props.avatar ? props.avatar : defaultAvatar} alt="Avatar"/>
        </div>
    )
}

export default Avatar