// document.addEventListener( "mousemove", function(e)
// {
//     var body= document.querySelector ('body');
//     document.createElement ("span");
//     var heart;
//     var x= e.offsetX;
//     var y =e.offsetY;
//     heart.style.left = x+"px";
//     heart.style.top= y+"px";
//     var size =Math.random()*100;
//     heart.style.width =20+size +'px';
//     heart.style.height =20+size+"px";
//     body.appendChild(heart);
//     setTimeout (function () {
//     heart.remove () ;
//     }, 2000);

// });
function AnimateElements() {}
var slideup = document.getElementById("slideup");
var neont = document.getElementById("neon_title");
var boton = document.getElementById("boton_en_corazon");
var mage1 = document.getElementById("image1");
var mostrar = document.getElementById("ocultar");
var img2 = document.getElementById("box2");

boton.addEventListener("click", function (e) {
  e.preventDefault();
  neont.style.visibility = "visible";
  
  setTimeout(function () {
    image1.classList.add("animate__flipInY");
    image1.style.visibility = "visible";

    image1.style.setProperty("--animate-duration", "1s");
    let image2 = document.getElementById("image2");
    image2.classList.add("animate__flipInY");
    image2.style.visibility = "visible";
    
   
    mostrar.style.visibility = "visible";
    
    
  }, 150);
  setTimeout(function () {
    slideup.style.visibility = "visible";
    boton.style.visibility = "hidden";
    slideup.classList.add("animate__fadeInUpBig");
    slideup.style.visibility = "visible";

    slideup.style.setProperty("--animate-duration", "0.05s");
  }, 200);
});


