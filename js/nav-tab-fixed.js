import { calculaClase } from "../lib/js/calculaClase.js"
import { html } from "../lib/js/html.js"

export class NavTabFixed extends HTMLElement {

  connectedCallback() {
    this.classList.add("md-tab", "fixed")

    this.innerHTML = html`
   <a ${calculaClase(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">home</span>
    Inicio
   </a>
  
   <a ${calculaClase(["/catalogo.html", "", "/catalogo"])} href="catalogo.html">
   <span class="material-symbols-outlined">category</span>
       Videojuegos
   </a>
   
   <a ${calculaClase(["/favoritos.html", "", "/favoritos"])} href="favoritos.html">
   <span class="material-symbols-outlined">favorite</span>
    Favoritos
   </a>
  
   <a ${calculaClase(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">tabs</span>
     Ayuda
   </a>`.htmlTxt
  }

}

customElements.define("nav-tab-fixed", NavTabFixed)