import React, { useEffect, useState } from "react";
import { getPlatillos } from "../services/Platillos";
import CardMenuComponent from "./CardMenuComponent ";
import { VerPedidoComponent } from "./modals/VerPedidoComponent";
import { PedidosProvider } from "../contexts/PedidosContext";
const MenuComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPlatillos().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <PedidosProvider>
        <div className="row justify-content-end">
          <div className="col-auto">
            <VerPedidoComponent />
          </div>
        </div>
        <div className="row">
          {!data ? (
            <h1>Cargando...</h1>
          ) : (
            data.map((platillo) => {
              return (
                <div className="col-3 mt-3" key={platillo.id}>
                  <CardMenuComponent platillo={platillo} />
                </div>
              );
            })
          )}
        </div>
      </PedidosProvider>
    </>
  );
};

export { MenuComponent };
