import style from './Contacts.module.css'

const Contacts = ({contactName, contactValue}) => {
    return (
        <div className={style.contacts}>
            <b>{contactName}</b>: {contactValue}
        </div>
    )

}

export default Contacts