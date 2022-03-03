import {usersAPI, UserType} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'


type LocationType = {
    city: string
    country: string
}

// export type UserType = {
//     id: number
//     photos: { small: string, large: string }
//     followed: boolean
//     name: string
//     status: string
//     location: LocationType
// }

export type InitialUsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const userReducer = (state: InitialUsersStateType = initialState, action: UsersActionsType): InitialUsersStateType => {
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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type UsersActionsType = ReturnType<typeof followSucces>
    | ReturnType<typeof unfollowSucces>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const followSucces = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowSucces = (userId: number) => {
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

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}




export const requestUsers = (pageSize: number, currentPage: number) => (dispatch: Dispatch<UsersActionsType>) => {

    dispatch(toggleIsFetching(true))

    usersAPI.setUsers(pageSize, currentPage)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const getUsersOnPageChange = (pageSize: number, pageNumber: number) => (dispatch: Dispatch<UsersActionsType>) => {

    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true))
    usersAPI.setUsers(pageSize, pageNumber)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}

export const follow = (userId: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.setFollow(userId)
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(followSucces(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}

export const unfollow = (userId: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.setUnfollow(userId)
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(unfollowSucces(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}