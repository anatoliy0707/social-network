import React from "react";
import { connect } from "react-redux";
import {
    requestUsers, getUsersOnPageChange, follow, unfollow
} from "../../redux/usersReducer";
import { AppStateType } from "../../redux/redux-store";
import { Preloader } from "../common/Preloader/Preloader";
import { Users } from "./Users";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { UserType } from "../../api/api";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsersSelector } from "../../redux/usersSelectors";


type MapStateType = {
    totalCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    isFetching: boolean
    followingInProgress: Array<number>
}

type mapDispatchType = {

    unfollow: (userId: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
    getUsersOnPageChange: (pageSize: number, pageNumber: number) => void
    follow: (userId: number) => void
}

export type UsersPropsType = MapStateType & mapDispatchType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount(): void {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersOnPageChange(this.props.pageSize, pageNumber)
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching && <Preloader />}
            <Users users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// const mapStateToProps = (state: AppStateType): MapStateType => {
//     return {
//         totalCount: state.usersPage.totalCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         users: state.usersPage.users,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        users: getUsersSelector(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    requestUsers,
    getUsersOnPageChange,
    follow, unfollow
}),
    // withAuthRedirect
)(UsersContainer)

