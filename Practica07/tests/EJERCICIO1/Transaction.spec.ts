// PRUEBASS PARA LA INTERFAZ TRANSACTION

import 'mocha';
import { expect } from 'chai';
import { Transaction } from '../../src/EJERCICIO1/transaction';

// pruebas para la interfaz Transaction
describe('Transaction Entity', () => {
  // prueba para comprobar que se puede crear una transacción
  it('should create a transaction', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
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
  // prueba para comprobar que el id es un número
  it('should id be a number', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
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
    expect(transaction.id).to.be.a('number');
  });
  // prueba para comprobar que la fecha es un objeto Date
  it('should date be a Date', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
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
    expect(transaction.date).to.be.a('Date');
  });
  // prueba para comprobar que el precio es un número
  it('should price be a number', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction.price).to.be.a('number');
  });
  // prueba para comprobar que la cantidad es un número
  it('should quantity be a number', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction.quantity).to.be.a('number');
  });
  // prueba para comprobar que el tipo de transacción es un string
  it('should transactiontype be a string', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction.transactiontype).to.be.a('string');
  });
  // prueba para comprobar que el mueble es un objeto
  it('should furniture be a object', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction.furniture).to.be.a('object');
  });
  // prueba para comprobar que no devuelve un objeto vacío
  it('should not return an empty object', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction).to.not.be.empty;
  });
  // comporbamos que tiene 6 propiedades
  it('should have 6 properties', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(Object.keys(transaction)).to.have.length(6);
  });
  // comprobamos que tiene las propiedades correctas
  it('should have the right properties', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction).to.have.property('id');
    expect(transaction).to.have.property('date');
    expect(transaction).to.have.property('price');
    expect(transaction).to.have.property('quantity');
    expect(transaction).to.have.property('transactiontype');
    expect(transaction).to.have.property('furniture');
  });
  // comprobamos que todo no sea null
  it('should not have null properties', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction.id).not.to.be.null;
    expect(transaction.date).not.to.be.null;
    expect(transaction.price).not.to.be.null;
    expect(transaction.quantity).not.to.be.null;
    expect(transaction.transactiontype).not.to.be.null;
    expect(transaction.furniture).not.to.be.null;
  });
  // comporbamos que la propiedad furniture es un array
  it('should furniture be an array', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction.furniture).to.be.an('object');
  });
  // comprobamos que la propiedad furniture no sea null
  it('should furniture not be null', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(transaction.furniture).not.to.be.null;
  });
  // furniture contiene  7 propiedades
  it('should furniture have 7 properties', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Silla de madera',
        description: 'Silla de madera',
        material: 'Madera',
        dimensions: '40x40x80',
        price: 20,
        quantity: 10
      }
    };
    expect(Object.keys(transaction.furniture)).to.have.length(7);
  });
  // comprobamos que no son de tipos incorrectos
  it('should have the right types', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
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
    expect(transaction.id).to.be.a('number');
    expect(transaction.date).to.be.a('Date');
    expect(transaction.price).to.be.a('number');
    expect(transaction.quantity).to.be.a('number');
    expect(transaction.transactiontype).to.be.a('string');
    expect(transaction.furniture).to.be.an('object');
  });
  
  // comporbamos que no tenga propiedades adicionales
  it('should not have additional properties', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
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
    expect(transaction).not.to.have.property('lastName');
  });
  // comprobamos que es una interfaz
  it('should be an interface', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
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
    expect(transaction).to.be.an('object');
  });
  // comporbamos que tiene un tipo de transacción
  it('should have a transaction type', () => {
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 20,
      quantity: 10,
      transactiontype: 'Venta',
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
    expect(transaction.transactiontype).to.be.a('string');
  });
});