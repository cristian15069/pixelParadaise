<?php

require_once __DIR__ . "/../modelo/Diario.php";
require_once __DIR__ . "/AccesoBd.php";

function diarioAgrega(Diario $modelo)
{
    // Valida el modelo de libro
    $modelo->valida();

    // Obtiene la conexión a la base de datos
    $con = AccesoBd::getCon();

    // Obtiene la información de la imagen
    $emoticonTmpPath = $_FILES['emoticon']['tmp_name'];
    // Lee el archivo de imagen en binario
    $emoticonBinaria = file_get_contents($emoticonTmpPath);

    // Prepara la consulta SQL para insertar el libro en la base de datos
    $stmt = $con->prepare("INSERT INTO DIARIO (DIA_EMOTICON, DIA_RELATO) VALUES (?, ?)");

    // Vincula los parámetros a los marcadores de posición en la consulta preparada
    $stmt->bindParam(1, $emoticonBinaria, PDO::PARAM_LOB);
    $stmt->bindParam(2, $modelo->relato);
   

    // Ejecuta la consulta SQL para insertar el diario en la base de datos
    $stmt->execute();

}