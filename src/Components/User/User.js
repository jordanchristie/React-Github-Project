import React from "react";
import "./User.scss";

const User = ({ user }) => {
  console.log(user);
  return (
    <div className="user-container">
      <div className="user-profile">
        <a href={user.url}>
          <img src={user.avatar_url} alt="User Profile" />
        </a>
        <div className="user-caption">
          <h1>{user.name}</h1>
          <h3>{user.bio}</h3>
          <h5>
            <i>{user.location}</i>
          </h5>
        </div>
      </div>

      <div className="user-info">
        <div className="col-sm-3">
          <h3>Blog</h3>
          <a href={user.blog}>{user.blog}</a>
        </div>

        <div className="col-sm-3">
          <h3>Following</h3>
          <p>{user.followers}</p>
        </div>

        <div className="col-sm-3">
          <h3>Repos</h3>
          <p>{user.public_repos}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
