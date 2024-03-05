// Ajout de class de survole
const list = document.querySelectorAll(".navigation li");

/**
 * ajoute une class au li tout en enlevant une class au li précédente
 */
function activeLink() {
    list.forEach((item) => {
        item.classList.remove('hovered');
    });
    this.classList.add('hovered');
}

list.forEach(item => item.addEventListener('mouseover', activeLink));

// Menu toggle
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    
});
