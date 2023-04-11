import React, { useEffect, useState } from "react";


const AlejandroA = () => {
    const [color, setColor] = useState();
    const [cambio, setCambio] =  useState(false);

    const estilo = {
        background: "white",
        color: color,
        padding: "10px",
    }

    const cambiarColor = () => {
        if (cambio) {
            setColor("green");
            setCambio(false);
        } else {
            setColor("purple");
            setCambio(true);
        }
    }
    return (
        <>
        <h1 style={estilo}>AlejandroA</h1>
        <button onClick={() => cambiarColor()}>cambiar color</button>
        <button onClick={() => setColor("blue")}>cambiar color azul</button>
        <button onClick={() => setColor()}>reiniciar</button>
        </>
    ); 
}

export default AlejandroA;