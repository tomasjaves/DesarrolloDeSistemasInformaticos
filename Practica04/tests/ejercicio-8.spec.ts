import 'mocha';
import { expect } from 'chai';
import { getPaths } from '../src/ejercicio-8';

describe('getPaths', () => {
  it('debería devolver todos los caminos posibles para una matriz de 3x2', () => {
    const matrix = [[0, 1], [2, 3], [4, 5]];
    const expectedPaths = [
      [0, 1, 3, 5],
      [0, 2, 3, 5],
      [0, 2, 4, 5]
    ];
    expect(getPaths(3, 2, matrix)).to.deep.equal(expectedPaths);
  });

  // Agrega más casos de prueba según sea necesario
  it('debería devolver un único camino para una matriz de 1x1', () => {
    const matrix = [[0]];
    const expectedPaths = [[0]];
    expect(getPaths(1, 1, matrix)).to.deep.equal(expectedPaths);
  });

  it('debería manejar matrices vacías correctamente', () => {
    const matrix: number[][] = [];
    const expectedPaths: number[][] = [];
    // Asumiendo que queremos que devuelva un arreglo vacío si no hay camino posible
    expect(getPaths(0, 0, matrix)).to.deep.equal(expectedPaths);
  });
});