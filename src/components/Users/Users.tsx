import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";




const Users = (props: UsersPropsType) => {

    return (
        <div className={s.user}>
            {props.usersPage.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} />
                            </div>
                            <div>
                                <button>Follow</button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users