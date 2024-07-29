import React, { useState } from "react";

const Users = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div className="users-wrapper">
      <div className="user-card">
        <h2>count : {count}</h2>
        <h2>count1 : {count1}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    </div>
  );
};

export default Users;
