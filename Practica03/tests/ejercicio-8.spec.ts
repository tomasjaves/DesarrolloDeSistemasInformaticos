// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { getTypeTriangle } from "../src/ejercicio-8";

// Describe la suite de pruebas
describe("getTypeTriangle", () => {
  // Prueba para un triángulo equilátero
  it('debería devolver "Equilátero" para un triángulo equilátero', () => {
    expect(getTypeTriangle(7, 7, 7)).to.equal("Equilátero");
    expect(getTypeTriangle(10, 10, 10)).to.equal("Equilátero");
    expect(getTypeTriangle(15, 15, 15)).to.equal("Equilátero");
  });
  // Prueba para un triángulo isósceles
  it('debería devolver "Isósceles" para un triángulo isósceles', () => {
    expect(getTypeTriangle(5, 5, 9.5)).to.equal("Isósceles");
    expect(getTypeTriangle(3, 3, 4)).to.equal("Isósceles");
    expect(getTypeTriangle(8, 8, 10)).to.equal("Isósceles");
  });
  // Prueba para un triángulo escaleno
  it('debería devolver "Escaleno" para un triángulo escaleno', () => {
    expect(getTypeTriangle(5, 6, 7)).to.equal("Escaleno");
    expect(getTypeTriangle(3, 4, 5)).to.equal("Escaleno");
    expect(getTypeTriangle(8, 6, 10)).to.equal("Escaleno");
  });
  // Prueba para argumentos que no forman un triángulo
  it("debería devolver undefined para argumentos que no forman un triángulo", () => {
    expect(getTypeTriangle(3, 1, 1)).to.be.undefined;
    expect(getTypeTriangle(1, 3, 1)).to.be.undefined;
    expect(getTypeTriangle(1, 1, 3)).to.be.undefined;
  });
  // Prueba para argumentos negativos
  it("debería devolver undefined para argumentos negativos", () => {
    expect(getTypeTriangle(-3, 1, 1)).to.be.undefined;
    expect(getTypeTriangle(3, -1, 1)).to.be.undefined;
    expect(getTypeTriangle(3, 1, -1)).to.be.undefined;
  });
  // Prueba para argumentos con longitud cero
  it("debería devolver undefined para un triángulo con lados de longitud cero (0, 0, 0)", () => {
    expect(getTypeTriangle(0, 0, 0)).to.be.undefined;
  });
  // Prueba para un triángulo con sumas de dos lados iguales al tercero
  it("debería devolver undefined para un triángulo con sumas de dos lados iguales al tercero", () => {
    expect(getTypeTriangle(2, 2, 4)).to.be.undefined;
    expect(getTypeTriangle(3, 3, 6)).to.be.undefined;
    expect(getTypeTriangle(4, 4, 8)).to.be.undefined;
  });
});
