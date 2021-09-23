import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: number;
};

function DialogItem(props: DialogItemPropsType) {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <img
        src="https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg"
        alt="img"
      />
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
