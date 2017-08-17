<?php
    require_once(dirname(__FILE__)."/../api_students.php");

    file_get_contents("php://input");

    $file = $_FILES['studentImage']['name'];
    $div = explode('.', $file);
    $extention = strtolower(end($div));
    $img = rand().'.'.$extention;
    $size = $_FILES['studentImage']['size'];
    $max_size = 1048576;
    $id = $_POST['id'];

    if(!empty($_FILES)) {
        if($size < $max_size) {
            $tempName = $_FILES['studentImage']['tmp_name'];
            $uploadedPath = (dirname(__FILE__).'/../../uploads/students/'.$img);
            if(move_uploaded_file($tempName, $uploadedPath)) {
                $db_handler = new DB_Students();
                $result = $db_handler->student_image($img, $id);
                echo json_encode($result);
            } else {
                echo 'false'; exit;
            }           
        } else {
            echo 'false'; exit;           
        }

    }



?>