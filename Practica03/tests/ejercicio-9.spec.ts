// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import {
  mcd,
  simplify,
  abs,
  inv,
  add,
  sub,
  mult,
  div,
} from "../src/ejercicio-9";

// Describe la suite de pruebas
describe("Operaciones con Números Racionales", () => {
  // Pruebas para MCD
  describe("mcd", () => {
    // Prueba para el MCD de dos números
    it("debería calcular el MCD de dos números", () => {
      expect(mcd(20, 8)).to.equal(4);
      expect(mcd(5, 20)).to.equal(5);
    });
    // Prueba para el MCD de dos números negativos
    it("debería calcular el MCD de dos números negativos", () => {
      expect(mcd(-20, 8)).to.equal(4);
      expect(mcd(5, -20)).to.equal(5);
    });
    // Prueba para el MCD de dos ceros
    it("debería devolver undefined para el MCD de dos ceros", () => {
      expect(mcd(0, 0)).to.be.undefined;
    });
  });
  // Pruebas para simplificar
  describe("simplify", () => {
    // Prueba para simplificar un número racional
    it("debería simplificar un número racional a su mínima expresión", () => {
      expect(simplify(5, 20)).to.equal("1/4");
      expect(simplify(-12, 8)).to.equal("-3/2");
    });
    // Prueba para denominador 0
    it("debería devolver undefined para denominador 0", () => {
      expect(simplify(1, 0)).to.be.undefined;
      expect(simplify(2, 0)).to.be.undefined;
    });
    // Prueba para numerador y denominador siendo cero
    it("debería devolver undefined para numerador y denominador siendo cero", () => {
      expect(simplify(0, 0)).to.be.undefined;
    });
  });
  // Pruebas para abs
  describe("abs", () => {
    // Prueba para el valor absoluto de un número racional
    it("debería devolver el valor absoluto de un racional", () => {
      expect(abs("-3/9")).to.equal("1/3");
      expect(abs("3/9")).to.equal("1/3");
      expect(abs("-3/-9")).to.equal("1/3");
      expect(abs("3/-9")).to.equal("1/3");
    });
    // Prueba para el valor absoluto de 0
    it("debería devolver 0 para el valor absoluto de 0", () => {
      expect(abs("0/1")).to.equal("0/1");
      expect(abs("0/2")).to.equal("0/1");
    });
    // Pruebas para el caso de un 0 en el denominador
    it("debería devolver undefined para el valor absoluto de un racional con 0 en el denominador", () => {
      expect(abs("1/0")).to.be.undefined;
      expect(abs("-1/0")).to.be.undefined;
    });
  });
  // Pruebas para inv
  describe("inv", () => {
    // Prueba para el inverso multiplicativo de un número racional
    it("debería devolver el inverso multiplicativo de un racional", () => {
      expect(inv("1/4")).to.equal("4/1");
      expect(inv("4/1")).to.equal("1/4");
      expect(inv("-3/9")).to.equal("3/-1");
      expect(inv("3/9")).to.equal("3/1");
    });
    // Prueba para el inverso multiplicativo de 0
    it("debería devolver undefined para el inverso multiplicativo de 0", () => {
      expect(inv("0/1")).to.be.undefined;
      expect(inv("0/2")).to.be.undefined;
      expect(inv("0/3")).to.be.undefined;
      expect(inv("0/4")).to.be.undefined;
    });
    // Prueba para el inverso multiplicativo de un número negativo
    it("debería devolver el inverso multiplicativo de un racional negativo", () => {
      expect(inv("-1/4")).to.equal("4/-1");
      expect(inv("-4/1")).to.equal("1/-4");
      expect(inv("-3/9")).to.equal("3/-1");
      expect(inv("3/-9")).to.equal("-3/1");
    });
  });
  // Pruebas para add
  describe("add", () => {
    // Prueba para la suma de dos racionales
    it("debería sumar dos racionales", () => {
      expect(add("1/3", "2/3")).to.equal("1");
      expect(add("1/4", "1/4")).to.equal("1/2");
      expect(add("2/3", "1/6")).to.equal("5/6");
      expect(add("1/2", "3/4")).to.equal("5/4");
    });
    // Prueba para la suma de un racional con 0
    it("debería devolver el racional no nulo para la suma de un racional con 0", () => {
      expect(add("1/3", "0/1")).to.equal("1/3");
      expect(add("0/1", "1/3")).to.equal("1/3");
    });
    // Prueba para la suma de dos racionales negativos
    it("debería sumar dos racionales negativos", () => {
      expect(add("-1/3", "-2/3")).to.equal("-1/1");
      expect(add("-1/4", "-1/4")).to.equal("-1/2");
      expect(add("-2/3", "-1/6")).to.equal("-5/6");
      expect(add("-1/2", "-3/4")).to.equal("-5/4");
    });
    // Prueba para 0 en el denominador
    it("debería devolver undefined para la suma de racionales con 0 en el denominador", () => {
      expect(add("1/0", "1/1")).to.be.undefined;
      expect(add("1/1", "1/0")).to.be.undefined;
      expect(add("1/0", "1/0")).to.be.undefined;
      expect(add("1/0", "0/1")).to.be.undefined;
    });
  });
  // Pruebas para sub
  describe("sub", () => {
    // Prueba para la resta de dos racionales
    it("debería restar dos racionales", () => {
      expect(sub("2/3", "1/6")).to.equal("1/2");
      expect(sub("1/2", "3/4")).to.equal("-1/4");
      expect(sub("1/4", "1/4")).to.equal("0/1");
      expect(sub("1/3", "2/3")).to.equal("-1/3");
    });
    // Prueba para la resta de un racional con 0
    it("debería devolver el racional no nulo para la resta de un racional con 0", () => {
      expect(sub("1/3", "0/1")).to.equal("1/3");
      expect(sub("0/1", "1/3")).to.equal("-1/3");
    });
    // Prueba para la resta de dos racionales negativos
    it("debería restar dos racionales negativos", () => {
      expect(sub("-2/3", "-1/6")).to.equal("-1/2");
      expect(sub("-1/2", "-3/4")).to.equal("1/4");
      expect(sub("-1/4", "-1/4")).to.equal("0/1");
      expect(sub("-1/3", "-2/3")).to.equal("1/3");
    });
    // Prueba para 0 en el denominador
    it("debería devolver undefined para la resta de racionales con 0 en el denominador", () => {
      expect(sub("1/0", "1/1")).to.be.undefined;
      expect(sub("1/1", "1/0")).to.be.undefined;
      expect(sub("1/0", "1/0")).to.be.undefined;
      expect(sub("1/0", "0/1")).to.be.undefined;
    });
  });
  // Pruebas para mult
  describe("mult", () => {
    // Prueba para la multiplicación de dos racionales
    it("debería multiplicar dos racionales", () => {
      expect(mult("1/4", "2/3")).to.equal("1/6");
      expect(mult("1/3", "2/3")).to.equal("2/9");
      expect(mult("1/2", "3/4")).to.equal("3/8");
      expect(mult("1/3", "1/3")).to.equal("1/9");
    });
    // Prueba para la multiplicación de un racional con 0
    it("debería devolver 0 para la multiplicación de un racional con 0", () => {
      expect(mult("1/3", "0/1")).to.equal("0/1");
      expect(mult("0/1", "1/3")).to.equal("0/1");
    });
    // Prueba para la multiplicación de dos racionales negativos
    it("debería multiplicar dos racionales negativos", () => {
      expect(mult("-1/4", "-2/3")).to.equal("1/6");
      expect(mult("-1/3", "-2/3")).to.equal("2/9");
      expect(mult("-1/2", "-3/4")).to.equal("3/8");
      expect(mult("-1/3", "-1/3")).to.equal("1/9");
    });
    // Prueba para 0 en el denominador
    it("debería devolver undefined para la multiplicación de racionales con 0 en el denominador", () => {
      expect(mult("1/0", "1/1")).to.be.undefined;
      expect(mult("1/1", "1/0")).to.be.undefined;
      expect(mult("1/0", "1/0")).to.be.undefined;
      expect(mult("1/0", "0/1")).to.be.undefined;
    });
  });
  // Pruebas para div
  describe("div", () => {
    // Prueba para la división de dos racionales
    it("debería dividir dos racionales", () => {
      expect(div("1/2", "3/4")).to.equal("2/3");
      expect(div("1/4", "2/3")).to.equal("3/8");
      expect(div("1/3", "2/3")).to.equal("1/2");
      expect(div("1/3", "1/3")).to.equal("1");
    });
    // Prueba para la división de un racional con 0
    it("debería devolver undefined para la división de un racional con 0", () => {
      expect(div("1/3", "0/1")).to.be.undefined;
      expect(div("0/1", "1/3")).to.equal("0/1");
    });
    // Prueba para la división de dos racionales negativos
    it("debería dividir dos racionales negativos", () => {
      expect(div("-1/2", "-3/4")).to.equal("2/3");
      expect(div("-1/4", "-2/3")).to.equal("3/8");
      expect(div("-1/3", "-2/3")).to.equal("1/2");
      expect(div("-1/3", "-1/3")).to.equal("1");
    });
    // Prueba para 0 en el denominador
    it("debería devolver undefined para la división de racionales con 0 en el denominador", () => {
      expect(div("1/0", "1/1")).to.be.undefined;
      expect(div("1/1", "1/0")).to.equal("0/1");
      expect(div("1/0", "1/0")).to.be.undefined;
      expect(div("1/0", "0/1")).to.be.undefined;
    });
  });
});
