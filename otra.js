// Obtén los elementos del DOM
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Inicializa el estilo del menú para que esté oculto inicialmente
mobileMenu.style.right = '-250px';

// Añade un event listener al botón del menú
menuToggle.addEventListener('click', () => {
    // Cambia el valor de la propiedad "right" al hacer clic
    if (mobileMenu.style.right === '0px') {
        mobileMenu.style.right = '-250px';  // Esconde el menú
    } else {
        mobileMenu.style.right = '0';  // Muestra el menú
    }
});
