<?php

class Libro 
{
    public int $id;     
    public string $imagen;     
    public string $titulo;
    public string $autor;
    public string $isbn;
    public string $editorial;
    public int $edicion;
    public string $categoria;
    public string $resena;
    public float $precio;
  public string $imagen_base64; // Definir la propiedad imagen_base64

    public function __construct(int $id = 0, $imagen = "", string $titulo = "", string $autor = "", string $isbn = "", string $editorial = "", int $edicion = 0, string $categoria = "", string $resena = "", float $precio = 0.0)
    {
        $this->id = $id;
        $this->imagen = $imagen; 
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->isbn = $isbn;
        $this->editorial = $editorial;
        $this->edicion = $edicion;
        $this->categoria = $categoria;
        $this->resena = $resena;
        $this->precio = $precio;
    }

    public function getImagen(): string {
        return $this->imagen;
    }

    // Método para establecer la imagen en formato Base64
    public function setImagenBase64($imagenBase64) {
        $this->imagen = $imagenBase64;
    }

    public function valida()
    {
        if ($this->titulo === "") {
            throw new Exception("Falta el nombre.");
        }
    }
}
