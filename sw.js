/* Este archivo debe estar colocado en la carpeta raíz del sitio.
 * 
 * Cualquier cambio en el contenido de este archivo hace que el service
 * worker se reinstale. */

/**
 * Cambia el número de la versión cuando cambia el contenido de los
 * archivos.
 * 
 * El número a la izquierda del punto (.), en este caso <q>1</q>, se
 * conoce como número mayor y se cambia cuando se realizan
 * modificaciones grandes o importantes.
 * 
 * El número a la derecha del punto (.), en este caso <q>00</q>, se
 * conoce como número menor y se cambia cuando se realizan
 * modificaciones menores.
 */
const VERSION = "1.1.10"

/**
 * Nombre de la carpeta de caché.
 */
const CACHE = "SkilledAt Reactin"

/**
 * Archivos requeridos para que la aplicación funcione fuera de línea.
 */
const ARCHIVOS = [
 "favicon.ico",
 "index.html",
 "ayuda.html",
 "carrito.html",
 "catalogo.html",
 "modifica.html",
 "detalles.html",
 "agregar.html",
 "favoritos.html",
 "perfil.html",
 "inicioSesion.html",
 "registrar.html",
 "popupI.js",
 "Diario.html",
 "minijuego.html",
 "site.webmanifest",
 "css/estilos.css",
 "css/tokens.css",
 "css/diario.css",
 "img/icono2048.png",
 "img/maskable_icon.png",
 "img/maskable_icon_x128.png",
 "img/maskable_icon_x192.png",
 "img/maskable_icon_x384.png",
 "img/maskable_icon_x48.png",
 "img/maskable_icon_x512.png",
 "img/maskable_icon_x72.png",
 "img/maskable_icon_x96.png",
 "img/screenshot_horizontal.png",
 "img/screenshot_vertical.png",
 "img/promocion1.png",
 "img/titulos.png",
 "img/emoticon_confundido.gif",
 "img/emoticon_dormir.gif",
 "img/emoticon_enamorado.gif",
 "img/emoticon_enfermo.gif",
 "img/emoticon_enojado.gif",
 "img/emoticon_espantado.gif",
 "img/emoticon_nervioso.gif",
 "img/emoticon_sarcastico.gif",
 "img/emoticon_sonador.gif",
 "img/emoticon_sorprendido.gif",
 "img/beep.mp3",
 "js/busqueda.js",
 "js/carrito.js",
 "js/configura.js",
 "js/calendario.js",
 "js/favoritos.js",
  "js/const/USUARIO.js",
  "js/Sesion.js",
  "js/custom/mi-nav.js",
 "js/menu.js",
 "js/nav-bar.js",
 "js/nav-drw.js",
 "js/nav-tab-fixed.js",
 "js/nav-tab-scrollable.js",
   "lib/css/colors.module.css",
   "lib/css/elevation.css",
   "lib/css/material-symbols-outlined.css",
   "lib/css/md-cards.css",
   "lib/css/md-filled-button.css",
   "lib/css/md-list.css",
   "lib/css/md-menu.css",
   "lib/css/md-navigation-bar.css",
   "lib/css/md-outline-button.css",
   "lib/css/md-ripple.css",
   "lib/css/md-segmented-button.css",
   "lib/css/md-slider-field.css",
   "lib/css/md-standard-icon-button.css",
   "lib/css/md-switch.css",
   "lib/css/md-tab.css",
   "lib/css/md-top-app-bar.css",
   "lib/css/motion.css",
   "lib/css/roboto.css",
   "lib/css/shape.css",
   "lib/css/state.css",
   "lib/css/theme.dark.css",
   "lib/css/theme.light.css",
   "lib/css/typography.css",
  "lib/fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].codepoints",
   "lib/fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].ttf",
   "lib/fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].woff2",
   "lib/fonts/roboto-v30-latin-regular.ttf",
   "lib/fonts/roboto-v30-latin-regular.woff2",
   "lib/js/abreElementoHtml.js",
   "lib/js/buscaElementoHtml.js",
   "lib/js/calculaClase.js",
   "lib/js/cierraElementoHtmo.js",
   "lib/js/confirmaEliminar.js",
   "lib/js/ejecuta.js",
   "lib/js/ejecutaMetodo.js",
   "lib/js/getArchivoSeleccionado.js",
   "lib/js/getAttribute.js",
   "lib/js/getDataUrlDeSeleccion.js",
   "lib/js/getInputParaElementoHtml.js",
   "lib/js/html.js",
   "lib/js/htmlentities.js",
   "lib/js/muestraArray.js",
   "lib/js/muestraBoolean.js",
   "lib/js/muestraError.js",
   "lib/js/muestraImagen.js",
   "lib/js/muestraInnerHtml.js",
   "lib/js/muestraNumber.js",
   "lib/js/muestraObjeto.js",
   "lib/js/muestraString.js",
   "lib/js/muestraTextContent.js",
   "lib/js/muestraTextoDeAyuda.js",
   "lib/js/muestraValor.js",
   "lib/js/submitForma.js",
   "lib/js/querySelector.js",
   "lib/js/querySelectorAll.js",
   "lib/js/registraServiceWorkerSiEsSoportado.js",
   "lib/js/setBooleanAttribute.js",
   "lib/js/const/ES_APPLE.js",
   "lib/js/custom/md-filled-text-field.js",
   "lib/js/custom/md-menu-button.js",
   "lib/js/custom/md-options-menu.js",
   "lib/js/custom/md-overflow-button.js",
   "lib/js/custom/md-overflow-menu.js",
   "lib/js/custom/md-select-menu.js",
   "lib/js/custom/md-slider-field.js",
   "lib/js/custom/md-switch.js",
   "lib/js/custom/md-top-app-bar.js",
   "lib/js/custom/MdNavigationDrawer.js",
   "ungap/custom-elements.js",
   "/"
]

// Verifica si el código corre dentro de un service worker.
if (self instanceof ServiceWorkerGlobalScope) {
 // Evento al empezar a instalar el servide worker,
 self.addEventListener("install",
  (/** @type {ExtendableEvent} */ evt) => {
   console.log("El service worker se está instalando.")
   evt.waitUntil(llenaElCache())
  })

 // Evento al solicitar información a la red.
 self.addEventListener("fetch", (/** @type {FetchEvent} */ evt) => {
  if (evt.request.method === "GET") {
   evt.respondWith(buscaLaRespuestaEnElCache(evt))
  }
 })

 // Evento cuando el service worker se vuelve activo.
 self.addEventListener("activate",
  () => console.log("El service worker está activo."))
}

async function llenaElCache() {
 console.log("Intentando cargar caché:", CACHE, ".")
 // Borra todos los cachés.
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 // Abre el caché de este service worker.
 const cache = await caches.open(CACHE)
 // Carga el listado de ARCHIVOS.
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE, ".")
 console.log("Versión:", VERSION, ".")
}

/** @param {FetchEvent} evt */
async function buscaLaRespuestaEnElCache(evt) {
 // Abre el caché.
 const cache = await caches.open(CACHE)
 const request = evt.request
 /* Busca la respuesta a la solicitud en el contenido del caché, sin
  * tomar en cuenta la parte después del símbolo "?" en la URL. */
 const response = await cache.match(request, { ignoreSearch: true })
 if (response === undefined) {
  /* Si no la encuentra, empieza a descargar de la red y devuelve
   * la promesa. */
  return fetch(request)
 } else {
  // Si la encuentra, devuelve la respuesta encontrada en el caché.
  return response
 }
}