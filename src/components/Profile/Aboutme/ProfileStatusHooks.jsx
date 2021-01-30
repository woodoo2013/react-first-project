import React, {useState ,useEffect} from 'react'


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
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'Has no status'}</span>
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