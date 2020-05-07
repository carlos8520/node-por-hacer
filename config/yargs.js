const descripcion = {
  demand: true,
  alias: "d",
  desc: "descripcion de la tarea por hacer",
};

const completado = {
  default: true,
  alias: "c",
  desc: "completado o pendiente",
};

const argv = require("yargs")
  .command("crear", "crear tarea", {
    descripcion,
  })
  .command("actualizar", "actualizar tarea", {
    descripcion,
    completado,
  })
  .command("borrar", "borra una tarea", {
    descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
