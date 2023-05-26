import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Hooks from "./Hooks";

function App() {
  const [changeName, setChangeName] = useState("Ashutosh");
  const [changeButtonHover, setChangeButtonHover] = useState("Hover this");
  const [changeColor, setChangeColor] = useState("blue");
  const [changeBackgroundColor, setChangeBackgroundColor] = useState("yellow");
  console.log("changeNmase", changeName);
  const handleChangeName = () => {
    setChangeName("Ashutosh Maurya qqq");
    console.log("Test");
  };
  const handleChangeName2 = (e) => {
    setChangeName("Delhi");
    console.log("Test", e);
  };
  console.log("changeButtonHover", changeButtonHover);
  const handleMouseMove = () => {
    setChangeButtonHover("button changed name");
    setChangeColor("red");
    setChangeBackgroundColor("blue");
    console.log("mouse move");
  };
  const handleMouseLeave = () => {
    setChangeButtonHover("Hover this");
    setChangeColor("blue");
    setChangeBackgroundColor("yellow");
  };
  return (
    <div className="App">
      <h4 style={{ marginTop: "15%" }}>{changeName}</h4>
      <button onClick={handleChangeName}>ChangeName</button>
      <button onClick={handleChangeName2}>ChangeName2</button>

      <div style={{ marginTop: "15%" }}>
        <button
          // onMouseOver={handleMouseHover}
          style={{ color: changeColor, backgroundColor: changeBackgroundColor }}
          // style={{ color: changeColor, backgroundColor: changeBackgroundColor }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {changeButtonHover}
        </button>
      </div>

      <Hooks />
    </div>
  );
}

export default App;
