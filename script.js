document.addEventListener('DOMContentLoaded', () => {
    const cardWrapper = document.querySelector('.card-wrapper');
    const heartContainer = document.querySelector('.full-page-heart-container');

    // Función para abrir/cerrar la carta
    cardWrapper.addEventListener('click', () => {
        cardWrapper.classList.toggle('open');
    });

    // Función para crear un corazón flotante
    function createHeart() {
        const heart = document.createElement('span');
        heart.classList.add('heart-emoji');
        heart.innerHTML = '❤️'; // Puedes variar con '💕' o '💖'
        
        // Posición inicial aleatoria en la parte inferior de la pantalla
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.bottom = `${Math.random() * 20 - 10}px`; // Un poco por debajo del borde inferior

        // Retraso de animación aleatorio para que no aparezcan todos al mismo tiempo
        heart.style.animationDelay = `${Math.random() * 8}s`;
        // Duración de la animación ligeramente variada para más dinamismo
        heart.style.animationDuration = `${10 + Math.random() * 5}s`;

        heartContainer.appendChild(heart);

        // Remover el corazón después de que termine su animación para no sobrecargar el DOM
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Generar un número inicial de corazones al cargar la página
    const numberOfInitialHearts = 30; 
    for (let i = 0; i < numberOfInitialHearts; i++) {
        createHeart();
    }

    // Luego, seguir generando corazones a intervalos para un flujo continuo
    setInterval(createHeart, 500); // ¡Ajustado a 400ms para que aparezcan más rápido!
});
