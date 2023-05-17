"Use stric"
let form = document.querySelector('#form')
form.addEventListener('submit', enviar);



let numero = Math.floor((Math.random() * 1999) + 1);
let numeroCaptcha = document.querySelector('#numero-captcha').innerHTML = numero;


function validacionCaptcha(){
    
    if (numeroCaptcha == document.querySelector ('#captcha').value){
       return true;
    } else {
        return false;
    }
}

function enviar(e){
    e.preventDefault();
    let formdata = new FormData (form);
    let nombre = formdata.get('nombre');
    let apellido = formdata.get('apellido');
    let email = formdata.get('email');
    let titular = formdata.get('titular');
    let numeroTarjeta = formdata.get('numero-tarjeta');
    let fecha = formdata.get('fecha');
    let codigo = formdata.get('codigo');
    let localidad = formdata.get('localidad');
    let calle = formdata.get('calle');
    let calleNumero = formdata.get('calle-numero');
   
    if (validacionCaptcha ()== true){
        document.querySelector('#validacion').innerHTML = " Captcha valido, compra realizada"
    } else {
        document.querySelector('#validacion').innerHTML = " Captcha valido, compra realizada"
    }
}



