<?php

require_once __DIR__ . "/../modelo/Libro.php";
require_once __DIR__ . "/AccesoBd.php";

function libroModifica(Libro $modelo)
{
  $modelo->valida();
  $con = AccesoBd::getCon();

  // Obtiene la información de la imagen
  $imagenTmpPath = $_FILES['imagen']['tmp_name'];
  // Lee el archivo de imagen en binario
  $imagenBinaria = file_get_contents($imagenTmpPath);

  $stmt = $con->prepare(
      "UPDATE LIBROS
       SET LIB_IMAGEN = :imagen
       WHERE LIB_ID = :id"
  );

  $stmt->execute([
    ":id" => $modelo->id,
    ":imagen" => $imagenBinaria
  ]);
}
