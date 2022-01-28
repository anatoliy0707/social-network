import React from 'react'
import styles from '../FormsControls/FormsControl.module.css'


const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
            {props.children}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = React.memo((props: any) => {
        const {input, meta, children, ...restProps} = props
        return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    }
)

export const Input = React.memo((props: any) => {
        const {input, meta, children, ...restProps} = props
        return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    }
)