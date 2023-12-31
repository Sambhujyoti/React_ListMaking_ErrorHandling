import React from "react";
import classes from "./UsersList.module.css";
import Card from "../user_interface/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} year(s) old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
