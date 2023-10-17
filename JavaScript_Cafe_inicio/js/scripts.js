// Funciones para selecionar contenido

//querySelector
const heading = document.querySelector('.header__texto h2')   //retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading';
console.log(heading);


// querySelectorAll  retorna 0 o todos los elementos
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');




// getElementById ya no se usa tanto actualmente 

/*const heading2 = document.getElementById('heading');
console.log(heading2);*/

// Generar un nuevo enlace  se hace de esta manera cuando se quiere agregar más dinamismo al sitio, cuando no se sabe que tipo de datos se van a recibir 
const nuevoEnlace = document.createElement('A');

// Agregar el href al enlace
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); //agrega como hijo de esta navegacion al nuevo enlace


console.log(nuevoEnlace);


// Eventos

/*console.log(1);
//registrar eventos 
// hay un evento asociado 
window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
}) //cuando este evento ocurra se ejecuta la funcion


//otra forma de load 
window.onload = function() {
    console.log(3);
}


//DOMContentLoaded solo espera a que se descargue el html
//no espera el CSS o las imágenes por eso se ejecuta primero que load
document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
});


console.log(5);  //estos console log solos, siempre se ejecutan antes

//se puede definir la funcion y solo llamarla
/*function imprimir() {
    console.log(2);
}*/
//asi
/*window.addEventListener('load', imprimir);*/


/*window.onscroll = function() {
    console.log('scrolling...');
}*/

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//    console.log(evento);
//    //esto previene que la pagina se recargue, muy importante en formularios
//    evento.preventDefault();
// });



// Eventos de los Imputs y TextArea 

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

/*nombre.addEventListener('input', function(e) {
    console.log(e.target.value); //para leer el valor del campo
});*/ // utilizar cuando solo es un evento y no se repite codigo

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El eveto de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const {nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return; //Corta la ejecución del código
    }

    // Enviar el formulario
    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e) {
    //console.log(e.target.value);
    // permite ir leyendo toda la informacion en los formularios
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

// Convertimos las 2 funciones siguientes que son similares en 1 sola para mejorar el código
function mostrarAlerta(mensaje, error = null ) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}
//fucion 1
// Muestra una alerta de que se envió correctamente 
//function mostrarMensaje(mensaje) {
    //const alerta = document.createElement('P');
    //alerta.textContent = mensaje;
    //alerta.classList.add('correcto');
    //formulario.appendChild(alerta);

    // desaparezca después de 5 segundos
    //setTimeout(() => {
        //alerta.remove();
   // }, 5000);
//}

//funcion 2
// Muestra un error en pantalla
//function mostrarError(mensaje) {
    //const error = document.createElement('P');
    //error.textContent = mensaje;
    //error.classList.add('error');
    //formulario.appendChild( error ); //alerta
    // Desaparezca alerta después de 5 segundos
    //setTimeout(() => {
     //   error.remove();
   // }, 5000);
//}


