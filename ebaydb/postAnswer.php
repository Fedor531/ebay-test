<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: text/html; charset=utf-8');

require_once 'connection.php';


if (isset($_POST['title']) && isset($_POST['value'])) {

    $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

    // Кодировка
    $link->query("SET NAMES 'utf8'");

    $title = $_POST['title'];
    $value = $_POST['value'];

    // Создание строки запроса
    $query = "INSERT INTO answers VALUES(NULL,  '$title', '$value')";

    // Выполняем запрос
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    if ($result) {
        echo "Данные добавлены";
    }
    // Закрываем подключение
    mysqli_close($link);
}
