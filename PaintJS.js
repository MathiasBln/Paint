// Déclaration des variables de changement de Style ce sont les id qui sont sélectionnés
const InputTextWidth = document.querySelector('#SizeWidth')
const InputTextHeight = document.querySelector('#SizeHeight')
const ColorsBackground = document.querySelector('#ColorsBackground')
const ColorsFont = document.querySelector('#ColorsFont')
const ColorsBorder = document.querySelector('#ColorsBorder')
const BorderStyle=document.querySelector('#BorderStyle')
const PxValue = "px"
const SolideValue = "solid"


// Déclaration de la variable Paper c'est la class qui est sélectionnée
const Paper = document.querySelector('.DrawBoard');


// Fonction qui permet de selectionner les valeurs Y et X d'un élément
function drag_start(event) {
    // stock les paramètres de l'écran
    var style = window.getComputedStyle(event.target, null);
    // stock les valeurs X et Y de l'élément ciblé
    var stringElement = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    // sauvegarde les données préalablement stockées(setData) et seront récupérées avec getData 
    event.dataTransfer.setData("Text", stringElement);
}


// On recupère les données en texte
function drop(event) {
    // variable qui récupère les données dans une liste de la fonction drag_start
    var offset = event.dataTransfer.getData("Text").split(',');
    console.log(offset)
    // récupère l'ID qui a comme position 3 dans la liste offset
    var dm = document.getElementById(offset[2]);
    // style appliqué à l'ID de la liste offset pour la position X (droite à gauche)
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    console.log(offset[0])
    // style appliqué à l'ID de la liste offset pour la position Y (haut et bas)
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px'; 
}


// stop le drag grâce à la méthode preventDefault()
function drag_over(event) {
    event.preventDefault();
    return false;
}


