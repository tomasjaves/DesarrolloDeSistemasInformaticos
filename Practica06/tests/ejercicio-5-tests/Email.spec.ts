import 'mocha'
import { expect } from 'chai';
import { Email } from '../../src/ejercicio-5/Email';
import { NotificationService } from '../../src/ejercicio-5/NotificationService';

describe('EmailService', () => {
  it('debería enviar una notificación via Email', () => {
    const testEmail = new Email();
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    testEmail.notify('Prueba de mensaje via Email');

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Enviando notificación via Email: Prueba de mensaje via Email\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });
});
