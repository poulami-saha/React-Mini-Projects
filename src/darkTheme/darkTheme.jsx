import { useContext, useState } from "react";
import { ThemeContext } from "./store";

const DarkTheme = () => {
  //const [toggle, setToggle] = useState(false);
  const { toggle, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        width: "90%",
        height: "30vh",
        padding: "3rem",
        background: toggle ? "black" : "white",
        border: "2px solid black",
      }}
    >
      <p
        style={{
          fontSize: "200",
          fontWeight: "bolder",
          color: toggle ? "white" : "black",
        }}
      >
        I am the text content
      </p>
      <button
        style={{ width: "15rem", paddingInline: "1rem", cursor: "pointer" }}
        onClick={() => toggleTheme(!toggle)}
      >
        Click to Toggle Theme
      </button>
    </div>
  );
};

export default DarkTheme;
