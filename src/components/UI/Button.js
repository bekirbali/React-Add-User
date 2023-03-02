import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${styles.button} ${props.className}`}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
