import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const LoginComponent = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviarDatos = (data) => {
    auth.login(data);
  };

  return (
    <>
      {auth.usuario !== null ? (
        <Navigate to="/" />
      ) : (
        <div className="container w-50 text-center mt-5">
          <div className="row justify-content-center">
            <div className="col">
              <h1>INICIAR SESION</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-8">
              <form className="container" onSubmit={handleSubmit(enviarDatos)}>
                <div className="row mt-2">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre de usuario</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Nombre del equipo"
                        {...register("nombreUsuario", {
                          required: true,
                          maxLength: 20,
                          minLength: 4,
                        })}
                      />
                      {errors?.nombre &&
                        errors?.nombre?.type === "maxLength" && (
                          <span className="text-danger text-small d-block mb-2">
                            El nombre es muy largo
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-2">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="nombre">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="contrasena"
                        placeholder="Contraseña"
                        {...register("contrasena", {
                          required: true,
                          maxLength: 20,
                          minLength: 4,
                        })}
                      />
                      {errors?.contrasena &&
                        errors?.contrasena?.type === "minLength" && (
                          <span className="text-danger text-small d-block mb-2">
                            La contraseña es muy corta
                          </span>
                        )}
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <button type="submit" className="btn btn-primary">
                      Iniciar Sesion
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginComponent };
