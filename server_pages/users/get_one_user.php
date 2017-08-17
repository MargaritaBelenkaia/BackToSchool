<?php
    require_once(dirname(__FILE__)."/../api_users.php");

    $user_data = file_get_contents("php://input");
    $data = json_decode($user_data);

    $db_handler = new DB_Users();
    $result = $db_handler->get_one($data->id);
    echo json_encode($result);

?>