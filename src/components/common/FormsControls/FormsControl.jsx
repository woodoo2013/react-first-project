import React from 'react'
import style from './FormsControl.module.css'
import {Field} from "redux-form";


export const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return (
        <div className={style.formsControl + ' ' + (hasError ? style.error : '')}>
            <div >
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child,...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={component}
                   {...props}
            /> {text}
        </div>
    )
}