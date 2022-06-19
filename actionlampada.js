const turnOn = document.getElementById("turnOn"); 
const turnOff = document.getElementById("turnOff");
const lampada = document.getElementById("lampada");

function lampadaOn (){
    lampada.src = "./image/acesa.jpg"; 
}

function lampadaOff (){
    lampada.src = "./image/apagada.jpg";
}

turnOn.addEventListener("click", lampadaOn);
turnOff.addEventListener("click", lampadaOff);
