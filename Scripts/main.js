
import {calcularCuotaMensual, historialObjetos, guardarHistorial, mostrarHistorial} from './functions.js';

const btnCalcular = document.getElementById("calcular");
const btnHistorial = document.getElementById("historial");
const laRespuesta = document.getElementById("laRespuesta");
const btnReportes = document.getElementById("reportes");
const panel = document.getElementById("panel_reportes");

btnCalcular.addEventListener('click',ingresarDatos);
btnHistorial.addEventListener('click', () => {
    const historial = mostrarHistorial();
    laRespuesta.value = historial;
});

btnReportes.addEventListener('click', () => {
    panel.classList.toggle("panel-visible");
});

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
    let cuotaNum = calcularCuotaMensual(prestamo, n, i);
    guardarHistorial(prestamo, n, i, nombre, cuotaNum);
    res =`${nombre} debe pagar $${cuotaNum.toFixed(2)} cada mes por el préstamo de $${prestamo.toFixed(2)} a ${n} meses con el interés del ${(i * 100).toFixed(1)}%`;
    
    info +=  res +'\n';
    tARespuesta.value = info;
    }
}

