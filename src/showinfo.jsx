const Showinfo = (props) => {
  return (
    <div>
      <hr />
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Job: {props.job}</p>
    </div>
  );
};
export default Showinfo;
