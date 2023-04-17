import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { findPlatilloById } from "../../services/Platillos";
import { PedidosContext } from "../../contexts/PedidosContext";
import { BsFillTrashFill } from "react-icons/bs";


const VerPedidoComponent = () => {
  const { pedidos, total, setPedidos } = useContext(PedidosContext);

  const eliminarPedido = (id)=>{
    console.log(id)
    const copyPedidos = pedidos.filter(pedido => pedido.platillo !== id)
    setPedidos(copyPedidos);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#verPedidoModal"
      >
        <strong>Ver Pedido</strong>
        <FiShoppingCart />
      </button>
      <div
        className="modal fade"
        id="verPedidoModal"
        tabindex="-1"
        aria-labelledby="verPedidoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="verPedidoModalLabel">
                Pedido
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <PedidosContext.Consumer> */}
                {/* {({ pedidos, total }) => { */}
                  {/* return ( */}
                    <>
                      <div className="row">
                        <div className="col">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Platillo</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Total</th>
                                <th>Acciones</th>
                              </tr>
                            </thead>
                            <tbody>
                              {pedidos.map((pedido) => {
                                const platilloFind = findPlatilloById(
                                  pedido.platillo
                                );
                                return (
                                  <tr>
                                    <td>{platilloFind.nombre}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{platilloFind.precio}</td>
                                    <td>
                                      {platilloFind.precio * pedido.cantidad}
                                    </td>
                                    <td>
                                      <button className="btn btn-danger" onClick={() => eliminarPedido(platilloFind.id)}>
                                        <BsFillTrashFill />
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row justify-content-end">
                        <div className="col-auto">
                          <h3>
                            <strong>Total:</strong> $ {total}
                          </h3>
                        </div>
                      </div>
                    </>
                  {/* ); */}
                 {/* }} */}
              {/* </PedidosContext.Consumer> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-success">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { VerPedidoComponent };
