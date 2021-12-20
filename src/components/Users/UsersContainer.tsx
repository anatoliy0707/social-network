import React from "react";
import loading from "./../../assets/images/loading.svg";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersC";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";


type MapStateType = {
    // usersPage: initialUsersStateType
    totalCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    isFetching: boolean
}

type mapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateType & mapDispatchType


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching && <Preloader/>}
            <UsersC users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    unfollow={this.props.unfollow}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        // usersPage: state.usersPage,
        // users: state.usersPage.users
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (newCurrentPage: number) => {
//             dispatch(setCurrentPage(newCurrentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCount(totalUsersCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)

