import React, { useState } from "react"; //imrs
const BoxColor = () => {
  let [color, setcolor] = useState("");
  const changeColor = { background: color };
  return (
    <div>
      <input
        onChange={(e) => {
          setcolor(e.target.value);
        }}
        type="text"
        style={changeColor}
        placeholder="Color Code"
      />
    </div>
  );
};
export default BoxColor;
