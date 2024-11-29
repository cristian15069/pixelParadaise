import { USUARIO } from "./const/USUARIO.js"
// import { ROL_IDS } from "./const/ROL_IDS.js"
export class Sesion {
  /**
   * @param {any} objeto
   */
  constructor(objeto) {
    console.log(objeto[USUARIO]); // Imprime el valor de objeto[USUARIO] para verificar su contenido

    /** @readonly */
    this.usuario = objeto[USUARIO]?.US_NOMBRE || ""; // Asigna un valor predeterminado si no es un string
    this.apellido1 = objeto[USUARIO]?.US_APELLIDOPATERNO|| ""; // Asigna un valor predeterminado si no es un string
    this.apellido2 = objeto[USUARIO]?.US_APELLIDOMATERNO || ""; // Asigna un valor predeterminado si no es un string
    this.correo = objeto[USUARIO]?.US_CORREOELECTRONICO || ""; // Asigna un valor predeterminado si no es un string
    this.direccion = objeto[USUARIO]?.US_DIRECCION || ""; // Asigna un valor predeterminado si no es un string



    if (typeof this.usuario !== "string") {
        throw new Error("usuario debe ser string.");
    }
    if (typeof this.apellido1 !== "string") {
        throw new Error("apellido paterno debe ser string.");
    }
    if (typeof this.apellido2 !== "string") {
        throw new Error("apellido materno debe ser string.");
    }
    if (typeof this.correo !== "string") {
        throw new Error("correo debe ser string.");
    }
    if (typeof this.direccion !== "string") {
        throw new Error("direccion debe ser string.");
    }

    console.log(typeof this.usuario); // Imprime el tipo de this.usuario

    
      /** @readonly */
      // const rolIds = objeto[ROL_IDS]
      // if (!Array.isArray(rolIds))
      //  throw new Error("rolIds debe ser arreglo.")
      // /** @readonly */
      // this.rolIds = new Set(rolIds)
  }
}

// Permite que los eventos de html usen la clase.
window["Sesion"] = Sesion;
