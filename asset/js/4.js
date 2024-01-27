 
  const personajesHufflepuff = [
    {
        "id": 24,
        "personaje": "Nymphadora Tonks",
        "apodo": "Tonks",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": " Natalia Tena",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 25,
        "personaje": "Pomona Sprout",
        "apodo": "Sprout",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Miriam Margolyes",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 26,
        "personaje": "Cedric Diggory",
        "apodo": "Ced",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Robert Pattinson",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 27,
        "personaje": "Hannah Abbott",
        "apodo": "Hannah",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Charlotte Skeoch",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 28,
        "personaje": "Susan Bones",
        "apodo": "Susan",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Eleanor Patricia Columbus",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 29,
        "personaje": "Leanne",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Isabella Laughtland",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 30,
        "personaje": "Ernest Macmillan",
        "apodo": "Erni",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Louis Doyle",
        "hijos": [],
        "imagen": ""
    },
    {
        "id":31 ,
        "personaje": "Justin Finch-Fletchley",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Edward Randell",
        "hijos": [],
        "imagen": ""
    },
    {
        "id": 43,
        "personaje": "Newton Scamander",
        "apodo": "",
        "estudianteDeHogwarts": true,
        "casaDeHogwarts": "Hufflepuff",
        "interpretado_por": "Eddie Redmayne",
        "hijos": [],
        "imagen": ""
    }
  ];
  
  const container = document.getElementById('container');
  
  personajesHufflepuff .forEach(personaje => {
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