<?php 
    require_once(dirname(__FILE__)."/../api_auth.php");
    
    $db_handler = new DB_Auth();
    $result = $db_handler->logout();
?>