import { getDataUrlDeSeleccion } from "./getDataUrlDeSeleccion.js"
import { getInputParaElementoHtml } from "./getInputParaElementoHtml.js"

/**
 * @param { Document | HTMLElement } raizHtml
 * @param { HTMLImageElement } img
 * @param { string } valor
 */
export async function muestraImagen(raizHtml, img, valor) {
 img.dataset.inicial = valor
 const input = getInputParaElementoHtml(raizHtml, img)
 if (input === null && valor === "") {
  img.hidden = true
 } else if (input === null && valor !== "") {
  img.hidden = false
  img.src = valor
 } else if (input !== null) {
  const dataUrl = await getDataUrlDeSeleccion(input)
  if (dataUrl === "" && valor === "") { // input !== null
   img.hidden = true
  } else if (dataUrl === "" && valor !== "") {
   img.hidden = false
   img.src = valor
  } else if (dataUrl !== "") {
   img.hidden = false
   img.src = dataUrl
  }
 }
}

// Permite que los eventos de html usen la función.
window["muestraImagen"] = muestraImagen
