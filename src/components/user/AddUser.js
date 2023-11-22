import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../user_interface/Card";
import Button from "../user_interface/Button";
import ErrorModal from "../user_interface/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        massage: "Please enter a valid name and age."
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age!",
        massage: "Please enter a valid age."
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          massage={error.massage}
          removeError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="userName">Username</label>
            <input
              id="userName"
              type="text"
              onChange={usernameChangeHandler}
              value={enteredUserName}
            ></input>
          </div>
          <div>
            <label htmlFor="userAge">Age (Years)</label>
            <input
              id="userAge"
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
