import React, { useState } from "react";
import styles from "./css/button.module.css";

const ReactForm = () => {
  const stylesError = { color: "red" };
  const styleSuccess = { color: "lightgreen" };
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [error, setError] = useState(null);
  let [Success, setSuccess] = useState(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Password not match");
      setError("Password not match");
      setSuccess(null);
    } else if (email === "" || password === "" || confirmPassword === "") {
      console.log("Please fill all the fields");
      setError("Please fill all the fields");

      setSuccess(null);
    } else {
      console.log("Email: ", email);
      console.log("Password: ", password);
      console.log("Confirm Password: ", confirmPassword);
      console.log("Success");
      setSuccess("Success!");
      setError(null);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          id="Email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          name=""
          id="Password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <br />
        <input
          type="password"
          name=""
          id="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={handleConfirmPasswordChange}
        />

        <br />
        <button
          className={styles.StylesButton}
          type="submit"
          disabled={email === "" || password === "" || confirmPassword === ""}
        >
          Confirm
        </button>
        <br />
        {error && <span style={stylesError}>{error}</span>}
        {/* tại sao không hiện,tại vì giá trị ban đầu là null đã khai báo ở dong 8,9... */}
        {Success && <span style={styleSuccess}>{Success}</span>}
      </form>
    </div>
  );
};
export { ReactForm };
