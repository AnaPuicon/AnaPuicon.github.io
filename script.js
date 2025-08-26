document.addEventListener("DOMContentLoaded", function () {

    var titulo = document.getElementById("titulo");
    var contenido = "Desarrolladora de Software FullStack Junior | Backend en C# y Frontend en JS/Bootstrap";
    
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