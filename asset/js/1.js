  const personajesSlytherin = [
    {
      "id": 14,
      "personaje": "Draco Malfoy",
      "apodo": "Draco",
      "estudianteDeHogwarts": true,
      "casaDeHogwarts": "Slytherin",
      "interpretado_por": "Tom Felton",
      "hijos": [
          "Scorpius Malfoy"
      ],
      "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/draco_malfoy.png"
  },
  {
    "id": 20,
    "personaje": "Severus Snape",
    "apodo": "Snape",
    "estudianteDeHogwarts": true,
    "casaDeHogwarts": "Slytherin",
    "interpretado_por": "Alan Rickman",
    "hijos": [],
    "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/severus_snape.png"
},
{
    "id": 21,
    "personaje": "Bellatrix Lestrange",
    "apodo": "Bella",
    "estudianteDeHogwarts": true,
    "casaDeHogwarts": "Slytherin",
    "interpretado_por": "Helena Bonham Carter",
    "hijos": [
        "Delphi"
    ],
    "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/bellatrix_lestrange.png"
},
{
    "id": 22,
    "personaje": "Lord Voldemort",
    "apodo": "Voldemort",
    "estudianteDeHogwarts": true,
    "casaDeHogwarts": "Slytherin",
    "interpretado_por": "Ralph Fiennes",
    "hijos": [
        "Delphi"
    ],
    "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/lord_voldemort.png"
},
{
  "id":40 ,
  "personaje": "Horace Slughorn",
  "apodo": "",
  "estudianteDeHogwarts": true,
  "casaDeHogwarts": "Slytherin",
  "interpretado_por": "Jim Broadbent",
  "hijos": [],
  "imagen": "https://i.pinimg.com/564x/c4/52/44/c45244228330a398f2815ea1c4960df9.jpg"
},
{
  "id": 41,
  "personaje": "Lucius Malfoy",
  "apodo": "Profesor Malfoy",
  "estudianteDeHogwarts": true,
  "casaDeHogwarts": "Slytherin",
  "interpretado_por": "Jason Isaacs",
  "hijos": ["Draco Malfoy"],
  "imagen": "https://i.pinimg.com/564x/7d/d0/c9/7dd0c9506c1d3c2fd9373cd78f990143.jpg"
},
{
  "id":40 ,
  "personaje": "Narcisa Malfoy",
  "apodo":  ["Cissy","Bella"],
  "estudianteDeHogwarts": true,
  "casaDeHogwarts": "Slytherin",
  "interpretado_por": "Narcisa Malfoy",
  "hijos": ["Draco Malfoy"],
  "imagen": "https://i.pinimg.com/564x/42/02/c5/4202c5d5656dcb4a845689ff5caa2096.jpg"
},
{
  "id":40 ,
  "personaje": "Scorpius Malfoy",
  "apodo": "",
  "estudianteDeHogwarts": true,
  "casaDeHogwarts": "Slytherin",
  "interpretado_por": "Bertie Gilbert",
  "hijos": [],
  "imagen": "https://i.pinimg.com/564x/06/15/44/0615449904fa656fe0ef923a622def81.jpg"
},
{
  "id":41 ,
  "personaje": "Dolores Umbridge",
  "apodo": "la Dama de Rosa",
  "estudianteDeHogwarts": true,
  "casaDeHogwarts": "Slytherin",
  "interpretado_por": "Imelda Staunton",
  "hijos": [],
  "imagen": "https://i.pinimg.com/564x/9b/f4/74/9bf474f88d507dcd1d4778d98a5a0036.jpg"
}
  ];
  
  const container = document.getElementById('container');
  
  personajesSlytherin.forEach(personaje => {
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


