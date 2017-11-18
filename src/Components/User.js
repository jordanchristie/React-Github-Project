import React from 'react';

const User = (props) => {
  return (
    <div className="user-container">
      <div className="user-profile">
        <a href={props.url}><img src={props.avatar} /></a>
        <div className="user-caption">  
          <h1>{props.name}</h1>
          <h3>{props.bio}</h3>
          <h5><i>{props.location}</i></h5>
        </div>
      </div>

      <div className="user-info">
        <div className="col-sm-3">
          <h3>Blog</h3>
          <a href={props.blog}>{props.blog}</a>
        </div>

        <div className="col-sm-3">
          <h3>Following</h3>
          <p>{props.followers}</p>
        </div>

        <div className="col-sm-3">
          <h3>Repos</h3>
          <p>{props.repos}</p>
        </div>
      </div>
    </div>
  )
}

export default User;