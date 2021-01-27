import React from 'react'
import style from './FormsControl.module.css'


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
