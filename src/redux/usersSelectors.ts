import { AppStateType } from "./redux-store"

export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}