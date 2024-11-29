<?php

class Diario 
{ 
    public string $emoticon;     
    public string $relato;
  public string $emoticon_base64; // Definir la propiedad imagen_base64

    public function __construct($emoticon = "", string $relato = "")
    {
        $this->emoticon = $emoticon; 
        $this->relato = $relato;
    }

    public function getEmoticon(): string {
        return $this->emoticon;
    }

    // Método para establecer la imagen en formato Base64
    public function setEmoticonBase64($emoticonBase64) {
        $this->emoticon = $emoticonBase64;
    }

    public function valida()
    {
        if ($this->relato === "") {
            throw new Exception("Falta el contenido.");
        }
    }
}