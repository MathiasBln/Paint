// Déclaration des variables formes

const Square = document.querySelector('#SquareTools');
const Triangle = document.querySelector('#TriangleTools');
const Circle = document.querySelector('#CircleTools');
const Texte = document.querySelector('#TextTools');

const InputTextWidth = document.querySelector('#SizeWidth')

const InputTextHeight = document.querySelector('#SizeHeight')

const ColorsInput = document.querySelector('#ColorsInput')


// Déclaration de la variable Paper

const Paper = document.querySelector('.DrawBoard');


function drag_start(event) {
    
    var style = window.getComputedStyle(event.target, null);
    var stringElement = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", stringElement);

    // console.log(style)
    
}

// On recupère les données en texte de 

function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(',');
    console.log(offset)
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    console.log(offset[0])
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

// stop le drag grâce à la méthode preventDefault()
function drag_over(event) {
    event.preventDefault();
    return false;
}

var count3 = 0

function MyfunctionCircle(){

    count3 = count3 +1
    
    const resizebale = document.createElement('div')
    resizebale.id='resizable'+count3
    resizebale.classList='FormsCreator'
    Paper.appendChild(resizebale)
    
    const rezisers = document.createElement('div') 
    rezisers.style.cssText='background-color:rgba(117, 190, 218, 0.0)'
    resizebale.draggable='true'
    resizebale.setAttribute("ondragstart","drag_start(event)")
    resizebale.style.cssText='position:relative; border-radius:50%; border:solid'+ColorsInput.value+'; width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;  top:0; left:0; cursor:move;background-color:rgba(117, 190, 218, 0.0)'
    
    resizebale.style.display='visibility:hidden;'
    rezisers.id='resizers'
    resizebale.appendChild(rezisers)
    for(i=0;i<4;i++){
        const resize = document.createElement('div')
        resize.id='resizer'+'.top'+i
        rezisers.appendChild(resize)

}
}

context = document.querySelector('.DrawBoard')

var count2 = 0
function MyfunctionTriangle(){

            count2 = count2 +1
            const TriangleDiv=document.createElement('div')
            TriangleDiv.id = 'triangle'+count2
            TriangleDiv.classList='FormsCreator'
            TriangleDiv.draggable='true'
            TriangleDiv.setAttribute("ondragstart","drag_start(event)")
            TriangleDiv.style.cssText='position:relative;top:0;left:0; width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;background-color:transparent'
            const Triangle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            
            Triangle.setAttribute('draggable',true)
            
            TriangleDiv.appendChild(Triangle)
            const polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon')
            polygon.setAttribute('draggable',true)
            Triangle.id='TheTriangle'
            
            Triangle.style.cssText="width:"+InputTextWidth.value+"px; height:"+InputTextHeight.value+"px; cursor:grab"
            Triangle.setAttribute("ondragstart","drag_start(event)")

            polygon.setAttribute("ondragstart","drag_start(event)")
            
            polygon.setAttribute("points", " 30 5, 55 55, 5 55");
            polygon.style.cssText="fill : none ; stroke:"+ColorsInput.value+"; stroke-width : 2;  "
            Triangle.appendChild(polygon)
        
            Paper.appendChild(TriangleDiv)
    }

var count1 = 0

function MyfunctionRectangle(){
        count1 = count1 +1
    
        const RectangleResizebale = document.createElement('div')
        RectangleResizebale.id='Resizable'+count1
        RectangleResizebale.classList='FormsCreator'
        Paper.appendChild(RectangleResizebale)
        
        const RectangleRezisers = document.createElement('div') 
        RectangleResizebale.draggable='true'
        RectangleResizebale.setAttribute("ondragstart","drag_start(event)")
        RectangleResizebale.style.cssText='position:relative;  width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px; border:solid'+ColorsInput.value+'; top:0; left:0;cursor:grab'
        RectangleResizebale.style.display='visibility:hidden;'
        RectangleRezisers.id='Resizers'
        // RectangleRezisers.style.cssText='width: 100%;height: 100%;border: 3px solid blue;box-sizing: border-box;'
        RectangleResizebale.appendChild(RectangleRezisers)
        for(i=0;i<4;i++){
            const RectangleResize = document.createElement('div')
            RectangleResize.id='Resizer'+i

            RectangleResize.classList='resizer'
            
            RectangleRezisers.appendChild(RectangleResize)
     
    }

    // ajout de point dans les corners
const sizer1 = document.querySelectorAll('#Resizer0')


for(i=0;i<sizer1.length;i++){
    sizer1[i].style.cssText="width: 10px;height: 10px;border-radius: 50%;background: transparent; position: absolute; left: -5px;top: -5px; border:solid; border-radius:50%;cursor: nwse-resize;/*resizer cursor*/"
}

const sizer2 = document.querySelectorAll('#Resizer1')


for(i=0;i<sizer2.length;i++){
    sizer2[i].style.cssText="width: 10px;height: 10px;border-radius: 50%;background: transparent; position: absolute; right: -5px;top: -5px; border:solid; border-radius:50%;cursor: nwse-resize;/*resizer cursor*/"
    
    
  

    
}

const sizer3 = document.querySelectorAll('#Resizer2')


for(i=0;i<sizer3.length;i++){
    sizer3[i].style.cssText="width: 10px;height: 10px;border-radius: 50%;background: transparent; position: absolute; right: -5px;bottom: -5px; border:solid; border-radius:50%;cursor: nwse-resize;/*resizer cursor*/"
}

const sizer4 = document.querySelectorAll('#Resizer3')


for(i=0;i<sizer4.length;i++){
    sizer4[i].style.cssText="width: 10px;height: 10px;border-radius: 50%;background: transparent; position: absolute; left: -5px;bottom: -5px; border:solid; border-radius:50%;cursor: nwse-resize;/*resizer cursor*/"
}

}

var count1 = 0

function MyfunctionTexte(){
        count1 = count1 +1
        const Font = document.querySelector('#FontStyle')
        const TexteResizebale = document.createElement('input')
        TexteResizebale.setAttribute("type",'text')
        TexteResizebale.setAttribute('size',1)
        
        TexteResizebale.id='TexteResizable'+count1
        TexteResizebale.classList='FormsCreator'
        Paper.appendChild(TexteResizebale)
        
        const TexteRezisers = document.createElement('div') 
        TexteResizebale.draggable='true'
        TexteResizebale.setAttribute("ondragstart","drag_start(event)")
        TexteResizebale.style.cssText='position:relative;  resize: horizontal; width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px; border : solid black; top:0; left:0;cursor:grab;font-family:'+Font.value+";overflow:visible;color:"+ColorsInput.value
        TexteResizebale.style.display='visibility:hidden;'
        TexteRezisers.id='Resizers'
        TexteResizebale.appendChild(TexteRezisers)
        for(i=0;i<4;i++){
            const TexteResize = document.createElement('div')
            TexteResize.div='Resizer'+' '+i
            TexteRezisers.appendChild(TexteResize)
    
    }

}



// Fonction qui supprime toute la div(reload la page)

function DeleteBoard(){
    window.location.reload()
}

