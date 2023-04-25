/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to={"/home"} className="navbar-brand">
            REST-aurante Code
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/populares"} className="nav-link">
                  Populares
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/especialidades"} className="nav-link">
                  Especialidades
                </Link>
              </li>
              <li className="nav-item dropdown active">
                <Link
                  to={"/carta"}
                  className="nav-link active dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Carta
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Platos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bebidas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Acompañantes
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Promociones
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Iniciar Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Registrarse
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
