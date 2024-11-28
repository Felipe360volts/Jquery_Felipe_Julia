<?php
    include('banco.php');
    //variaveis vinda na url

    $cep= $_GET['cep'];
    $rua= $_GET['rua'];
    $numero= $_GET['numero'];
    $complemento= $_GET['complemento'];
    $bairro= $_GET['bairro'];
    $cidade= $_GET['cidade'];
    $estado= $_GET['estado'];

    $sql = "INSERT INTO TB_CEP(CEP, RUA, NUMERO, COMP, BAIRRO, CIDADE, UF) VALUES('$cep', '$rua', '$numero', '$complemento', '$bairro', '$cidade', '$estado')";

    //executa o sql
    if(mysqli_query($conn, $sql)){
        echo "Vocês são os caras!";
    }else{
        echo "escola não é lugar de dormir";
    }
    //
    mysqli_close($conn);
?>