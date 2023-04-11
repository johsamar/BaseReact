/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Eider = () => {
  const [colorName, setColorName] = useState("green");
  const [sorryColor, setSorryColor] = useState("blue");

  const [message, setMessage] = useState("Hola a todos");
  const [messageButtonSorry, setMessageButtonSorrry] = useState(
    "Pedir Disculpas a Dalia"
  );

  const [changeM, setChangeMessage] = useState(false);
  const [changeC, setChangeColor] = useState(false);
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    setCounter(counter + 1);
  }, [colorName]);

  const styles = {
    name: {
      backgroundColor: colorName,
      colorName: "white",
      padding: "10px",
    },

    sorry: {
      backgroundColor: sorryColor,
      colorName: "white",
      padding: "10px",
    },

    buttons: {
      backgroundColor: "gray",
      colorName: "white",
      padding: "10px",
      margin: "5px",
      borderRadius: "2%",
    },
  };

  const changeColor = () => {
    if (changeC) {
      setColorName("blue");
      setSorryColor("yellow");
      setChangeColor(false);
    } else {
      setColorName("yellow");
      setSorryColor("green");
      setChangeColor(true);
    }
  };

  const changeMessage = () => {
    if (changeM) {
      setMessage("Gracias!");
      setMessageButtonSorrry("Pedir Disculpas a Dalia");
      setChangeMessage(false);
    } else {
      setMessage("Disculpa por dañar tu trabajo Dalia");
      setMessageButtonSorrry("Dar gracias");
      setChangeMessage(true);
    }
  };

  return (
    <>
      <h1 style={styles.name}>Eider</h1>
      <h1 style={styles.sorry}>{message}</h1>
      <h2>Veces oprimido: {counter}</h2>
      <button style={styles.buttons} onClick={() => changeColor()}>
        Cambiar Color
      </button>
      <button style={styles.buttons} onClick={() => changeMessage()}>
        {messageButtonSorry}
      </button>
    </>
  );
};

export default Eider;
