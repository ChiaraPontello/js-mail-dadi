// Gioco dei dadi 
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


const Bottone = document.getElementById("bottone");
let min = 1;
let max = 6;

Bottone.addEventListener("click", function(){
  
 
const user = (Math.random() * (max - min + 1) + min);
const userNumber = document.querySelector(".userNumber");
userNumber.innerHTML =" "+ user;


const pc = (Math.random() * (max - min + 1) + min);
const pcNumber = document.querySelector(".pcNumber");
pcNumber.innerHTML = " "+ pc;

}
)