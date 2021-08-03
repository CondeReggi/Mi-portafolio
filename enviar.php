<?php
//Llamada a los campos

$nombre = $_POST['input_nombre_form'];
$telefono = $_POST['input_telefono_form'];
$email = $_POST['input_mail_form'];
$mensaje = $_POST['textarea_form'];

//Datos para el correo
$destinatario = "srtoxing@gmail.com";
$asunto = "Contacto desde mi web";

//Mensaje completo
$carta = "De: $nombre \n";
$carta .= "Correo : $email \n";
$carta .= "Telefono : $telefono \n";
$carta .= "Mensaje: $mensaje";

//Enviado mensaje
mail($destinatario, $asunto, $carta);

?>

