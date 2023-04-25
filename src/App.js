import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartaPage from "./pages/carta/carta-page";
import NavBar from "./components/pure/navbar";
import HomePage from "./pages/home/home-page";
import FooterComponent from "./components/pure/footer";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";

function App() {
  return (
    <div className="container-fluid bg-dark">
      <Router>
        {/* Declarar el navbar en App.js para que todas las páginas tengan acceso */}
        <NavBar />
        {/* Aqui se declaran las rutas para cada página dentro de la SPA */}
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/carta" element={<CartaPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
