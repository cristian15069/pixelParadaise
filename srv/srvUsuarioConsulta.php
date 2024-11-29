<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/dao/usuarioConsulta.php";

ejecuta(function () {
 $lista = usuarioConsulta();
 $render = "";
 foreach ($lista as $modelo) {
  $numero_usuario = htmlentities($modelo->nombre_usuario);
  $nombre = htmlentities($modelo->nombre);
  $apellido_paterno = htmlentities($modelo->apellido_paterno);
  $apellido_materno = htmlentities($modelo->apellido_materno);
  $correo_electronico = htmlentities($modelo->correo_electronico);
  $contrasena = htmlentities($modelo->contrasena);
  $direccion = htmlentities($modelo->direccion);
  $render .=
   "<li class='md-three-line'>
        <a class='md-three-line' href='Perfil.html?numero_usuario={$numero_usuario}'>
        <span class='md-title-2'>{$nombre}</span>
        <span class='md-title-2'>{$apellido_paterno}</span>
        <span class='md-title-2'>{$apellido_materno}</span>
        <span class='supporting'>{$correo_electronico}</span>
        <span class='supporting'>{$contrasena}</span>
        <span class='supporting'>$ {$direccion}</span>
       </a>
    </li>";
 }
 return $render;
});
