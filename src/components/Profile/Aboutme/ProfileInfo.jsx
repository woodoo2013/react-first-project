import style from "./ProfileInfo.module.css";
import Contacts from "./Contacts";

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfoWrapper}>
            <button onClick={props.changeEditMode}>Редактировать профиль</button>
            <h2>{props.profile.fullName}</h2>
            <div>
                <b>Обо мне</b>:{props.profile.aboutMe}
            </div>
            Ищу работу: {props.profile.lookingForAJob ? 'Да' : 'Нет'}
            <div>
                <b>Ищу работу:</b>{props.profile.lookingForAJobDescription}
            </div>
            <div>
                Контакты: {Object.keys(props.profile.contacts).map((key) => {
                    return <Contacts key={key} contactName={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
        </div>
    )
}

export default ProfileInfo