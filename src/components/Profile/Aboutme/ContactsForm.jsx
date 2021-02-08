import {createField, Input} from "../../common/FormsControls/FormsControl";


const ContactsForm = ({contactName}) => {
    return (
        <div><b>{contactName}</b>: {createField(contactName, 'contacts.' + contactName,
                            [],  Input)}</div>
    )

}

export default ContactsForm