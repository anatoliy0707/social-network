import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersCPropsType = {
    totalCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
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
                                     className={s.userImage}/>
                                     </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>follow</button>}
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

