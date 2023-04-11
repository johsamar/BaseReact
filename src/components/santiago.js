/* eslint-disable react-hooks/exhaustive-deps 
import React, { useEffect, useState } from "react";

const Samuel = () => {

    const [color, setColor] = useState("yellow");
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
            <h1 style={estilo}>Samuel</h1>
            <h2>
                Veces oprimido: {contador}
            </h2>
            <button onClick={() => cambiarColor()}>Cambiar Color</button>
        </>
    );
};

export default Samuel;*/

import React from 'react';
export default class Santiago extends React.Component{

    render()
    {
        return (
            <div>
                <h1>Santiago</h1>
                <p>SEMILLERO FULLSTACK</p>
            </div>
        )
    }
}

