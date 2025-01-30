import "mocha";
import { expect } from 'chai';
import { Color } from '../../src/EJERCICIO/EColor.js';

describe('Enum Color', () => {
  it('debería tener los valores de cadena correctos', () => {
    expect(Color.Blanco).to.equal('Blanco');
    expect(Color.Azul).to.equal('Azul');
    expect(Color.Negro).to.equal('Negro');
    expect(Color.Rojo).to.equal('Rojo');
    expect(Color.Verde).to.equal('Verde');
    expect(Color.Incoloro).to.equal('Incoloro');
    expect(Color.Multicolor).to.equal('Multicolor');
  });

  it('debería tener valores de cadena únicos', () => {
    const valoresColor = Object.values(Color);
    const valoresUnicos = new Set(valoresColor);
    expect(valoresColor.length).to.equal(valoresUnicos.size);
  });
});
