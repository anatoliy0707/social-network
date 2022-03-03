import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControl.module.css'


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type mapDispatchType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStateType = {
    isAuth: boolean
}

type LoginPropsType = mapDispatchType & MapStateType
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={"login"} name={"login"} component={Input} validate={required}/>
                </div>
                <div>
                    <Field type="password" placeholder={"password"} name={"password"} component={Input} validate={required}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me
                </div>
                <div>
                    {props.error && <div className={style.formSumError}>
                        {props.error}
                    </div>}
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login}) (Login)