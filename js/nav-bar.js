import { calculaClase } from "../lib/js/calculaClase.js"
import { html } from "../lib/js/html.js"

export class NavBar extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-navigation-bar")

  this.innerHTML = html`
   <a ${calculaClase(["/index.html", "", "/"])} href="index.html">
   <span class="material-symbols-outlined">
   shopping_bag
   </span> 
   Mis compras 
   </a>

   <a ${calculaClase(["/carrito.html"])} href="carrito.html">
   <span class="material-symbols-outlined">
   shopping_cart
   </span>    Carrito de compras
   </a>

   <a ${calculaClase(["/Diario.html"])} href="Diario.html">
   <span class="material-symbols-outlined">
   auto_stories
   </span>
   Diario videojuegos
   </a>

   <a ${calculaClase(["/minijuego.html"])} href="minijuego.html">
   <span class="material-symbols-outlined">
   stadia_controller
   </span>    Minijuego
   </a>`.htmlTxt

 }

}

customElements.define("nav-bar", NavBar)