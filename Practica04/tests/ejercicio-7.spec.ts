import 'mocha';
import { expect } from 'chai';
import { getCartesianPath } from '../src/ejercicio-7';

describe('getCartesianPath', () => {
  it('debería devolver true para un paseo válido que regresa al punto de partida', () => {
    expect(getCartesianPath(['n', 's', 'e', 'o'], 4)).to.equal(true);
  });

  it('debería devolver false para un paseo que no regresa al punto de partida', () => {
    expect(getCartesianPath(['n', 'n', 'e', 'o'], 4)).to.equal(false);
  });

  it('debería devolver undefined para un paseo con duración incorrecta', () => {
    expect(getCartesianPath(['n', 's', 'e', 'o'], 5)).to.equal(undefined);
  });

  it('debería devolver undefined para argumentos no válidos (array vacío)', () => {
    expect(getCartesianPath([], 0)).to.equal(undefined);
  });

  it('debería devolver true para un paseo más largo válido', () => {
    expect(getCartesianPath(['n', 'e', 's', 'o', 'n', 's', 'e', 'o'], 8)).to.equal(true);
  });

  it('debería devolver undefined para direcciones no válidas en el array', () => {
    expect(getCartesianPath(['n', 'x', 'e', 'o'], 4)).to.equal(undefined);
  });

  it('debería manejar correctamente un paseo que hace un bucle completo y regresa al inicio', () => {
    expect(getCartesianPath(['n', 'e', 's', 'o', 's', 'o', 'n', 'e'], 8)).to.equal(true);
  });
});
