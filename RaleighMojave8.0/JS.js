var rand1 =1;

function camRetroceder()
{
var imagenumber = 2 ;


images = new Array;
images[1] = "imgs-raleigh/raleigh.png";
images[2] = "imgs-raleigh/raleigh_bin8.jpg";


 rand1 -= 1;
  if(rand1 < 1){
    rand1 = 3;
}   


document.miimagen.src= images[rand1];
}

function camAvanzar()
{
var imagenumber = 2 ;


images = new Array;
images[1] = "imgs-raleigh/raleigh.png";
images[2] = "imgs-raleigh/raleigh_bin8.jpg";


 rand1 += 1;
  if(rand1 > 3){
    rand1 = 1;
}   



document.miimagen.src= images[rand1];
}