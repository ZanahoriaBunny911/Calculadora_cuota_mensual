function calcularCuotaMensual(prestamo, n, i) {
    let cuota = prestamo * (((1 + i) ** n) * i) / (((1 + i) ** n) - 1);
    return cuota;
}

function formatearRespuesta(nombre, prestamo, n, i, cuota) {
    let cuotaFmt = cuota.toFixed(2);
    let prestamoFmt = prestamo.toFixed(2);
    let interesPorcentaje = (i * 100).toFixed(1);

    return `${nombre} - $ ${cuotaFmt} $ ${prestamoFmt} ${n} meses interés ${interesPorcentaje}%`;
}
module.exports = { calcularCuotaMensual, formatearRespuesta };