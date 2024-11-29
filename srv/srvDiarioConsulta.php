<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/dao/diarioConsulta.php";

ejecuta(function () {
 $lista = diarioConsulta();
 $render = "";
 foreach ($lista as $modelo) {
  
  $emoticon = base64_encode($modelo->emoticon);
  $relato = htmlentities($modelo->relato);
  $render .=
   "<div class='card' data-relato='{$relato}' data-emoticon='data:image/jpeg;base64,{$emoticon}'>
    <a target='_blank' href='./detalles.html?id={$id}'>
      <figure>
        <img class='emoticon' alt='{$relato}' src='data:image/jpeg;base64,{$emoticon}' >
      </figure>
        <div class='info'>
          <span class='relato'>{$relato}</span>
        </div>
   </a>
   
   </div>";
 }
 return $render;
});