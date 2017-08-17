<?php
require_once(dirname(__FILE__)."./connection.php");

class DB_Courses {
    ////members of the class here
    private $conn = null;

    //constructor
    public function __construct() {
        $connection = new Connection();
        $this->conn = $connection->getConnection();
    }

//GET COURSES
    public function get_courses() {
        $sql = "SELECT * FROM `courses` ORDER BY `id` DESC";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            $data = array() ;
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        } else {
            $data['message'] = 'Something is really wrong here';
        }
        return $data;
    }

//GET ONE COURSE
    public function get_one($id) {
        $sql = "SELECT * FROM `courses` WHERE `id` = '$id'";
        $result = $this->conn->query($sql);
        if ($result->num_rows > 0) {
        // output data of each row
        $data = array() ;
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        } else {
            $data['message'] = 'Something is really wrong here';
        }
        return $data;
    }

//UPLOAD IMAGE
    public function course_image($img, $id) {

        $sql = "UPDATE `courses` SET 
        `image` = '$img' WHERE `id` = '$id' ";
        $result = $this->conn->query($sql);
        return $result;

    }

//EDIT COURSE
    public function edit_course($id, $name, $description) {
        $sql = "UPDATE `courses` SET 
        `name`='$name', `description`='$description'
         WHERE `id` = '$id' ";

        $result = $this->conn->query($sql);

        return $result;
    }

// DELETE COURSE
    public function delete($id) {
        $sql = "DELETE FROM `courses` WHERE `id` = '$id' ";
        $result = $this->conn->query($sql);
        return $result;
    }

// CREATE A NEW COURSE
    public function register($name, $description) {
        $sql = "INSERT INTO `courses` (`name`, `description`) 
        VALUES ('$name', '$description')";
         echo $result = $this->conn->query($sql);
    }
}

?>

