<?php

require 'LoginController.php';

$auth = new LoginController;

if(!empty($_POST)){
    
    switch($_POST['request']){
        case '1':
            if(!empty($_POST['correo']) && !empty($_POST['pass'])){
                $login = $auth->startLogin($_POST['correo'],$_POST['pass']);
                echo ($login)?200:404;
            }else{
                echo 400;
            }
            break;
    }

}else{
    echo 400;
}