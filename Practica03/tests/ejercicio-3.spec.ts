// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { fromIntToActions } from "../src/ejercicio-3";

// Describe la suite de pruebas
describe("fromIntToActions", () => {
  // Prueba para el número 1
  it('debería devolver "parpadear" para el número 1', () => {
    expect(fromIntToActions(1)).to.equal("parpadear");
  });
  // Prueba para el número 3
  it('debería devolver "parpadear, parpadear dos veces" para el número 3', () => {
    expect(fromIntToActions(3)).to.equal("parpadear dos veces, parpadear");
  });
  // Prueba para el número 19
  it('debería devolver "parpadear, mover la nariz, saltar" para el número 19', () => {
    expect(fromIntToActions(19)).to.equal(
      "saltar, parpadear dos veces, parpadear",
    );
  });
  // Prueba para el número 31
  it('debería devolver "parpadear, parpadear dos veces, mover la nariz, levantar las cejas, saltar" para el número 31', () => {
    expect(fromIntToActions(31)).to.equal(
      "saltar, levantar las cejas, mover la nariz, parpadear dos veces, parpadear",
    );
  });
  // Prueba para el número 0
  it("debería devolver undefined para el número 0", () => {
    expect(fromIntToActions(0)).to.be.undefined;
  });
  // Prueba para el número 32
  it("debería devolver undefined para el número 32", () => {
    expect(fromIntToActions(32)).to.be.undefined;
  });
  // Prueba para números negativos
  it("debería devolver undefined para números negativos", () => {
    expect(fromIntToActions(-3)).to.be.undefined;
  });
});
