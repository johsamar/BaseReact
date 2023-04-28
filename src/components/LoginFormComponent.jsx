import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "../styles/LoginFormComponent.css";

export function LoginFormComponent({ login }) {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const urlAuthApi = "http://localhost:8080/login";

  const authLogin = async (data) => {
    try {
      const response = await fetch(urlAuthApi, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: data.email,
          contrasenia: data.password,
        }),
      });
      const jsonData = await response.json();

      console.log(jsonData); //! to delete

      if (jsonData.isSuccessful) {
        NotificationManager.success(
          "Inicio de sesión exitoso!",
          "Sesión Iniciada"
        );
        auth.login(data);
      } else {
        NotificationManager.error(
          "Verifique el correo y la contraseña ingresados",
          "Error al iniciar sesión"
        );
      }
    } catch (error) {
      NotificationManager.error(
        "Verifique el correo y la contraseña ingresados",
        "Error al iniciar sesión"
      );
    }

    reset();
  };

  const enviarDatos = (data) => {
    console.log(data);
    authLogin(data);
  };

  return (
    <div className="form-container">
      <h1>INICIAR SESION</h1>
      <form onSubmit={handleSubmit(enviarDatos)}>
        <label htmlFor="email" className="form-label">
          Correo
        </label>
        <input
          className="form-control"
          id="email"
          {...register("email", {
            required: "El correo es requerido",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message:
                "El valor ingresado no coincide con el formato del correo electrónico",
            },
          })}
          type="email"
        />
        {errors.email && (
          <div className="alert alert-danger" role="alert">
            {errors.email.message}
          </div>
        )}
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          className="form-control"
          id="password"
          {...register("password", {
            required: "La contraseña es requerida",
            maxLength: {
              value: 8,
              message: "la longitud maxima es 8",
            },
            minLength: {
              value: 5,
              message: "la longitud mínima es 5",
            },
          })}
          type="password"
        />
        {errors.password && (
          <div className="alert alert-danger" role="alert">
            {errors.password.message}
          </div>
        )}
        <br />
        <button type="submit" className="btn btn-grey">
          Acceder
        </button>
      </form>
      <NotificationContainer />
    </div>
  );
}
