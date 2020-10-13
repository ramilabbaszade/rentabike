import React from "react";
import UserItem from "./UserItem";

import './UserContainer.css'

const UserContainer = (props) => {
  return (
    <div className="userContainer container">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            fullName={user.fullName}
            bio={user.bio}
            avatar={user.avatar}
            city={user.city}
            date={user.date}
            bikes={user.bikes}
          />
        );
      })}
    </div>
  );
};

export default UserContainer;
