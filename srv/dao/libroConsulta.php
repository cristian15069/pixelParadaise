<?php

require_once __DIR__ . "/../../lib/php/recibeFetchAll.php";
require_once __DIR__ . "/../modelo/Libro.php";
require_once __DIR__ . "/AccesoBd.php";

/** @return libro[] */
function libroConsulta()
{
 $con = AccesoBd::getCon();
 $stmt = $con->query(
  "SELECT LIB_ID AS id,
    LIB_IMAGEN AS imagen,
    LIB_TITULO AS titulo,
    LIB_AUTOR AS autor,
    LIB_ISBN AS isbn,
    LIB_EDITORIAL AS editorial,
    LIB_EDICION AS edicion,
    LIB_CATEGORIA AS categoria,
    LIB_RESENA AS resena,
    LIB_PRECIO AS precio
    FROM LIBROS"
 );
  
 $resultado = $stmt->fetchAll(
  PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,
  Libro::class
 );
 return recibeFetchAll($resultado);
}
