<?php
    require_once(dirname(__FILE__)."/../api_users.php");

    file_get_contents("php://input");

    $file = $_FILES['userImage']['name'];
    $div = explode('.', $file);
    $extention = strtolower(end($div));
    $img = rand().'.'.$extention;
    $size = $_FILES['userImage']['size'];
    $max_size = 1048576;
    $id = $_POST['id'];

    if(!empty($_FILES)) {
        if($size < $max_size) {
            $tempName = $_FILES['userImage']['tmp_name'];
            $uploadedPath = (dirname(__FILE__)."/../../uploads/users/".$img);
            move_uploaded_file($tempName, $uploadedPath);
        } else {
            echo 'false'; exit;           
        }

    }

    $db_handler = new DB_Users();
    $result = $db_handler->user_image($img, $id);
    echo json_encode($result);

?>