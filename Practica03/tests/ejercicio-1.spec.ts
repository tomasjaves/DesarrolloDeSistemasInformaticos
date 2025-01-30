// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { checkCreditCard } from "../src/ejercicio-1";

// Describe la suite de pruebas
describe("checkCreditCard", function () {
  // Test para tarjeta de crédito válida
  it("Debería devolver true si la tarjeta de crédito es válida", function () {
    // Comprobar que la función checkCreditCard devuelve true si la tarjeta de crédito es válida
    expect(checkCreditCard("4556364607935616")).to.equal("valid");
    expect(checkCreditCard("4532756279624064")).to.equal("valid");
    expect(checkCreditCard("1234567890123452")).to.equal("valid");
  });
  // Test para tarjeta de crédito no válida
  it("Debería devolver false si la tarjeta de crédito no es válida", function () {
    // Comprobar que la función checkCreditCard devuelve false si la tarjeta de crédito no es válida
    expect(checkCreditCard("4024007106512380")).to.equal("notValid");
    expect(checkCreditCard("1234567890123456")).to.equal("notValid");
    expect(checkCreditCard("4024007106512380")).to.equal("notValid");
  });
  // Test para tarjeta de crédito con numeros negativos
  it("Debería devolver false si la tarjeta de crédito no es válida", function () {
    // Comprobar que la función checkCreditCard devuelve false si la tarjeta de crédito no es válida
    expect(checkCreditCard("-4556364607935616")).to.equal(undefined);
    expect(checkCreditCard("-4532756279624064")).to.equal(undefined);
    expect(checkCreditCard("-4024007106512380")).to.equal(undefined);
  });
  // Test para tarjeta de crédito con numeros decimales
  it("Debería devolver false si la tarjeta de crédito no es válida", function () {
    // Comprobar que la función checkCreditCard devuelve false si la tarjeta de crédito no es válida
    expect(checkCreditCard("4556364607935616.5")).to.equal(undefined);
    expect(checkCreditCard("4556364607935616.6")).to.equal(undefined);
    expect(checkCreditCard("4556364607935616.7")).to.equal(undefined);
  });
  // Test para tarjeta de crédito con letras
  it("Debería devolver false si la tarjeta de crédito no es válida", function () {
    // Comprobar que la función checkCreditCard devuelve false si la tarjeta de crédito no es válida
    expect(checkCreditCard("4556364607935616a")).to.equal(undefined);
    expect(checkCreditCard("4556364607935616b")).to.equal(undefined);
    expect(checkCreditCard("4556364607935616c")).to.equal(undefined);
  });
  // Test para tarjeta de crédito con longitud incorrecta
  it("Debería devolver false si la tarjeta de crédito no es válida", function () {
    // Comprobar que la función checkCreditCard devuelve false si la tarjeta de crédito no es válida
    expect(checkCreditCard("455636460793561")).to.equal(undefined);
    expect(checkCreditCard("45563646079356167")).to.equal(undefined);
    expect(checkCreditCard("455636460793561678")).to.equal(undefined);
  });
});
