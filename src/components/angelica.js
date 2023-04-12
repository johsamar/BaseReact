import React, { useEffect, useState } from "react";

const Angelica = () => {

    const [color, setColor] = useState("blue");
    const [cambio, setCambio] = useState(false);

    const [contador, setContador] = useState(-1);
    const [opcion, setOpcion] = useState(0);


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
    }

    const buttonPurple = {
        backgroundColor: "purple",
        width: "100px",
        height: "auto",
    }

    const buttonGreen = {
        backgroundColor: "green",
        width: "100px",
        height: "auto",
    }

    const cambiarColor = () => {
        
            if (opcion == 1) {
                if(cambio){
                    setColor("black");
                    setCambio(false);
                }else{
                    setColor("yellow");
                }          
             }  if (opcion == 2){
                       setColor("green");
                       setCambio(true);
                 }  if(opcion == 3){
                        setColor("purple");
                        setCambio(true);
                 }       
        }  

        useEffect(() => {
            setContador(contador + 1);
        }, [color]);


    return (
        <>
            <h1 style={estilo}>Angelica</h1>  
            <h2>      Veces Que Cambio De Color: {contador}  </h2>
            
            <button style={button} onClick={() => cambiarColor(setOpcion(1))}> Cambiar Color</button>           
            <button style={buttonPink} onClick={() => setColor("pink")} >  Cambiar A Rosa  </button> 
            <button style={buttonGreen} onClick={() => cambiarColor(setOpcion(2))} >  Cambiar A Verde  </button>                     
            <button style={buttonPurple} onClick={() => setColor("purple")}>  Cambiar A Morado  </button>
        
        </>
    );
};

export default Angelica;
