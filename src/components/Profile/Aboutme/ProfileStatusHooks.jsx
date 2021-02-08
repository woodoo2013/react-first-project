import React, {useState ,useEffect} from 'react'
import style from './ProfileStatus.module.css'

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div className={style.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}><b>Status: </b>{props.status || 'Has no status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusHooks;