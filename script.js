// Menu burger
const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const menu = document.querySelector('nav ul')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    menu.classList.toggle('active')
})



// Dégradés aléatoires
function getRandomInt() {
    return Math.floor(Math.random() * (220 - 70 + 1)) + 70;
}
function generateRandomGradient() {
    const color1 = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    const color2 = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    return `linear-gradient(${color1}, ${color2})`;
}
const elements = document.getElementsByClassName("but");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.background = generateRandomGradient();
}



// Boutons buts
const navLinks = document.querySelectorAll('.slider-nav a');
navLinks.forEach(a => {
    a.addEventListener('click', function() { 
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});



// Carte intéractive
var paths = document.querySelectorAll('path');
paths.forEach(function (path) {
    path.addEventListener('click', function () {
        document.querySelectorAll('.is-active').forEach(function(item){
            item.classList.remove('is-active');
        });
        document.getElementById(this.id).classList.add('is-active');
        var id = this.id.replace('Dessin-', '');
        document.getElementById(id).classList.add('is-active');
    });
});



// Form
emailjs.init("NckNMUlbStHDjH9oT");
const btn = document.getElementById("button")
document.getElementById('contactForm').addEventListener('submit', function(event) {
    btn.innerText = "Envoi...";
    event.preventDefault();
    emailjs.sendForm('service_88dr7gf', 'template_ubnnltc', this)
    .then(function() {
        btn.innerText = "Envoyer";
        contactForm.reset();
        alert('J\'ai bien reçu ton message, merci beaucoup ! J\'y réponds dès que possible !');
    }, function(error) {
        btn.innerText = "Envoyer";
        alert('Aïe... Le texte n\'a pas pu être envoyé...');
    });
});
