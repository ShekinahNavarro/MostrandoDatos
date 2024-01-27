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
            "imagen":"https://i.pinimg.com/736x/1b/a8/cf/1ba8cf13f0f614c142893cfa4e35d686.jpg"
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
            "imagen": "https://pm1.aminoapps.com/6161/0a7be6be3ed7aa0ed637c1e717cbf251e12ac395_hq.jpg"
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
            "imagen": "https://static.wikia.nocookie.net/esharrypotter/images/7/7f/SusanBones.png/revision/latest?cb=20150824184232"
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
            "imagen": "https://static.wikia.nocookie.net/esharrypotter/images/f/fe/P7_Leanne.jpg/revision/latest?cb=20140506010848"
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
            "imagen": "https://static.wikia.nocookie.net/harryalbuspotter/images/7/73/Macmillan_Ernie.jpg/revision/latest/scale-to-width-down/250?cb=20190110182910"
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
            "imagen": "https://static.wikia.nocookie.net/harrypotter/images/1/16/Justin_Finch-Fletchley_%28McGonagall%27s_Class%29_%281%29.png/revision/latest?cb=20180308172742"
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
            "imagen": "https://static.wikia.nocookie.net/harrypotter/images/d/d4/Robert_knox.jpg/revision/latest?cb=20140328073139"
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
            "imagen": "https://pm1.aminoapps.com/6337/6c86f953e63d02ba6a16c54081935404f4358955_00.jpg"
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
            "imagen": "https://static.wikia.nocookie.net/esharrypotter/images/c/cf/250px-Myrtle1.png/revision/latest?cb=20101122080924"
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
            "imagen": "https://static.wikia.nocookie.net/harrypotter/images/4/4b/Flitwickarmourbattle.png/revision/latest?cb=20110628141204"
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
            "imagen": "https://static.wikia.nocookie.net/harrypotter/images/f/fd/Rowena_Ravenclaw_at_WWHP.jpg/revision/latest?cb=20140615151812"
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
            "imagen": "https://static.wikia.nocookie.net/esharrypotter/images/0/00/Helena_Ravenclaw_DH2.jpg/revision/latest?cb=20110928161937"
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
            "imagen": "https://pm1.aminoapps.com/6529/9c3210bb507c64adeca355b45cf0755fb668415c_hq.jpg"
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
            "imagen": "https://pm1.aminoapps.com/6236/fc352f6da8fcd90ff1d52cafa00b26c9e6f75fe1_00.jpg"
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
            "imagen": "https://static.wikia.nocookie.net/esharrypotter/images/a/a1/Horace_Slughorn_%28HBP_promo%29_1-1.jpg/revision/latest?cb=20131218235843"
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
            "imagen": "https://static.wikia.nocookie.net/doblaje/images/c/cf/Lucius-malfoy.jpg/revision/latest?cb=20110930014422&path-prefix=es"
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
            "imagen": "https://static.wikia.nocookie.net/doblaje/images/7/76/HPNarcissaMalfoy.png/revision/latest?cb=20160123185045&path-prefix=es"
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
            "imagen": "https://pm1.aminoapps.com/6683/d8e1e4d0e57ef17990bf1f2c1fc58639b3e18399_00.jpg"
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
            "imagen": "https://static.wikia.nocookie.net/doblaje/images/e/e6/Dolores_Umbridge_-_Perfil.png/revision/latest?cb=20220304211721&path-prefix=es"
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
            "imagen": "https://static.wikia.nocookie.net/esharrypotter/images/2/23/P5_Parvati_Patil.png/revision/latest?cb=20101218204710"
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
            "imagen": "https://pm1.aminoapps.com/7930/f42352f6b2347392b778ea1da2b41605bcc0e6ecr1-485-632v2_uhq.jpg"
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