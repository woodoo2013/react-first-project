import React from 'react';
import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    let friendItemElements = props.state.dialogs.map( (friendItemElement) => {
        return <FriendItem name={friendItemElement.name} avatar={friendItemElement.avatar} />
    })

    return (
        <div className={style.friendsList}>
            <h2>Friends</h2>
            <div className={style.friends}>
                {friendItemElements}
            </div>

        </div>
    )
}

export default Friends;