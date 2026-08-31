

function calcularCuotaMensual(prestamo, n, i, nombre) {
    let cuota
    cuota= prestamo *((1+i)**n*i)/((1+i)**n-1)
    return `${nombre} debe pagar $${cuota.toFixed(2)} cada mes por el préstamo de $${prestamo.toFixed(2)} a ${n} meses con el interés del ${i * 100}%`
}

export {calcularCuotaMensual};

