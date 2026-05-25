// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. El botón "Iniciar sesión" → cambia a "Cerrar sesión"
    const btnSesion = document.getElementById("btn-sesion");
    if (btnSesion) {
        btnSesion.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar que el enlace recargue la página
            if (btnSesion.textContent === "Iniciar sesión") {
                btnSesion.textContent = "Cerrar sesión";
            } else {
                btnSesion.textContent = "Iniciar sesión";
            }
        });
    }
    
    // 2. Botón "Agregar definición" que desaparece al hacer clic
    const btnDefinicion = document.getElementById("btn-definicion");
    if (btnDefinicion) {
        btnDefinicion.addEventListener("click", function(event) {
            event.preventDefault();
            btnDefinicion.style.display = "none"; // El botón desaparece
        });
    }
    
    // 3. Botones "Me gusta" → alarmar y aumentar contador
    const botonesMeGusta = document.querySelectorAll(".btn-me-gusta");
    
    botonesMeGusta.forEach(function(boton) {
        // Obtener el contador asociado (el span)
        const contador = boton.parentElement.querySelector(".contador-likes");
        let likes = 0;
        
        boton.addEventListener("click", function() {
            // Obtener el nombre de la mascota desde data-nombre
            const nombreMascota = boton.getAttribute("data-nombre");
            
            // Mostrar alarma
            alert("Te gustó la definición de " + nombreMascota);
            
            // Aumentar el contador de likes
            likes++;
            contador.textContent = likes;
        });
    });
    
});