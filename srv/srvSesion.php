<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/const/USUARIO.php";


ejecuta(function () {
 session_start();
  $usuario = isset($_SESSION[USUARIO]) ? $_SESSION[USUARIO] : "";
 return [
   USUARIO => $usuario
 ];
});


