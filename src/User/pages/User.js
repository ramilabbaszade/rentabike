import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserItem from "../components/UserItem";

const User = () => {
  const [users, setUsers] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    fetch(`http://velorent-api.herokuapp.com/api/v1/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div className="userContainer container">
      <UserItem
        key={users.id}
        id={users.id}
        fullName={users.user_name}
        bio={users.bio}
        avatar={users.avatar}
        city={users.city}
        date={users.created_at}
        bikes={users.bikes}
      />
    </div>
  );
};

export default User;
