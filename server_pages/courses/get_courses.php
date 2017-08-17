<?php
    require_once(dirname(__FILE__)."/../api_courses.php");

    $db_handler = new DB_Courses();
    $result = $db_handler->get_courses();
    echo json_encode($result);
    
?>