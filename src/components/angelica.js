import React, { useEffect, useState } from "react";

const Angelica = () => {

    const [color, setColor] = useState("green");
    const [cambio, setCambio] = useState(true);

    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador(contador + 1);
    }, [color]);


    const estilo = {
        backgroundColor: color,
        color: "white",
        padding: "5px",
        width:"180px",
    }

    const button = {
        backgroundColor: "white",
        color: "black",
        width: "100px",
        height: "auto",
        display: "inline-block",
    }

    const buttonPink = {
        backgroundColor: "pink",
        width: "100px",
        height: "auto",
        display: "inline-block",
    }

    const buttonPurple = {
        backgroundColor: "purple",
        width: "100px",
        height: "auto",
        display: "inline-block",
    }

    const cambiarColor = () => {
        if (cambio) {
            setColor("yellow");
            setCambio(false);
        } else  {
            setColor("black");
            setCambio(true);
         } 
    }

    return (
        <>
            <h1 style={estilo}>Angelica</h1>  <h2>      Veces Que A Cambiado De Color: {contador}  </h2>
            <div>
            <button style={button} onClick={() => cambiarColor()}> Cambiar Color</button> 
            </div>
            <div>
            <button style={buttonPink} onClick={() => setColor("pink")}>  Cambiar A Rosa  </button>
            </div>
            <div>
            <button style={buttonPurple} onClick={() => setColor("purple")}>  Cambiar A Morado  </button>
            </div>
        </>
    );
};

export default Angelica;
