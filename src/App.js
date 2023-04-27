import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import NavBar from "./containers/NavBar";
import Home from "./pages/Home";
import { HomeForm } from "./pages/HomeForm";
import { Populares } from "./pages/Populares";
import { Carta } from "./pages/Carta";
import { Especialidades } from "./pages/Especialidades";
import { Licores } from "./components/carta_components/Licores";
import { Comidas } from "./components/carta_components/Comidas";
import {LoginForm} from "./pages/LoginForm";

// import { HomeForm } from "./pages/HomeForm";
//! Las rutas anidadas no deben ir con / porque no son rutas absolutas.

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeform" element={<HomeForm />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/carta" element={<Carta />}>
            <Route path="licores" element={<Licores />} />
            <Route path="comidas" element={<Comidas />} />
          </Route>
          <Route path="/login" element={<LoginForm/>} />
          {/* <Route path="/carta/:tipo" element={<Carta />} /> */}
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
