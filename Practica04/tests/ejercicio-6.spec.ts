import 'mocha';
import { expect } from 'chai';
import { multiplyAll } from '../src/ejercicio-6';


describe('multiplyAll', () => {
    it('debería multiplicar todos los elementos por 3', () => {
      const multiply = multiplyAll([2, 6, 8]);
      expect(multiply(3)).to.deep.equal([6, 18, 24]);
    });
  
    it('debería devolver un array vacío si el array original está vacío', () => {
      const multiply = multiplyAll([]);
      expect(multiply(3)).to.deep.equal([]);
    });
  
    it('debería funcionar con números negativos', () => {
      const multiply = multiplyAll([-2, -6, 8]);
      expect(multiply(3)).to.deep.equal([-6, -18, 24]);
    });
  
    it('debería funcionar con el multiplicador como 0', () => {
      const multiply = multiplyAll([2, 6, 8]);
      expect(multiply(0)).to.deep.equal([0, 0, 0]);
    });
  
    it('debería permitir múltiples invocaciones con diferentes multiplicadores', () => {
      const multiply = multiplyAll([2, 6, 8]);
      expect(multiply(2)).to.deep.equal([4, 12, 16]);
      expect(multiply(-1)).to.deep.equal([-2, -6, -8]);
    });
});