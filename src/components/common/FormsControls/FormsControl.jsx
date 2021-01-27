import React from 'react'
import style from './FormsControl.module.css'


export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return (
        <div className={style.formsControl + ' ' + (hasError ? style.error : '')}>
            <div >
                <textarea  {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return (
        <div className={style.formsControl + ' ' + (hasError ? style.error : '')}>
            <div >
                <input  {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}