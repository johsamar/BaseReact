import Alejandro from "./components/alejandro";
import Samuel from "./components/samuel";
import Cristian from "./components/Cristian";
import AlejandroA from "./components/AlejandroA";
import MiguelRamos from "./components/miguelRamos";
import Giovanny from "./components/Giovanny";
import JuanVela from "./components/JuanVela";
import Eider from "./components/Eider";
import { Hector } from "./components/Hector";
import Dalia from "./components/Dalia";
import Santiago from "./components/santiago";
function App() {
  return (
    <div className="App">
      <Samuel />
      {/* Este componente recibe un parametro "valor", el cual es un número que se usa para realizar algunas operaciones básicas */}
      <Alejandro valor="10"/>
      <Cristian />
      <AlejandroA />
      <MiguelRamos />
      <Giovanny />
      <JuanVela />
      <Dalia/>
      <Eider/>
      <Hector/>
      <Santiago/>
    </div>
  );
}

export default App;
