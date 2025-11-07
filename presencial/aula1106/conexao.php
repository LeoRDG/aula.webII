<?php
    try{
        $con = new mysqli("localhost", "root", "", "teste_php");
        mysqli_set_charset($con,"utf8");
    } catch(Exception $e){
        echo "Erro na conexão: ".$e->getMessage();
    }
?>