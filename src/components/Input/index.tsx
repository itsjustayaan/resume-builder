import React from "react";

import styles from "./index.module.css";

function Input(props: { label: string }) {
  return (
    <div className={styles.Input}>
      <label>{props.label}</label>
      <input />
    </div>
  );
}

export default Input;
