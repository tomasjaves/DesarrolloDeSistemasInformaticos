// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { getTriplets } from "../src/ejercicio-5";

// Describe la suite de pruebas
describe("getTriplets", () => {
  // Prueba para el número 1000
  it('debería devolver "(200, 375, 425)" para el número 1000', () => {
    expect(getTriplets(1000)).to.equal("(200, 375, 425)");
  });
  // Prueba para el número 12
  it("debería devolver una cadena no vacía para un entero positivo con al menos una tripleta pitagórica", () => {
    // Por ejemplo, 12 debería devolver "(3, 4, 5)"
    expect(getTriplets(12)).to.equal("(3, 4, 5)");
  });
  // Prueba para el número 3
  it("debería devolver undefined para 3, ya que no existen tripletas que cumplan la condición", () => {
    expect(getTriplets(3)).to.be.undefined;
  });
  // Prueba para el número 0
  it("debería devolver undefined para 0, ya que no es un entero positivo", () => {
    expect(getTriplets(0)).to.be.undefined;
  });
  // Prueba para el número 11
  it("debería devolver undefined para un entero positivo sin tripletas pitagóricas", () => {
    // Por ejemplo, para 11 no hay tripletas que cumplan la condición
    expect(getTriplets(11)).to.be.undefined;
  });
  // Prueba para números negativos
  it("debería devolver undefined para números negativos", () => {
    expect(getTriplets(-153)).to.be.undefined;
    expect(getTriplets(-1)).to.be.undefined;
    expect(getTriplets(-1000)).to.be.undefined;
  });
});
