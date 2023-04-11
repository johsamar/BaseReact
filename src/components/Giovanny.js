import React, { useState } from "react";

const Giovanny = () => {
  const [color, setColor] = useState("blue");
  const [change, setChange] = useState(false);

  const styles = {
    background: "black",
    color: color,
    padding: "10px, 5px, 10px, 5px",
  };

  const changeColor = () => {
    if (change) {
      setColor("white");
      setChange(false);
    } else {
      setColor("green");
      setChange(true);
    }
  };

  return (
    <>
      <h1 style={styles}>Giovanny</h1>
      <button onClick={() => changeColor()}>Cambiar</button>
    </>
  );
};

export default Giovanny;
