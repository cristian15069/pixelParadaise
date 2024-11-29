<?php

require_once __DIR__ . "/AccesoBd.php";

function libroElimina(int $id)
{
 $con = AccesoBd::getCon();
 $stmt = $con->prepare(
  "DELETE FROM LIBROS
   WHERE LIB_ID = :id"
 );
 $stmt->execute([":id" => $id]);
}
