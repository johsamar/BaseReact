/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const PlatilloFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

//   reset(
//     {
//         "nombre": "Perros calientes",
//         "descripcion": "Sabrosas y deliciosas wooof",
//         "valores": {
//             "precio": 30,
//             "cantidad": 500
//         }
//     }
//   )

  const enviarDatos = (data) => {
    console.log(data);
  };

  return (
    <form className="container" onSubmit={handleSubmit(enviarDatos)}>
      <div className="row mt-2">
        <div className="col">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Nombre del platillo"
              {...register("nombre", {
                required: true,
                maxLength: 20,
                minLength: 3,
              })}
            />
            {errors?.nombre && errors?.nombre?.type === "maxLength" && (
              <span className="text-danger text-small d-block mb-2">
                El nombre es muy largo
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              className="form-control"
              id="descripcion"
              rows="3"
              {...register("descripcion", {})}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              placeholder="Precio del platillo"
              {...register("valores.precio", {
                required: true,
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              type="number"
              className="form-control"
              id="cantidad"
              placeholder="Cantidad del platillo"
              {...register("valores.cantidad", {
                required: true,
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
      </div>
      {/* Guardar imagen del platillo */}
      {/* <div className="row">
        <div className="col">
          <div className="form-group">
            <label for="formFileLg" className="form-label">
              Large file input example
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>
        </div>
      </div> */}
      <div className="row mt-5">
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};

export { PlatilloFormComponent };
