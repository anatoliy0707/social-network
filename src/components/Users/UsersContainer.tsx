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
import axios from "axios";


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


class UsersContainer extends React.Component<UsersPropsType>{
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${pageNumber}`).then(response => {
           this.props.setUsers(response.data.items)
        })
    }
    render(): React.ReactNode {
        return <UsersC  users={this.props.usersPage.users}
                        currentPage={this.props.usersPage.currentPage}
                        follow={this.props.follow}
                        onPageChanged={this.onPageChanged}
                        pageSize={this.props.usersPage.pageSize}
                        totalCount={this.props.usersPage.totalCount}
                        unfollow={this.props.unfollow}

        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

