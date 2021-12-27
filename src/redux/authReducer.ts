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
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

export type authActionsType = ReturnType<typeof setUserData>


export const setUserData = (userId: number, login: string, email: string) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            login,
            email,
        }
    } as const
}
