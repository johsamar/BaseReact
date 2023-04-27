import React from "react";
import { Outlet } from "react-router-dom";
// import { useParams } from "react-router-dom"; //! QUERY PARAMS
//* <Outlet /> Renderiza la ruta anidada

const Carta = () => {
  // const { tipo } = useParams();
  return (
    <>
      <div class="container-fluid">
        <h1>Carta</h1>

        {/* {tipo && <h3>Tipo: {tipo}</h3>} */}
        <Outlet />
      </div>
    </>
  );
};

export { Carta };
