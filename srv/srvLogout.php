<?php

require_once __DIR__ . "/../lib/php/ejecuta.php";
require_once __DIR__ . "/const/USUARIO.php";

ejecuta(function () {
    session_start();
    if (isset($_SESSION[USUARIO])) {
        unset($_SESSION[USUARIO]);
    }
    session_destroy();
    return [];
});
