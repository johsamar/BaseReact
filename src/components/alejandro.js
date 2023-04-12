import React, { useEffect, useState } from "react";

// Componentente creado por Alejandro Rios
const Alejandro = ({ valor }) => {
  // Estaba teniendo problemas con el sumar por lo que hice el parseo
  const numero1 = parseInt(valor);
  const [numero2, setNumero] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if(resultado == 0){
      setMensaje("");
    } else{
      setMensaje("Resultado: " + resultado);
    }
  }, [resultado]);

  const aumentar = () => {
    setNumero(numero2 + 1);
  };

  const disminuir = () => {
    setNumero(numero2 - 1);
  };

  const multiplicar = () => {
    setResultado(numero1 * numero2);
  };

  const dividir = () => {
    if(numero2 == 0){
      setMensaje("No se puede dividir por 0");
    } else {
      setResultado(numero1 / numero2);
    }
  }

  const sumar = () => {
    setResultado(numero1 + numero2);
  }

  const restar = () => {
    setResultado(numero1 - numero2);
  }

  return (
    <>
      <h1>Bienvenido</h1>
      <p>
        Utilice los botones "+" y "-" para cambiar el número por el que desea Multiplicar. <br />
        Primer número: {numero1} <span> | Segundo número: {numero2} </span>
        <button onClick={() => aumentar()}>+</button>
        <button onClick={() => disminuir()}>-</button>
      </p>
      <button onClick={() => sumar()}>Sumar</button>
      <button onClick={() => restar()}>Restar</button>
      <button onClick={() => multiplicar()}>Multiplicar</button>
      <button onClick={() => dividir()}>Dividir</button>
      <h2>{mensaje}</h2>
    </>
  );
};

export default Alejandro;
