<?php
    require_once(dirname(__FILE__)."/../api_students.php");

    $student_data = file_get_contents("php://input");
    $data = json_decode($student_data);

    $db_handler = new DB_Students();
    $result = $db_handler->register($data->name, $data->phone, $data->email);
    echo json_encode($result);

?>