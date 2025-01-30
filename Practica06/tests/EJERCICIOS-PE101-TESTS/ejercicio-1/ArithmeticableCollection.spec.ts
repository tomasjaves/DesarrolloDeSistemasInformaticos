import "mocha";
import { expect } from "chai";
import { ArithmeticableCollection } from "../../../src/EJERCICIOS-PE101/ejercicio-1/ArithmeticableCollection";
import { Rational } from "../../../src/EJERCICIOS-PE101/ejercicio-1/Rational";
import { Complex } from "../../../src/EJERCICIOS-PE101/ejercicio-1/Complex";

// Pruebas para ArithmeticableCollection
describe("ArithmeticableCollection", () => {
  // Test 1
  it("Debería devolver el número de racionales", () => {
    const racionales = new ArithmeticableCollection<Rational>();
    racionales.addArithmeticable(new Rational(1, 2));
    racionales.addArithmeticable(new Rational(3, 4));
    expect(racionales.getNumberOfArithmeticables()).to.equal(2);
  });

  // Test 2
  it("Debería devolver el número de complejos", () => {
    const complejos = new ArithmeticableCollection<Complex>();
    complejos.addArithmeticable(new Complex(1, 2));
    complejos.addArithmeticable(new Complex(3, 4));
    expect(complejos.getNumberOfArithmeticables()).to.equal(2);
  });

  // Test 3
  it("Debería devolver los racionales", () => {
    const racionales = new ArithmeticableCollection<Rational>();
    racionales.addArithmeticable(new Rational(1, 2));
    racionales.addArithmeticable(new Rational(3, 4));
    expect(racionales.getArithmeticable(0)).to.deep.equal(new Rational(1, 2));
    expect(racionales.getArithmeticable(1)).to.deep.equal(new Rational(3, 4));
  });

  // Test 4
  it("Debería devolver los complejos", () => {
    const complejos = new ArithmeticableCollection<Complex>();
    complejos.addArithmeticable(new Complex(1, 2));
    complejos.addArithmeticable(new Complex(3, 4));
    expect(complejos.getArithmeticable(0)).to.deep.equal(new Complex(1, 2));
    expect(complejos.getArithmeticable(1)).to.deep.equal(new Complex(3, 4));
  });

  // Test 5
  it("Debería devolver la suma de los racionales", () => {
    const racionales = new ArithmeticableCollection<Rational>();
    racionales.addArithmeticable(new Rational(1, 2));
    racionales.addArithmeticable(new Rational(3, 4));
    expect(racionales.getArithmeticable(0).add(
      racionales.getArithmeticable(1),
    )).to.deep.equal(new Rational(10, 8));
  });

  // Test 6
  it("Debería devolver la suma de los complejos", () => {
    const complejos = new ArithmeticableCollection<Complex>();
    complejos.addArithmeticable(new Complex(1, 2));
    complejos.addArithmeticable(new Complex(3, 4));
    expect(complejos.getArithmeticable(0).add(
      complejos.getArithmeticable(1),
    )).to.deep.equal(new Complex(4, 6));
  });

  // Test 7
  it("Debería devolver la resta de los racionales", () => {
    const racionales = new ArithmeticableCollection<Rational>();
    racionales.addArithmeticable(new Rational(1, 2));
    racionales.addArithmeticable(new Rational(3, 4));
    expect(racionales.getArithmeticable(0).subtract(
      racionales.getArithmeticable(1),
    )).to.deep.equal(new Rational(-2, 8));
  });

  // Test 8
  it("Debería devolver la resta de los complejos", () => {
    const complejos = new ArithmeticableCollection<Complex>();
    complejos.addArithmeticable(new Complex(1, 2));
    complejos.addArithmeticable(new Complex(3, 4));
    expect(complejos.getArithmeticable(0).subtract(
      complejos.getArithmeticable(1),
    )).to.deep.equal(new Complex(-2, -2));
  });

  // Test 9
  it("Debería devolver la multiplicación de los racionales", () => {
    const racionales = new ArithmeticableCollection<Rational>();
    racionales.addArithmeticable(new Rational(1, 2));
    racionales.addArithmeticable(new Rational(3, 4));
    expect(racionales.getArithmeticable(0).multiply(
      racionales.getArithmeticable(1),
    )).to.deep.equal(new Rational(3, 8));
  });

  // Test 10
  it("Debería devolver la multiplicación de los complejos", () => {
    const complejos = new ArithmeticableCollection<Complex>();
    complejos.addArithmeticable(new Complex(1, 2));
    complejos.addArithmeticable(new Complex(3, 4));
    expect(complejos.getArithmeticable(0).multiply(
      complejos.getArithmeticable(1),
    )).to.deep.equal(new Complex(-5, 10));
  });

  // Test 11
  it("Debería devolver la división de los racionales", () => {
    const racionales = new ArithmeticableCollection<Rational>();
    racionales.addArithmeticable(new Rational(1, 2));
    racionales.addArithmeticable(new Rational(3, 4));
    expect(racionales.getArithmeticable(0).divide(
      racionales.getArithmeticable(1),
    )).to.deep.equal(new Rational(4, 6));
  });

  // Test 12
  it("Debería devolver la división de los complejos", () => {
    const complejos = new ArithmeticableCollection<Complex>();
    complejos.addArithmeticable(new Complex(1, 2));
    complejos.addArithmeticable(new Complex(3, 4));
    expect(complejos.getArithmeticable(0).divide(
      complejos.getArithmeticable(1),
    )).to.deep.equal(new Complex(0.44, 0.08));
  });
});
