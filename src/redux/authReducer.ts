import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'


export type initialAuthStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: initialAuthStateType = {
    userId: null,
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


export const setUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
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
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setUserData(id, login, email, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkActionType =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }

export const logOut = (): ThunkAction<void, AppStateType, unknown, authActionsType> =>
    (dispatch) => {
        authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }