// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Enser } from "../../src/ejercicio-1/Enser";
import { Prendas } from "../../src/ejercicio-1/Prendas";
import { Tecnologia } from "../../src/ejercicio-1/Tecnologia";
import { Caja } from "../../src/ejercicio-1/Caja";

describe('Caja', () => {
  it('debería permitir añadir y obtener Prendas y Tecnologia', () => {
    const cajaPrendas = new Caja<Prendas>();
    const cajaTecnologia = new Caja<Tecnologia>();

    const camiseta = new Prendas("Camiseta", 0.5, { width: 30, height: 1, depth: 25 }, "Camiseta");
    const movil = new Tecnologia("Móvil", 0.2, { width: 7, height: 0.8, depth: 15 }, "Móvil");

    cajaPrendas.addEnser(camiseta);
    cajaTecnologia.addEnser(movil);

    expect(cajaPrendas.getEnsers()).to.deep.include(camiseta);
    expect(cajaTecnologia.getEnsers()).to.deep.include(movil);
  });

  it('debería permitir eliminar un Enser por nombre', () => {
    const caja = new Caja<Prendas>();
    const pantalon = new Prendas("Pantalón", 0.75, { width: 40, height: 1, depth: 30 }, "Pantalón");
    caja.addEnser(pantalon);
    const removedEnser = caja.removeEnser('Pantalón');

    expect(removedEnser).to.equal(pantalon);
    expect(caja.getEnsers()).to.be.empty;
  });

  it('debería devolver undefined al intentar eliminar un Enser que no existe', () => {
    const caja = new Caja<Tecnologia>();
    const result = caja.removeEnser('Tablet');

    expect(result).to.be.undefined;
  });

  it('debería encontrar un Enser por nombre', () => {
    const caja = new Caja<Prendas>();
    const camiseta = new Prendas("Camiseta", 0.5, { width: 30, height: 1, depth: 25 }, "Camiseta");
    caja.addEnser(camiseta);

    const foundEnser = caja.findEnser('Camiseta');

    expect(foundEnser).to.equal(camiseta);
  });

  it('debería devolver undefined al buscar un Enser que no existe', () => {
    const caja = new Caja<Tecnologia>();
    const result = caja.findEnser('Laptop');

    expect(result).to.be.undefined;
  });

  it('debería listar correctamente los Ensers en la consola', () => {
    const caja = new Caja<Prendas>();
    const tv = new Tecnologia("TV", 10, { width: 100, height: 50, depth: 10 }, "TV");
    const camiseta = new Prendas("Camiseta", 0.5, { width: 30, height: 1, depth: 25 }, "Camiseta");
    caja.addEnser(camiseta);
    caja.addEnser(tv);
  
    // Guardamos la implementación original de console.log
    const originalConsoleLog = console.log;
    let loggedMessage = "";
  
    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };
  
    // Ejecutamos el método que lista los Ensers
    caja.listEnsers();
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = camiseta.getDescription() + "\n" + tv.getDescription() + "\n";
    expect(loggedMessage).to.equal(expectedDescription);
  });
});




