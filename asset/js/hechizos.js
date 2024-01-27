const hechizos = [
            {
                "id": 1,
                "hechizo": "Accio",
                "uso": "Encanto de invocación",
                "Tipo": "encantamiento"
            },
            {
                "id": 2,
                "hechizo": "Glisseo",
                "uso": "Convierte una escalera en un tobogán",
                "Tipo": "Encantamiento"
            },
            {
                "id": 3,
                "hechizo": "Impervius",
                "uso": "Protege al lanzador de una variedad de sustancias, incluidos el agua y el fuego.",
                "Tipo": "encantamiento"
            },
            {
                "id": 4,
                "hechizo": "Wingardium Leviosa",
                "uso": "Levita objetos",
                "Tipo": "encantamiento"
            },
            {
                "id": 5,
                "hechizo": "Scourgify",
                "uso": "Limpia cosas",
                "Tipo": "encantamiento"
            },
            {
                "id": 6,
                "hechizo": "Portus",
                "uso": "Crea un traslador",
                "Tipo": "encantamiento"
            },
            {
                "id": 7,
                "hechizo": "Orchideous",
                "uso": "Crece flores desde el final de la varita",
                "Tipo": "transformación"
            },
            {
                "id": 8,
                "hechizo": "Lumos",
                "uso": "Hace que la varita emita luz",
                "Tipo": "encantamiento"
            },
            {
                "id": 9,
                "hechizo": "Reparo",
                "uso": "Repara objetos rotos",
                "Tipo": "encantamiento"
            },
            {
                "id": 10,
                "hechizo": "Reducio",
                "uso": "Contrae objetos",
                "Tipo": "encantamiento"
            },
            {
                "id": 11,
                "hechizo": "Bauleo",
                "uso": "Empaca baúles y equipaje",
                "Tipo": "encantamiento"
            },
            {
                "id": 12,
                "hechizo": "Riddikulus",
                "uso": "Transforma los Boggarts en una forma divertida",
                "Tipo": "encantamiento"
            },
            {
                "id": 13,
                "hechizo": "Protego",
                "uso": "Protege al lanzador de las maldiciones",
                "Tipo": "encantamiento"
            },
            {
                "id": 14,
                "hechizo": "Muffliato",
                "uso": "Evita que otras personas cercanas escuchen conversaciones",
                "Tipo": "encantamiento"
            },
            {
                "id": 15,
                "hechizo": "Silencio/Langlock",
                "uso": "Evita que alguien hable (pegando la lengua al paladar)",
                "Tipo": "encantamiento"
            },
            {
                "id": 16,
                "hechizo": "Expelliarmus",
                "uso": "Encanto de desarme",
                "Tipo": "encantamiento"
            },
            {
                "id": 17,
                "hechizo": "Oblivate",
                "uso": "Borra recuerdos",
                "Tipo": "encantamiento"
            },
            {
                "id": 18,
                "hechizo": "Episkey",
                "uso": "Cura heridas leves",
                "Tipo": "hechizo de curación"
            },
            {
                "id": 19,
                "hechizo": "Tergeo",
                "uso": "Limpia superficies",
                "Tipo": "encantamiento"
            },
            {
                "id": 20,
                "hechizo": "Relashio",
                "uso": "Obliga al objetivo a soltar lo que sea que esté sosteniendo",
                "Tipo": "embrujo"
            },
            {
                "id": 21,
                "hechizo": "Confundo",
                "uso": "Causa confusiones y hace que otros sean fácilmente susceptibles a la influencia.",
                "Tipo": "encantamiento"
            },
            {
                "id": 22,
                "hechizo": "Expecto Patronum",
                "uso": "Encanto Patronus",
                "Tipo": "encantamiento"
            },
            {
                "id": 23,
                "hechizo": "Ferula",
                "uso": "Conjura vendajes",
                "Tipo": "hechizo de curación"
            },
            {
                "id": 24,
                "hechizo": "Evanesco",
                "uso": "Hechizo de desaparición",
                "Tipo": "transformación"  
            },
            {
                "id": 25,
                "hechizo": "Alohomora",
                "uso": "Abre cerraduras",
                "Tipo": "encantamiento"
            },
            {
                "id": 26,
                "hechizo": "Nox",
                "uso": "Apaga lumos",
                "Tipo": "encantamiento"
            },
            {
                "id": 27,
                "hechizo": "Quietus",
                "uso": "Silencia la voz mágicamente amplificada",
                "Tipo": "encantamiento"
            },
            {
                "id": 28,
                "hechizo": "Incendio",
                "uso": "Crea fuego",
                "Tipo": "encantamiento"
            },
            {
                "id": 29,
                "hechizo": "Homenum Revelio",
                "uso": "Revelar personas cercanas",
                "Tipo": "encantamiento"
            },
            {
                "id": 30,
                "hechizo": "Prior Incantato",
                "uso": "Revela el último hechizo lanzado",
                "Tipo": "encantamiento"
            },
            {
                "id": 31,
                "hechizo": "Finite Incantatem",
                "uso": "Niega los efectos de muchos hechizos.",
                "Tipo": "contrahechizo"
            },
            {
                "id": 32,
                "hechizo": "Erecto",
                "uso": "Levanta carpas u otras estructuras.",
                "Tipo": "encantamiento"
            },
            {
                "id": 33,
                "hechizo": "Diffindo",
                "uso": "Corta o rasga material",
                "Tipo": "encantamiento"
            },
            {
                "id": 34,
                "hechizo": "Stupefy",
                "uso": "Aturde al objetivo",
                "Tipo": "encantamiento"
            },
            {
                "id": 35,
                "hechizo": "Repelo Muggletum",
                "uso": "Repele Muggles",
                "Tipo":"contrahechizo"
            },
            {
                "id": 36,
                "hechizo": "Avada Kedavra",
                "uso": "La maldición asesina,provoca la muerte instantánea de quien la recibe",
                "Tipo": "maldición"
            },
            {
                "id": 37,
                "hechizo": "Aguamenti",
                "uso": "Dispara agua con la varita",
                "Tipo": "transformación,encantamiento"
            },
            {
                "id": 38,
                "hechizo": "Geminio",
                "uso": "Crea un duplicado temporal y sin valor de cualquier objeto",
                "Tipo": "maldición,encantamiento"
            },
            {
                "id": 39,
                "hechizo": "Locomotor Mortis",
                "uso": "Maldición de bloqueo de piernas",
                "Tipo": "maleficio"
            },
            {
                "id": 40,
                "hechizo": "Anapneo",
                "uso": "Limpia las vías respiratorias de alguien",
                "Tipo": "hechizo de curación"
            },
            {
                "id": 41,
                "hechizo": "Reducto",
                "uso": "Explota objeto",
                "Tipo": "maldición"
            },
            {
                "id": 42,
                "hechizo": "Obscuro",
                "uso": "Objetivo con los ojos vendados",
                "Tipo": "encantamiento"
            },
            {
                "id": 43,
                "hechizo": "Impedimenta",
                "uso": "Congela a alguien que avanza hacia ti",
                "Tipo": "embrujo"
            },
            {
                "id": 44,
                "hechizo": "Cave Inimicum/Protego Totalum",
                "uso": "Fortalece las defensas de un área",
                "Tipo": "encantamiento"
                
            },
            {
                "id": 45,
                "hechizo": "Meteolojinx Recanto",
                "uso": "Acaba con los efectos de los hechizos meteorológicos",
                "Tipo": "contrahechizo"
            },
            {
                "id": 46,
                "hechizo": "Specialis Revelio",
                "uso": "Revela propiedades mágicas ocultas en un objeto.",
                "Tipo": "encantamiento"
            },
            {
                "id": 47,
                "hechizo": "Descendo",
                "uso": "Mueve objetos hacia abajo",
                "Tipo": "encantamiento"
            },
            {
                "id": 48,
                "hechizo": "Defodio",
                "uso": "Talla a través de la piedra y el acero",
                "Tipo": "encantamiento"
            },
            {
                "id": 49,
                "hechizo": "Aparecium",
                "uso": "Hacer aparecer tinta invisible",
                "Tipo": "encantamiento"
            },
            {
                "id": 50,
                "hechizo": "Piertotum Locomotor",
                "uso": "Anima estatuas",
                "Tipo": "encantamiento"
            },
            {
                "id": 51,
                "hechizo": "Imperio",
                "uso": "Hace que el objetivo obedezca cada orden",
                "Tipo": "maldición"
            },
            {
                "id": 52,
                "hechizo": "Fidelius Charm",
                "uso": "Une un secreto al alma de un Guardián de Secretos",
                "Tipo": "encantamiento"
            },
            {
                "id": 53,
                "hechizo": "Avis/Oppugno",
                "uso": "Dispara bandada de pájaros con varita",
                "Tipo": "embrujo,encantamiento"
            },
            {
                "id": 54,
                "hechizo": "Expulso",
                "uso": "Explota objetos",
                "Tipo": "maldición"
            },
            {
                "id": 55,
                "hechizo": "Legilimens",
                "uso": "Revela recuerdos y pensamientos del objetivo.",
                "Tipo": "encantamiento"
            },
            {
                "id": 56,
                "hechizo": "Duro",
                "uso": "Endurece los objetos",
                "Tipo": "encantamiento,transformación"
            },
            {
                "id": 57,
                "hechizo": "Sonorus",
                "uso": "Amplifica la voz de uno",
                "Tipo": "encantamiento"
            },
            {
                "id": 58,
                "hechizo": "Deprimo",
                "uso": "Encantamiento que abre agujeros en el suelo",
                "Tipo": "encantamiento"
            },
            {
                "id": 59,
                "hechizo": "Levicorpus",
                "uso": "Levita el objetivo por el tobillo",
                "Tipo": "embrujo"
            },
            {
                "id": 60,
                "hechizo": "Liberacorpus",
                "uso": "Reduce el objetivo de levicorpus",
                "Tipo": "contrahechizo"
            },
            {
                "id": 61,
                "hechizo": "Mobilicorpus",
                "uso": "Mueve cuerpos",
                "Tipo": "encantamiento"
            },
            {
                "id": 62,
                "hechizo": "Confringo",
                "uso": "Explota objetos en llamas",
                "Tipo": "maldición"
            },
            {
                "id": 63,
                "hechizo": "Densaugeo",
                "uso": "Hace que los dientes crezcan rápidamente",
                "Tipo": "maleficio"
            },
            {
                "id": 64,
                "hechizo": "Incarcarous",
                "uso": "Ata a alguien con cuerdas",
                "Tipo": "encantamiento"
            },
            {
                "id": 65,
                "hechizo": "Deletrius",
                "uso": "Descarta los efectos de Prior Incantato",
                "Tipo": "encantamiento,contrahechizo"
            },
            {
                "id": 66,
                "hechizo": "Rictusempra",
                "uso": "Encanto de cosquillas",
                "Tipo": "encantamiento"
            },
            {
                "id": 67,
                "hechizo": "Petrificus Totalus",
                "uso": "El objetivo de renderizado está completamente inmóvil",
                "Tipo": "maldición"
            },
            {
                "id": 68,
                "hechizo": "Fiendfyre Curse",
                "uso": "Hace fuego maldito",
                "Tipo": "maldición"
            },
            {
                "id": 69,
                "hechizo": "Tarantallegra",
                "uso": "Obliga al objetivo a bailar",
                "Tipo": "encantamiento"
            },
            {
                "id": 70,
                "hechizo": "Morsmordre",
                "uso": "Conjura la Marca Tenebrosa",
                "Tipo": "maldición"
            },
            {
                "id": 71,
                "hechizo": "Sectumsempra",
                "uso": "Provoca laceraciones graves",
                "Tipo": "maldición"
            },
            {
                "id": 72,
                "hechizo": "Crucio",
                "uso": "Causa un dolor inmenso",
                "Tipo": "maldición"
            },
            {
                "id": 73,
                "hechizo": "Brackium Emendo",
                "uso": "Destinado a curar huesos rotos",
                "Tipo": "hechizo sanador,encantamiento"
            },
            {
                "id": 74,
                "hechizo": "Slugulus Eructo",
                "uso": "Encantamiento que obliga a la víctima a vomitar babosas",
                "Tipo": "encantamiento"
            },
            {
                "id": 75,
                "hechizo": "Furnunculus",
                "uso": "El mal de ojo de espinillas,encantamiento oscuro que causa que a una persona le salgan grandes espinillas",
                "Tipo": "embrujo,maldición"
            },
            {
                "id": 76,
                "hechizo": "Maleficio de cosquillas",
                "uso": "Hace cosquillas a la víctima y la debilita",
                "Tipo": "maleficio"
            },
            {
                "id": 77,
                "hechizo": "Maleficio crececuernos",
                "uso": "Causa que le broten antenas o cuernos a la víctima",
                "Tipo": "maleficio"
            },
            {
                "id": 78,
                "hechizo": "Steleus",
                "uso": "Hace que la víctima estornude",
                "Tipo": "maleficio"
            },
            {
                "id": 79,
                "hechizo": "Maldición de parálisis",
                "uso": "Pega los zapatos de la víctima al suelo",
                "Tipo": "contrahechizo"
            },
            {
                "id": 80,
                "hechizo": "Embrujo antiintrusos",
                "uso": "Repele a los intrusos.",
                "Tipo": "embrujo"
            },
            {
                "id": 81,
                "hechizo": "Embrujo multidisparo",
                "uso": "Dispara múltiples ataques a la vez",
                "Tipo": "embrujo"
            },
            {
                "id": 82,
                "hechizo": "Vulnera Sanentur",
                "uso": "Hechizo usado para curar cortes profundos como los ocasionados por la maldición Sectumsempra",
                "Tipo": "hechizo de curación"
            },
            {
                "id": 83,
                "hechizo": "Tergeo",
                "uso": "Hechizo para limpiar sangre seca de una herida sangrante, similar al Fregotego.",
                "Tipo": "hechizo de curación"
            },
            {
                "id": 84,
                "hechizo": "Epoximise",
                "uso": "Pega dos objetos entre sí",
                "Tipo": "transformación"
            },
            {
                "id": 85,
                "hechizo": "Incarcifors",
                "uso": "Transfigura un objeto en una prisión adecuada para una criatura cercana, lo que le permite capturar o encarcelar a la víctima.",
                "Tipo": "transformación"
            },
            {
                "id": 86,
                "hechizo": "Multicorfors",
                "uso": "Permite cambiar el color y el estilo de la ropa del objetivo",
                "Tipo": "transformación"
            }
  ];
  
  const hechizosContainer = document.getElementById('hechizosContainer');
  const tipoFiltro = document.getElementById('tipoFiltro');
  
  function mostrarHechizos(tipoSeleccionado) {
      hechizosContainer.innerHTML = ''; // Limpiar el contenedor
     //forEACH se utiliza para iterar sobre los elementos de un array y ejecutar una función determinada en cada uno de ellos.
      hechizos.forEach(hechizo => {                       //convierte la cadena de texto especificada en una nueva 
          if (tipoSeleccionado === 'todos' || hechizo.Tipo.toLowerCase() === tipoSeleccionado) {
              const tarjetaHechizo = document.createElement('div');
              tarjetaHechizo.classList.add('tarjetas');
  
              const nombreHechizo = document.createElement('h2');
              nombreHechizo.textContent = hechizo.hechizo;
  
              const usoHechizo = document.createElement('p');
              usoHechizo.textContent = hechizo.uso;
  
              tarjetaHechizo.appendChild(nombreHechizo);
              tarjetaHechizo.appendChild(usoHechizo);
  
              hechizosContainer.appendChild(tarjetaHechizo);
          }
      });
  }
  
  // Mostrar todos los hechizos inicialmente
  mostrarHechizos('todos');
  
  // Agregar evento de cambio al filtro
  tipoFiltro.addEventListener('change', function () {
      mostrarHechizos(tipoFiltro.value);
  });

