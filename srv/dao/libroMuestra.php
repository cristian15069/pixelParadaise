<?php

require_once __DIR__ . "/../modelo/Libro.php";
require_once __DIR__ . "/AccesoBd.php";

function libroMuestra(int $id): false|Libro
{
    $con = AccesoBd::getCon();
    $stmt = $con->prepare(
        "SELECT
       LIB_ID AS id,
       LIB_IMAGEN AS imagen,
       LIB_TITULO AS titulo,
       LIB_AUTOR AS autor,
       LIB_ISBN AS isbn,
       LIB_EDITORIAL AS editorial,
       LIB_EDICION AS edicion,
       LIB_CATEGORIA AS categoria,
       LIB_RESENA AS resena,
       LIB_PRECIO AS precio
        FROM LIBROS
        WHERE LIB_ID = :id"
    );
    $stmt->execute([":id" => $id]);
    $stmt->setFetchMode(
        PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,
        Libro::class
    );
    $libro = $stmt->fetch();

    if ($libro !== false) {
        // Convierte los datos binarios a una cadena Base64
        $base64 = base64_encode($libro->imagen);
        $libro->imagen = 'data:image/jpeg;base64,' . $base64;
    }

    return $libro ?: false;
}
