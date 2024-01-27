 
  const personajesRavenclaw = [
    {
        "id": 13,
        "personaje": "Luna Lovegood",
        "apodo": "Luna",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "Evanna Lynch",
        "hijos": [],
        "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/luna_lovegood.png"
    },
    {
        "id": 32,
        "personaje": "Marcus Belby",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "Robert Knox",
        "hijos": [],
        "imagen": ""
    },
    {
        "id":33 ,
        "personaje": "Padma Patil",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "Afshan Azad",
        "hijos": [],
        "imagen": ""
    },
    {
        "id":34 ,
        "personaje": "Myrtle Warren",
        "apodo": "Myrtle la Llorona",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "Shirley Henderson",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 35,
        "personaje": "Filius Flitwick",
        "apodo": "Profesor Flitwick",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "Warwick Davis",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 36,
        "personaje": "Rowena Ravenclaw",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "",
        "hijos": ["Helena Ravenclaw"],
        "imagen": ""
    },
    {
        "id":37 ,
        "personaje": "Helena Ravenclaw",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "Kelly Macdonald",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 38,
        "personaje": "Sybill Trelawney",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "Emma Thompson",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 39,
        "personaje": "Garrick Ollivander",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Ravenclaw",
        "interpretado_por": "John Hurt",
        "hijos": ["hijo","hija"],
        "imagen": ""
    }

  ];
  
  const container = document.getElementById('container');
  
  personajesRavenclaw.forEach(personaje => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjetas2');
  
      const imagen = document.createElement('img');
      imagen.src = personaje.imagen;
      imagen.alt = personaje.personaje;
  
      const info = document.createElement('div');
      info.classList.add('info');
  
      const titulo = document.createElement('h2');
      titulo.textContent = personaje.personaje;
  
      const parrafo = document.createElement('p');
      parrafo.textContent = personaje.apodo;
  
      info.appendChild(titulo);
      info.appendChild(parrafo);
  
      tarjeta.appendChild(imagen);
      tarjeta.appendChild(info);
  
      container.appendChild(tarjeta);
  });