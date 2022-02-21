import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";


type TPropsHeader = {
    isAuth: boolean,
    login: string | null
    logOut: () => void
}

function Header(props: TPropsHeader) {
    const logOutHandler = () => {
        props.logOut()
    }

    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUX7zo1yYFaBeOYIcOfcgwnULvpM7YqzXxA&usqp=CAU"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={logOutHandler}>Log Out</button></div>
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
