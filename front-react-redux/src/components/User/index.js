import React from "react";
import "./style.css";

const User = ({ user }) => (
      <>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={user.image}
              alt=""
            ></img>
            <span className="rightbarFollowingName">{user.name}</span>
          </div>
      </>
);

export default User;
