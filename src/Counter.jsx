import { useState } from "react";
import styles from "./css/button.module.css";
const Counter = () => {
  let [sk, sk2] = useState(0);
  const Countlike = () => {
    sk2(++sk);
    console.log(sk);
  };
  return (
    <div>
      <p>{sk}</p>
      <button className={styles.StylesButton} onClick={Countlike}>
        Don't click
      </button>
    </div>
  );
};
export default Counter;
