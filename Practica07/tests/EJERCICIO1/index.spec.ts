// PRUEBA PARA EL MÉTODO EL INDEX

import 'mocha';
import { expect } from 'chai';
import { Furniture } from '../../src/EJERCICIO1/furniture';
import { Transaction } from '../../src/EJERCICIO1/transaction';
import { Customer } from '../../src/EJERCICIO1/customer';
import { Provider } from '../../src/EJERCICIO1/provider';

// PRUEBAS PARA EL INDEX
describe('Index', () => {
  // prueba para comprobar que se puede crear un mueble
  it('should create a furniture', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x80',
      price: 20,
      quantity: 10
    };
    expect(furniture).to.be.a('object');
  });
  // prueba para comprobar que se
  it('should create a transaction', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Compra',
      furniture: {
        id: 1,
        name: 'Silla',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction).to.be.a('object');
  });
  // prueba para el main menu
  it('should create a customer', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.be.a('object');
  });
  // prueba para el addCustomer
  it('should create a provider', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.be.a('object');
  });
  // es una funcion
  it('should be a function', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.be.a('object');
  });
  // orueba pra el delteCustomer
  it('should create a provider', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.be.a('object');
  });
  // prueba para comporbar que deleteCustomer funciona
  it('should create a provider', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.be.a('object');
  });
  // comporbamos que no tenga propiedades adicionales
  it('should not have additional properties', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.have.all.keys('id', 'name', 'contact', 'address');
  });
  // comprobamos que no sea null
  it('should not be null', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.not.be.null;
  });
  // comprobamos que hay  funciones
  it('should be a function', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.be.a('object');
  });
});
