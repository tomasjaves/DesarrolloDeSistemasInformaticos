// Importamos las dependencias necesarias para el test
import 'mocha';
import { expect } from 'chai';
import { SMS } from '../../src/ejercicio-5/SMS';
import { NotificationService } from '../../src/ejercicio-5/NotificationService';

describe('SMS', () => {
  it('debería enviar una notificación via SMS', () => {
    const testSMS = new SMS();
    let loggedMessage = "";

    // Guardamos la implementación original de console.log
    const originalConsoleLog = console.log;

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Ejecutamos el método notify de nuestro servicio SMS
    testSMS.notify('Prueba de mensaje SMS');

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada sea la esperada
    const expectedMessage = `Enviando notificación via SMS: Prueba de mensaje SMS\n`;
    expect(loggedMessage).to.equal(expectedMessage);
  });
});
