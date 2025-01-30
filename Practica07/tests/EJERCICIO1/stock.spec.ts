// PRUEBAS PARA LA CLASE STOCK

import 'mocha';
import { expect } from 'chai';
import { Stock } from '../../src/EJERCICIO1/stock';
import { Furniture } from '../../src/EJERCICIO1/furniture';
import { Transaction } from '../../src/EJERCICIO1/transaction';
import sinon from 'sinon';



// pruebas para la clase Stock
describe('StockEntity', () => {
  // prueba para comprobar que se puede crear un stock
  it('should create a stock', () => {
    const stock: Stock = new Stock([]);
    expect(stock).to.be.a('object');
  });
  // prueba para comprobar que el stock es privado
  it('should stock be private', () => {
    const stock: Stock = new Stock([]);
    expect(stock).to.have.property('furniturestock');
    expect(stock).to.have.property('transactionshistory');
  });
  // prueba para comprobar que el stock tiene las propiedades correctas
  it('should have the right properties', () => {
    const stock: Stock = new Stock([]);
    expect(stock).to.have.property('furniturestock');
    expect(stock).to.have.property('transactionshistory');
  });
  // comprobar que transactionshistory es privado 
  it('should transactionshistory be private', () => {
    const stock: Stock = new Stock([]);
    expect(stock).to.have.property('transactionshistory');
  });
  // prueba para asegurarnos que el constructor funciona
  it('should have a constructor', () => {
    const stock: Stock = new Stock([]);
    expect(stock).to.have.property('furniturestock');
  });
  // prueba para comprobar que se puede crear un stock vacío
  it('should create an empty stock', () => {
    const stock: Stock = new Stock([]);
    expect(stock).to.be.a('object');
    expect(stock).to.have.property('furniturestock').that.is.an.instanceOf(Map).and.is.empty;
    expect(stock).to.have.property('transactionshistory').that.is.an('array').and.is.empty;
  });
  // comporbamos que el constructor funciona bien inicializando de forma correcta el stock
  let furniture1: Furniture;
  let furniture2: Furniture;
  beforeEach(() => {
    furniture1 = {
      id: 1,
      name: 'Chair',
      description: 'A wooden chair',
      material: 'Wood',
      dimensions: '40x40x90',
      price: 50,
      quantity: 10
    };
    furniture2 = {
      id: 2,
      name: 'Table',
      description: 'A wooden table',
      material: 'Wood',
      dimensions: '100x60x70',
      price: 100,
      quantity: 5
    };
  });
  it('should initialize furniturestock with provided Furniture items', () => {
    const stock: Stock = new Stock([furniture1, furniture2]);
    expect(stock).to.have.property('furniturestock').that.is.an.instanceOf(Map);
    expect(stock['furniturestock'].get('Chair')).to.deep.equal(furniture1);
    expect(stock['furniturestock'].get('Table')).to.deep.equal(furniture2);
  });
  // comporbamos que el constructor es un metodo 
  it('should have a constructor method', () => {
    expect(Stock.prototype.constructor).to.be.a('function');
  });
  // comprobamos que el metodo addItem funciona
  it('should have a addItem method', () => {
    expect(Stock.prototype.addItem).to.be.a('function');
  });
  // funciona correctamente
  let stock: Stock;
  let furniture: Furniture;

  beforeEach(() => {
    furniture = {
      id: 1,
      name: 'Chair',
      description: 'A wooden chair',
      material: 'Wood',
      dimensions: '40x40x90',
      price: 50,
      quantity: 10
    };
    stock = new Stock([]);
  });
  it('should add an item to the stock and create a transaction', () => {
    stock.addItem(furniture, 5);
    expect(stock['furniturestock'].get('Chair')).to.deep.equal(furniture);
    expect(stock['transactionshistory']).to.have.lengthOf(1);
    const transaction = stock['transactionshistory'][0];
    expect(transaction).to.have.property('id').that.is.a('number');
    expect(transaction).to.have.property('date').that.is.a('date');
    expect(transaction).to.have.property('price', furniture.price);
    expect(transaction).to.have.property('quantity', 5);
    expect(transaction).to.have.property('furniture').that.deep.equals(furniture);
  });
  //metodo add iten tieme 5 propiedades consta de un id, una fecha, un precio, una cantidad y un mueble
  it('should have an id, a date, a price, a quantity and a furniture', () => {
    stock.addItem(furniture, 5);
    const transaction = stock['transactionshistory'][0];
    expect(transaction).to.have.property('id').that.is.a('number');
    expect(transaction).to.have.property('date').that.is.a('date');
    expect(transaction).to.have.property('price', furniture.price);
    expect(transaction).to.have.property('quantity', 5);
    expect(transaction).to.have.property('furniture').that.deep.equals(furniture);
  });
  // todas son constantes
  it('should have constant properties', () => {
    stock.addItem(furniture, 5);
    const transaction = stock['transactionshistory'][0];
    expect(transaction).to.have.property('id').that.is.a('number');
    expect(transaction).to.have.property('date').that.is.a('date');
    expect(transaction).to.have.property('price', furniture.price);
    expect(transaction).to.have.property('quantity', 5);
    expect(transaction).to.have.property('furniture').that.deep.equals(furniture);
  });
  // comporbar que el tipo de transacción es compra
  it('should have a transaction type of "Compra"', () => {
    stock.addItem(furniture, 5);
    const transaction = stock['transactionshistory'][0];
    expect(transaction).to.have.property('transactiontype', 'Compra');
  });
  // comporbamos que no retornan tipos de datos incorrectos
  it('should not return incorrect types', () => {
    stock.addItem(furniture, 5);
    const transaction = stock['transactionshistory'][0];
    expect(transaction.id).not.to.be.a('string');
    expect(transaction.price).not.to.be.a('string');
    expect(transaction.quantity).not.to.be.a('string');
  });
  // comprobamos que no tenga propiedades adicionales
  it('should not have additional properties', () => {
    stock.addItem(furniture, 5);
    const transaction = stock['transactionshistory'][0];
    expect(transaction).not.to.have.property('lastName');
  });
  // coprobamos que le id se hace aleatoriamente 
  it('should have a random id', () => {
    stock.addItem(furniture, 5);
    const transaction = stock['transactionshistory'][0];
    expect(transaction.id).to.be.a('number');
  });
  // comprobamos que todo no sea null
  it('should not be null', () => {
    stock.addItem(furniture, 5);
    const transaction = stock['transactionshistory'][0];
    expect(transaction).not.to.be.null;
  });
  // comprobamos que la funcion no retorna nada
  it('should return nothing', () => {
    expect(stock.addItem(furniture, 5)).to.be.undefined;
  });
  // pruebas para la funion removeItem
  it('should have a removeItem method', () => {
    expect(Stock.prototype.removeItem).to.be.a('function');
  });
  // comprobamos que el metodo removeItem funciona
  it('should remove an item from the stock and create a transaction', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock['furniturestock'].get('Chair')).to.deep.equal(furniture);
    expect(stock['transactionshistory']).to.have.lengthOf(2);
    const transaction = stock['transactionshistory'][1];
    expect(transaction).to.have.property('id').that.is.a('number');
    expect(transaction).to.have.property('date').that.is.a('date');
    expect(transaction).to.have.property('price', furniture.price);
    expect(transaction).to.have.property('quantity', 3);
    expect(transaction).to.have.property('furniture').that.deep.equals(furniture);
  });
  // comporbamos que no retorna tipos incorrectos
  it('should not return incorrect types', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    const transaction = stock['transactionshistory'][1];
    expect(transaction.id).not.to.be.a('string');
    expect(transaction.price).not.to.be.a('string');
    expect(transaction.quantity).not.to.be.a('string');
  });
  // comprobamos que transactiontype es venta
  it('should have a transaction type of "Venta"', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    const transaction = stock['transactionshistory'][1];
    expect(transaction).to.have.property('transactiontype', 'Venta');
  });
  // comporbamos que quita el objeto del stock y lo agrega al historial
  it('should remove the item from the stock and add it to the history', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock['furniturestock'].get('Chair')).to.deep.equal(furniture);
    expect(stock['transactionshistory']).to.have.lengthOf(2);
  });
  // comprobamos que tiene 6 propiedades
  it('should have 5 properties', () => {
    stock.addItem(furniture, 6);
    stock.removeItem(furniture, 3);
    const transaction = stock['transactionshistory'][1];
    expect(Object.keys(transaction)).to.have.length(6);
  });
  // comprobamos que tiene las propiedades correctas
  it('should have the right properties', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    const transaction = stock['transactionshistory'][1];
    expect(transaction).to.have.property('id').to.be.a('number');
    expect(transaction).to.have.property('date').to.be.a('date');
    expect(transaction).to.have.property('price').to.be.a('number');
    expect(transaction).to.have.property('quantity').to.be.a('number');
    expect(transaction).to.have.property('furniture').to.be.a('object');
  });
  // pruebas para la funcion printStock
  it('should have a printStock method', () => {
    expect(Stock.prototype.printStock).to.be.a('function');
  });
  // comprobamos que el metodo printStock funciona
  it('should print the stock', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printStock()).to.be.undefined;
  });
  // comporbamos que imprime por consola el stock
  it('should print the stock to the console', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printStock()).to.be.undefined;
  });
  // comporbamos que imprime "nombre..............................cantidad"
  it('should print "name..............................quantity"', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printStock()).to.be.undefined;
  });
  // comporbamos que no retorna nada
  it('should return nothing', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printStock()).to.be.undefined;
  });
  // pruebas para el metodo specificItemInfo
  it('should have a specificItemInfo method', () => {
    expect(Stock.prototype.specificItemInfo).to.be.a('function');
  });
  // comprobamos que el metodo specificItemInfo funciona
  it('should print the information of a specific item', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.specificItemInfo('Chair')).to.be.undefined;
  });
  // comporbamos que imprime por consola la información del mueble
  it('should print the information of the item to the console', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.specificItemInfo('Chair')).to.be.undefined;
  });
  // pruebas para el metodo printTransactions
  it('should have a printTransactions method', () => {
    expect(Stock.prototype.printTransactions).to.be.a('function');
  });
  // comprobamos que el metodo printTransactions funciona
  it('should print the transactions', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printTransactions()).to.be.undefined;
  });
  // comporbamos que imprime por consola las transacciones
  it('should print the transactions to the console', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printTransactions()).to.be.undefined;
  });
  // comprobamos que no retorna nada
  it('should return nothing', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printTransactions()).to.be.undefined;
  });
  // comprobamos que no sea null
  it('should not be null', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    expect(stock.printTransactions()).not.to.be.null;
  });
  // comporbamos que tiene 6 propiedades
  it('should have 6 properties', () => {
    stock.addItem(furniture, 5);
    stock.removeItem(furniture, 3);
    const transaction = stock['transactionshistory'][0];
    expect(Object.keys(transaction)).to.have.length(6);
  });
  // pruebas para el metodo getHistoricInfo
  it('should have a getHistoricInfo method', () => {
    expect(Stock.prototype.getHistoricInfo).to.be.a('function');
  });
  // comprobamos que el metodo getHistoricInfo funciona
  describe('Stock', () => {
    let stock: Stock;
    let furniture: Furniture;
    let consoleLogSpy: sinon.SinonSpy;
  
    beforeEach(() => {
      furniture = {
        id: 1,
        name: 'Chair',
        description: 'A wooden chair',
        material: 'Wood',
        dimensions: '40x40x90',
        price: 50,
        quantity: 10
      };
      stock = new Stock([furniture]);
      stock['transactionshistory'].push({
        id: 1,
        date: new Date(),
        price: 50,
        quantity: 5,
        transactiontype: 'Venta',
        furniture
      });
      consoleLogSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
      consoleLogSpy.restore();
    });
    it('should print the historic information', () => {
      stock.getHistoricInfo(1);
      expect(consoleLogSpy.calledWith("Id de la transacción ............ ")).to.be.false;
      expect(consoleLogSpy.calledWith("Fecha de la transacción .......... ")).to.be.false;
      expect(consoleLogSpy.calledWith("Precio .......................... ")).to.be.false;
      expect(consoleLogSpy.calledWith("Objeto .......................... ")).to.be.false;
      expect(consoleLogSpy.calledWith("Cantidad de objetos ............. ")).to.be.false;
      expect(consoleLogSpy.calledWith("Tipo de transacción ............. ")).to.be.false;
    });
  });
  // pruebas para comporbar que se hace bien
  describe('Stock', () => {
    let stock: Stock;
    let furniture: Furniture;
    let loggedOutput: string[];
    beforeEach(() => {
      furniture = {
        id: 1,
        name: 'Chair',
        description: 'A wooden chair',
        material: 'Wood',
        dimensions: '40x40x90',
        price: 50,
        quantity: 10
      };
      stock = new Stock([furniture]);
      loggedOutput = [];
      console['log'] = (msg: string) => loggedOutput.push(msg);
    });
  
    afterEach(() => {
      console['log'] = console.log;
    });
    it('should update losses on purchase transaction', () => {
      stock['transactionshistory'].push({
        id: 1,
        date: new Date(),
        price: 50,
        quantity: 5,
        transactiontype: 'Compra',
        furniture
      });
      stock.getHistoricInfo(1);
      expect(loggedOutput).to.include("Pérdidas ........................ 50");
    });
  });
  // pruebas linea 170
  describe('getHistoricInfo', () => {
    let stock: Stock;
    let furniture: Furniture;
  
    beforeEach(() => {
      // Initialize the stock entity and furniture item
      stock = new Stock([]);
      furniture = {
        id: 1,
        name: 'Chair',
        description: 'A wooden chair',
        material: 'Wood',
        dimensions: '40x40x90',
        price: 50,
        quantity: 10
      };
    });  
  });
  // prueba para cmoporbar si el dia de la transacción es mayor a fromday
  it('should check if the transaction date is greater than fromday', () => {
    const now = new Date();
    stock['transactionshistory'].push({
      id: 1,
      date: now,
      price: 50,
      quantity: 5,
      transactiontype: 'Venta',
      furniture
    });
    stock.getHistoricInfo(1);
    expect(stock['transactionshistory'][0].date >= now).to.be.true;
  });
  // si el dia de la transacción es mayor a fromday imprime la información
  it('should print the information if the transaction date is greater than fromday', () => {
    const now = new Date();
    stock['transactionshistory'].push({
      id: 1,
      date: now,
      price: 50,
      quantity: 5,
      transactiontype: 'Venta',
      furniture
    });
    stock.getHistoricInfo(1);
    expect(stock['transactionshistory'][0].date >= now).to.be.true;
  });
  it('should print the information if the transaction date is greater than fromday', () => {
    const now = new Date();
    stock['transactionshistory'].push({
      id: 1,
      date: now,
      price: 50,
      quantity: 5,
      transactiontype: 'Venta',
      furniture
    });
    // Spy on console.log
    const logSpy = sinon.spy(console, 'log');
    stock.getHistoricInfo(1);
    // Check if console.log was called with the expected arguments
    expect(logSpy.calledWith("Id de la transacción ............ 1")).to.be.true;
    expect(logSpy.calledWith("Fecha de la transacción ......... " + now.toString())).to.be.true;
    expect(logSpy.calledWith("Precio .......................... 50")).to.be.true;
    expect(logSpy.calledWith("Objeto .......................... Chair")).to.be.true;
    expect(logSpy.calledWith("Cantidad de objetos ............. 5")).to.be.true;
    expect(logSpy.calledWith("Tipo de transacción ............. Venta")).to.be.true;
    // Restore console.log
    logSpy.restore();
  });
  // comprueba si el tipo de transaccion es venta suma el precio al total de perdidas
  it('should update losses on sale transaction', () => {
    stock['transactionshistory'].push({
      id: 1,
      date: new Date(),
      price: 50,
      quantity: 5,
      transactiontype: 'Venta',
      furniture
    });
    stock.getHistoricInfo(1);
    expect(stock['transactionshistory'][0].price).to.be.equal(50);
  });
  // si no es el mas mostselled y tiene el nombre del mueble lo agrega al mapa
  it('should add furniture to mostselled if not already present', () => {
    // Create a Stock instance
    const stock: Stock = new Stock([]);
  
    // Create a transaction
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 100,
      quantity: 1,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Chair',
        description: 'A comfortable chair',
        material: 'Wood',
        dimensions: '50x50x90',
        price: 100,
        quantity: 10
      }
    };
    // Execute the code block
    stock['mostselled'] = new Map<string, [Furniture, number]>();
    stock['mostselled'].set('Chair', [transaction.furniture, 1]); // Add an existing item to mostselled
    stock['transactionshistory'].push(transaction); // Add the transaction to history
    stock.getHistoricInfo(1); // Execute the function with 1 day period
    // Check if the furniture is added to mostselled correctly
    expect(stock['mostselled'].get('Chair')).to.deep.equal([transaction.furniture, 1]);
  });
  // verifica si el mapa mostselled ya contiene un elemento con el nombre del mueble de la transacción actual. mostselled es un mapa que contiene el nombre del mueble y un arreglo con el mueble y la cantidad de veces que se ha vendido
  it('should update the quantity of the furniture in mostselled if already present', () => {
    // Create a Stock instance
    const stock: Stock = new Stock([]);
    // Create a transaction
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 100,
      quantity: 1,
      transactiontype: 'Venta',
      furniture: {
        id: 1,
        name: 'Chair',
        description: 'A comfortable chair',
        material: 'Wood',
        dimensions: '50x50x90',
        price: 100,
        quantity: 10
      }
    };
    // Execute the code block
    stock['mostselled'] = new Map<string, [Furniture, number]>();
    stock['mostselled'].set('Chair', [transaction.furniture, 1]); // Add an existing item to mostselled
    stock['transactionshistory'].push(transaction); // Add the transaction to history
    stock.getHistoricInfo(1); // Execute the function with 1 day period
    // Check if the quantity of the furniture is updated correctly
    expect(stock['mostselled'].get('Chair')).to.deep.equal([transaction.furniture, 1]);
  });
  // Si la transacción actual es de tipo "Compra" SE SUMA EL PRECIO AL TOTAL DE PERDIDAS con el precio de la transacción
  it('should update losses on purchase transaction', () => {
    // Create a Stock instance
    const stock: Stock = new Stock([]);
    // Create a transaction
    const transaction: Transaction = {
      id: 1,
      date: new Date(),
      price: 100,
      quantity: 1,
      transactiontype: 'Compra',
      furniture: {
        id: 1,
        name: 'Chair',
        description: 'A comfortable chair',
        material: 'Wood',
        dimensions: '50x50x90',
        price: 100,
        quantity: 10
      }
    };
    // Execute the code block
    stock['transactionshistory'].push(transaction); // Add the transaction to history
    stock.getHistoricInfo(1); // Execute the function with 1 day period
    // Check if the losses are updated correctly
    expect(stock['transactionshistory'][0].price).to.be.equal(100);
  });
  // Si la transacción actual es de tipo "Venta" SE SUMA EL PRECIO AL TOTAL DE PERDIDAS con el precio de la transacción

});
