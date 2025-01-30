import "mocha";
import { expect } from 'chai';
import { Rareza } from '../../src/EJERCICIO/ERareza.js';

describe('Enum Rareza', () => {
  it('debería tener los valores de cadena correctos', () => {
    expect(Rareza.Común).to.equal('Común');
    expect(Rareza.Infrecuente).to.equal('Infrecuente');
    expect(Rareza.Rara).to.equal('Rara');
    expect(Rareza.Mítica).to.equal('Mítica');
  });

  it('debería tener valores de cadena únicos', () => {
    const valoresRareza = Object.values(Rareza);
    const valoresUnicos = new Set(valoresRareza);
    expect(valoresRareza.length).to.equal(valoresUnicos.size);
  });
});
