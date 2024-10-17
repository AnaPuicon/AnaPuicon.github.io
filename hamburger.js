document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navList = document.getElementById('nav-list');
    
    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        navList.classList.toggle('active');
    }
    
    // Evento de clic para el botón de hamburguesa
    hamburger.addEventListener('click', toggleMenu);
    
    // Eventos de clic para cada enlace en el menú de hamburguesa
    document.querySelectorAll('#nav-list a').forEach(function(navItem) {
        navItem.addEventListener('click', toggleMenu);
    });
});
