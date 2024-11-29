<?php

require_once __DIR__ . "/../../lib/php/recibeFetchAll.php";
require_once __DIR__ . "/../modelo/Diario.php";
require_once __DIR__ . "/AccesoBd.php";

/** @return diario[] */
function diarioConsulta()
{
 $con = AccesoBd::getCon();
 $stmt = $con->query(
  "SELECT LIB_EMOTICON AS emoticon,
    LIB_RELATO AS relato
    FROM DIARIO"
 );

 $resultado = $stmt->fetchAll(
  PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,
  Libro::class
 );
 return recibeFetchAll($resultado);
}