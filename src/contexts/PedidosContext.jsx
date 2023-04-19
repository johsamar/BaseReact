import { createContext, useEffect, useState } from "react";

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalSum = 0;
    pedidos.forEach((pedido) => {
      totalSum += pedido.total;
    });
    setTotal(totalSum);
  }, [pedidos]);

  return (
    <PedidosContext.Provider
      value={{
        pedidos,
        setPedidos,
        total,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
}

export { PedidosProvider, PedidosContext };
