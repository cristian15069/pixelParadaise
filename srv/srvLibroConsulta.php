<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/dao/libroConsulta.php";

ejecuta(function () {
 $lista = libroConsulta();
 $render = "";
 foreach ($lista as $modelo) {
  $id = htmlentities($modelo->id);
  $imagen = base64_encode($modelo->imagen);
  $titulo = htmlentities($modelo->titulo);
  $isbn = htmlentities($modelo->isbn);
  $autor = htmlentities($modelo->autor);
  $categoria = htmlentities($modelo->categoria);
  $editorial = htmlentities($modelo->editorial);
  $edicion = htmlentities($modelo->edicion);
  $categoria = htmlentities($modelo->categoria);
  $resena = htmlentities($modelo->resena);
  $precio = htmlentities($modelo->precio);
  $render .=
   "<div class='card' data-titulo='{$titulo}' data-autor='{$autor}' data-isbn='{$isbn}' data-imagen='data:image/jpeg;base64,{$imagen}'>
    <a target='_blank' href='./detalles.html?id={$id}'>
      <figure>
        <img class='imagen' alt='{$titulo}' src='data:image/jpeg;base64,{$imagen}' >
      </figure>
        <div class='info'>
          <span class='titulo'>{$titulo}</span>
          <span class='autor'>{$autor}</span>
          <span class='precio'>$ {$precio}</span>
          <input type='hidden' class='isbn' value='{$isbn}'>
        </div>
   </a>
   <button onclick='agregarAFavoritos(event)' id='iconoFav'><span class='material-symbols-outlined'>favorite</span></button>
   </div>";
 }
 return $render;
});
