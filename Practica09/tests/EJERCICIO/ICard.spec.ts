import { expect } from 'chai';
import { Card } from '../../src/EJERCICIO/ICard.js';
import { Color } from '../../src/EJERCICIO/EColor.js';
import { TipoLinea } from '../../src/EJERCICIO/ETipoLinea.js';
import { Rareza } from '../../src/EJERCICIO/ERareza.js';

describe('Interfaz Card', () => {
  it('debería tener las propiedades requeridas', () => {
    const card: Card = {
      id: 1,
      nombre: 'Ejemplo',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Instantáneo,
      rareza: Rareza.Rara,
      textoReglas: 'Ejemplo de texto de reglas',
      valorMercado: 10
    };

    expect(card).to.have.property('id');
    expect(card).to.have.property('nombre');
    expect(card).to.have.property('costeMana');
    expect(card).to.have.property('color');
    expect(card).to.have.property('líneaTipo');
    expect(card).to.have.property('rareza');
    expect(card).to.have.property('textoReglas');
    expect(card).to.have.property('valorMercado');
  });

  it('debería permitir fuerza y resistencia como opcional', () => {
    const card: Card = {
      id: 1,
      nombre: 'Ejemplo',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Instantáneo,
      rareza: Rareza.Rara,
      textoReglas: 'Ejemplo de texto de reglas',
      valorMercado: 10,
      fuerzaResistencia: [2, 2] // Inserta un valor de ejemplo para fuerza y resistencia
    };

    expect(card).to.have.property('fuerzaResistencia');
  });

  it('debería permitir marcas de lealtad como opcional', () => {
    const card: Card = {
      id: 1,
      nombre: 'Ejemplo',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Instantáneo,
      rareza: Rareza.Rara,
      textoReglas: 'Ejemplo de texto de reglas',
      valorMercado: 10,
      marcasLealtad: 3 // Inserta un valor de ejemplo para marcas de lealtad
    };

    expect(card).to.have.property('marcasLealtad');
  });
});
