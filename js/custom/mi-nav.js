import { htmlentities } from "../../lib/js/htmlentities.js"
import { Sesion } from "../Sesion.js"
import { calculaClase } from "../../lib/js/calculaClase.js"
import { USUARIO } from "../const/USUARIO.js"
import { html } from "../../lib/js/html.js"
import {muestraInnerHtml} from "../../lib/js/muestraInnerHtml.js"



export class MiNav extends HTMLElement {

 connectedCallback() {

   this.classList.add("md-tab", "fixed")


  this.innerHTML = /* html */
   `<nav>
     <ul style="display: flex;
            flex-wrap: wrap;
            padding:0;
            gap: 0.5em;
            list-style-type: none;
            justify-content: center;
            aling-items: center;
            ">
      <li><progress max="100">Cargando&hellip;</progress></li>
     </ul>
    </nav>
    `


 }

/**
  * @param {Sesion} sesion
  */
set sesion(sesion) {
    const usuario = sesion.usuario
  
  this.innerHTML =  html `<a ${calculaClase(["/index.html", "", "/"])} href="index.html">
     <span class="material-symbols-outlined">home</span>
     Inicio
    </a>
    
    <a ${calculaClase(["/catalogo.html", "", "/catalogo"])} href="catalogo.html">
   <span class="material-symbols-outlined">category</span>
       Videojuegos
   </a>`.htmlTxt

    const cueHtml = htmlentities(usuario)

    if (usuario !== "") {

      this.innerHTML +=  html  `<a ${calculaClase(["/favoritos.html", "", "/favoritos"])} href="favoritos.html">
      <span class="material-symbols-outlined">favorite</span>
      Favoritos
      </a>
      
      <a ${calculaClase(["/perfil.html", "", "/perfil"])} href="perfil.html">
      <span class="material-symbols-outlined">face_6</span>
      ${cueHtml}
      </a>`.htmlTxt

    }
  
   this.innerHTML += html `<a ${calculaClase(["/ayuda.html", "", "/ayuda"])} href="ayuda.html">
        <span class="material-symbols-outlined">help</span>
        Ayuda
        </a>`.htmlTxt

    const ul = this.querySelector("ul")
    if (ul !== null) {
     ul.innerHTML = innerHTML
    }
   }


}

customElements.define("mi-nav", MiNav)
