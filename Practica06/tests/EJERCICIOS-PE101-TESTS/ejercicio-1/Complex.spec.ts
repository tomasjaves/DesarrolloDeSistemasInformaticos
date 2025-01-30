import "mocha";
import { expect } from "chai";
import { Complex } from "../../../src/EJERCICIOS-PE101/ejercicio-1/Complex";

// Pruebas para Complex
describe("Complex", () => {
  // Test 1
  it("Debería devolver la parte real", () => {
    const complex = new Complex(1, 2);
    expect(complex.getReal()).to.equal(1);
  });

  // Test 2
  it("Debería devolver la parte imaginaria", () => {
    const complex = new Complex(1, 2);
    expect(complex.getImaginary()).to.equal(2);
  });

  // Test 3
  it("Debería devolver la suma de los números complejos", () => {
    const complex1 = new Complex(1, 2);
    const complex2 = new Complex(3, 4);
    const result = complex1.add(complex2);
    expect(result.getReal()).to.equal(4);
    expect(result.getImaginary()).to.equal(6);
  });

  // Test 4
  it("Debería devolver la resta de los números complejos", () => {
    const complex1 = new Complex(1, 2);
    const complex2 = new Complex(3, 4);
    const result = complex1.subtract(complex2);
    expect(result.getReal()).to.equal(-2);
    expect(result.getImaginary()).to.equal(-2);
  });

  // Test 5
  it("Debería devolver la multiplicación de los números complejos", () => {
    const complex1 = new Complex(1, 2);
    const complex2 = new Complex(3, 4);
    const result = complex1.multiply(complex2);
    expect(result.getReal()).to.equal(-5);
    expect(result.getImaginary()).to.equal(10);
  });

  // Test 6
  it("Debería devolver la división de los números complejos", () => {
    const complex1 = new Complex(1, 2);
    const complex2 = new Complex(3, 4);
    const result = complex1.divide(complex2);
    expect(result.getReal()).to.equal(0.44);
    expect(result.getImaginary()).to.equal(0.08);
  });
});