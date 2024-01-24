// Cargar el archivo JSON
fetch('HP.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('personajes-container');

    // Función para mostrar personajes según el filtro de casa
    function filtrarPorCasa() {
      const filtro = document.getElementById('filtro').value;

      // Filtrar personajes según la casa seleccionada
      const personajesFiltrados = (filtro === 'todos') ? data : data.filter(p => p.casa === filtro);

      // Mostrar los personajes en el contenedor
      container.innerHTML = '';
      personajesFiltrados.forEach(personaje => {
        const div = document.createElement('div');
        div.classList.add('personaje');
        div.textContent = personaje.nombre;
        container.appendChild(div);
      });
    }

    // Mostrar todos los personajes al cargar la página
    filtrarPorCasa();
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
