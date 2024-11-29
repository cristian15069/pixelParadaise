<?php

require_once __DIR__ . "/../modelo/Usuario.php";
require_once __DIR__ . "/AccesoBd.php";


function usuarioAgrega(Usuario $modelo)
{
 $modelo->valida();
  
 $con = AccesoBd::getCon();
 $stmt = $con->prepare(
  "INSERT INTO USUARIO (US_NOMBRE,US_APELLIDOPATERNO,US_APELLIDOMATERNO,US_CORREOELECTRONICO,US_CONTRASENA,US_CONFIRMARCONTRASENA,US_DIRECCION)
   VALUES (:nombre,:apellidopaterno,:apellidomaterno,:correoelectronico,:contrasena,:confirmarcontrasena,:direccion)"
 );
  
 $stmt->execute([":nombre" => $modelo->nombre_usuario,
 ":apellidopaterno" => $modelo->apellido_paterno,
 ":apellidomaterno" => $modelo->apellido_materno,
 ":correoelectronico" => $modelo->correo_electronico,
 ":contrasena" => $modelo->contrasena,
 ":confirmarcontrasena" => $modelo->confirmarcontrasena,
 ":direccion" => $modelo->direccion]);
 /* Si usas una secuencia para generar el id,
  * pasa como parámetro de lastInsertId el
  * nombre de dicha secuencia. */
 $modelo->id = $con->lastInsertId();
}
