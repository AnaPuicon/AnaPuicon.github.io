document.addEventListener("DOMContentLoaded", function () {

    var titulo = document.getElementById("titulo");
    var contenido = "Desarrolladora de Sistemas con Experiencia en Automatización de Procesos y Desarrollo Web";
    
    titulo.textContent = "";

    
    for (var i = 0; i < contenido.length; i++) {
        (function (i) {
            setTimeout(function () {
                titulo.textContent += contenido.charAt(i);

                // Cuando se completa la animación del título
                if (i === contenido.length - 1) {
                    
                    titulo.classList.add("sobre-animation-done");

                    
                    setTimeout(function () {
                        
                        titulo.classList.add("parpadeo");
                    }, 1000);
                }
            }, 50 * i);
        })(i);
    }
});