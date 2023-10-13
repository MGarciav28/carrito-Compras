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
   
    //revisa si un elemento ya se encuentra en el arreglo
    const existe = articulosCarrito.some(curso=>curso.id===infoCurso.id)
    if(existe){
        //Actualizamos la cantidad 
        const cursos = articulosCarrito.map(curso=>{
            if(curso.id===infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }            
        })

    }else{
        //Agregamos articulo al carrito
        articulosCarrito= [...articulosCarrito, infoCurso];
    }
   
    
    carritoHTML();
}

//Agrega los elementos al HTML
function carritoHTML(){
    //Limpia el HTML del carrito antes de comenzar
    limpiarCarrito()

    //Recorre cada elemento del arreglo crrito y lo agrega al HTML
    articulosCarrito.forEach(curso =>{
        const{imagen, titulo, precio,id,cantidad}=curso;
        const row = document.createElement('tr');
        row.innerHTML=`
        <td><img src="${imagen}" class="img-table">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `
    contenedorCarrito.appendChild(row);
    })
}

function limpiarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}