// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { isLeapYear } from "../src/ejercicio-2";

// Describe la suite de pruebas
describe("isLeapYear", function () {
  // Test para año bisiesto
  it("Debería devolver true si el año es bisiesto", function () {
    // Comprobar que la función isLeapYear devuelve true si el año es bisiesto
    expect(isLeapYear(1996)).to.equal(true);
  });

  // Test para año no bisiesto
  it("Debería devolver false si el año no es bisiesto", function () {
    // Comprobar que la función isLeapYear devuelve false si el año no es bisiesto
    expect(isLeapYear(1997)).to.equal(false);
  });

  // Test para año bisiesto
  it("Debería devolver true si el año es bisiesto", function () {
    // Comprobar que la función isLeapYear devuelve true si el año es bisiesto
    expect(isLeapYear(2000)).to.equal(true);
  });

  // Test para año no bisiesto
  it("Debería devolver false si el año no es bisiesto", function () {
    // Comprobar que la función isLeapYear devuelve false si el año no es bisiesto
    expect(isLeapYear(1900)).to.equal(false);
  });

  // Test para año no válido
  it("Debería devolver undefined si el año no es válido", function () {
    // Comprobar que la función isLeapYear devuelve undefined si el año no es válido
    expect(isLeapYear(-2000)).to.equal(undefined);
  });

  // Test para año no válido
  it("Debería devolver undefined si el año no es válido", function () {
    // Comprobar que la función isLeapYear devuelve undefined si el año no es válido
    expect(isLeapYear(2000.5)).to.equal(undefined);
  });
});
