<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=UTF-8');

require_once 'connection.php';

$link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

$query = "SELECT * FROM questions";
$query = "SELECT * FROM answers";

$questions = mysqli_query($link, "SELECT * FROM questions") or die("Ошибка " . mysqli_error($link));
$answers = mysqli_query($link, "SELECT * FROM answers") or die("Ошибка " . mysqli_error($link));

if ($questions && $answers) {
    $dataQuestions = array();
    $dataAnswers = array();

    while ($row = mysqli_fetch_array($questions, MYSQLI_ASSOC)) {
        $dataQuestions[] = $row;
    }

    while ($row = mysqli_fetch_array($answers, MYSQLI_ASSOC)) {
        $dataAnswers[] = $row;
    }

    $endResult = array(
        'questions' => $dataQuestions,
        'answers' => $dataAnswers
    );

    echo json_encode($endResult, JSON_UNESCAPED_UNICODE);
}

mysqli_close($link);
