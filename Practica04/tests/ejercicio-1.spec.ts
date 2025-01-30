// Importamos las funciones a testear
import 'mocha';
import { expect } from 'chai';
import { mcd, abs, inv, add, sub, mult, div } from '../src/ejercicio-1'; // Asegúrate de actualizar la ruta al archivo correctamente

describe('Operaciones con números racionales', () => {
  describe('mcd', () => {
    it('debe calcular el MCD correctamente', () => {
      expect(mcd(20, 0)).to.equal(20);
      expect(mcd(0, 20)).to.equal(20);
      expect(mcd(5, 20)).to.equal(5);
      expect(mcd(20, 5)).to.equal(5);
      expect(mcd(5, 5)).to.equal(5);
      expect(mcd(20, 20)).to.equal(20);
    });
  });
  describe('abs', () => {
    it('debe calcular el valor absoluto de un racional correctamente', () => {
      expect(abs([5, 20])).to.deep.equal([5, 20]);
      expect(abs([-5, 20])).to.deep.equal([5, 20]);
      expect(abs([5, -20])).to.deep.equal([5, 20]);
      expect(abs([-5, -20])).to.deep.equal([5, 20]);
    });
  });
  describe('inv', () => {
    it('debe calcular el inverso multiplicativo correctamente', () => {
      expect(inv([2, 3])).to.deep.equal([3, 2]);
      expect(inv([3, 2])).to.deep.equal([2, 3]);
      expect(inv([1, 1])).to.deep.equal([1, 1]);
      expect(inv([1, 2])).to.deep.equal([2, 1]);
    });
  });
  describe('Operaciones aritméticas', () => {
    it('debe sumar dos racionales correctamente', () => {
      expect(add([1, 2], [1, 3])).to.deep.equal([5, 6]);
      expect(add([1, 3], [1, 2])).to.deep.equal([5, 6]);
      expect(add([1, 2], [1, 2])).to.deep.equal([1, 1]);
      expect(add([1, 3], [1, 3])).to.deep.equal([2, 3]);
    });
    it('debe restar dos racionales correctamente', () => {
      expect(sub([1, 2], [1, 3])).to.deep.equal([1, 6]);
      expect(sub([1, 3], [1, 2])).to.deep.equal([-1, 6]);
      expect(sub([1, 2], [1, 2])).to.deep.equal([0, 1]);
      expect(sub([1, 3], [1, 3])).to.deep.equal([0, 1]);
    });
    it('debe multiplicar dos racionales correctamente', () => {
      expect(mult([2, 3], [3, 4])).to.deep.equal([1, 2]);
      expect(mult([3, 4], [2, 3])).to.deep.equal([1, 2]);
      expect(mult([1, 2], [1, 2])).to.deep.equal([1, 4]);
      expect(mult([1, 3], [1, 3])).to.deep.equal([1, 9]);
    });
    it('debe dividir dos racionales correctamente', () => {
      expect(div([1, 2], [3, 4])).to.deep.equal([2, 3]);
      expect(div([3, 4], [1, 2])).to.deep.equal([3, 2]);
      expect(div([1, 2], [1, 2])).to.deep.equal([1, 1]);
      expect(div([1, 3], [1, 3])).to.deep.equal([1, 1]);
    });
  });
});
