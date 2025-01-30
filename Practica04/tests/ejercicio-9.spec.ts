import 'mocha';
import { expect } from 'chai';
import { append, concatenate, filter, length, map, reduce, reverse } from '../src/ejercicio-9';

describe('List Operations', () => {
  describe('append', () => {
    it('debería añadir todos los elementos de la segunda lista al final de la primera', () => {
      expect(append([1, 2], [3, 4])).to.deep.equal([1, 2, 3, 4]);
      expect(append([], [1, 2])).to.deep.equal([1, 2]);
      expect(append([1, 2], [])).to.deep.equal([1, 2]);
      expect(append([], [])).to.deep.equal([]);
    });
  });

  describe('concatenate', () => {
    it('debería combinar todos los elementos de un conjunto de listas en una única lista', () => {
      expect(concatenate([[1, 2], [3], [4, 5]])).to.deep.equal([1, 2, 3, 4, 5]);
      expect(concatenate([])).to.deep.equal([]);
      expect(concatenate([[], [], []])).to.deep.equal([]);
      expect(concatenate([[1], [2], [3]])).to.deep.equal([1, 2, 3]);
    });
  });

  describe('filter', () => {
    it('debería devolver la lista de elementos que cumplen con el predicado', () => {
      const isEven = (n: number) => n % 2 === 0;
      expect(filter(isEven, [1, 2, 3, 4, 5])).to.deep.equal([2, 4]);
      expect(filter(isEven, [1, 3, 5])).to.deep.equal([]);
      expect(filter(isEven, [])).to.deep.equal([]);
      expect(filter(isEven, [2, 4, 6])).to.deep.equal([2, 4, 6]);
    });
  });

  describe('length', () => {
    it('debería devolver el número de elementos contenidos en la lista', () => {
      expect(length([1, 2, 3, 4, 5])).to.equal(5);
      expect(length([])).to.equal(0);
      expect(length([1, 2, 3])).to.equal(3);
      expect(length([1])).to.equal(1);
    });
  });

  describe('map', () => {
    it('debería aplicar la función a todos los elementos de la lista y devolver una nueva lista con los resultados', () => {
      const square = (n: number) => n * n;
      expect(map(square, [1, 2, 3])).to.deep.equal([1, 4, 9]);
      expect(map(square, [])).to.deep.equal([]);
      expect(map(square, [2, 3, 4])).to.deep.equal([4, 9, 16]);
      expect(map(square, [1])).to.deep.equal([1]);
    });
  });

  describe('reduce', () => {
    it('debería reducir los elementos de la lista en un acumulador usando la función dada', () => {
      const sum = (acc: number, item: number) => acc + item;
      expect(reduce(sum, [1, 2, 3, 4], 0)).to.equal(10);
      expect(reduce(sum, [], 0)).to.equal(0);
      expect(reduce(sum, [1, 2, 3], 0)).to.equal(6);
      expect(reduce(sum, [1], 0)).to.equal(1);
    });
  });

  describe('reverse', () => {
    it('debería devolver una lista con los elementos en orden inverso', () => {
      expect(reverse([1, 2, 3, 4])).to.deep.equal([4, 3, 2, 1]);
      expect(reverse([])).to.deep.equal([]);
      expect(reverse([1, 2, 3])).to.deep.equal([3, 2, 1]);
      expect(reverse([1])).to.deep.equal([1]);
    });
  });
});