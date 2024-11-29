<?php
class Usuario
{
    public int $id;     
    public string $nombre_usuario;     
    public string $apellido_paterno;
    public string $apellido_materno;
    public string $correo_electronico;
    public string $contrasena;
    public string $confirmarcontrasena;
    public string $direccion;

    public function __construct(int $id = 0, string $nombre_usuario = "", string $apellido_paterno = "", string $apellido_materno = "", string $correo_electronico = "", string $contrasena = "",  string $confirmarcontrasena="", string $direccion = "")
    {
        $this->id = $id;
        $this->nombre_usuario = $nombre_usuario; 
        $this->apellido_paterno = $apellido_paterno;
        $this->apellido_materno = $apellido_materno;
        $this->correo_electronico = $correo_electronico;
        $this->contrasena = $contrasena;
        $this->confirmarcontrasena = $confirmarcontrasena;
        $this->direccion = $direccion;
    }

    public function valida()
    {
        if ($this->nombre_usuario === "") {
            throw new Exception("Falta el nombre usuario.");
        }
        if ($this->apellido_paterno === "") {
            throw new Exception("Falta el apellido paterno.");
        }
        if ($this->apellido_materno === "") {
            throw new Exception("Falta el apellido materno.");
        }
        if ($this->correo_electronico === "") {
            throw new Exception("Falta el correo electronico.");
        } 

      if ($this->contrasena === "") {
          throw new Exception("Falta la contraseña.");
      }

      if ($this->confirmarcontrasena === "") {
          throw new Exception("Falta la confirmación de la contraseña.");
      }

      if ($this->contrasena !== $this->confirmarcontrasena) {
          throw new Exception("Las contraseñas no coinciden.");
      }
      
        if ($this->direccion === "") {
            throw new Exception("Falta la direccion.");
        }
    }
}
