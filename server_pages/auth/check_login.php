<?php 
    require_once(dirname(__FILE__)."/../api_auth.php");

    $login_data = file_get_contents("php://input");
    $data = json_decode($login_data);
    
    $db_handler = new DB_Auth();
    $result = $db_handler->get_session_data();
    echo json_encode($result);
?>