// Gioco dei dadi 
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


const Bottone = document.getElementById("bottone");
let min = 1;
let max = 6;

Bottone.addEventListener("click", function(){
  
 
const user = parseInt(Math.random() * (max - min + 1) + min);
const userNumber = document.querySelector(".userNumber");
userNumber.innerHTML = user;


const pc = parseInt(Math.random() * (max - min + 1) + min);
const pcNumber = document.querySelector(".pcNumber");
pcNumber.innerHTML = pc;


const textVittoria = document.querySelector(".textVittoria");

if (user > pc) {
  textVittoria.innerHTML = "Ho vinto";
}else if (user === pc) {
  textVittoria.innerHTML = "Ho pareggiato";
} else if (pc > user) {
  textVittoria.innerHTML = "Hai perso";
}
})


//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

const eMail = [
    
    'example0@email.it',
    'example2@email.it',
    'example3@email.it',
    'example4@email.it',

]


const button = document.getElementById('button');
const alert = document.querySelector('.alert');


button.addEventListener('click', function(){
    let emailText = document.getElementById('email').value;
    let autorizzato = false;
    console.log(emailText);
    for(let i = 0; i < eMail.length; i++){
        let emailCorrente = eMail [i];
        if (emailCorrente === emailText){
            autorizzato = true;
        }
    }
})
