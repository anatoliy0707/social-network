import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";


type TPropsHeader = {
    isAuth: boolean,
    login: string | null
}

function Header(props: TPropsHeader) {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUX7zo1yYFaBeOYIcOfcgwnULvpM7YqzXxA&usqp=CAU"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
