<?php
    require_once(dirname(__FILE__)."/../api_students.php");

    $student_data = file_get_contents("php://input");
    $data = json_decode($student_data);

    $db_handler = new DB_Students();
    $result = $db_handler->get_one($data->id);
    echo json_encode($result);

?>