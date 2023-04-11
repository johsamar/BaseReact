import React from "react";

const NavBarComponent = () => {
  //Estilo css para el navbar la lista
  const style = {
    backgroundColor: "#F9F871",
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    "list-style": "none"
  };

  return (
    <nav>
      <ul style={style}>
        <li>
          <a href="/">REST-aurante Coder</a>
        </li>
        <li>
          <a href="/about">Populares</a>
        </li>
        <li>
          <a href="/contact">Especialidades</a>
        </li>
        <li>
          <a href="/contact">Carta</a>
        </li>
        <li>
          <input type="text" placeholder="Buscar" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarComponent;
