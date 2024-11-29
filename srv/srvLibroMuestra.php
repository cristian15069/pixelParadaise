<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeEntero.php";
require_once __DIR__ . "/modelo/Libro.php";
require_once __DIR__ . "/dao/libroMuestra.php";

ejecuta(function () {
 $id = leeEntero("id");
 if ($id === null)
  throw new Exception("Falta el parámetro id.");
 $modelo =libroMuestra($id);
 if ($modelo === false) {
  throw new Exception("Libro no encontrado.");
 } else {
  return $modelo;
 }
});
