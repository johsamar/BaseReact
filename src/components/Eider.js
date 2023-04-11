/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Eider = () => {
  const [colorName, setColorName] = useState("green");
  const [message, setMessage] = useState("Hola a todos");
  const [messageButtonSorry, setMessageButtonSorrry] = useState("Pedir Disculpas a Dalia");

  const [change, setChangeMessage] = useState(false);
  const [sorryColor, setSorryColor] = useState("blue");

  const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(contador + 1);
  }, [colorName]);

  const estilo = {
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
  };

  const cambiarColor = () => {
    if (change) {
      setColorName("yellow");
      setSorryColor("green");
      setChangeMessage(false);
    } else {
      setColorName("blue");
      setSorryColor("yellow");
      setChangeMessage(true);
    }
};

const changeMessage = () => {
    if (!change) {
        setMessage("Disculpa por dañar tu trabajo Dalia");
        setMessageButtonSorrry("Dar gracias");
        setChangeMessage(true);
    } else {
        setMessage("Gracias!");
        setMessageButtonSorrry("Pedir Disculpas a Dalia");
        setChangeMessage(false);
    }
  };

  return (
    <>
      <h1 style={estilo.name}>Eider</h1>
      <h1 style={estilo.sorry}>{message}</h1>
      <h2>Veces oprimido: {contador}</h2>
      <button onClick={() => cambiarColor()}>Cambiar Color</button>
      <button onClick={() => changeMessage()}>{messageButtonSorry}</button>
    </>
  );
};

export default Eider;
