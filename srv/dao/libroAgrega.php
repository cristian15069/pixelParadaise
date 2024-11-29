<?php

require_once __DIR__ . "/../modelo/Libro.php";
require_once __DIR__ . "/AccesoBd.php";

function libroAgrega(Libro $modelo)
{
    // Valida el modelo de libro
    $modelo->valida();

    // Obtiene la conexión a la base de datos
    $con = AccesoBd::getCon();

    // Obtiene la información de la imagen
    $imagenTmpPath = $_FILES['imagen']['tmp_name'];
    // Lee el archivo de imagen en binario
    $imagenBinaria = file_get_contents($imagenTmpPath);

    // Prepara la consulta SQL para insertar el libro en la base de datos
    $stmt = $con->prepare("INSERT INTO LIBROS (LIB_IMAGEN, LIB_TITULO, LIB_AUTOR, LIB_ISBN, LIB_EDITORIAL, LIB_EDICION, LIB_CATEGORIA, LIB_RESENA, LIB_PRECIO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Vincula los parámetros a los marcadores de posición en la consulta preparada
    $stmt->bindParam(1, $imagenBinaria, PDO::PARAM_LOB);
    $stmt->bindParam(2, $modelo->titulo);
    $stmt->bindParam(3, $modelo->autor);
    $stmt->bindParam(4, $modelo->isbn);
    $stmt->bindParam(5, $modelo->editorial);
    $stmt->bindParam(6, $modelo->edicion);
    $stmt->bindParam(7, $modelo->categoria);
    $stmt->bindParam(8, $modelo->resena);
    $stmt->bindParam(9, $modelo->precio);

    // Ejecuta la consulta SQL para insertar el libro en la base de datos
    $stmt->execute();

    // Obtiene el ID generado para el libro recién insertado
    $modelo->id = $con->lastInsertId();
}


