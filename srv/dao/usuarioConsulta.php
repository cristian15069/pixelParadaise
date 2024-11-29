<?php

require_once __DIR__ . "/../../lib/php/recibeFetchAll.php";
require_once __DIR__ . "/../modelo/Usuarios.php";
require_once __DIR__ . "/AccesoBd.php";

/** @return Usuario[] */
function usuarioConsulta()
{
 $con = AccesoBd::getCon();
 $stmt = $con->query(
   "SELECT
       US_NUMEROUSUARIO AS numero_usuario,
       US_NOMBRE AS nombre,
       US_APELLIDOPATERNO AS apellido_paterno,
       US_APELLIDOMATERNO AS apellido_materno,
       US_CORREOELECTRONICO AS correo_electronico,
       US_CONTRASENA AS contrasena,
       US_DIRECCION AS direccion
   FROM USUARIOS
   "
 );
 $resultado = $stmt->fetchAll(
  PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,
  Usuario::class
 );
 return recibeFetchAll($resultado);
}
