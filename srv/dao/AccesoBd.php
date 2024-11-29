<?php

require_once __DIR__ . "/bdCrea.php";

class AccesoBd
{

 private static ?PDO $con = null;

 static function getCon(): PDO
 {
  if (self::$con === null) {
   self::$con = self::conecta();
   self::prepara(self::$con);
  }
  return self::$con;
 }

 private static function conecta(): PDO
 {
  return new PDO(
   // cadena de conexión
   "sqlite:srvbd.bd",
   // usuario
   null,
   // contraseña
   null,
   [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );
 }

 private static function prepara(PDO $con)
 {
  bdCrea($con);
 }
}

