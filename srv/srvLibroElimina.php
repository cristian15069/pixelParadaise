<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeEntero.php";
require_once __DIR__ . "/dao/libroElimina.php";

ejecuta(function () {
 $id = leeEntero("id");
 if ($id === null)
  throw new Exception("Falta el parámetro id.");
 libroElimina($id);
 return [];
});
