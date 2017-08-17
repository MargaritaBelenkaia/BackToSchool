<?php
require_once(dirname(__FILE__)."./connection.php");

class DB_Users {
    ////members of the class here
    private $conn = null;

    //constructor
    public function __construct() {
        $connection = new Connection();
        $this->conn = $connection->getConnection();
    }

//GET USERS
    public function get_users() {
        $sql = "SELECT * FROM `users` ORDER BY `id` DESC";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            $data = array() ;
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        } else {
            $data['message'] = 'An error occured';
        }
        return $data;
    }

//GET USERS WITHOUT OWNER
    public function users_exclude_owner() {
        $sql = "SELECT * FROM `users` WHERE `permission` <> 'owner' ORDER BY `id` DESC";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            $data = array() ;
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        } else {
            $data['message'] = 'An error occured';
        }
        return $data;
    }

//GET ONE USER
    public function get_one($id) {
        $sql = "SELECT * FROM `users` WHERE `id` = '$id'";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
        // output data of each row
        $data = array() ;
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        } else {
            $data['message'] = 'An error occured';
        }
        return $data;
    }

//EDIT USER
    public function edit_user($id, $name, $permission, $phone, $email, $pwd) {
        $pwd = md5($pwd);
        $sql = "UPDATE `users` SET 
        `name`='$name', `permission`='$permission', `phone`='$phone', `email`='$email',
        `pwd`='$pwd' WHERE `id` = '$id' ";
        $result = $this->conn->query($sql);
        return $result;
    }

//UPLOAD IMAGE
    public function user_image($img, $id) {

        $sql = "UPDATE `users` SET 
        `image` = '$img' WHERE `id` = '$id' ";
        $result = $this->conn->query($sql);
        return $result;

    }

// DELETE USER
    public function delete($id) {
        $sql = "DELETE FROM `users` WHERE `id` = '$id' ";
        $result = $this->conn->query($sql);
        return $result;
    }

// CREATE A NEW USER
    public function register($name, $permission, $phone, $email, $pwd) {
        $pwd = md5($pwd);
        $sql = "INSERT INTO `users` (`name`, `permission`,`phone`, `email`, `pwd`) 
        VALUES ('$name', '$permission', '$phone', '$email', '$pwd')";
         echo $result = $this->conn->query($sql);
    }
}

?>

