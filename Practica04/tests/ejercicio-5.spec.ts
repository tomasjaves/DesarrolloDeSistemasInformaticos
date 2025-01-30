import 'mocha';
import { expect } from 'chai';
import { productTable } from '../src/ejercicio-5';

describe('productTable', () => {
    it('debería devolver las primeras 2 tablas de multiplicar para N = 2', () => {
      expect(productTable(2)).to.deep.equal([
        [1, 2],
        [2, 4],
      ]);
    });
  
    it('debería devolver las primeras 3 tablas de multiplicar para N = 3', () => {
      expect(productTable(3)).to.deep.equal([
        [1, 2, 3],
        [2, 4, 6],
        [3, 6, 9],
      ]);
    });
  
    it('debería devolver las primeras 4 tablas de multiplicar para N = 4', () => {
      expect(productTable(4)).to.deep.equal([
        [1, 2, 3, 4],
        [2, 4, 6, 8],
        [3, 6, 9, 12],
        [4, 8, 12, 16],
      ]);
    });
  
    it('debería devolver undefined para N menor que 1', () => {
      expect(productTable(0)).to.be.undefined;
    });
  
    it('debería devolver undefined para valores no enteros de N', () => {
      expect(productTable(2.5)).to.be.undefined;
    });
  
    it('debería manejar correctamente N = 1', () => {
      expect(productTable(1)).to.deep.equal([
        [1],
      ]);
    });
});
