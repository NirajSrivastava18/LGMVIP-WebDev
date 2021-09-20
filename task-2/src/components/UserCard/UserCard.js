import React from "react";
import "./UserCard.css";

const UserCard = ({ avatar, FirstName, LastName, email }) => {
  return (
    <div className="UserCard">
      <div className="UserCard-avatar">
        <img alt="profile" src={avatar} />
      </div>
      <h1>
        {FirstName} {LastName}
      </h1>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
