import React, { useEffect, useState } from "react";
import { getPlatillos } from "../services/Platillos";
import CardMenuComponent from "./CardMenuComponent ";
import { VerPedidoComponent } from "./modals/VerPedidoComponent";
const MenuComponent = () => {
  const [data, setData] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    getPlatillos().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-auto">
          <VerPedidoComponent 
            pedidos={pedidos}
          />
        </div>
      </div>
      <div class="row">
        {!data ? (
          <h1>Cargando...</h1>
        ) : (
          data.map((platillo) => {
            return (
              <div className="col-3 mt-3">
                <CardMenuComponent
                  platillo={platillo}
                  pedidos={pedidos}
                  setPedidos={setPedidos}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export { MenuComponent };
