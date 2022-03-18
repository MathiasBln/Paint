<?php

require 'vendor/autoload.php'; 
use Spatie\Browsershot\Browsershot;

$homepage = filter_input(INPUT_POST, 'code');
echo $homepage;

$test = Browsershot::url('http://localhost:8888/Projet/Paint/paint.php')->bodyHTML();

Browsershot::html($test)->save('pdf/test2.html');
Browsershot::html($test)->save('pdf/test2.txt');

?>
