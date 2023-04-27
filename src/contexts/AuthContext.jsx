/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// Importamos el local storage
import {
  getUsuario,
  setUsuario,
  removeUsuario,
} from "../services/storageService";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const usuario = getUsuario();

  const login = (usuario) => {
    setUsuario(usuario);
    navigate("/");
  };

  const logout = () => {
    removeUsuario();
    navigate("/login");
  };

  const auth = {
    usuario,
    login,
    logout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.usuario) return <Navigate to="/login" />;

  return <Outlet />;
};

// const AuthLogin = ({ children }) => {
//   const auth = useAuth();
//   if (auth.usuario) return <Navigate to="/" />;

//   return children;
// };
export { AuthProvider, ProtectedRoute, useAuth };
