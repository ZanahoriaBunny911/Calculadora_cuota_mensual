const misFunciones = require('./scripts/utils');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

let transactionArr = [];

app.use(express.json());
app.use(cors());

// Obtener todo el historial de préstamos
app.get('/transactions', (req, res) => {
    console.log('GET /transactions - Consultando historial');
    res.json(transactionArr);
});

// Procesar nuevo cálculo de cuota
app.post('/transactions', (req, res) => {
    console.log('POST /transactions - Recibiendo datos');
    const transaction = req.body;

    if (transaction.accion === 'Calcular') {
        const { nombre, prestamo, n, i } = transaction;

        // 1. Convertir datos a tipo numérico
        const valPrestamo = parseFloat(prestamo);
        const valPlazo = parseInt(n);
        const valInteres = parseFloat(i); // ej. 0.15 para 15%

        // 2. Calcular cuota y formatear la salida
        const cuota = misFunciones.calcularCuotaMensual(valPrestamo, valPlazo, valInteres);
        const mensajeTexto = misFunciones.formatearRespuesta(nombre, valPrestamo, valPlazo, valInteres, cuota);

        // 3. Guardar objeto en el historial
        const newData = {
            nombre,
            prestamo: valPrestamo,
            n: valPlazo,
            i: valInteres,
            cuota,
            mensajeTexto
        };

        transactionArr.unshift(newData);

        // 4. Responder con JSON
        res.json({
            status: 'ok',
            resultado: newData
        });

    } else {
        // Si la acción es consultar historial
        res.json({
            status: 'ok',
            historial: transactionArr
        });
    }
});

app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:' + port);
});