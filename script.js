document.addEventListener("DOMContentLoaded", function () {

    var titulo = document.getElementById("titulo");
    var contenido = "Desarrolladora de software creativa y versátil: Creación de sistemas, páginas web y aplicaciones con compromiso y adaptabilidad";
    
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