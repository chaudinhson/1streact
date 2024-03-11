import Showinfo from "./showinfo.jsx";
const StudentInformation = ({ Userlist1 }) => {
  return (
    <div>
      {Userlist1.map((a) => (
        <Showinfo name={a.name} age={a.age} job={a.job} />
      ))}
    </div>
  );
};
export default StudentInformation;
