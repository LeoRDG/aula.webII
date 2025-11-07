<H1>Cadastro de clientes</H1>

<?php
    require 'conexao.php';

    $nome = $_GET['nm'];
    $cpf = $_GET['cpf'];
    $email = $_GET['email'];
    $dt = $_GET['dt'];
    $sexo = $_GET['sexo'];

    $data = date_create_from_format("Y-m-d", $dt);
    $data = date_format($data, 'd/m/Y');

    echo "<h3>nome > $nome</h3>";
    echo "<h3>cpf > $cpf</h3>";
    echo "<h3>email > $email</h3>";
    echo "<h3>data > $dt ou $data</h3>";
    echo "<h3>sexo > $sexo</h3>";
    
    $con->execute_query(    
        "INSERT INTO cliente(nome, cpf, email, dtnascto, sexo) VALUES (?,?,?,?,?)",
        [$nome, $cpf, $email, $dt, $sexo]
    );
?>