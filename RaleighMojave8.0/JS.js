

function enviar(e){
  if(validar()){
   
  }
return false;
  }
 
  function Mostrar() {
    let div = document.getElementById("ocul");
    div.removeAttribute("style");
    div.classList.toggle("ocultar");
  }
  
  function validar(){
     
    let f_nombre=document.querySelector("#f_nombre");
    let f_telefono=document.querySelector("#f_telefono");
    let f_correo=document.querySelector("#f_correo");
    let f_tarjeta=document.querySelector("#f_tarjeta");
   
  let errores= [];

  let num=  /^[0-9]+$/;
  if(f_nombre.value.trim() =="" ){
      errores.push("Nombre no puede estar vacia");
      f_nombre.classList.add("borde");
  }
  else if( num.test(f_nombre.value) ){
      errores.push("nombre no puede tener digitos");
      f_nombre.classList.add("borde");
  }
  else{
      f_nombre.classList.remove("borde");
      f_nombre.classList.add("borde-verde");
  }
  
  if(f_telefono.value.trim() ==""){
      errores.push("Edad no puede estar vacia");
      f_telefono.classList.add("borde");
  }
  else if(  !num.test(f_telefono.value)){
      errores.push("Se deben ingresar digitos, no cadenas");  
      f_telefono.classList.add("borde");
  }
  else if (f_telefono.value >12){
      errores.push("Se paso el limite de un numero celular!");
      f_telefono.classList.add("borde");
  }
  else{
    f_telefono.classList.remove("borde");
    f_telefono.classList.add("borde-verde");
  }
  let er= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(f_correo.value.trim() ==""){
      errores.push("Correo no puede estar vacia");
      f_correo.classList.add("borde");
  }
  else if ( !er.test(f_correo.value)){
      errores.push("Parametros de correo incorrectos");
      f_correo.classList.add("borde");
  }
  else{
      f_correo.classList.remove("borde");
      f_correo.classList.remove("borde-verde");
  }
  console.log(f_tarjeta.value);
 let visa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
 let mastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
 if(f_tarjeta.value.trim() ==""){
  errores.push("Edad no puede estar vacia");
  f_tarjeta.classList.add("borde");
}
else if(  !visa.test(f_tarjeta.value)){
  errores.push("La tarjeta no es Visa");  
  f_tarjeta.classList.add("borde");
}

else{
  f_tarjeta.classList.remove("borde");
  f_tarjeta.classList.add("borde-verde");
}

  let ItaErrores_elem = document.querySelector("#ItaErrores");
  errores.forEach(e => {  
      let li = document.createElement("li");
      li.innerHTML= e;
      ItaErrores_elem.appendChild(li);
      console.log(e);
  });
  
  return errores.length == 0;
  }


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
setTimeout("camAvanzar()", 7000);
document.miimagen.src= images[rand1];

}
rand1 = setTimeout("camAvanzar()", 7000);