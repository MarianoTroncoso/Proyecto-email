// ------------------------ VARIABLES ------------------------

const email = document.getElementById('email');
const asunto = document.getElementById('asunto ');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// ------------------------ EVENT LISTENERS ------------------------

eventListeners(); 

function eventListeners(){
    // inicio de la aplicacion
    document.addEventListener('DOMContentLoaded', inicioApp);
};

// ------------------------ FUNCIONES ------------------------


// todo lo que queremos que se ejecute cuando cargue la pagina
// lo ponemos aca
function inicioApp(){

    // deshabilitar el envio, hasta que complete los cambios
    btnEnviar.disabled = true;
};














