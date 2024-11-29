<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeEntero.php";
require_once __DIR__ . "/../lib/php/leeTexto.php";
require_once __DIR__ . "/modelo/Usuario.php";
require_once __DIR__ . "/dao/usuarioModifica.php";

ejecuta(function () {
 $numero_usuario = leeEntero("Numero de usuario");
 if ($id === null)
  throw new Exception("Falta el numero de usuario");

 $modelo = new Usuario(numero_usuario: $numero_usuario);
 usuarioModifica($modelo);
 return $modelo;
});
