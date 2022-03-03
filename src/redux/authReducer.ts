import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import { FormAction, stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'


export type initialAuthStateType = {
    userId: string 
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: initialAuthStateType = {
    userId: '',
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: initialAuthStateType = initialState, action: authActionsType): initialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export type authActionsType = ReturnType<typeof setUserData>

export type ThunkActionType = ThunkAction<void, AppStateType, unknown, authActionsType>


export const setUserData = (userId: string, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<authActionsType>) => {
   return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setUserData(id.toString(), login, email, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkActionType =>
    (dispatch: ThunkDispatch<AppStateType, unknown, authActionsType | FormAction>) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }

export const logOut = (): ThunkAction<void, AppStateType, unknown, authActionsType> =>
    (dispatch) => {
        authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData('', null, null, false))
                }
            })
    }