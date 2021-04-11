<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: text/html; charset=utf-8');

require_once 'connection.php';


if (isset($_POST['id_answer'])) {

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    // Кодировка
    $link->query("SET NAMES 'utf8'");

    $idAnswer = $_POST['id_answer'];
    $ipAddress = $_SERVER['REMOTE_ADDR'];
    $time = date("F j, Y, g:i a");

    // Создание строки запроса
    $query = "INSERT INTO users_answers VALUES(NULL, '$idAnswer', '$ipAddress', '$time')";

    // Выполняем запрос
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    if ($result) {
        echo "Данные добавлены";
    }
    // Закрываем подключение
    mysqli_close($link);
}
