<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeTexto.php";
require_once __DIR__ . "/modelo/Diario.php";
require_once __DIR__ . "/dao/diarioAgrega.php";

ejecuta(function () {
 $relato = trim(leeTexto("relato"));
 
 $modelo = new Diario(relato: $relato);

 libroAgrega($modelo);
 return $modelo;
});

?>