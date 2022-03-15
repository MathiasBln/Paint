<?php
$homepage = file_get_contents('index.html');
$file = 'saveINDEX.html';
$current = file_get_contents($file);
$current .= $homepage;
file_put_contents($file, $current);
?>