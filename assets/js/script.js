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