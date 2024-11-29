/**
 * @param { HTMLInputElement } input
 */
export function getArchivoSeleccionado(input) {
 const seleccion = input.files
 if (seleccion === null || seleccion.length === 0) {
  return null
 } else {
  return seleccion.item(0)
 }
}

// Permite que los eventos de html usen la función.
window["getArchivoSeleccionado"] = getArchivoSeleccionado