<?php
    require_once(dirname(__FILE__)."/../api_students.php");

    $db_handler = new DB_Students();
    $result = $db_handler->get_students();
    echo json_encode($result);
    
?>