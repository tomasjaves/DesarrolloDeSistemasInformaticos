import "mocha";
import { expect } from "chai";
import { Hook } from "../../src/EJERCICIO-PE101/Hook.js";

describe('Hook', () => {
  it('debe marcar preProcesar como ejecutado', () => {
    const hook = new Hook();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    hook.preProcesar();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Preprocesamiento de los datos...\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('debe marcar postProcesar como ejecutado y verificar los resultados', () => {
    const hook = new Hook();
    const testResult = { beneficios: [10, 20], pesos: [1, 2] };
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    hook.postProcesar(testResult);

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Postprocesamiento de los datos:\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });
});
