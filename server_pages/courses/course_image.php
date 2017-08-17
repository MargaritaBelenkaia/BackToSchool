<?php
    require_once(dirname(__FILE__)."/../api_courses.php");

    file_get_contents("php://input");

    $file = $_FILES['courseImage']['name'];
    $div = explode('.', $file);
    $extention = strtolower(end($div));
    $img = rand().'.'.$extention;
    $size = $_FILES['courseImage']['size'];
    $max_size = 1048576;
    $id = $_POST['id'];

    if(!empty($_FILES)) {
        if($size < $max_size) {
            $tempName = $_FILES['courseImage']['tmp_name'];
            $uploadedPath = (dirname(__FILE__)."/../../uploads/courses/".$img);
            move_uploaded_file($tempName, $uploadedPath);
        } else {
            echo 'false'; exit;           
        }

    }

    $db_handler = new DB_Courses();
    $result = $db_handler->course_image($img, $id);
    echo json_encode($result);

?>