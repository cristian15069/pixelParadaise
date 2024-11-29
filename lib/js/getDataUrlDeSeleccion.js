import { getArchivoSeleccionado } from "./getArchivoSeleccionado.js"

/**
 * @param {HTMLInputElement} input
 * @returns {Promise<string>}
 */
export function getDataUrlDeSeleccion(input) {
 return new Promise((resolve, reject) => {
  try {
   const seleccion = getArchivoSeleccionado(input)
   if (seleccion === null) {
    resolve("")
   } else {
    const reader = new FileReader()
    reader.onload = () => {
     const dataUrl = reader.result
     if (typeof dataUrl === "string") {
      resolve(dataUrl)
     } else {
      resolve("")
     }
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(seleccion)
   }
  } catch (error) {
   resolve(error)
  }
 })
}

// Permite que los eventos de html usen la función.
window["getDataUrlDeSeleccion"] = getDataUrlDeSeleccion
