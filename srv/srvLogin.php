<?php
require_once __DIR__ . "/dao/AccesoBd.php";

// Iniciar la sesión si aún no está iniciada
if (session_status() === PHP_SESSION_NONE) {
    // Configurar parámetros de la sesión antes de iniciarla
    $lifetime = 86400; // 1 día en segundos
    session_set_cookie_params($lifetime);
    session_start();
    session_regenerate_id(true);
}

// Verificar si hay un usuario autenticado
if (isset($_SESSION['usuario'])) {
    // Si hay un usuario autenticado, redirigir al usuario a la página de perfil
    header("Location: ../perfil.html");
    exit;
}

// Verificar si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los valores del formulario
    $cue = $_POST['cue'];
    $match = $_POST['match'];

    $con = AccesoBd::getCon();

    // Preparar la consulta para validar el cue y el match
    $stmt = $con->prepare("SELECT * FROM USUARIO WHERE US_CORREOELECTRONICO = :cue AND US_CONTRASENA = :match");
    $stmt->bindParam(':cue', $cue);
    $stmt->bindParam(':match', $match);
    $stmt->execute();

    // Verificar si hay un usuario coincidente
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user) {
        // Si hay un usuario coincidente, iniciar sesión y redirigir al usuario a la página de perfil
        $_SESSION['usuario'] = $user;
        header("Location: ../perfil.html");
      
        exit;
    } else {
        // Si no hay un usuario coincidente, redirigir al usuario de vuelta a la página de inicio de sesión
        header("Location: ../inicioSesion.html");
        exit;
    }
} else {
    // Si el formulario no se ha enviado, redirigir al usuario de vuelta a la página de inicio de sesión
    header("Location: ../inicioSesion.html");
    exit;
}