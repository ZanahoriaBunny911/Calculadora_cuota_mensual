
import {calcularCuotaMensual} from './functions.js';

const btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener('click',ingresarDatos);


let info = ''
let tARespuesta = document.getElementById("laRespuesta");


function ingresarDatos(){
    console.log("se esta ejecutando la funcion ingresarDatos")
    let prestamo = parseFloat(document.getElementById("valorPrestamo").value);
    let i = parseFloat(document.getElementById("tasaInteres").value)/100;
    let n = parseInt(document.getElementById("plazoMeses").value);
    let nombre = document.getElementById("nombre").value;
    let res
    
    if (isNaN(prestamo) || isNaN(i) || isNaN(n) || nombre.length==0){
        res = 'El valor, tasa, plazo o nombre no fueron ingresados o tienen valores de entrada errados'
        document.getElementById("error").innerHTML = res;
        console.log(res);
    }else{
    document.getElementById("error").innerHTML = "";
    res = calcularCuotaMensual(prestamo, n, i, nombre);
    info +=  res +'\n';
    tARespuesta.value = info;
    }
}

