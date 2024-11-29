<?php

require_once __DIR__ . "/../modelo/Usuarios.php";
require_once __DIR__ . "/AccesoBd.php";

function usuarioBusca(int $id): false|Usuario
{
    $con = AccesoBd::getCon();
    $stmt = $con->prepare(
        "SELECT
            US_NUMEROUSUARIO AS numero_usuario,
            US_NOMBRE AS nombre,
            US_APELLIDOPATERNO AS apellido_paterno,
            US_APELLIDOMATERNO AS apellido_materno,
            US_CORREOELECTRONICO AS correo_electronico,
            US_CONTRASENA AS contrasena,
            US_DIRECCION AS direccion
        FROM USUARIOS
        WHERE US_NUMEROUSUARIO = :numero_usuario"
    );
    $stmt->execute([":numero_usuario" => $numero_usuario]);
    $stmt->setFetchMode(
        PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,
        Usuarios::class
    );
    return $stmt->fetch() ?: false;
}

