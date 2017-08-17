<?php
class Connection {

    public function getConnection() {
        $server_address = "localhost";
        $username = "root";
        $password = "";
        $database_name = "schooldb";

        $conn = new mysqli($server_address, $username, $password, $database_name) OR die(
            $conn->error__LINE__);
        return $conn;
    }
}

?>