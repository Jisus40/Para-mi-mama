 const card = document.getElementById('card');

    function toggleCard() {
      const isOpen = card.classList.contains('open');
      if (isOpen) {
        card.classList.remove('open');
        card.classList.add('closed');
        card.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.remove('closed');
        card.classList.add('open');
        card.setAttribute('aria-expanded', 'true');
      }
    }

    card.addEventListener('click', toggleCard);

    // Para accesibilidad: abrir/cerrar con Enter o Espacio
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });