// PRUEBAS PARA LA INTERFAZ FURNITURE

import 'mocha';
import { expect } from 'chai';
import { Furniture } from '../../src/EJERCICIO1/furniture';


// pruebas para la interfaz Furniture
describe('FurnitureEntity', () => {
  // comporbamos que tengas las propiedades correctas
  it('should have the right properties', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.have.property('id');
    expect(furniture).to.have.property('name');
    expect(furniture).to.have.property('description');
    expect(furniture).to.have.property('material');
    expect(furniture).to.have.property('dimensions');
    expect(furniture).to.have.property('price');
    expect(furniture).to.have.property('quantity');
  });
  // comprobamos que las propiedades sean del tipo correcto
  it('should have the right types', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture.id).to.be.a('number');
    expect(furniture.name).to.be.a('string');
    expect(furniture.description).to.be.a('string');
    expect(furniture.material).to.be.a('string');
    expect(furniture.dimensions).to.be.a('string');
    expect(furniture.price).to.be.a('number');
    expect(furniture.quantity).to.be.a('number');
  });
  // comprobamos que las propiedades sean requeridas
  it('should have required properties', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture.id).to.exist;
    expect(furniture.name).to.exist;
    expect(furniture.description).to.exist;
    expect(furniture.material).to.exist;
    expect(furniture.dimensions).to.exist;
    expect(furniture.price).to.exist;
    expect(furniture.quantity).to.exist;
  });
  // Comporbamos que es una interfaz
  it('should be an interface', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.be.an('object');
  });
  // comporbamos que no tenga propiedades adicionales
  it('should not have additional properties', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.have.all.keys('id', 'name', 'description', 'material', 'dimensions', 'price', 'quantity');
  });
  // comprobamos que no sea null
  it('should not be null', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.not.be.null;
  });
  // comporbamos que tenga 7 propiedades
  it('should have 7 properties', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(Object.keys(furniture)).to.have.length(7);
  });
  // comprobamos que tenga las propiedades correctas
  it('should have the right properties', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.have.property('id').to.be.a('number');
    expect(furniture).to.have.property('name').to.be.a('string');
    expect(furniture).to.have.property('description').to.be.a('string');
    expect(furniture).to.have.property('material').to.be.a('string');
    expect(furniture).to.have.property('dimensions').to.be.a('string');
    expect(furniture).to.have.property('price').to.be.a('number');
    expect(furniture).to.have.property('quantity').to.be.a('number');
  });
  // comporbamos que es un array
  it('should be an array', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.be.an('object');
  });
  // comporbamos que no sea undefined
  it('should not be undefined', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.not.be.undefined;
  });
});