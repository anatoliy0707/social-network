import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";




const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'i am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'i am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg',
                followed: false,
                fullName: 'Olya',
                status: 'and i am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

    return (
        <div>
            {props.usersPage.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl}  className={s.userImage}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=>props.unfollow(u.id)}>unfollow</button>
                                    : <button onClick={()=>props.follow(u.id)}>follow</button>}
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