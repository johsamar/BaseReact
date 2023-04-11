import Alejandro from "./components/alejandro";
import Samuel from "./components/samuel";

function App() {
  return (
    <div className="App">
      <Samuel />
      {/* Este componente recibe un parametro "valor", el cual es un número que se usa para realizar algunas operaciones básicas */}
      <Alejandro valor="10"/>
    </div>
  );
}

export default App;
