// ------------------------ VARIABLES ------------------------

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');

// ------------------------ EVENT LISTENERS ------------------------

eventListeners(); 

function eventListeners(){
    // inicio de la aplicacion
    document.addEventListener('DOMContentLoaded', inicioApp);

    // para validar que los campos tengan algo
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);
};

// ------------------------ FUNCIONES ------------------------


// todo lo que queremos que se ejecute cuando cargue la pagina
// lo ponemos aca
function inicioApp(){

    // deshabilitar el envio, hasta que complete los cambios
    btnEnviar.disabled = true;
};


// valida que los campos hayan sigo cargados
function validarCampo(){
    // console.log('dentro del imput')

    // validamos que no este vacio y la longitud del texto
    // this en este caso es el campo actual, con lo cual valida
    // para los 3 campos
    validarLongitud(this);

    // validar que el email tenga "@"
    if(this.type === 'email'){
        validarEmail(this);
    }

    // selector con todos los campos que contengan un error
    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        // cuando no hy formulario con error
        if(errores.length === 0){
            btnEnviar.disabled = false;
        };
    };
     
};

// valida la longitud del campo
function validarLongitud(campo){
    
    // el campo no esta vacio
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }
    // el campo si esta vacio
    else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    };
};

// cuando se envia el correo
function enviarEmail(e){
    // spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // gif que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';


    // ocultar spinner y mostrar mail enviado
    // despues de 2 segundo
    setTimeout(function(){
        
        spinnerGif.style.display='none';

        // padre de spinner es loaders
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 3000)
    }, 2000);
};

// verifica la longitud del texto en los campos
function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    };
};












