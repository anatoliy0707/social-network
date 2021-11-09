import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"


class UsersC extends React.Component<UsersPropsType> {
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

        const pageNumbers = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.pageSize)
        const arrPageNumbers = []
        for (let i = 1; i <= pageNumbers; i++) {
            arrPageNumbers.push(i)
        }
        return (
            <div>
                <nav>
                    {arrPageNumbers.map((p, index) => {
                        return <span onClick={() => {
                            this.onPageChanged(p)
                        }} key={index}
                                     className={this.props.usersPage.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    })}

                </nav>
                {this.props.usersPage.users.map(u => {
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userImage}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>follow</button>}
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
}

export default UsersC