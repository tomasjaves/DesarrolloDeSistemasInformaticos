import 'mocha';
import { expect } from 'chai';
import { PrinterScanner } from '../../src/ejercicio-4/PrinterScanner';
import { Printer } from '../../src/ejercicio-4/Printer';

describe('PrinterScanner', () => {
  it('debería tener un método print', () => {
    const testPrinterScanner = new PrinterScanner();
    expect(testPrinterScanner.print).to.be.a('function');
  });

  it('debería tener un método scan', () => {
    const testPrinterScanner = new PrinterScanner();
    expect(testPrinterScanner.scan).to.be.a('function');
  });

  it('debería tener un método printDuplex', () => {
    const testPrinterScanner = new PrinterScanner();
    expect(testPrinterScanner.printDuplex).to.be.a('function');
  });

  it('debería tener un método scanColor', () => {
    const testPrinterScanner = new PrinterScanner();
    expect(testPrinterScanner.scanColor).to.be.a('function');
  });

  it('debería imprimir', () => {
    const testPrinterScanner = new PrinterScanner();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Ejecutamos el método que lista los Ensers
    testPrinterScanner.print();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Imprimiendo...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('debería imprimir a doble cara', () => {
    const testPrinterScanner = new PrinterScanner();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    testPrinterScanner.printDuplex();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Imprimiendo a doble cara...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('debería escanear', () => {
    const testPrinterScanner = new PrinterScanner();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Ejecutamos el método que lista los Ensers
    testPrinterScanner.scan();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Escaneando...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('debería escanear en color', () => {
    const testPrinterScanner = new PrinterScanner();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    testPrinterScanner.scanColor();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Escaneando en color...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });
});
