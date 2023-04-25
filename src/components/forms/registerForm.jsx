import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Este campo es obligatorio"),
    lastName: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string()
      .email("Formato de email invalido")
      .required("Este campo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener como minimo 6 caracteres")
      .max(20, "La contraseña debe tener como máximo 10 caracteres")
      .required("Este campo es obligatorio"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "¡Las contraseñas no coinciden!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container w-50 mt-3 mb-3 text-light"
      >
        <div className="text-center">
          <h3>Iniciar Sesión</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            {...register("name")}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="nameHelp"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-danger">{errors.lastName.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirm" className="form-label">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm"
            {...register("confirm")}
          />
        </div>
        {errors.confirm && (
          <p className="text-danger">{errors.confirm.message}</p>
        )}
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
