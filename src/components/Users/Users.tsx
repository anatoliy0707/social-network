import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import { UserType } from "../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

type UsersCPropsType = {
    totalCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: UsersCPropsType) => {

    const pages = Math.ceil(props.totalCount / props.pageSize)
    const arrPagesNumbers: number[] = []
    for (let i = 1; i <= pages; i++) {
        arrPagesNumbers.push(i)
    }
    const onClickHandlerForPageChange = (page: number) => {
        props.onPageChanged(page)
    }

    return (
        <div>
            <nav>
                {arrPagesNumbers.map((p, index) => {
                    return <span onClick={() => onClickHandlerForPageChange(p)}
                        key={index}
                        className={props.currentPage === p ? s.selectedPage : ''}>-{p}-</span>
                })}

            </nav>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                        className={s.userImage} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed

                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.setUnfollow(u.id)
                                            .then(resultCode => {
                                                if (resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })



                                    }}>unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        debugger
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.setFollow(u.id)
                                            .then(resultCode => {
                                                if (resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })

                                    }}>follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

