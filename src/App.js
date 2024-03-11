import "./App.css";
import Showinfo from "./showinfo";
import Click1 from "./Clickme.jsx";
import Counter from "./Counter.jsx";
import BoxColor from "./boxcolor.jsx";
import Counter1 from "./counter1.jsx";
import { ReactForm } from "./reactForm.jsx";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import StudentInformation from "./studentInformation.js";
import styles from "./css/navbar.module.css";
function App() {
  const Userlist = [
    { name: "son", age: 20, job: "actor" },
    { name: "hai", age: 20, job: "doctor" },
    { name: "van", age: 20, job: "loyal" },
    { name: "vy", age: 20, job: "singer" },
    { name: "han", age: 20, job: "security" },
  ];
  return (
    <div className="App">
      {/* {Userlist.map((a) => (
        <Showinfo name={a.name} age={a.age} job={a.job} />
      ))} */}

      {/* <ReactForm /> */}
      <Router>
        <nav>
          <ul className={styles.header}>
            <li>
              <Link className={styles.navbaritems} to="/Home">
                HOME
              </Link>
            </li>
            <li>
              <Link className={styles.navbaritems} to="/reactForm">
                ReactForm
              </Link>
            </li>
            <li>
              <Link className={styles.navbaritems} to="/studentsInformation">
                Students Information
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/reactForm" element={ReactForm()} />
          <Route
            path="/studentsInformation"
            element={<StudentInformation Userlist1={Userlist} />}
          />
        </Routes>
      </Router>
      <Click1 />
      <Counter />
      <Counter1 />
      <BoxColor />
    </div>
  );
}
export default App;
