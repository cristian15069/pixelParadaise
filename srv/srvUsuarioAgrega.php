<?php
require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/../lib/php/leeTexto.php";
require_once __DIR__ . "/modelo/Usuario.php";
require_once __DIR__ . "/dao/usuarioAgrega.php";


ejecuta(function () {
 $nombre_usuario = trim(leeTexto("Nombre"));
 $apellido_paterno = trim(leeTexto("ApellidoPaterno"));
 $apellido_materno = trim(leeTexto("ApellidoMaterno"));
 $correo_electronico = trim(leeTexto("CorreoElectronico"));
 $contrasena = trim(leeTexto("contrasena"));
 $confirmarcontrasena = trim(leeTexto("confirmarcontrasena"));
 $direccion = trim(leeTexto("Direccion"));
  
  $modelo = new Usuario(nombre_usuario:$nombre_usuario,apellido_paterno:$apellido_paterno, apellido_materno:$apellido_materno,correo_electronico:$correo_electronico,contrasena:$contrasena,confirmarcontrasena:$confirmarcontrasena,direccion: $direccion);

    
usuarioAgrega($modelo);
return $modelo;

});


