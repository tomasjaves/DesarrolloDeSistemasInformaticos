// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { romanToDecimal, decimalToRoman } from "../src/ejercicio-7";

// Describe la suite de pruebas
describe("Conversiones de números Romanos y Decimales", () => {
  // romanToDecimal
  describe("romanToDecimal", () => {
    // Prueba para el número romano "MCMXCV"
    it("debería convertir MCMXCV a 1995", () => {
      expect(romanToDecimal("MCMXCV")).to.equal(1995);
    });
    // Prueba para el número romano "MMXIV"
    it("debería convertir MMXIV a 2014", () => {
      expect(romanToDecimal("MMXIV")).to.equal(2014);
    });
    // Prueba para un número romano inválido
    it('debería retornar undefined para números romanos inválidos como "XIIII"', () => {
      expect(romanToDecimal("XIIII")).to.be.undefined;
    });
    // Prueba para simular un carácter no definido en el diccionario después de una validación exitosa
    it('debería retornar undefined para un número romano con caracteres inesperados', () => {
      expect(romanToDecimal("IVXQ")).to.be.undefined;
    });
  });

  // decimalToRoman
  describe("decimalToRoman", () => {
    // Prueba para el número decimal 1995
    it("debería convertir 1995 a MCMXCV", () => {
      expect(decimalToRoman(1995)).to.equal("MCMXCV");
    });
    // Prueba para el número decimal 2014
    it("debería convertir 2014 a MMXIV", () => {
      expect(decimalToRoman(2014)).to.equal("MMXIV");
    });
    // Prueba para un número decimal negativo
    it("debería retornar undefined para números negativos como -1995", () => {
      expect(decimalToRoman(-1995)).to.be.undefined;
    });
    // Prueba para el número decimal 0
    it("debería manejar el cero correctamente", () => {
      expect(decimalToRoman(0)).to.be.undefined;
    });
    // Prueba para un número decimal no entero
    it("debería manejar números no enteros correctamente", () => {
      expect(decimalToRoman(1995.5)).to.be.undefined;
    });
  });
});
