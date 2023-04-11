import React, { useState } from "react";

const JuanVela = () => {
  const [colorFondo, setColorFondo] = useState("purple");
  const [colorLetra, setColorLetra] = useState("white");
  const [change, setChange] = useState(false);

  const styles = {
    background: colorFondo,
    color: colorLetra,
    padding: "10px, 5px, 10px, 5px",
  };

  const changeColor = () => {
    if (change) {
      setColorLetra("#8F0326");
      setChange(false);
      setColorFondo("#DC6985");
    } else {
      setColorLetra("#8F8200");
      setChange(true);
      setColorFondo("#DBD269");
    }
  };

  const modoOscuro = () => {
    setColorLetra("white");
    setColorFondo("black");
  };

  const modoClaro = () => {
    setColorLetra("black");
    setColorFondo("white");
  };

  return (
    <>
      <h1 style={styles}>Juan Vela</h1>
      <button onClick={() => changeColor()}>Cambiar color</button>
      <button onClick={() => modoOscuro()}>Modo oscuro</button>
      <button onClick={() => modoClaro()}>Modo claro</button>
    </>
  );
};

export default JuanVela;
