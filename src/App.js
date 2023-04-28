import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import NavBar from "./containers/NavBar";
import Home from "./pages/Home";
import { HomeForm } from "./pages/HomeForm";
import { Populares } from "./pages/Populares";
import { PokemonPage } from "./pages/PokemonPage";
import { Carta } from "./pages/Carta";
import { Especialidades } from "./pages/Especialidades";
import { Licores } from "./components/carta_components/Licores";
import { Comidas } from "./components/carta_components/Comidas";
import { LoginFormPage } from "./pages/LoginFormPage";
import { AuthProvider, ProtectedRoute } from "./contexts/AuthContext";

// import { HomeForm } from "./pages/HomeForm";
//! Las rutas anidadas no deben ir con / porque no son rutas absolutas.

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/homeform" element={<HomeForm />} />
            </Route>
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/populares" element={<Populares />} />
            <Route path="/pokemon" element={<PokemonPage />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/carta" element={<Carta />}>
              <Route path="licores" element={<Licores />} />
              <Route path="comidas" element={<Comidas />} />
            </Route>

            {/* <Route path="/carta/:tipo" element={<Carta />} /> */}
            <Route path="*" element={<h1>Not Found 404</h1>} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
