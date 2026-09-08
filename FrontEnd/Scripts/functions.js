

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

function sumatoriaCuotas() {
    let total = 0;
    historialObjetos.forEach(obj => {
        total += obj.cuota;
    });
    return total;
}

function cuotasMayor300K(){
    let cuotasMayores = historialObjetos.filter(obj => obj.cuota > 300000);
    if (cuotasMayores.length === 0) {
        return "No hay cuotas mayores a $300,000.";
    }
    let resultado = "Cuotas mayores a $300,000:\n";
    cuotasMayores.forEach((obj, index) => {
        resultado += `${index + 1}.  "${obj.nombre}": Cuota $${obj.cuota.toFixed(2)} | (${obj.n} meses)\n`;
    });
    return resultado;
}

function menor1anio(){
    let cuotasMenores = historialObjetos.filter(obj => obj.n < 12);
    if (cuotasMenores.length === 0) {
        return "No hay cuotas menores a 1 año.";
    }
    let resultado = "Cuotas menores a 1 año:\n";
    cuotasMenores.forEach((obj, index) => {
        resultado += `${index + 1}.  "${obj.nombre}": Cuota $${obj.cuota.toFixed(2)} | (${obj.n} meses)\n`;
    });
    return resultado;
}

function primerMayor5M(){
    let prestamoMayor5M = historialObjetos.find(obj => obj.prestamo > 5000000);
    if (!prestamoMayor5M) {
        return "No hay préstamos mayores a $5,000,000.";
    }
    return `El primer préstamo mayor a $5,000,000 es de "${prestamoMayor5M.nombre}" con un valor de $${prestamoMayor5M.prestamo.toFixed(2)}.`;
}

function Imenor2(){
    let prestamoMenor2 = historialObjetos.find(obj => obj.i < 0.02);
    if (!prestamoMenor2) {
        return "No hay préstamos con interés menor al 2%.";
    }
    return `El primer préstamo con interés menor al 2% es de "${prestamoMenor2.nombre}" con un interés del ${(prestamoMenor2.i * 100).toFixed(1)}%.`;
}

function incrementarCuota(){
    if (historialObjetos.length === 0) {
        return "No hay historial disponible.";
    }

    let cuotasIncrementadas = historialObjetos.map((obj, index) => {
        let nuevaCuota = obj.cuota + 90000;
        return `${index + 1}.  "${obj.nombre}": Cuota original $${obj.cuota.toFixed(2)} | Cuota incrementada $${nuevaCuota.toFixed(2)} | (${obj.n} meses)\n`;
    });

    return "Cuotas incrementadas en $90,000:\n" + cuotasIncrementadas.join("");
}


function decrementarPrestamos() {
    if (historialObjetos.length === 0) return "No hay historial disponible.";

    // .map() calcula el nuevo valor del préstamo para cada objeto
    let prestamosDecrementados = historialObjetos.map((obj, index) => {
        // Math.max evita que el valor quede en números negativos si el préstamo era menor a 90k
        let nuevoPrestamo = Math.max(0, obj.prestamo - 90000); 
        return `${index + 1}. ${obj.nombre}: Nuevo préstamo $${nuevoPrestamo.toFixed(2)} (Antes: $${obj.prestamo.toFixed(2)})`;
    });

    return "Préstamos decrementados en $90.000:\n" + prestamosDecrementados.join("\n");
}

function obtenerArregloCuotas() {
    if (historialObjetos.length === 0) {
        return "No hay préstamos registrados en el historial.";
    }

    // .map() extrae solo el valor numérico de cada cuota
    const soloCuotas = historialObjetos.map(obj => `$${obj.cuota.toFixed(2)}`);

    // .join() une los elementos del arreglo formateados como texto
    return `Arreglo de cuotas:\n[ ${soloCuotas.join(" , ")} ]`;
}

export {guardarHistorial, historialObjetos, mostrarHistorial, sumatoriaCuotas, cuotasMayor300K, menor1anio, primerMayor5M, Imenor2, incrementarCuota, decrementarPrestamos, obtenerArregloCuotas};
