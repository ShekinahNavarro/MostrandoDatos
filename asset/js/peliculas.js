document.addEventListener('DOMContentLoaded', function () {
    const movies  = [
        {
            "id": 1,
            "película": "Harry Potter y la piedra filosofal",
            "titulo_original": "Harry Potter and the Sorcerer's Stone",
            "fecha_de_lanzamiento": "6 de Noviembre de 2001",
            "autora": "J. K. Rowling",
            "Director": "Christopher Columbus",
            "Producción": "David Heyman",
            "descripcion": "Harry Potter es un huérfano que vive con sus desagradables tíos, los Dursley, y su repelente primo Dudley. Se acerca su decimoprimero cumpleaños y tiene pocas esperanzas de recibir algún regalo, ya que nunca nadie se acuerda de él. Sin embargo, pocos días antes de su cumpleaños, una serie de misteriosas cartas dirigidas a él y escritas con una estridente tinta verde rompen la monotonía de su vida: le comunican que Harry es un mago y sus padres también lo eran. Dolido con sus tíos por haberle ocultado sus orígenes y en vista de que el mundo normal no le ofrece grandes oportunidades, Harry acepta ir a la escuela Hogwarts. Allí conocerá a los que serán sus grandes amigos que se convertiran en sus compañeros de aventura, Hermione Granger y Ron Weasley. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.",
            "imagen": "https://i.pinimg.com/564x/68/ed/07/68ed0704993ba27dbb3af7779569f959.jpg"
        },
        {
            "id": 2,
            "película": "Harry Potter y la cámara secreta",
            "titulo_original": "Harry Potter and the chamber of secrets",
            "fecha_de_lanzamiento": "5 de Diciembre de 2002",
            "autora": "J. K. Rowling",
            "Director": "Christopher Columbus",
            "Producción": "Davis Heyman",
            "descripcion": "Una noche que su tío Vernon, su tía Petunia y su primo Dudley han invitado a gente importante a cenar, Harry Potter está obligado a pasar la noche en su cuarto. Dobby, un elfo, hace entonces aparición. Le anuncia que terribles peligros acechan el colegio Hogwarts y que no debe volver en septiembre. Harry no quiere creerle. Pero en cuanto vuelve al colegio, Harry oye una voz maligna. Esta le cuenta que la temible y legendaria cámara secreta se ha vuelto a abrir para que el heredero de Slytherin pueda sembrar el caos en Hogwarts. Las víctimas, encontradas petrificadas por una fuerza misteriosa, se suceden en los pasillos del colegio, sin que los profesores - ni siquiera el popular Gilderoy Lockhart - consigan poner fin a la amenaza. Con la ayuda de Ron y Hermione, Harry debe actuar lo más rápido posible para salvar Hogwarts.",
            "imagen": "https://es.web.img3.acsta.net/pictures/14/04/30/11/50/167156.jpg"
        },
        {
            "id": 3,
            "película": "Harry Potter y el prisionero de Azkaban",
            "titulo_original": "Harry Potter and the Prisoner of Azkaban",
            "fecha_de_lanzamiento": "3 de Junio de 2004",
            "autora": "J. K. Rowling",
            "Director": "Alfonso Cuarón",
            "Producción": "David Heyman, Chris Columbus, Mark Radcliffe",
            "descripcion": "El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión para magos de Azkaban. Se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.",
            "imagen": "https://image.tmdb.org/t/p/original/ux2OUQ9eX1Wv3fCxuldOikFOuHF.jpg"
        },
        {
            "id": 4,
            "película": "Harry Potter y el cáliz de fuego",
            "titulo_original": "Harry Potter and the Goblet of Fire",
            "fecha_de_lanzamiento": "24 de Noviembre de 2005",
            "autora": "J. K. Rowling",
            "Director": "Mike Newell",
            "Producción": "David Heyman",
            "descripcion": "Hogwarts se prepara para el Torneo de los Tres Magos, en el que competirán tres escuelas de hechicería. Para sorpresa de todos, Harry Potter es elegido para participar en la competencia, en la que deberá luchar contra dragones, internarse en el agua y enfrentarse a sus mayores miedos.",
            "imagen": "https://es.web.img2.acsta.net/pictures/14/04/30/11/29/268191.jpg"
        },
        {
            "id": 5,
            "película": "Harry Potter y la orden del Fénix",
            "titulo_original": "Harry Potter and the Order of the Phoenix",
            "fecha_de_lanzamiento": "12 de julio de 2007",
            "autora": "J. K. Rowling",
            "Director": "David Yates",
            "Producción": "David Heyman, David Barron",
            "descripcion": "En su quinto año en Hogwarts, Harry descubre que muchos integrantes de la comunidad de magos no conocen la verdad acerca de su encuentro con Lord Voldemort. Cornelius Fudge, ministro de magia, designa a Dolores Umbridge como maestra de defensa contra de las artes oscuras porque cree que el profesor Dumbledore planea apoderarse de su trabajo. Pero sus enseñanzas son inadecuadas, por lo que Harry prepara a los estudiantes para defender la escuela en contra del mal.",
            "imagen": "https://i.pinimg.com/564x/05/94/47/059447a69af9567ab557733421e994ce.jpg"
        },
        {
            "id": 6,
            "película": "Harry Potter y el misterio del príncipe",
            "titulo_original": "Harry Potter and the Half-Blood Prince",
            "fecha_de_lanzamiento": "16 de Julio de 2009",
            "autora": "J. K. Rowling",
            "Director": "David Yates",
            "Producción": "David Heyman, David Barron",
            "descripcion": "Harry descubre un poderoso libro y, mientras trata de descubrir sus orígenes, colabora con Dumbledore en la búsqueda de una serie de objetos mágicos que ayudarán en la destrucción de Lord Voldemort.",
            "imagen": "https://es.web.img3.acsta.net/medias/nmedia/18/67/05/06/19138964.jpg"
        },
        {
            "id": 7,
            "película": "Harry Potter y las reliquias de la muerte: Parte 1",
            "titulo_original": "Harry Potter and the Deathly Hallows",
            "fecha_de_lanzamiento": "18 de Noviembre de 2010",
            "autora": "J. K. Rowling",
            "Director": "David Yates",
            "Producción": "David Heyman, David Barron, J.K. Rowling",
            "descripcion": "Harry, Ron y Hermione se marchan de Hogwarts para iniciar su misión más importante: tienen que destruir los horrocruxes, el secreto del poder y la inmortalidad de Voldemort, en los que el temido mago oscuro guarda los fragmentos de su alma.",
            "imagen": "https://es.web.img2.acsta.net/medias/nmedia/18/82/10/76/19599753.jpg"
        },
        {
            "id": 8,
            "película": "Harry Potter y las reliquias de la muerte: Parte 2",
            "titulo_original": "Harry Potter and the Deathly Hallows",
            "fecha_de_lanzamiento": "14 de Julio de 2011",
            "autora": "J. K. Rowling",
            "Director": "David Yates",
            "Producción": "David Heyman, David Barron, J.K. Rowling",
            "descripcion": "Un enfrentamiento entre el bien y el mal espera cuando el joven Harry (Daniel Radcliffe), Ron (Rupert Grint) y Hermione (Emma Watson) se preparan para una última batalla en contra de Lord Voldemort (Ralph Fiennes). Harry se ha convertido en un joven fuerte que tiene la misión de librar al mundo del mal.",
            "imagen": "https://image.tmdb.org/t/p/original/yD3VosOVW8WxPUzBDpEdzfv5pGx.jpg"
        }
        
    ];

    const moviesContainer = document.getElementById('moviesContainer');
    const movieModal = document.getElementById('movieModal');
    const closeModalButton = document.getElementById('closeModal');

    function createMovieCard(movie) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const img = document.createElement('img');
        img.src = movie.imagen;
        img.alt = movie.película;

        movieCard.appendChild(img);

        movieCard.addEventListener('click', function () {
            openModal(movie);
        });

        return movieCard;
    }

    function openModal(movie) {
        document.getElementById('movieTitle').innerText = movie.película;
        document.getElementById('originalTitle').innerText = movie.titulo_original;
        document.getElementById('releaseDate').innerText = movie.fecha_de_lanzamiento;
        document.getElementById('author').innerText = movie.autora;
        document.getElementById('director').innerText = movie.Director;
        document.getElementById('production').innerText = movie.Producción;
        document.getElementById('description').innerText = movie.descripcion;

        movieModal.style.display = 'block';
    }

    function closeModalFunction() {
        movieModal.style.display = 'none';
    }

    closeModalButton.addEventListener('click', closeModalFunction);

    document.addEventListener('click', function (event) {
        if (event.target === movieModal) {
            closeModalFunction();
        }
    });

    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesContainer.appendChild(movieCard);
    });
});

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}


load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})