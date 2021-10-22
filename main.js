//creare bottone in js
let dropdown = document.querySelector('i');
const hamburger = document.querySelector('.hamburger-menu');
// rednedere bottone cliccabile
dropdown.addEventListener('click', function(){
    hamburger.classList.toggle("active"); 
}
);