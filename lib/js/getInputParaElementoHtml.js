import { buscaElementoHtml } from "./buscaElementoHtml.js"

/**
 * @param { Document | HTMLElement } raizHtml
 * @param { HTMLElement } elementoHtml
 */
export function getInputParaElementoHtml(raizHtml, elementoHtml) {
 const posibleInputId = elementoHtml.getAttribute("data-input")
 if (posibleInputId === null) {
  return null
 } else {
  const posibleInput = buscaElementoHtml(raizHtml, posibleInputId)
  if (posibleInput instanceof HTMLInputElement) {
   return posibleInput
  } else {
   return null
  }
 }
}

// Permite que los eventos de html usen la función.
window["getInputParaElementoHtml"] = getInputParaElementoHtml
