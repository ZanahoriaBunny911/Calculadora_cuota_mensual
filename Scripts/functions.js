

function calcularCuotaMensual(prestamo, n, i) {
    let cuota = prestamo * ((1 + i) ** n * i) / ((1 + i) ** n - 1);
    return cuota; // Devuelve solo el número
}

export {calcularCuotaMensual};

const historialObjetos = [];

function guardarHistorial(prestamo, n, i, nombre,cuota) {
    const objeto = {
        prestamo: prestamo,
        n: n,
        i: i,
        nombre: nombre,
        cuota: cuota
    };
    historialObjetos.push(objeto);
}

function mostrarHistorial() {
    if (historialObjetos.length === 0) {
        return "No hay historial de préstamos.";
    }
    let resultado = "Historial de préstamos:\n";
    historialObjetos.forEach((obj, index) => {
        resultado += `${index + 1}.  "${obj.nombre}": Cuota $${obj.cuota.toFixed(2)} | (${obj.n} meses)\n`;
    });
    return resultado;
}

export {guardarHistorial, historialObjetos, mostrarHistorial};
