import React from "react";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default UserList;
