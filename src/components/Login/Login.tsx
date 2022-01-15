import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={"login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field type="text" placeholder={"password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type="checkbox"/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}