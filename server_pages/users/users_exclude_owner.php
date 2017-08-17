<?php
    require_once(dirname(__FILE__)."/../api_users.php");

    $db_handler = new DB_Users();
    $result = $db_handler->users_exclude_owner();
    echo json_encode($result);
    
?>