<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeTexto.php";
require_once __DIR__ . "/../lib/php/leeFlotante.php";
require_once __DIR__ . "/../lib/php/leeEntero.php";
require_once __DIR__ . "/modelo/Libro.php";
require_once __DIR__ . "/dao/libroAgrega.php";

ejecuta(function () {
 $titulo = trim(leeTexto("titulo"));
 $autor = trim(leeTexto("autor"));
 $isbn = trim(leeTexto("isbn"));
 $editorial = trim(leeTexto("editorial"));
 $edicion = trim(leeEntero("edicion"));
 $categoria = trim(leeTexto("categoria"));
 $resena = trim(leeTexto("resena"));
 $precio = trim(leeFlotante("precio"));
 $modelo = new Libro(titulo: $titulo,autor:$autor,isbn: $isbn,editorial: $editorial,edicion: $edicion,categoria: $categoria,resena: $resena,precio: $precio);
 
 libroAgrega($modelo);
 return $modelo;
});

?>