<?php
    require_once(dirname(__FILE__)."/../api_users.php");

    $user_data = file_get_contents("php://input");
    $data = json_decode($user_data);

    $db_handler = new DB_Users();
    $result = $db_handler->edit_user($data->id, $data->name, $data->permission, $data->phone, $data->email, $data->pwd);
    echo json_encode($result);

?>