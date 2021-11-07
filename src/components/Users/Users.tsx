import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"




const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

        props.setUsers(response.data.items)
    })


    }

    return (
        <div>
            {props.usersPage.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}  className={s.userImage}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=>props.unfollow(u.id)}>unfollow</button>
                                    : <button onClick={()=>props.follow(u.id)}>follow</button>}
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

export default Users