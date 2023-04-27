const setUsuario = (usuario) => {
  localStorage.setItem("usuario", JSON.stringify(usuario));
};

const getUsuario = () => {
  return JSON.parse(localStorage.getItem("usuario"));
};

const removeUsuario = () => {
  localStorage.removeItem("usuario");
};

export { setUsuario, getUsuario, removeUsuario };
