<?php
require_once(dirname(__FILE__)."./connection.php");

class DB_Students {
    ////members of the class here
    private $conn = null;

    //constructor
    public function __construct() {
        $connection = new Connection();
        $this->conn = $connection->getConnection();
    }

//GET STUDENTS
    public function get_students() {
        $sql = "SELECT * FROM `students` ORDER BY `id` DESC";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            $data = array() ;
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        } else {
            $data['message'] = 'Something is wrong here';
        }
        return $data;
    }

//GET ONE STUDENT
    public function get_one($id) {
        $sql = "SELECT * FROM `students` WHERE `id` = '$id'";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
        // output data of each row
        $data = array() ;
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        } else {
            $data['message'] = 'Something is wrong here';
        }
        return $data;
    }

    //UPLOAD IMAGE
    public function student_image($img, $id) {

        $sql = "UPDATE `students` SET 
        `image` = '$img' WHERE `id` = '$id' ";
        $result = $this->conn->query($sql);
        return $result;

    }

//EDIT STUDENT
    public function edit_student($id, $name, $phone, $email) {
        $sql = "UPDATE `students` SET 
        `name`='$name', `phone`='$phone', `email`='$email'
        WHERE `id` = '$id' ";

        $result = $this->conn->query($sql);

        return $result;
    }

// DELETE STUDENT
    public function delete($id) {
        $sql = "DELETE FROM `students` WHERE `id` = '$id' ";
        $result = $this->conn->query($sql);
        return $result;
    }

// CREATE A NEW STUDENT
    public function register($name, $phone, $email) {
        $sql = "INSERT INTO `students` (`name`, `phone`, `email`) 
        VALUES ('$name', '$phone', '$email')";
         echo $result = $this->conn->query($sql);
    }
}

?>

