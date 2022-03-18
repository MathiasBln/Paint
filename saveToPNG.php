<?php

require 'vendor/autoload.php'; 
use Spatie\Browsershot\Browsershot;

$homepage = filter_input(INPUT_POST, 'code');
echo $homepage;

Browsershot::html($homepage)->save("image/image.png");

?>
