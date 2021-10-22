//creare bottone in js
let dropdown = document.querySelector('i');
const hamburger = document.querySelector('.hamburger-menu');
// rednedere bottone cliccabile
dropdown.addEventListener('click', function(){
    hamburger.classList.toggle("active"); 
}
);

const exit = document.querySelector ('.close');

exit.addEventListener ('click', function(){
    hamburger.classList.toggle("active");
});
