/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Eider = () => {

    const [color, setColor] = useState("green");
    const [cambio, setCambio] = useState(false);

    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador(contador + 1);
    }, [color]);


    const estilo = {
        backgroundColor: color,
        color: "white",
        padding: "10px",
    }

    const cambiarColor = () => {
        if (cambio) {
            setColor("yellow");
            setCambio(false);
        } else {
            setColor("blue");
            setCambio(true);
        }
    }

    return (
        <>
            <h1 style={estilo}>Eider</h1>
            <h2>
                Veces oprimido: {contador}
            </h2>
            <button onClick={() => cambiarColor()}>Cambiar Color</button>
        </>
    );
};

export default Eider;
