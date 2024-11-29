<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeEntero.php";
require_once __DIR__ . "/../lib/php/leeTexto.php";
require_once __DIR__ . "/modelo/Libro.php";
require_once __DIR__ . "/dao/libroModifica.php";

ejecuta(function () {
 $id = leeEntero("id");
 if ($id === null)
  throw new Exception("Falta el id.");

 $modelo = new Libro(id: $id);
 libroModifica($modelo);
 return $modelo;
});
