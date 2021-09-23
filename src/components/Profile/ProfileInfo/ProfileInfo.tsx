import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"
          alt="img"
        />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
}

export default ProfileInfo;
