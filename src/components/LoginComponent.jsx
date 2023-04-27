import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const LoginComponent = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviarDatos = ({user, password}) => {
    console.log("desde el componente", user);
    auth.login(user, password);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-4"></div>
          <div className="col-4">
            <br />
            <h1>INICIAR SESION</h1>
            {!auth.authError ? null : 
              <div class="invalid-feedback">
                credenciales erroneas, intentelo de nuevo
              </div>}
            <br />
            <form className="container" onSubmit={handleSubmit(enviarDatos)}>
              <div className="row mt-2">
                <div className="col">
                  <div className="form-group">
                    <label for="nombre">Nombre de usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Nombre del equipo"
                      {...register("user", {
                        required: true,
                        maxLength: 20,
                        minLength: 4,
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
                    <label for="nombre">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="contrasena"
                      placeholder="Contraseña"
                      {...register("password", {
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

              <div className="row mt-5">
                <div className="col">
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesion
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export { LoginComponent };
