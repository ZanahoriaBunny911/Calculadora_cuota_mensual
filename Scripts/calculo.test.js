import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularCuotaMensual } from './main.js'; // Ajusta la ruta a tu archivo

test('Prueba de cuota mensual', () => {
    const resultado = calcularCuotaMensual(1000, 12, 0.02, "Bryan");
    const esperado = "Bryan debe pagar $94.56 cada mes por el préstamo de $1000.00 a 12 meses con el interés del 2%";

    assert.strictEqual(resultado, esperado);
});