// fonction circle
// variable utilisée pour avoir un ID unique
var count3 = 0
function MyfunctionCircle(){ 
    count3 = count3 +1  
    // .creatElement(balise) permet de créer une balise 
    const resizebale = document.createElement('div')
    // .id applique un ID à un élément séléctionné, .classList applique une classe à un élèment sélectionné
    resizebale.id='resizable'+count3
    resizebale.classList='FormsCreator'
    // .appendChild permet d'ajouter dans Paper(DrawBoard) le createElement
    Paper.appendChild(resizebale)  
    // création d'une nouvelle div pour resize la forme 
    const rezisers = document.createElement('div') 
    // applique un style à une variable liée au HTML element.style.cssText=,(possible d'utilisé .style.background, .width, .color, etc.)
    rezisers.style.cssText='background-color:rgba(117, 190, 218, 0.0)'
    // Ajout d'un attribut draggable True à la variable
    resizebale.draggable='true'
    // ajoute d'attribut avec setAttibute pour drag&drop les élements
    resizebale.setAttribute("ondragstart","drag_start(event)")
    // utilisation des variables de style
    resizebale.style.cssText='position:relative; border-radius:50%; border: solid '+BorderStyle.value+'px'+ColorsBorder.value+'; width:'+''+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;  top:0; left:0; cursor:move;background-color:'+ColorsBackground.value
    rezisers.id='resizers'
    // ajout de resizers dans la balise parent resizebale 
    resizebale.appendChild(rezisers)
    // boucle qui créer 4 div qui seront utilisées pour sélectionner les coins
    
    for(i=0;i<4;i++){
        const resize = document.createElement('div')
        resize.classList='Resizer'+i
        rezisers.appendChild(resize)
    }

  const width = 

  resizebale.addEventListener('dblclick', function (e) {
    resizebale.style.cssText ='position:relative;border-radius:50%; border: solid '+BorderStyle.value+'px'+ColorsBorder.value+'; width:'+''+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;cursor:move;background-color:'+ColorsBackground.value;
    e.preventDefault()
  });

  const sizer2 = document.querySelectorAll('.Resizer1')

  for(i=0;i<sizer2.length;i++){
    const ListOfSizer = sizer2[i]
        
    ListOfSizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    function resize(e) {
        console.log(ListOfSizer);
      if (ListOfSizer.classList.contains('Resizer1')) {
          resizebale.style.width = e.pageX - resizebale.getBoundingClientRect().left + 'px';
        
      }

    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }     
  }
      
  const sizer3 = document.querySelectorAll('.Resizer2')

  for(i=0;i<sizer3.length;i++){
    const ListOfSizer = sizer3[i] 
    ListOfSizer.addEventListener('mousedown', function(e) {   
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    function resize(e) {
        console.log(ListOfSizer);
      if (ListOfSizer.classList.contains('Resizer2')) {
          resizebale.style.height = resizebale.getBoundingClientRect().right - e.pageX + 'px';
        
      }
    

    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
}


// fonction triangle pareil que fonction circle mais avec un SVG
var count2 = 0
function MyfunctionTriangle(){
  count2 = count2 +1
  const TriangleDiv=document.createElement('div')
  TriangleDiv.id = 'triangle'+count2
  
  TriangleDiv.draggable='true'
  TriangleDiv.setAttribute("ondragstart","drag_start(event)")
  TriangleDiv.style.cssText='position:relative;top:0;left:0; width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;'
  const Triangle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  
  Triangle.setAttribute('draggable',true)
  
  TriangleDiv.appendChild(Triangle)
  const polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon')
  polygon.setAttribute('draggable',true)
  // polygon.classList='FormsCreator'
  Triangle.id='TheTriangle'
            
  Triangle.style.cssText="width:"+InputTextWidth.value+"px; height:"+InputTextHeight.value+"px; cursor:move"
  Triangle.setAttribute("ondragstart","drag_start(event)")
  Triangle.setAttribute('viewBox','0 0 50 50')

  polygon.setAttribute("ondragstart","drag_start(event)")
  
  polygon.setAttribute("points","25 5, 5 45, 45 45")
  polygon.style.cssText="fill :"+ColorsBackground.value+" ; stroke:"+ColorsBorder.value+"; stroke-width :"+BorderStyle.value+";"
  Triangle.appendChild(polygon)

  for(i=0 ;i<4;i++){
      const resize = document.createElement('div')
      resize.classList='Resizer'+i
      TriangleDiv.appendChild(resize)
  }
        
  Paper.appendChild(TriangleDiv)

  TriangleDiv.addEventListener('dblclick', function (e) {
    polygon.style.cssText ="fill :"+ColorsBackground.value+" ; stroke:"+ColorsBorder.value+"; stroke-width :"+BorderStyle.value+";"
    Triangle.style.cssText="width:"+InputTextWidth.value+"px; height:"+InputTextHeight.value+"px; cursor:move"
    TriangleDiv.style.cssText='position:relative;top:0;left:0; width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;'
  });

  const sizer2 = document.querySelectorAll('.Resizer1')

  for(i=0;i<sizer2.length;i++){
    const ListOfSizer = sizer2[i]
      
    ListOfSizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    function resize(e) {
      console.log(ListOfSizer);
      if (ListOfSizer.classList.contains('Resizer1')) {
          Triangle.style.width = e.pageX - Triangle.getBoundingClientRect().left + 'px';
          TriangleDiv.style.width = e.pageX - TriangleDiv.getBoundingClientRect().left + 'px';
      }
    }
            
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }  
  }
    
  const sizer3 = document.querySelectorAll('.Resizer2')

  for(i=0;i<sizer3.length;i++){
    const ListOfSizer = sizer3[i]
       
    ListOfSizer.addEventListener('mousedown', function(e) {  
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    function resize(e) {
      console.log(ListOfSizer);
      if (ListOfSizer.classList.contains('Resizer2')) {
        Triangle.style.height = Triangle.getBoundingClientRect().right - e.pageX + 'px';
        TriangleDiv.style.height = TriangleDiv.getBoundingClientRect().right - e.pageX + 'px';
      }
      console.log(Triangle.getBoundingClientRect().right - e.pageX)         
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
}


// fonction star pareil que fonction circle mais avec un SVG
var count5 = 0
function MyfunctionStar(){

  count5 = count5 + 1
  const StarDiv=document.createElement('div')
  StarDiv.id = 'Star'+count5
  StarDiv.classList='FormsCreator'
  StarDiv.draggable='true'
  StarDiv.setAttribute("ondragstart","drag_start(event)")
  StarDiv.style.cssText='position:relative;top:0;left:0; width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;background-color:transparent'
  const Star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  Star.setAttribute('draggable',true)

  StarDiv.appendChild(Star)
  const polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon')
  polygon.setAttribute('draggable',true)
  Star.id='TheStar'

  Star.style.cssText="width:"+InputTextWidth.value+"px; height:"+InputTextHeight.value+"px; cursor:grab"
  Star.setAttribute("ondragstart","drag_start(event)")
  Star.setAttribute("viewBox", "0 0 50 50")

  polygon.setAttribute("ondragstart","drag_start(event)")
  polygon.setAttribute("points", "25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321");
  polygon.style.cssText="fill : "+ColorsBackground.value+" ; stroke:"+ColorsBorder.value+"; stroke-width : " +BorderStyle.value+";"
  Star.appendChild(polygon)

  Paper.appendChild(StarDiv)

  StarDiv.addEventListener('dblclick', function (e) {
    polygon.style.cssText ="fill :"+ColorsBackground.value+" ; stroke:"+ColorsBorder.value+"; stroke-width :"+BorderStyle.value+";"
    Star.style.cssText="width:"+InputTextWidth.value+"px; height:"+InputTextHeight.value+"px; cursor:move"
    StarDiv.style.cssText='position:relative;top:0;left:0; width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;'
  })
} 


// fonction rectangle pareil que fonction circle
var count1 = 0
function MyfunctionRectangle(){
  count1 = count1 +1

  const RectangleResizebale = document.createElement('div')
  RectangleResizebale.id='Resizable'+count1
  RectangleResizebale.classList='RectangleCreator'
  Paper.appendChild(RectangleResizebale)
  
  const RectangleRezisers = document.createElement('div') 
  RectangleResizebale.draggable='true'
  RectangleResizebale.setAttribute("ondragstart","drag_start(event)")
  RectangleResizebale.style.cssText='width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px; border: solid '+BorderStyle.value+'px'+ColorsBorder.value+';background-color:'+ColorsBackground.value
  RectangleResizebale.style.display='visibility:hidden;'
  RectangleRezisers.id='Resizers'
  // RectangleRezisers.style.cssText='width: 100%;height: 100%;border: 3px solid blue;box-sizing: border-box;'
  RectangleResizebale.appendChild(RectangleRezisers)
  for(i=0;i<4;i++){
    const RectangleResize = document.createElement('div')
    RectangleResize.classList='Resizer'+i
    RectangleResize.id='resizer'
    RectangleRezisers.appendChild(RectangleResize)
  }

  RectangleResizebale.addEventListener('dblclick', function (e) {
    RectangleResizebale.style.cssText ='position:relative;border: solid '+BorderStyle.value+'px'+ColorsBorder.value+'; width:'+''+InputTextWidth.value+'px; height:'+InputTextHeight.value+'px;  top:0; left:0; cursor:move;background-color:'+ColorsBackground.value;
  });

  // ajout de points dans les corners
  const AllCircle1 = document.querySelectorAll('.Resizer0')

  const AllCircle = document.querySelectorAll('.RectangleCreator')
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;

  for(i=0;i<AllCircle1.length;i++){ 
    console.log(RectangleResizebale)
  }

  const sizer2 = document.querySelectorAll('.Resizer1')

  // fonction qui permet de resize la largeur du rectangle
  for(i=0;i<sizer2.length;i++){
    const ListOfSizer = sizer2[i]   

    ListOfSizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    function resize(e) {
      console.log(ListOfSizer);
      if (ListOfSizer.classList.contains('Resizer1')) {
        RectangleResizebale.style.width = e.pageX - RectangleResizebale.getBoundingClientRect().left + 'px';
      }
      else if (ListOfSizer.classList.contains('Resizer1')) {
          RectangleResizebale.style.width = original_width - (e.pageX - RectangleResizebale.getBoundingClientRect().left)  + 'px'
      }  
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }

  const sizer3 = document.querySelectorAll('.Resizer2')

// fonction qui permet de resize la hauteur du rectangle
  for(i=0;i<sizer3.length;i++){
    const ListOfSizer = sizer3[i]

    ListOfSizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
      console.log(ListOfSizer);
      if (ListOfSizer.classList.contains('Resizer2')) {
        RectangleResizebale.style.height = RectangleResizebale.getBoundingClientRect().right - e.pageX + 'px'; 
      }      
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }

  const sizer4 = document.querySelectorAll('.Resizer3')

  for(i=0;i<sizer4.length;i++){
      console.log(RectangleResizebale)
  }

}


// fonction texte pareil que fonction circle
var count1 = 0
function MyfunctionTexte(){
  count1 = count1 +1
  const Font = document.querySelector('#FontStyle')
  const TexteResizebale = document.createElement('textarea')
  
  TexteResizebale.setAttribute('placeholder',"Texte")
  
  TexteResizebale.id='TexteResizable'+count1
  TexteResizebale.classList='TextCreator'
  Paper.appendChild(TexteResizebale)
  
  const TexteRezisers = document.createElement('div') 
  TexteResizebale.draggable='true'
  TexteResizebale.setAttribute("ondragstart","drag_start(event)")
  TexteResizebale.style.cssText='font-family:'+Font.value+";color:"+ColorsFont.value+';background-color:'+ColorsBackground.value+';width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+';border:'+BorderStyle.value+''+ColorsBorder.value+';top: 0;left: 0;'
  
  TexteRezisers.id='Resizers'
  TexteResizebale.appendChild(TexteRezisers)

  for(i=0;i<4;i++){
      const TexteResize = document.createElement('div')
      TexteResize.div='Resizer'+' '+i
      TexteRezisers.appendChild(TexteResize)
  }

  TexteResizebale.addEventListener('dblclick', function (e) {
    TexteResizebale.style.cssText ='font-family:'+Font.value+";color:"+ColorsFont.value+';background-color:'+ColorsBackground.value+';width:'+InputTextWidth.value+'px; height:'+InputTextHeight.value+';border:'+BorderStyle.value+''+ColorsBorder.value+';top: 0;left: 0;'
    
  });
}


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'z') {
    Paper.removeChild(Paper.lastChild)
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'y') {
    Paper.removeChild(Paper.lastChild)
  }
});


// Fonction save to PNG
function saveToPNG(event) {
  // Fake la création d'un formulaire
  const formData = new FormData();
  formData.append("code", Paper.outerHTML);
  // sauvegarde en POST le formData pour le copier vers une autre page
  fetch('saveToPNG.php',  {
      method: 'POST',
      body: formData
  })
  .then(dataWrappedByPromise => dataWrappedByPromise.text())
  .then(data => {
      console.log(data)
  })
  .catch((error) => {
      console.log('Erreur : ' + error.message);
  });
}

// Fonction save to PDF (identique à PNG)
function saveToPDF(event) {
  const formData = new FormData();
  formData.append("code", Paper.outerHTML);

  fetch('saveToPDF.php',  {
      method: 'POST',
      body: formData
  })
  .then(dataWrappedByPromise => dataWrappedByPromise.text())
  .then(data => {
      console.log(data)
  })
  .catch((error) => {
      console.log('Erreur : ' + error.message);
  });
}

// Fonction save to HTML (identique) PNG
function saveToHTML(event) {
    // Lance la recherche
    const formData = new FormData();
    formData.append("code", Paper.outerHTML);
  
    fetch('saveToHTML.php',  {
        method: 'POST',
        body: formData
    })
    .then(dataWrappedByPromise => dataWrappedByPromise.text())
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.log('Erreur : ' + error.message);
    });
  }

  
// Fonction qui supprime toute la div (reload la page)
function DeleteBoard(){
    window.location.reload()
}

