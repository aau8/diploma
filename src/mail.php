<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$userName = $_POST['modalname'];
$userPhone = $_POST['modalphone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "Данные с модального окна";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'artiom.ygryumov'; // Логин на почте
    $mail->Password   = 'topuru21'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('artiom.ygryumov@yandex.ru', 'Артем'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('artiom.ygryumov@gmail.ru');

    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'Заявка на звонок';
    $mail->Body    = "<b>Имя:</b> $userName <br>
    <b>Телефон:</b> $userPhone<br>";

// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
