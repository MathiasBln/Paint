<?php

require 'vendor/autoload.php'; 
use Spatie\Browsershot\Browsershot;

//récupère en POST via la key 'code'
$homepage = filter_input(INPUT_POST, 'code');
echo $homepage;

// transformation de html to PDF
Browsershot::html($homepage)->save('pdf/example.pdf');

?>
