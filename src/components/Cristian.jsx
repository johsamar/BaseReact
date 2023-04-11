import { useEffect, useState } from "react";

const Cristian = () => {

    const [color, setColor] = useState("yellow");
    const [change, setChange] = useState(true);
    const [name, setName] = useState("Cristian");

    useEffect(() => {
        setColor((name === "Cristian") ? "blue" : "green");
    }, [name]);

    const style = {
        backgroundColor: color,
        color: "white",
        padding: "10px",
        display: "block"
    }
    
    const style2 = {
        marginTop: "10px",
        display: "block"
    }

    const handleChangeColor = () => {
        cambiarColor();
    }

    const cambiarColor = () => {
        if (change) {
            setName("David");
        } else {
            setName("Cristian")
        }
        setChange(!change);
    }

    return (
        <>
            <button style={style2} onClick={handleChangeColor}>
                <h1 style={style}>{name}</h1>
            </button>
        </>
    );
};

export default Cristian;
