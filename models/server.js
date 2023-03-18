const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = "/api/usuarios";

    //middlewares
    this.middlewares();

    //rutas de mi aplicacion

    this.routes();
  }
  middlewares() {
    //cors
    this.app.use(cors());

    //parseo y lectura del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosRoutePath, require("../routes/usuariosRoutes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server raised on", this.port);
    });
  }
}

module.exports = Server;
