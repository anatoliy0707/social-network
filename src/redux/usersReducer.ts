const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


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
    isFetching: boolean
}

const initialState: initialUsersStateType = {
    users: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export type UsersActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setCurrentPage = (newCurrentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        newCurrentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}