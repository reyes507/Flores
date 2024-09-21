window.onload = () => {
        document.body.classList.remove("container");
        
        const audio = document.getElementById('background-audio');
        
        // Inicialmente no reproducir el audio
        audio.pause();
    
        // Agregar un evento de clic para iniciar el audio
        document.body.addEventListener('click', () => {
            audio.play().catch(error => {
                console.log("Error al reproducir el audio:", error);
            });
            
            // Mostrar las flores
            document.querySelector('.flowers').classList.remove('hidden');
            
            // Opcional: quitar el evento después de la primera reproducción
            document.body.removeEventListener('click', arguments.callee);
        });
    };
    