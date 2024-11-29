<?php

require_once __DIR__ . "/../modelo/Usuario.php";
require_once __DIR__ . "/AccesoBd.php";

function usuarioMuestra(int $numero_usuario): false|Usuario
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
        WHERE US_NUMEROUSARIO = :numero_usuario"
    );
    $stmt->execute([":numero_usuario" => $numero_usuario]);
    $stmt->setFetchMode(
        PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,
        Usuarios::class
    );
    $usuario = $stmt->fetch();

    if ($usuario !== false) {
        // Convierte los datos binarios a una cadena Base64
        $base64 = base64_encode($usuario->imagen);
        $libro->imagen = 'data:image/jpeg;base64,' . $base64;
    }

    return $usuario ?: false;
}
