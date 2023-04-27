/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const auth = useAuth();

  const logout = () => {
    console.log(auth.usuario);
    auth.logout();
  };

  const login = () => {
    auth.login();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          REST-aurante
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
        {auth.usuario && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/populares"
                  className="nav-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "blue" : "gray" };
                  }}
                >
                  Populares
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/especialidades"
                  className="nav-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "blue" : "gray" };
                  }}
                >
                  Especialidades
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/carta"
                  className="nav-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "blue" : "gray" };
                  }}
                >
                  Carta
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
