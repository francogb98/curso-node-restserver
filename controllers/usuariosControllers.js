const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { f, name = "no name", pag } = req.query;

  res.json({
    msg: "get API - Controlador",
    f,
    name,
  });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    nombre,
    edad,
  });
};

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params;

  res.status(500).json({
    msg: "put API",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = { usuariosGet, usuariosDelete, usuariosPost, usuariosPut };
