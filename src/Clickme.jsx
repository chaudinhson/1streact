import styles from "./css/button.module.css";
const Click1 = () => {
  const ClickIt = () => {
    alert("Skinners2k");
  };
  return (
    <button className={styles.StylesButton} onClick={ClickIt}>
      Don't Click
    </button>
  );
};
export default Click1;
