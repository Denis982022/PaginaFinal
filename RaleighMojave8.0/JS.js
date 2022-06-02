
var rand1 =1;

function camRetroceder()
{


images = new Array;
images[1] = "imgs-raleigh/raleigh_1.jpg";
images[2] = "imgs-raleigh/raleigh_2.jpg";
images[3] = "imgs-raleigh/raleigh_3.jpg";
images[4] = "imgs-raleigh/raleigh_4.jpg";
 rand1 -= 1;
  if(rand1 < 1){
    rand1 = 4;
}   

document.miimagen.src= images[rand1];
}

function camAvanzar()
{


images = new Array;
images[1] = "imgs-raleigh/raleigh_1.jpg";
images[2] = "imgs-raleigh/raleigh_2.jpg";
images[3] = "imgs-raleigh/raleigh_3.jpg";
images[4] = "imgs-raleigh/raleigh_4.jpg";

 rand1 += 1;
  if(rand1 > 4){
    rand1 = 1;
}   
setTimeout("camAvanzar()", 7000)
document.miimagen.src= images[rand1];
}
rand1 = setTimeout("camAvanzar()", 7000)