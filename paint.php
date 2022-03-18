<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="paintCSS.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <title>Paint</title>
</head>

<body>

    <table class="ToolsBar">
        <tbody>
            <tr class="ButtonTools">
                <td class="ButtonTools" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"><button class="Tools" id="SquareTools" onclick="MyfunctionRectangle()"><svg id="SVGSquare" height="24" viewBox="0 0 1792 1792" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1312 256h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-832q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" />
                        </svg></button></td>
                <td class="ButtonTools"><button class="Tools" id="TriangleTools" draggable="true" onclick="MyfunctionTriangle()"><svg id="SVGTriangle" class="feather feather-triangle" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        </svg></button></td>
            </tr>
            <tr class="ButtonTools">
                <td class="ButtonTools"><button class="Tools" id="CircleTools" draggable="true" onclick="MyfunctionCircle()"><svg id="SVGCircle" height="24px" version="1.1" viewBox="0 0 20 20" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title />
                            <desc />
                            <defs />
                            <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                                <g fill="#000000" id="Core" transform="translate(-170.000000, -86.000000)">
                                    <g id="check-circle-outline-blank" transform="translate(170.000000, 86.000000)">
                                        <path d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z" id="Shape" />
                                    </g>
                                </g>
                            </g>
                        </svg></button></td>

                <td class="ButtonTools"><button class="Tools" id="TextTools" draggable="true" onclick="MyfunctionTexte()"><svg enable-background="new 0 0 32 32" height="24px" id="svg2" version="1.1" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg">
                            <g id="background">
                                <rect fill="none" height="32" width="32" />
                            </g>
                            <g id="text">
                                <polygon points="4,6 4,10 12,10 12,28 16,28 16,10 24,10 24,6  " />
                                <polygon points="30,4 30,2 24,2 24,4 26,4 26,28 24,28 24,30 30,30 30,28 28,28 28,4  " />
                            </g>
                        </svg></button></td>

            </tr>

            <tr class="ButtonTools">

                <td class="ButtonTools"><button class="Tools" id="StarTools" draggable="true" onclick="MyfunctionStar()">
                        <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 50 50" height="24px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <polygon fill="none" points="25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 " stroke="#000000" stroke-miterlimit="10" stroke-width="3" />
                        </svg>
                    </button></td>
            </tr>

            <tr class="ButtonsStyle">

                <td class="ButtonFont">
                    <select name="Fonts" class="InputStyle" id="FontStyle">
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Serif">Serif</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="Roboto">Roboto</option>
                    </select>
                </td>
            </tr>
            <tr class="ButtonsStyle">

                <td class="ButtonTools" id='FontColor'>
                    <p>Police</p><input id="ColorsFont" type="color" value="#000000">
                </td>
            </tr>
            </tr>


            <tr class="ButtonsStyle">

                <td class="ButtonStyle">
                    <select name="border" class="InputStyle" id="BorderStyle">
                        <option value="none">none</option>
                        <option value="0.5" selected>small</option>
                        <option value="1">medium</option>
                        <option value="1.5">semi-bold</option>
                        <option value="2">bold</option>
                    </select>
                </td>

            <tr class="ButtonsStyle">

                <td class="ButtonTools" id='BorderColor'>
                    <p>Bordure</p><input id="ColorsBorder" type="color" value="#000000">
                </td>
            </tr>
            </tr>


            <tr class="ButtonsStyle">

                <td class="ButtonTools" id="BackgroundColor">
                    <p>Background</p><input id="ColorsBackground" type="color" value="#FFFFFF">
                </td>
            </tr>



            <tr class="ButtonsStyle">

                <td class="ButtonTools">
                    <p>Largeur (px)</p><input id="SizeWidth" name="width" type="number" min="2" max="500" placeholder="Largeur" value="60">
                </td>
            </tr>

            <tr class="ButtonsStyle">

                <td class="ButtonTools">
                    <p>Hauteur (px)</p><input id="SizeHeight" type="number" min="2" max="500" placeholder="Hauteur" value="60">
                </td>
            </tr>

            <tr class="trash">
                <td>
                    <button class="Tools" id="Trash" onclick="DeleteBoard()"><svg height="24" width="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g data-name="1" id="_1">
                                <path d="M356.65,450H171.47a41,41,0,0,1-40.9-40.9V120.66a15,15,0,0,1,15-15h237a15,15,0,0,1,15,15V409.1A41,41,0,0,1,356.65,450ZM160.57,135.66V409.1a10.91,10.91,0,0,0,10.9,10.9H356.65a10.91,10.91,0,0,0,10.91-10.9V135.66Z" />
                                <path d="M327.06,135.66h-126a15,15,0,0,1-15-15V93.4A44.79,44.79,0,0,1,230.8,48.67h66.52A44.79,44.79,0,0,1,342.06,93.4v27.26A15,15,0,0,1,327.06,135.66Zm-111-30h96V93.4a14.75,14.75,0,0,0-14.74-14.73H230.8A14.75,14.75,0,0,0,216.07,93.4Z" />
                                <path d="M264.06,392.58a15,15,0,0,1-15-15V178.09a15,15,0,1,1,30,0V377.58A15,15,0,0,1,264.06,392.58Z" />
                                <path d="M209.9,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,209.9,392.58Z" />
                                <path d="M318.23,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,318.23,392.58Z" />
                                <path d="M405.81,135.66H122.32a15,15,0,0,1,0-30H405.81a15,15,0,0,1,0,30Z" />
                            </g>
                        </svg></button>

                </td>
            </tr>



        </tbody>
    </table>


    <div class="DrawBoard" ondragover="drag_over(event)" ondrop="drop(event)"> </div>

    <div class="UnderBoxButton">
        <div class="UnderBox">
            <button class="SaveCTA">Save</button>
            <button class="LoadCTA">Load</button>
        </div>

    <?php
    $theme = filter_input(INPUT_COOKIE, "save");
    ?>

    <div class="UnderBoxExport">
        <button class="ExportPNGCTA" type="button" onclick="saveToPNG(event)">Enregister en PNG</button>
        <button class="ExportPDFCTA" type="button" onclick="saveToPDF(event)">Enregister en PDF</button>
    </div>










</body>
<script src="PaintJS.js">
</script>

</html>