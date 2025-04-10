
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Cierra el menú al hacer clic fuera
window.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});
//funcionalidad de seccion de galeria de videos//

document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('input').value.trim();
        const comment = this.querySelector('textarea').value.trim();
        const commentList = this.nextElementSibling;

        if (name && comment) {
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentList.appendChild(newComment);
            this.reset();
        }
    });
});
//funcionalidad de seccion de galeria de imagenes //

const showMoreButton = document.querySelector('.show-more-btn');
const featuresSection = document.querySelector('.features');

showMoreButton.addEventListener('click', () => {
  featuresSection.style.height = 'auto';  // Esto ajusta la altura de la sección
  showMoreButton.style.display = 'none';  // Oculta el botón después de hacer clic
});



