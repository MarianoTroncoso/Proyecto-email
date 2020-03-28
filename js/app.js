// ------------------------ VARIABLES ------------------------

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// ------------------------ EVENT LISTENERS ------------------------

eventListeners(); 

function eventListeners(){
    // inicio de la aplicacion
    document.addEventListener('DOMContentLoaded', inicioApp);

    // para validar que los campos tengan algo
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
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










