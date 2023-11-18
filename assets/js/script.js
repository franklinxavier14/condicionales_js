// Funcion para el borde rojo en imagen de Star Wars

document.addEventListener("DOMContentLoaded", function() {
    
    const imagen = document.getElementById("imagenstarwars");

    imagen.addEventListener("click", function() {
              imagen.classList.toggle("resaltado");
    });
  });


//Funcion para pedir hasta 10 stickers

const verificarButton = document.querySelector ("#botonverificar");

verificarButton.addEventListener("click", () => {
    const input1 = document.querySelector("#sticker1").value;
    const input2 = document.querySelector("#sticker2").value;
    const input3 = document.querySelector("#sticker3").value;

    const suma = +input1 + +input2 + +input3;

if (suma > 10) {
    document.querySelector("#textoArriba").innerHTML = "Superaste la cantidad de Stickers";
}
else {
    document.querySelector("#textoArriba").innerHTML = "Llevas " + suma + " Stickers";
}
})

//Funcion para contraseña

const boton = document.querySelector ("#ingresar");
const parrafo = document.querySelector ("#textoClave");

boton.addEventListener("click", () => {


    const numero1 = document.querySelector("#digito1").value;
    const numero2 = document.querySelector("#digito2").value;
    const numero3 = document.querySelector("#digito3").value;
    
    const clave = numero1 + numero2 + numero3;

if (clave === "911") {

parrafo.innerHTML = "Password 1 Correcto";
}
else if (clave === "714") {

parrafo.innerHTML = "Password 2 Correcto";
}
else {
parrafo.innerHTML = "Password Incorrecto";
}

})
