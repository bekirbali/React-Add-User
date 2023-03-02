import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.scss";

const UsersList = (props) => {
  return (
    <>
      {props.users && (
        <Card className={styles.users}>
          <ul>
            {props.users?.map((user, index) => {
              const { name, age } = user;
              return (
                <li key={index}>
                  {name} {age} years old
                </li>
              );
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default UsersList;
