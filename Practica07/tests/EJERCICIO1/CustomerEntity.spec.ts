// PRUEBAS PARA LA INTERFAZ DE CustomerEntity

import 'mocha';
import { expect } from 'chai';
import { Customer } from '../../src/EJERCICIO1/customer';

// PRUEBAS PARA LA INTERFAZ CUSTOMER
describe('CustomerEntity', () => {
  // prueba para comporbar que se puede crear un cliente
  it('should create a customer', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.be.a('object');
  });
  // prueba para comprobar que el id es un número
  it('should id be a number', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.id).to.be.a('number');
  });
  // prueba para comprobar que el nombre es un string
  it('should name be a string', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.name).to.be.a('string');
  });
  // prueba para comprobar que el contacto es un string
  it('should contact be a string', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.contact).to.be.a('string');
  });
  // prueba para comprobar que la dirección es un string
  it('should address be a string', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.address).to.be.a('string');
  });
  // prueba para comprobar que es una interfaz
  it('should be a interface', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.be.a('object');
  });
  // prueba para verificar que no devuelve un objeto vacío
  it('should not return an empty object', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).not.to.be.empty;
  });
  // prueba para verificar que no devuelve un objeto nulo
  it('should not return a null object', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).not.to.be.null;
  });
  // pruebas para verificar que no se devuelven tipos incorrectos
  it('should not return incorrect types', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.id).not.to.be.a('string');
    expect(customer.name).not.to.be.a('number');
    expect(customer.contact).not.to.be.a('number');
    expect(customer.address).not.to.be.a('number');
  });
  // pruebas para ver que tiene un numro id, un nombre, un contacto y una dirección
  it('should have an id number, a name, a contact and an address', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.have.property('id');
    expect(customer).to.have.property('name');
    expect(customer).to.have.property('contact');
    expect(customer).to.have.property('address');
  });
  // comporbamos que no tenga propiedades adicionales
  it('should not have additional properties', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).not.to.have.property('lastName');
  });
  // comprobamos que tenga 4 propiedades
  it('should have 4 properties', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(Object.keys(customer)).to.have.length(4);
  });
  // comprobamos que tenga las propiedades correctas
  it('should have the right properties', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.have.property('id').to.be.a('number');
    expect(customer).to.have.property('name').to.be.a('string');
    expect(customer).to.have.property('contact').to.be.a('string');
    expect(customer).to.have.property('address').to.be.a('string');
  });
  // comporbamos que el id no sea null
  it('should id not be null', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.id).not.to.be.null;
  });
  // comporbamos que el nombre no sea null
  it('should name not be null', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.name).not.to.be.null;
  });
  // comporbamos que el contacto no sea null
  it('should contact not be null', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.contact).not.to.be.null;
  });
  // comporbamos que la dirección no sea null
  it('should address not be null', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer.address).not.to.be.null;
  });
  // comprobamos que todo no sea undefined
  it('should not be undefined', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: ' 1234567890',
      address: 'Calle 123',
    };
    expect(customer).not.to.be.undefined;
    expect(customer.id).not.to.be.undefined;
    expect(customer.name).not.to.be.undefined;
    expect(customer.contact).not.to.be.undefined;
    expect(customer.address).not.to.be.undefined;
  });
});
