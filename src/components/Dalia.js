import React, { useState } from "react";

const Dalia = () => {

    const [color, setColor] = useState("yellow");
    const [change, setChange] = useState(true);
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador(contador + 1);
    }, [color]);

    const styles = {
        background: "black",
        color: color,
        padding: "10px, 5px, 10px, 5px",
      };
      const cambiarColor = () => {
        if (change) {
            setColor("yellow");
            setChange(false);
        } else {
            setColor("blue");
            setCambio(true);
        }
    }

    return (
        <>
            <h1 style={estilo}>Dalia</h1>
            <h2>
                Veces oprimido: {contador}
            </h2>
            <button onClick={() => cambiarColor()}>Cambiar Color</button>
        </>
    );
};

export default Dalia;
