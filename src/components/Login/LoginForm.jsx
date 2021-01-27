import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControl";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} component={Input} name={'login'} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={'rememberMe'} /> Remember me
                </div>
                <div>
                    <button type={'submit'}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm