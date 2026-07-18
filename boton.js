// Seleccionamos el botón y el contenedor usando sus IDs
const boton = document.getElementById('boton');
const contenedor = document.getElementById('contenedor');

// Le indicamos al botón que ejecute una acción cuando se le haga clic
boton.addEventListener('click', () => {
    // Creamos un nuevo párrafo
    const mensaje = document.createElement('p');
    mensaje.textContent = '¡Acción confirmada! El JavaScript está conectado correctamente.';
    
    // Le damos un poco de estilo (color verde y negritas)
    mensaje.style.color = '#28a745'; 
    mensaje.style.fontWeight = 'bold';

    // Agregamos el nuevo mensaje dentro del contenedor principal
    contenedor.appendChild(mensaje);

    // Deshabilitamos el botón para que solo se presione una vez
    boton.disabled = true;
    boton.textContent = '¡Listo!';
});