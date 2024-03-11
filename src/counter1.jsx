import React, { useState } from "react";
import styles from "./css/button.module.css";
const Counter1 = () => {
  let [dislike, setdislike] = useState(0);
  const Counting = () => {
    setdislike(++dislike);
  };
  return (
    <div>
      <h1>{dislike}</h1>
      <button className={styles.StylesButton} onClick={Counting}>
        Dislike
      </button>
    </div>
  );
};
export default Counter1;
