import "mocha";
import { expect } from "chai";
import { Rational } from "../../../src/EJERCICIOS-PE101/ejercicio-1/Rational";

// Pruebas para Rational
describe("Rational", () => {
  // Test 1
  it("Debería devolver el numerador", () => {
    const rational = new Rational(1, 2);
    expect(rational.getNumerator()).to.equal(1);
  });

  // Test 2
  it("Debería devolver el denominador", () => {
    const rational = new Rational(1, 2);
    expect(rational.getDenominator()).to.equal(2);
  });

  // Test 3
  it("Debería devolver la suma de los números racionales", () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const result = rational1.add(rational2);
    expect(result.getNumerator()).to.equal(10);
    expect(result.getDenominator()).to.equal(8);
  });

  // Test 4
  it("Debería devolver la resta de los números racionales", () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const result = rational1.subtract(rational2);
    expect(result.getNumerator()).to.equal(-2);
    expect(result.getDenominator()).to.equal(8);
  });

  // Test 5
  it("Debería devolver la multiplicación de los números racionales", () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const result = rational1.multiply(rational2);
    expect(result.getNumerator()).to.equal(3);
    expect(result.getDenominator()).to.equal(8);
  });

  // Test 6
  it("Debería devolver la división de los números racionales", () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const result = rational1.divide(rational2);
    expect(result.getNumerator()).to.equal(4);
    expect(result.getDenominator()).to.equal(6);
  });

  // Test 7
  it("Debería devolver un error si el denominador es 0", () => {
    expect(() => new Rational(1, 0)).to.throw("Denominador no puede ser 0");
  });
});