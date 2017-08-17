<?php
    require_once(dirname(__FILE__)."/../api_users.php");

    $db_handler = new DB_Users();
    $result = $db_handler->get_users();
    echo json_encode($result);
    
?>