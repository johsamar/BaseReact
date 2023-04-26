/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getUsuario, removeUsuario, setUsuario } from "../services/storageService";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  // const [usuario, setUsuario] = useState(null);
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
  if (auth.usuario) return <Navigate to="/" />;

  return children;
};
export { AuthProvider, ProtectedRoute, AuthLogin, useAuth };
