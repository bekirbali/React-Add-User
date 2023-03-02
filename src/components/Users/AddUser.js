import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.scss";

const AddUser = ({ users, setUsers }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!enteredAge.trim().length || !enteredUsername.trim().length) {
      setError({
        title: "Oops. Invalid input.",
        message: "Please fill all fields",
      });
      //   setTimeout(() => {
      //     setError("");
      //   }, 2000);
      return;
    }
    if (Number(enteredAge < 18)) {
      setError({
        title: "Oops. Invalid input.",
        message: "User must be 18+",
      });
      //   setTimeout(() => {
      //     setError("");
      //   }, 2000);
      return;
    }

    const newUser = {
      name: enteredUsername,
      age: enteredAge,
    };
    setUsers((oldUsers) => [...oldUsers, newUser]);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const modalRemover = () => {
    setError("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          modalRemover={modalRemover}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>

          {/* <button type="submit">Add User</button> */}
        </form>
      </Card>
    </>
  );
};

export default AddUser;
