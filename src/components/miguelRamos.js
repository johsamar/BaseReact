/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from "react";

const MiguelRamos = () => {

    const[color, setColor] = useState("black");
    const [cambio, setCambio] = useState(true);


    const [stringColor, setStringColor] = useState("NEGRO");
    const [contador, setContador] = useState(0);



    useEffect(() => {
        if(cambio){
            setContador(contador + 1);
        }
    }, [cambio]);
   

    const estilo = {
        
        backgroundColor: color,
        color: "white",
        padding: "10px",
        textAlign: "center",
        width:"300px"
        
    }

    const cambiarColorRandom = ()  =>{
        if(cambio){
            const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
            document.documentElement.style.setProperty('--main-bg-color', randomColor);

            setColor(randomColor);
            setStringColor("RANDOM");
            setCambio(false);
        }else{
            setColor("black");
            setStringColor("NEGRO");
            setCambio(true);
        }
    }

    

    return (
        <>
           <h1 style={estilo}>Miguel Ramos</h1>

           <button onClick={() =>  cambiarColorRandom()}>Color Random</button>

           <h2>
                Color: {stringColor}
            </h2>
            <h2>
                Numeo de negros: {contador}
            </h2>
        </>
    );
};

export default MiguelRamos;
