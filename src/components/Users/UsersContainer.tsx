import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    initialUsersStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersC";


type MapStateType = {
    usersPage: initialUsersStateType
}

type mapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapStateType & mapDispatchType


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        usersPage: state.usersPage,
        // users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (newCurrentPage: number) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
        setTotalUsersCount: (totalUsersCount:number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer