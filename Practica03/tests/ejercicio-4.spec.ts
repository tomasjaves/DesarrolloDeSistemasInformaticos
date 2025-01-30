// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { collatz } from "../src/ejercicio-4";

// Describe la suite de pruebas
describe("collatz", () => {
  // Prueba para el número 10
  it("debería devolver 6 para el número 10", () => {
    expect(collatz(10)).to.equal(6);
  });
  // Prueba para el número 1
  it("debería devolver 0 para el número 1", () => {
    expect(collatz(1)).to.equal(0);
  });
  // Prueba para el número 2
  it("debería devolver 1 para el número 2", () => {
    expect(collatz(2)).to.equal(1);
  });
  // Prueba para 0
  it("debería devolver undefined para 0", () => {
    expect(collatz(0)).to.be.undefined;
  });
  // Prueba para números no enteros
  it("debería devolver un número específico de pasos para números mayores", () => {
    expect(collatz(27)).to.be.a("number");
    expect(collatz(90.3)).to.be.undefined;
  });
  // Prueba para números negativos
  it("debería devolver undefined para números negativos", () => {
    expect(collatz(-3)).to.be.undefined;
  });
});
