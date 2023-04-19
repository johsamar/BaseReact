import { HomeForm } from "./pages/HomeForm";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./containers/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeForm />}></Route>
        <Route path="/carta" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
