// interaccion.js

// 1. Obtenemos los elementos que necesitamos
const fundaActual = document.getElementById('funda-actual');
const miniaturas = document.querySelectorAll('.miniatura');

// 2. Iteramos sobre cada miniatura para agregar un 'escuchador' de clics
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        // Obtenemos la ruta de la imagen del atributo de datos 'data-diseno'
        const rutaDiseno = this.getAttribute('data-diseno');

        // Cambiamos el src de la imagen principal de la funda
        fundaActual.src = rutaDiseno;
    });
});