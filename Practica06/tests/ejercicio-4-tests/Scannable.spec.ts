import 'mocha';
import { expect } from 'chai';
import { Scanner } from '../../src/ejercicio-4/Scanner';

describe('Scanner', () => {
  it('Debería tener un método scan', () => {
    const testScanner = new Scanner();
    expect(testScanner.scan).to.be.a('function');
  });

  it('Debería tener un método scanColor', () => {
    const testScanner = new Scanner();
    expect(testScanner.scanColor).to.be.a('function');
  });

  it('Debería escanear', () => {
    const testScanner = new Scanner();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Ejecutamos el método que lista los Ensers
    testScanner.scan();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Escaneando...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('Debería escanear en color', () => {
    const testScanner = new Scanner();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    testScanner.scanColor();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Escaneando en color...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });
});
