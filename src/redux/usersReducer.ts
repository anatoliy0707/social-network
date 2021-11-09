const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type initialUsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
}

const initialState: initialUsersStateType = {
    users: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1
}

export const userReducer = (state: initialUsersStateType = initialState, action: UsersActionsType): initialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.newCurrentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalUsersCount}
        default:
            return state
    }
}

export type UsersActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setCurrentPageAC = (newCurrentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        newCurrentPage
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}