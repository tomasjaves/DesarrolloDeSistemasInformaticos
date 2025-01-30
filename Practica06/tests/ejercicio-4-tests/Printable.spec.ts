import 'mocha';
import { expect } from 'chai';
import { Printer } from '../../src/ejercicio-4/Printer';

describe('Printer', () => {
  it('debería tener un método print', () => {
    const testPrinter = new Printer();
    expect(testPrinter.print).to.be.a('function');
  });

  it('debería tener un método printDuplex', () => {
    const testPrinter = new Printer();
    expect(testPrinter.printDuplex).to.be.a('function');
  });

  it('debería imprimir', () => {
    const testPrinter = new Printer();
    const originalConsoleLog = console.log;
    let loggedMessage = "";
  
    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };
  
    // Ejecutamos el método que lista los Ensers
    testPrinter.print();
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Imprimiendo...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('debería imprimir a doble cara', () => {
    const testPrinter = new Printer();
    const originalConsoleLog = console.log;
    let loggedMessage = "";
  
    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };
  
    testPrinter.printDuplex();
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Imprimiendo a doble cara...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });
});
