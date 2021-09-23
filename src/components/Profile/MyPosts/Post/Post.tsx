import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
  message: string;
  likesCounter: number;
};

function Post(props: PostPropsType) {
  return (
    <div className={s.dialog}>
      <img
        src="https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg"
        alt="img"
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCounter}
      </div>
    </div>
  );
}

export default Post;
