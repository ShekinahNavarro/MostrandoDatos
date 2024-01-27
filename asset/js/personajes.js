function openModal(personaje) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2>${personaje.personaje}</h2>
        <p>Apodo: ${personaje.apodo}</p>
        <p>Casa de Hogwarts: ${personaje.casaDeHogwarts}</p>
        <p>Interpretado por: ${personaje.interpretado_por}</p>
        <p>Hijos: ${personaje.hijos}</p>
        
    `;

    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Agrega un evento para cerrar la ventana modal al hacer clic fuera de ella
    modal.addEventListener('click', closeModalOutside);
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function closeModalOutside(event) {
    const modalContent = document.getElementById('modalContent');
    
    // Verifica si el clic se realizó fuera del contenido modal
    if (!modalContent.contains(event.target)) {
        closeModal();
    }
}
const personajesCompletos = [
    {
            "id": 1,
            "personaje": "Harry James Potter",
            "apodo": "Harry",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Daniel Radcliffe",
            "hijos": [
                "James Sirius Potter",
                "Albus Severus Potter",
                "Lily Luna Potter"
            ],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/harry_potter.png"
        },
        {
            "id": 2,
            "personaje": "Hermione Jean Granger",
            "apodo": "Hermione",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Emma Watson",
            "hijos": [
                "Rose Granger-Weasley",
                "Hugo Granger-Weasley"
            ],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/hermione_granger.png"
        },
        {
            "id": 3,
            "personaje": "Ron Weasley",
            "apodo": "Ron",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Rupert Grint",
            "hijos": [
                "Rose Granger-Weasley",
                "Hugo Granger-Weasley"
            ],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/ron_weasley.png"
        },
        {
            "id": 4,
            "personaje": "Fred Weasley",
            "apodo": "Fred",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "James Phelps",
            "hijos": [],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/fred_weasley.png"
        },
        {
            "id": 5,
            "personaje": "George Weasley",
            "apodo": "George",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Oliver Phelps",
            "hijos": [],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/george_weasley.png"
        },
        {
            "id": 6,
            "personaje": "Bill Weasley",
            "apodo": "Bill",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Domhnall Gleeson",
            "hijos": [],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/bill_weasley.png"
        },
        {
            "id": 7,
            "personaje": "Percy Weasley",
            "apodo": "Percy",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Chris Rankin",
            "hijos": [],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/percy_weasley.png"
        },
        {
            "id": 8,
            "personaje": "Charlie Weasley",
            "apodo": "Charlie",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "ninguno",
            "hijos": [],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/charlie_weasley.png"
        },
        {
            "id": 9,
            "personaje": "Ginny Weasley",
            "apodo": "Ginny",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Bonnie Right",
            "hijos": [
                "James Sirius Potter",
                "Albus Severus Potter",
                "Lily Luna Potter"
            ],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/ginny_weasley.png"
        },
        {
            "id": 10,
            "personaje": "Molly Weasley",
            "apodo": "Molly",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Julie Walters",
            "hijos": [
                "Ron Weasley",
                "Fred Weasley",
                "George Weasley",
                "Bill Weasley",
                "Percy Weasley",
                "Charlie Weasley",
                "Ginny Weasley"
            ],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/molly_weasley.png"
        },
        {
            "id": 11,
            "personaje": "Arthur Weasley",
            "apodo": "Arthur",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Mark Williams",
            "hijos": [
                "Ron Weasley",
                "Fred Weasley",
                "George Weasley",
                "Bill Weasley",
                "Percy Weasley",
                "Charlie Weasley",
                "Ginny Weasley"
            ],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/arthur_weasley.png"
        },
        {
            "id": 12,
            "personaje": "Neville Longbottom",
            "apodo": "Neville",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Matthew Lewis",
            "hijos": [],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/neville_longbottom.png"
        },
        {
            "id": 13,
            "personaje": "Luna Lovegood",
            "apodo": "Luna",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Ravenclaw",
            "interpretado_por": "Evanna Lynch",
            "hijos": [],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/luna_lovegood.png"
        },
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
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/draco_malfoy.png"
        },
        {
            "id": 15,
            "personaje": "Albus Percival Wulfric Brian Dumbledore",
            "apodo": "Dumbledore",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Richard Harris",
            "hijos": [],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/albus_dumbledore.png"
        },
        {
            "id": 16,
            "personaje": "Minerva McGonagall",
            "apodo": "Minerva",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Maggie Smith",
            "hijos": [],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/minerva_mcgonnagall.png"
        },
        {
            "id": 17,
            "personaje": "Remus Lupin",
            "apodo": "Lupin",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "David Thewils",
            "hijos": [
                "Ted Lupin"
            ],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/remus_lupin.png"
        },
        {
            "id": 18,
            "personaje": "Rubeus Hagrid",
            "apodo": "Hagrid",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Robbie Coltrane",
            "hijos": [],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/rubeus_hagrid.png"
        },
        {
            "id": 19,
            "personaje": "Sirius Black",
            "apodo": "Sirius",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Gary Oldman",
            "hijos": [],
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/sirius_black.png"
        },
        {
            "id": 20,
            "personaje": "Severus Snape",
            "apodo": "Snape",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Slytherin",
            "interpretado_por": "Alan Rickman",
            "hijos": [],
            "principal": true,
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
            "principal": true,
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
            "principal": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/lord_voldemort.png"
        },
        {
            "id": 23,
            "personaje": "Argus Filch",
            "apodo": "Filch",
            "estudianteDeHogwarts": false,
            "casaDeHogwarts": "ninguna",
            "interpretado_por": "David Bradley",
            "hijos": [],
            "secundario": true,
            "imagen": "https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/argus_filch.png"
        },
        {
            "id": 24,
            "personaje": "Nymphadora Tonks",
            "apodo": "Tonks",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Hufflepuff",
            "interpretado_por": " Natalia Tena",
            "hijos": [],
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
            "imagen": ""
        },
        {
            "id": 32,
            "personaje": "Marcus Belby",
            "apodo": "",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Ravenclaw",
            "interpretado_por": "Robert Knox",
            "hijos": [],
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
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
            "secundario": true,
            "imagen": ""
        },
        {
            "id":40 ,
            "personaje": "Horace Slughorn",
            "apodo": "",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Slytherin",
            "interpretado_por": "Jim Broadbent",
            "hijos": [],
            "secundario": true,
            "imagen": ""
        },
        {
            "id": 41,
            "personaje": "Lucius Malfoy",
            "apodo": "Profesor Malfoy",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Slytherin",
            "interpretado_por": "Jason Isaacs",
            "hijos": ["Draco Malfoy"],
            "secundario": true,
            "imagen": ""
        },
        {
            "id":40 ,
            "personaje": "Narcisa Malfoy",
            "apodo":  ["Cissy","Bella"],
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Slytherin",
            "interpretado_por": "Narcisa Malfoy",
            "hijos": ["Draco Malfoy"],
            "secundario": true,
            "imagen": ""
        },
        {
            "id":40 ,
            "personaje": "Scorpius Malfoy",
            "apodo": "",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Slytherin",
            "interpretado_por": "Bertie Gilbert",
            "hijos": [],
            "secundario": true,
            "imagen": ""
        },
        {
            "id":41 ,
            "personaje": "Dolores Umbridge",
            "apodo": "la Dama de Rosa",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Slytherin",
            "interpretado_por": "Imelda Staunton",
            "hijos": [],
            "principal": true,
            "imagen": ""
        },
        {
            "id": 42,
            "personaje": "Parvati Patil",
            "apodo": "",
            "estudianteDeHogwarts": true,
            "casaDeHogwarts": "Gryffindor",
            "interpretado_por": "Shefali Chowdhury",
            "hijos": [],
            "secundario": true,
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
            "secundario": true,
            "imagen": ""
        }
  ];
  
  const container = document.getElementById('container');

personajesCompletos.forEach(personaje => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjetas2');

    const imagen = document.createElement('img');
    imagen.src = personaje.imagen;
    imagen.alt = personaje.personaje;
    imagen.addEventListener('click', () => openModal(personaje));

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

function filter() {
    const tipoFiltro = document.getElementById('filterList').value;
    const tarjetas = document.querySelectorAll('.tarjetas2');
  
    tarjetas.forEach(tarjeta => {
      const info = tarjeta.querySelector('.info');
      const esPrincipal = personajesCompletos.find(personaje => personaje.personaje === info.querySelector('h2').textContent)?.principal;
  
      if ((tipoFiltro === 'todos') || (tipoFiltro === 'principal' && esPrincipal) || (tipoFiltro === 'secundario' && !esPrincipal)) {
        tarjeta.style.display = 'block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
}