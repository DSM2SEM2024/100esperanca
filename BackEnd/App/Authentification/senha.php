<?php
$senha = "senha_hashada";
$hash = password_hash($senha, PASSWORD_DEFAULT);
echo "Hash gerado: " . $hash;
?>
