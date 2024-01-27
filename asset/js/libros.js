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

document.addEventListener("DOMContentLoaded", function () {
    const librosContainer = document.getElementById("libros-container");
    const libros = [
        {
            "id": 1,
            "libro": "Harry Potter y la piedra filosofal",
            "titulo_original": "Harry Potter and the Sorcerer's Stone",
            "fecha_de_lanzamiento": "26 de junio de 1997",
            "autora": "J. K. Rowling",
            "descripcion": "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.",
            "imagen": "https://i.pinimg.com/564x/8f/ce/d1/8fced147276216511e425473e777ecc3.jpg"
        },
        {
            "id": 2,
            "libro": "Harry Potter y la cámara secreta",
            "titulo_original": "Harry Potter and the chamber of secrets",
            "fecha_de_lanzamiento": "2 de julio de 1998",
            "autora": "J. K. Rowling",
            "descripcion": "Harry Potter y los estudiantes de segundo año investigan una malévola amenaza para sus compañeros de clases de Hogwarts, una amenazante bestia que se esconde dentro del castillo.",
            "imagen": "https://i.pinimg.com/736x/44/1b/ac/441bac761b248d06b207e5ac68622621.jpg"
        },
        {
            "id": 3,
            "libro": "Harry Potter y el prisionero de Azkaban",
            "titulo_original": "Harry Potter and the Prisoner of Azkaban",
            "fecha_de_lanzamiento": "8 de julio de 1999",
            "autora": "J. K. Rowling",
            "descripcion": "El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.",
            "imagen": "https://i.pinimg.com/564x/fe/ab/df/feabdf0dc61e58571ec10cb26034d21d.jpg"
        },
        {
            "id": 4,
            "libro": "Harry Potter y el cáliz de fuego",
            "titulo_original": "Harry Potter and the Goblet of Fire",
            "fecha_de_lanzamiento": "8 de julio de 2000",
            "autora": "J. K. Rowling",
            "descripcion": "Hogwarts se prepara para el Torneo de los Tres Magos, en el que competirán tres escuelas de hechicería. Para sorpresa de todos, Harry Potter es elegido para participar en la competencia, en la que deberá luchar contra dragones, internarse en el agua y enfrentarse a sus mayores miedos.",
            "imagen": "https://i.pinimg.com/564x/05/52/62/0552626d46609f4d4d1271cac78deae4.jpg"
        },
        {
            "id": 5,
            "libro": "Harry Potter y la orden del Fénix",
            "titulo_original": "Harry Potter and the Order of the Phoenix",
            "fecha_de_lanzamiento": "21 de junio de 2003",
            "autora": "J. K. Rowling",
            "descripcion": "En su quinto año en Hogwarts, Harry descubre que muchos integrantes de la comunidad de magos no conocen la verdad acerca de su encuentro con Lord Voldemort. Cornelius Fudge, ministro de magia, designa a Dolores Umbridge como maestra de defensa contra de las artes oscuras porque cree que el profesor Dumbledore planea apoderarse de su trabajo. Pero sus enseñanzas son inadecuadas, por lo que Harry prepara a los estudiantes para defender la escuela en contra del mal.",
            "imagen": "https://i.pinimg.com/564x/75/ac/4a/75ac4a61f059e8cbe36d56b76be599d6.jpg"
        },
        {
            "id": 6,
            "libro": "Harry Potter y el misterio del príncipe",
            "titulo_original": "Harry Potter and the Half-Blood Prince",
            "fecha_de_lanzamiento": "16 de julio de 2005",
            "autora": "J. K. Rowling",
            "descripcion": "Harry descubre un poderoso libro y, mientras trata de descubrir sus orígenes, colabora con Dumbledore en la búsqueda de una serie de objetos mágicos que ayudarán en la destrucción de Lord Voldemort.",
            "imagen": "https://m.media-amazon.com/images/I/511dRq822gL.jpg"
        },
        {
            "id": 7,
            "libro": "Harry Potter y las reliquias de la muerte",
            "titulo_original": "Harry Potter and the Deathly Hallows",
            "fecha_de_lanzamiento": "21 de julio de 2007",
            "autora": "J. K. Rowling",
            "descripcion": "Harry, Ron y Hermione se van a una peligrosa misión para localizar y destruir el secreto de la inmortalidad y destrucción de Voldemort - los Horrocruces. Solos, sin la guía de sus profesores o la protección del Profesor Dumbledore, los tres amigos deben apoyarse el uno en el otro más que nunca. Pero hay Fuerzas Oss en medio que amenazan con separarlos. Harry Potter se está acercando cada vez más a la tarea para la que se ha preparado desde el primer día que pisó Hogwarts: la última batalla con Voldemort.",
            "imagen": "https://covers.odilo.io/public/OdiloPlace_Pottermore/9781781102701_ORIGINAL.jpg"
        },
        {
            "id": 8,
            "libro": "Harry Potter y el legado maldito",
            "titulo_original": "Harry Potter and the Cursed Child",
            "fecha_de_lanzamiento": "30 de julio de 2016",
            "autora": "J. K. Rowling",
            "descripcion": "El segundo hijo de Harry entró a Hogwarts, pero en Slytherin. Su relación con Harry cada vez es peor y se hizo muy amigo del hijo de Draco, Scorpius Malfoy que se dice que es el hijo de Lord Voldemort",
            "imagen": "https://i.pinimg.com/564x/ae/09/5c/ae095c7e25a02df26f31a9feab8f8468.jpg"
        }
    ];
//forEach es para recorrer el array
    libros.forEach(libro => {
        const libroDiv = document.createElement("div");
        libroDiv.classList.add("libro");
        
        const imagen = document.createElement("img");
        imagen.src = libro.imagen;
        libroDiv.appendChild(imagen);

        const libroInfo = document.createElement("div");
        libroInfo.classList.add("libro-info");
        libroInfo.innerHTML = `<p><strong>${libro.libro}</strong></p>
                               <p>Autora: ${libro.autora}</p>
                               <p>Fecha de lanzamiento: ${libro.fecha_de_lanzamiento}</p>
                               <p>${libro.descripcion}</p>`;

        // Crear la ventana flotante (modal)
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.appendChild(libroInfo);

        libroDiv.addEventListener("click", () => {
            document.body.appendChild(modal);
            modal.style.display = "block";
        });

        librosContainer.appendChild(libroDiv);
    });

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        const modal = document.querySelector(".modal");
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.removeChild(modal);
        }
    };
});