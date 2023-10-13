//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){
//Cuando se agrega un curso presionando "Agregar al Carrito"
listaCursos.addEventListener('click', agregarCurso);
}

//Funcion de agregar carrito
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log('Se acaba de agregar el curso')
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del HTML al que le dimos click 
//y extrae la informacion del curso
function leerDatosCurso(curso){
    console.log(curso)

    //Crear objeto del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h3').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1 
    }
    console.log(infoCurso)

    //Agregar elementos al carrito
    articulosCarrito= [...articulosCarrito, infoCurso];
}
