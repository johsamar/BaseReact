/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            REST-aurante Code
          </a>
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
                <a className="nav-link" aria-current="page" href="#">
                  Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Especialidades
                </a>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Carta
                </a>
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
