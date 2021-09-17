<?php

class LoginController{
    private $login;

    function __construct(){
        // $this->login = new LoginModel;
    }

    function startLogin($correo, $pass){
        $estadoLogin = $this->validateLogin($correo, $pass);
        return $estadoLogin;
    }

    function validateLogin($correo, $pass){
        return ($correo == 'admin' && $pass == '1234') ? true : false;
    }

}