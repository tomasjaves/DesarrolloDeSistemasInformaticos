// test/Mudanza.spec.ts
import { expect } from 'chai';
import { Mudanza } from '../../src/ejercicio-1/Mudanza';
import { Caja } from '../../src/ejercicio-1/Caja';
import { Prendas } from '../../src/ejercicio-1/Prendas';
import { Tecnologia } from '../../src/ejercicio-1/Tecnologia';

describe('Mudanza', () => {
  it('debería permitir añadir y eliminar cajas', () => {
    const mudanza = new Mudanza();
    const cajaPrendas = new Caja<Prendas>();
    const cajaTecnologia = new Caja<Tecnologia>();

    mudanza.addCaja(cajaPrendas);
    expect(mudanza.getCajas()).to.include(cajaPrendas);

    mudanza.addCaja(cajaTecnologia);
    expect(mudanza.getCajas()).to.include(cajaTecnologia);

    mudanza.removeCaja(0);
    expect(mudanza.getCajas()).to.not.include(cajaPrendas);
    expect(mudanza.getCajas()).to.include(cajaTecnologia);
  });

  it('debería devolver undefined al intentar eliminar una caja que no existe', () => {
    const mudanza = new Mudanza();
    const result = mudanza.removeCaja(0);

    expect(result).to.be.undefined;
  });

  it('debería listar correctamente los enseres de todas las cajas', () => {
    const mudanza = new Mudanza();
    const cajaPrendas = new Caja<Prendas>();
    const camiseta = new Prendas("Camiseta", 0.5, { width: 30, height: 1, depth: 25 }, "Camiseta");
    cajaPrendas.addEnser(camiseta);

    const cajaTecnologia = new Caja<Tecnologia>();
    const movil = new Tecnologia("Móvil", 0.2, { width: 7, height: 0.8, depth: 15 }, "Móvil");
    cajaTecnologia.addEnser(movil);

    mudanza.addCaja(cajaPrendas);
    mudanza.addCaja(cajaTecnologia);

    const originalConsoleLog = console.log;
    let loggedMessage = "";
  
    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };
  
    // Ejecutamos el método que lista los Ensers
    mudanza.listAllEnsers();
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Caja #1:\n${camiseta.getDescription()}\nCaja #2:\n${movil.getDescription()}\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });

  it('debería devolver el peso total de la mudanza', () => {
    const mudanza = new Mudanza();
    const cajaPrendas = new Caja<Prendas>();
    const camiseta = new Prendas("Camiseta", 0.5, { width: 30, height: 1, depth: 25 }, "Camiseta");
    cajaPrendas.addEnser(camiseta);

    const cajaTecnologia = new Caja<Tecnologia>();
    const movil = new Tecnologia("Móvil", 0.2, { width: 7, height: 0.8, depth: 15 }, "Móvil");
    cajaTecnologia.addEnser(movil);

    mudanza.addCaja(cajaPrendas);
    mudanza.addCaja(cajaTecnologia);

    expect(mudanza.getTotalWeight()).to.equal(camiseta.weight + movil.weight);
  });
});
