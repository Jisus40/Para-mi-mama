/* Importar fuentes de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap');

:root {
    /* Paleta de colores más intensa y con mejor contraste */
    --color-primary: #FF69B4; /* Rosa fuerte (Hot Pink) - Vibrante */
    --color-secondary: #FFD700; /* Oro (Gold) - Cálido y brillante */
    --color-tertiary: #87CEEB; /* Azul cielo profundo (Sky Blue) - Fresco */
    --color-dark-text: #4B0082; /* Índigo (Indigo) - Para texto, alto contraste */
    --color-light-text: #FFFFFF; /* Blanco puro */
    --color-background: #F8F8FF; /* Niebla blanca (Ghost White) - Fondo suave pero claro */
    --color-card-front: #FF4500; /* Naranja rojizo (Orange Red) - Atractivo para la carta cerrada */
    --color-card-back: #FFFAF0; /* Floral White - Blanco cremoso para el contenido de la carta */
    --color-shadow: rgba(0, 0, 0, 0.2); /* Sombra un poco más pronunciada */
}

body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--color-background);
    color: var(--color-dark-text);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    box-sizing: border-box;
    overflow-x: hidden;
    position: relative;
}

.full-page-heart-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
}

.container {
    background-color: var(--color-light-text);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px var(--color-shadow);
    text-align: center;
    max-width: 800px;
    width: 90%;
    position: relative;
    z-index: 1;
    margin: 50px auto;
    box-sizing: border-box;
}

h1 {
    font-family: 'Poppins', sans-serif;
    color: var(--color-primary);
    font-size: 3em;
    margin-bottom: 10px;
    animation: fadeIn 2s ease-out;
    font-weight: 700;
}

.subtitle {
    font-size: 1.2em;
    color: var(--color-dark-text);
    margin-bottom: 30px;
    animation: slideIn 2s ease-out;
    font-weight: 400;
}

p {
    line-height: 1.7;
    margin-bottom: 15px;
    color: var(--color-dark-text);
    font-weight: 400;
}

.signature {
    font-family: 'Pacifico', cursive;
    font-size: 1.8em;
    color: var(--color-primary);
    margin-top: 20px;
    font-weight: 400;
}

/* Animaciones generales */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Corazones flotantes */
.heart-emoji {
    position: absolute;
    font-size: 2em;
    color: var(--color-primary);
    opacity: 0;
    animation: floatHeart 10s infinite ease-in-out; 
    transform: translateY(0);
}

@keyframes floatHeart {
    0% {
        transform: translateY(100vh) rotate(0deg) scale(0.8);
        opacity: 0;
    }
    10% {
        opacity: 0.7;
    }
    90% {
        opacity: 0.7;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg) scale(1.2);
        opacity: 0;
    }
}

/* Estilos de la carta */
.card-wrapper {
    width: 300px;
    height: 200px; /* Mantén una altura fija o usa max-height si prefieres */
    margin: 50px auto;
    perspective: 1000px;
    cursor: pointer;
    position: relative;
}

.card-front, .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 15px var(--color-shadow);
    display: flex;
    flex-direction: column;
    /* justify-content: center; /* Quitar o cambiar esto si el contenido no cabe */
    align-items: center;
    transition: transform 0.8s ease-in-out, background-color 0.8s ease-in-out;
    padding: 20px; /* Padding general para la carta */
    box-sizing: border-box;
    text-align: center;
}

.card-front {
    background-color: var(--color-card-front);
    color: var(--color-light-text);
    transform: rotateY(0deg);
}

.card-front h2 {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px;
    font-size: 1.8em;
    font-weight: 600;
}

.emoji-icon {
    font-size: 3em;
    margin-top: 10px;
    animation: bounce 1s infinite alternate;
}

@keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-10px); }
}

.card-back {
    background-color: var(--color-card-back);
    color: var(--color-dark-text);
    transform: rotateY(180deg);
    overflow-y: auto; /* Esto es clave para el scroll */
    padding: 25px; /* Aumenta un poco el padding para que el texto no toque los bordes */
    text-align: left; /* Alineamos el texto a la izquierda para mejor lectura en la carta */
    justify-content: flex-start; /* Alinea el contenido de la carta al inicio verticalmente */
}

.card-back h3 {
    font-family: 'Poppins', sans-serif;
    color: var(--color-primary);
    font-size: 1.6em;
    margin-top: 0; /* ¡Aseguramos que no haya margen superior empujando el título! */
    margin-bottom: 15px;
    font-weight: 600;
    text-align: center; /* Centramos solo el título de la carta */
    width: 100%; /* Asegura que ocupe todo el ancho disponible */
}

/* El párrafo dentro de card-back para el texto del mensaje */
.card-back p {
    text-align: center; /* Vuelve a alinear el texto de los párrafos a la izquierda */
    margin-left: 0; /* Asegura que no tenga margen extra */
    margin-right: 0; /* Asegura que no tenga margen extra */
    width: 100%; /* Asegura que ocupe el ancho disponible */
}

.emoji-icon-bottom {
    font-size: 2.5em;
    margin-top: 15px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

/* Clase para cuando la carta está abierta */
.card-wrapper.open .card-front {
    transform: rotateY(-180deg);
}

.card-wrapper.open .card-back {
    transform: rotateY(0deg);
}

/* Footer */
.footer {
    margin-top: 60px;
    font-size: 0.9em;
    color: var(--color-dark-text);
    opacity: 0.8;
}

/* Media Queries para responsividad */
@media (max-width: 768px) {
    .container {
        padding: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    h1 {
        font-size: 2.5em;
    }

    .subtitle {
        font-size: 1.1em;
    }

    .card-wrapper {
        width: 280px;
        height: 180px;
    }

    .card-front h2 {
        font-size: 1.6em;
    }

    .emoji-icon {
        font-size: 2.8em;
    }

    .card-back h3 {
        font-size: 1.5em;
    }
    .card-back p {
        font-size: 0.95em; /* Ajuste para móviles */
    }
}

@media (max-width: 480px) {
    body {
        padding: 0;
    }

    .container {
        padding: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 95%;
    }

    h1 {
        font-size: 2em;
    }

    .subtitle {
        font-size: 1em;
    }

    p {
        font-size: 0.9em; /* Ligeramente más pequeño para el texto en móviles */
    }

    .signature {
        font-size: 1.6em;
    }

    .card-wrapper {
        width: 260px;
        height: 170px;
        margin: 30px auto;
    }

    .card-front h2 {
        font-size: 1.4em;
    }

    .emoji-icon {
        font-size: 2.5em;
    }

    .card-back p {
        font-size: 0.85em; /* Un poco más pequeño en pantallas muy pequeñas */
    }
}
