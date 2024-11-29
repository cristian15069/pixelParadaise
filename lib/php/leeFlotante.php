<?php
/**
* Devuelve el valor flotante de un parámetro
 * recibido en el servidor por medio de GET,
 * POST o cookie. Si parámetro no se puede
 * convertir a flotante, se genera un error.
 * Si el parámetro no se recibe, devuelve
 * null.
 */
function leeFlotante(string $parametro): ?float
{
    $valor = trim(leeTexto($parametro));
    return $valor === "" ? null : (float) $valor;
}
?>