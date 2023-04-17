const reglas = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'

}
let resultado='';
let textoFinal;
let input='';
function encriptar() {
    resultado = '';
    document.getElementById("valorEncriptado").innerHTML='';
    document.getElementById("valorDesencriptado").innerHTML ='';
    input = document.getElementById('valorIngresado').value;
    if(input == '' || input.length <=1){
        error('Ingrese al menos un caracter');
        input = '';
        resultado='';
    } else{
    textoFinal = input.toLowerCase();
    resultado = textoFinal.replace(/[aeiou]/g, i => reglas[i])
    document.getElementById("valorEncriptado").innerHTML = resultado;
    textoFinal = '';
    }
}

function copy() {
    if(resultado == '' || resultado.length <=1){
        error('No existe ningun valor a copiar ')
        input = '';
        resultado='';
    } else{
    navigator.clipboard.writeText(resultado);
    document.getElementById("valorEncriptado").innerHTML = '';
    document.getElementById("valorIngresado").value = '';
    document.getElementById("valorDesencriptado").innerHTML = resultado;
    }
    
}
function desencriptar() {
    input = '';
    for (const des in reglas) {
        input = resultado.replaceAll(reglas[des], des);
        resultado = input;
    }
    document.getElementById("valorEncriptado").innerHTML = input;

}
function error(aviso){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: aviso,
        footer: '<a href="">Necesita Ayuda?</a>'
      })
}