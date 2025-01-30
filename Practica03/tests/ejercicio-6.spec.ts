// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { numberIPsInRange } from "../src/ejercicio-6";

// Describe la suite de pruebas
describe("numberIPsInRange", () => {
  // Prueba para el rango entre "10.0.0.0" y "10.0.0.50"
  it('debería devolver 50 para el rango entre "10.0.0.0" y "10.0.0.50"', () => {
    expect(numberIPsInRange("10.0.0.0", "10.0.0.50")).to.equal(50);
  });
  // Prueba para el rango entre "10.0.0.0" y "10.0.1.0"
  it('debería devolver 256 para el rango entre "10.0.0.0" y "10.0.1.0"', () => {
    expect(numberIPsInRange("10.0.0.0", "10.0.1.0")).to.equal(256);
  });
  // Prueba para el rango entre "20.0.0.10" y "20.0.1.0"
  it('debería devolver 246 para el rango entre "20.0.0.10" y "20.0.1.0"', () => {
    expect(numberIPsInRange("20.0.0.10", "20.0.1.0")).to.equal(246);
  });
  // Prueba para el rango entre "20.0.1.0" y "20.0.0.10"
  it("debería devolver undefined cuando la segunda IP es inferior a la primera", () => {
    expect(numberIPsInRange("20.0.1.0", "20.0.0.10")).to.be.undefined;
  });
  // Prueba para el rango entre "10.0.1.256" y "20.0.0.10"
  it("debería devolver undefined cuando la primera IP no es válida", () => {
    expect(numberIPsInRange("10.0.1.256", "20.0.0.10")).to.be.undefined;
  });
  // Prueba para el rango entre "10.0.1.255" y "20.0.0"
  it("debería devolver undefined cuando la segunda IP no es válida", () => {
    expect(numberIPsInRange("10.0.1.255", "20.0.0")).to.be.undefined;
  });
});
