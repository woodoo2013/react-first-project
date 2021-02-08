import style from "./AboutMe.module.css";
import Contacts from "./Contacts";
import {createField, Input} from "../../common/FormsControls/FormsControl";
import {reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import ContactsForm from "./ContactsForm";


const ProfileInfoForm = (props) => {
    return (
        <form className={style.info} onSubmit={props.handleSubmit}>
            <button>Сохранить</button>
            <h2>{props.profile.fullName}</h2>
            <div>
                Fullname: {createField('Fullname', 'fullName', [required], Input)}
            </div>
            <div>
                About me: {createField('About me', 'aboutMe', [required], Input)}
            </div>
            <div>
                Looking for a
                job: {createField('Looking for a job', 'lookingForAJob', [required], Input, {type: 'checkbox'})}
            </div>
            <div>
                Looking for a job: {createField('Looking for a job desc', 'lookingForAJobDescription',
                [required], Input, Input)}
            </div>
            <div>
                Контакты: {Object.keys(props.profile.contacts).map((key) => {
                return <ContactsForm contactName={key}/>
            })}
            </div>

        </form>
    )
}

const ProfileInfoFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileInfoForm)

export default ProfileInfoFormReduxForm