import { authAPI } from "../api/api";
import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { FormAction, stopSubmit } from "redux-form";
import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

export type appActionsType = ReturnType<typeof initializedSuccess>  

export type AppThunkActionType = ThunkDispatch<AppStateType, unknown, appActionsType | FormAction>;

export type initialAuthStateType = {
    initialized: boolean
}

const initialState: initialAuthStateType = {
    initialized: false,
}

export const appReducer = (state: initialAuthStateType = initialState, action: appActionsType): initialAuthStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state
    }
}




//action
export const initializedSuccess = () => {
    return { type: SET_INITIALIZED } as const
}



//thunk
export const initialize = () => (dispatch: AppThunkActionType) => {
    dispatch(getAuthUserData())
    .then(()=>{
        dispatch(initializedSuccess())
    })
}

// export const login = (email: string, password: string, rememberMe: boolean): ThunkActionType =>
//     (dispatch: ThunkDispatch<AppStateType, unknown, authActionsType | FormAction>) => {
//         authAPI.login(email, password, rememberMe)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(getAuthUserData())
//                 } else {
//                     const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
//                     dispatch(stopSubmit('login', {_error: message}))
//                 }
//             })
//     }

// export const logOut = (): ThunkAction<void, AppStateType, unknown, authActionsType> =>
//     (dispatch) => {
//         authAPI.logOut()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(setUserData(null, null, null, false))
//                 }
//             })
//     }