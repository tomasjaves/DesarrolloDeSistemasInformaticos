import "mocha";
import { expect } from 'chai';
import { TipoLinea } from '../../src/EJERCICIO/ETipoLinea.js';

describe('Enum TipoLinea', () => {
  it('debería tener los valores de cadena correctos', () => {
    expect(TipoLinea.Tierra).to.equal('Tierra');
    expect(TipoLinea.Criatura).to.equal('Criatura');
    expect(TipoLinea.Encantamiento).to.equal('Encantamiento');
    expect(TipoLinea.Conjuro).to.equal('Conjuro');
    expect(TipoLinea.Instantáneo).to.equal('Instantáneo');
    expect(TipoLinea.Artefacto).to.equal('Artefacto');
    expect(TipoLinea.Planeswalker).to.equal('Planeswalker');
  });

  it('debería tener valores de cadena únicos', () => {
    const valoresTipoLinea = Object.values(TipoLinea);
    const valoresUnicos = new Set(valoresTipoLinea);
    expect(valoresTipoLinea.length).to.equal(valoresUnicos.size);
  });
});
