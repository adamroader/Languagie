<?php

/* https://api.telegram.org/bot5065394522:AAHJkykPFGrmSE6ChW2JpRehG5HVYV-Oot0/getUpdates,
 где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$level = $_POST['level'];
$token = '5065394522:AAHJkykPFGrmSE6ChW2JpRehG5HVYV-Oot0';
$chat_id = '-605174821';
$arr = [
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Курс' => $course,
    'Уровень' => $level,
];

foreach ($arr as $key => $value) {
    $txt .= '<b>' . $key . '</b> ' . $value . '%0A';
}

$sendToTelegram = fopen(
    "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}",
    'r'
);

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo 'Error';
}
?>
