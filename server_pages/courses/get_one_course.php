<?php
    require_once(dirname(__FILE__)."/../api_courses.php");

    $course_data = file_get_contents("php://input");
    $data = json_decode($course_data);

    $db_handler = new DB_Courses();
    $result = $db_handler->get_one($data->id);
    echo json_encode($result);

?>