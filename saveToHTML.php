<?php

require 'vendor/autoload.php'; 
use Spatie\Browsershot\Browsershot;

//récupère en POST via la key 'code'
$homepage = filter_input(INPUT_POST, 'code');
echo $homepage;

// Test transformation image/lien to html
$test = Browsershot::url('http://localhost:8888/Projet/Paint/paint.php')->bodyHTML();

Browsershot::html($test)->save('pdf/test2.html');
Browsershot::html($test)->save('pdf/test2.txt');

?>
