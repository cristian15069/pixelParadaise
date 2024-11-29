<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeEntero.php";
require_once __DIR__ . "/modelo/Libro.php";
require_once __DIR__ . "/dao/libroBusca.php";

ejecuta(function () {
 $id = leeEntero("id");
 if ($id === null)
  throw new Exception("Falta el parámetro id.");
 $modelo =libroBusca($id);
 if ($modelo === false) {
  throw new Exception("Libro no encontrado.");
 } else {
  return $modelo;
 }
});
