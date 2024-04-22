<?php

/* https://api.telegram.org/bot7000911406:AAEr6J3YTZEfD4aqWJE60LPqgtujGdLjCSA/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_adress'];
$phone = $_POST['user_dom'];
$email = $_POST['user_etag'];
$token = "7000911406:AAEr6J3YTZEfD4aqWJE60LPqgtujGdLjCSA";
$chat_id = "-4105883641";
$arr = array(
  'Алрес доставки: ' => $name,
  'Дом: ' => $phone,
  'Этаж' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>