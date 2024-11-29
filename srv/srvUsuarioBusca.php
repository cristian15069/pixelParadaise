<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeEntero.php";
require_once __DIR__ . "/modelo/Usuarios.php";
require_once __DIR__ . "/dao/usuarioBusca.php";

ejecuta(function () {
 $numero_usuario = leeEntero("Numero usuario");
 if ($id === null)
  throw new Exception("Falta el numero de usuario");
 $modelo =usuarioBusca($id);
 if ($modelo === false) {
  throw new Exception("Usuario no encontrado.");
 } else {
  return $modelo;
 }
});
