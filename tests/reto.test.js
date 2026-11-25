const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { ordenarRutas } = require('../js/app.js');

describe('RETO · ordenarRutas(lista, criterio)', () => {

  const lista = [
    { nombre: 'Zoológico', precio: 50000, duracionHoras: 5 },
    { nombre: 'Árbol del café', precio: 20000, duracionHoras: 3 },
    { nombre: 'Bosque', precio: 0, duracionHoras: 1 }
  ];

  test('Ordena por nombre', () => {
    const resultado = ordenarRutas(lista, 'nombre');
    assert.deepEqual(
      resultado.map(ruta => ruta.nombre),
      ['Árbol del café', 'Bosque', 'Zoológico']
    );
  });

  test('Ordena por precio', () => {
    const resultado = ordenarRutas(lista, 'precio');
    assert.deepEqual(
      resultado.map(ruta => ruta.precio),
      [0, 20000, 50000]
    );
  });

  test('Ordena por duración', () => {
    const resultado = ordenarRutas(lista, 'duracion');
    assert.deepEqual(
      resultado.map(ruta => ruta.duracionHoras),
      [1, 3, 5]
    );
  });

  test('No modifica la lista original', () => {
    const original = lista.map(ruta => ({ ...ruta }));
    const resultado = ordenarRutas(lista, 'precio');

    assert.deepEqual(lista, original);
    assert.notStrictEqual(resultado, lista);
  });

  test('Criterio desconocido devuelve una copia', () => {
    const resultado = ordenarRutas(lista, 'desconocido');

    assert.deepEqual(resultado, lista);
    assert.notStrictEqual(resultado, lista);
  });

});