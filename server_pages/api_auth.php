<?php
require_once(dirname(__FILE__)."./connection.php");

class DB_Auth {
    ////members of the class here
    private $conn = null;

    //constructor
    public function __construct() {
        $connection = new Connection();
        $this->conn = $connection->getConnection();
    }

//LOGIN
    public function authenticate($email, $pwd) {
        $pwd = md5($pwd);
        $sql = "SELECT * FROM `users` WHERE `email` = '".$email."' and `pwd` ='".$pwd."' limit 1";
        $result = $this->conn->query($sql);
        if($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $this->set_session($row);
            $response['success'] = true;
            $response['message'] = 'User authenticated! Redirecting...';
        } else {
            $response['success'] = false ;
            $response['message'] = 'Authentication failed. Please check your login credentials and try again';
        }
        return $response;
    }

    public function set_session($data) {
        if(!isset($_SESSION)) {
            session_start();
        }
        if(!empty($data)) {
            $_SESSION['name'] = $data['name'];
            $_SESSION['id'] = $data['id'];
            $_SESSION['permission'] = $data['permission'];
            $_SESSION['image'] = $data['image'];
        }
    }

//CHECK LOGIN
    public function get_session_data() {
        if(!isset($_SESSION)) {
            session_start();
        }

        if(isset($_SESSION['id'])) {
            $data['id'] = $_SESSION['id'];
            $data['name'] = $_SESSION['name'];
            $data['permission'] = $_SESSION['permission'];
            $data['image'] = $_SESSION['image'];
            $data['success'] = true;
        } else {
            $data['success'] = false;               
        }
        return $data;
    }

//LOGOUT
    public function logout() {
        if(!isset($_SESSION)) {
            session_start();
        }
        unset($_SESSION['id']);
        unset($_SESSION['name']);
        unset($_SESSION['permission']);
        unset($_SESSION['image']);
        session_destroy();
    }

}

?>

