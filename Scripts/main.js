
import {calcularCuotaMensual, guardarHistorial, mostrarHistorial, sumatoriaCuotas, cuotasMayor300K, menor1anio, primerMayor5M, Imenor2, incrementarCuota, decrementarPrestamos, obtenerArregloCuotas} from './functions.js';

const btnCalcular = document.getElementById("calcular");
const btnHistorial = document.getElementById("historial");
const laRespuesta = document.getElementById("laRespuesta");
const btnReportes = document.getElementById("reportes");
const panel = document.getElementById("panel_reportes");
const btnSumatoria = document.getElementById("sumatoria");
const btnCuotasMayor300K = document.getElementById("mayor300k");
const btnCuotasMenor1anio = document.getElementById("menor1anio");
const btnPrestamo5M = document.getElementById("mayor5M");
const btnImenor2 = document.getElementById("interesMenor2");
const btnIncrementarCuota = document.getElementById("+valorCuota");
const btnDecrementarPrestamos = document.getElementById("-valorCuota");
const btnObtenerCuotas = document.getElementById("arregloCuotas");


btnCalcular.addEventListener('click',ingresarDatos);
btnHistorial.addEventListener('click', () => {
    const historial = mostrarHistorial();
    laRespuesta.value = historial;
});

btnReportes.addEventListener('click', () => {
    panel.classList.toggle("panel-visible");
});

btnSumatoria.addEventListener('click', () => {
    const totalCuotas = sumatoriaCuotas();
    if (totalCuotas === 0) {
        laRespuesta.value = "No hay historial de préstamos para calcular la sumatoria.";
        return;
    }else{laRespuesta.value = `La sumatoria de todas las cuotas es: $${totalCuotas.toFixed(2)}`;}
});

btnCuotasMayor300K.addEventListener('click', () => {
    const resultado = cuotasMayor300K();
    laRespuesta.value = resultado;
});

btnCuotasMenor1anio.addEventListener('click', () => {
    const resultado = menor1anio();
    laRespuesta.value = resultado;
});

btnPrestamo5M.addEventListener('click', () => {
    const resultado = primerMayor5M();
    laRespuesta.value = resultado;
});

btnImenor2.addEventListener('click', () => {
    const resultado = Imenor2();
    laRespuesta.value = resultado;
});

btnIncrementarCuota.addEventListener('click', () => {
    const resultado = incrementarCuota();
    laRespuesta.value = resultado;
});

btnDecrementarPrestamos.addEventListener('click', () => {
    const resultado = decrementarPrestamos();
    laRespuesta.value = resultado;
});

btnObtenerCuotas.addEventListener('click', () => {
    const resultado = obtenerArregloCuotas();
    laRespuesta.value = resultado;
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

