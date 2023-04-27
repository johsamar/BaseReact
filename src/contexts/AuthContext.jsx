/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getUsuario, removeUsuario, setUsuario } from "../services/storageService";
import { checkAuthentication } from "../services/AuthService";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  // const [usuario, setUsuario] = useState(null);
  const usuario = getUsuario();
  const [authError, setAuthError] = useState(false);

  const login = ({user, password}) => {
    const authenticatedUser = checkAuthentication(user, password);
    if (authenticatedUser) {
      setUsuario(authenticatedUser);
      navigate("/");
    }else{
      setAuthError(true)
    }
    //setUsuario(usuario);
    //navigate("/");
  };

  const logout = () => {
    removeUsuario();
    navigate("/login");
  };

  const auth = {
    usuario,
    login,
    logout,
    authError
  };

  // useEffect(() => {
  //   console.log(usuario);
  //   console.log("efecto");
  //   console.log(auth.usuario);
  // }, [usuario]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.usuario) return <Navigate to="/login" />;

  return children;
};

const AuthLogin = ({ children }) => {
  const auth = useAuth();
  console.log(auth.usuario);
  if (!auth.authError) return <Navigate to="/" />;

  return children;
};
export { AuthProvider, ProtectedRoute, AuthLogin, useAuth };
