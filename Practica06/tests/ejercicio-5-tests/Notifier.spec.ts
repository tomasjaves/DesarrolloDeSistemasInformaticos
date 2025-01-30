import "mocha";
import { expect } from "chai";
import { Notifier } from '../../src/ejercicio-5/Notifier';
import { Email } from '../../src/ejercicio-5/Email';
import { SMS } from '../../src/ejercicio-5/SMS';

describe('Notifier', () => {
  it('debería enviar una notificación via Email', () => {
    const emailNotifier = new Notifier(new Email());
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    emailNotifier.sendNotification('Prueba de mensaje via Email');

    console.log = originalConsoleLog;

    const expectedDescription = `Enviando notificación via Email: Prueba de mensaje via Email\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('debería enviar una notificación via SMS', () => {
    const smsNotifier = new Notifier(new SMS());
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    smsNotifier.sendNotification('Prueba de mensaje SMS');

    console.log = originalConsoleLog;

    const expectedDescription = `Enviando notificación via SMS: Prueba de mensaje SMS\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });
});