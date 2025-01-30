// Importamos las funciones a testear y las librerías necesarias
import "mocha";
import { expect } from "chai";
import { normalizeString, squareEncoding } from "../src/ejercicio-10";

// Describe la suite de pruebas
// Pruebas para normalizeString
describe("normalizeString", () => {
  // Prueba para eliminar espacios y convertir a minúsculas
  it("debería eliminar espacios y convertir a minúsculas", () => {
    const result = normalizeString("Hola Mundo");
    expect(result).to.equal("holamundo");
  });
  // Prueba para eliminar signos de puntuación
  it("debería eliminar signos de puntuación", () => {
    const result = normalizeString("¡Hola, Mundo!");
    expect(result).to.equal("holamundo");
  });
  // Prueba para eliminar acentos
  it("debería eliminar acentos", () => {
    const result = normalizeString("Canción");
    expect(result).to.equal("cancion");
  });
  // Prueba para manejar cadenas vacías
  it("debería manejar cadenas vacías correctamente", () => {
    const result = normalizeString("");
    expect(result).to.equal("");
  });
  // Prueba para eliminar caracteres especiales
  it("debería eliminar caracteres especiales", () => {
    const result = normalizeString("desarrollo@software.com");
    expect(result).to.equal("desarrollosoftwarecom");
  });
  // Prueba para procesar cadenas con mayúsculas y minúsculas
  it("debería procesar cadenas con mayúsculas y minúsculas", () => {
    const result = normalizeString("DesArroLLo");
    expect(result).to.equal("desarrollo");
  });
  // Prueba para manejar combinaciones de todos los casos anteriores
  it("debería manejar combinaciones de todos los casos anteriores", () => {
    const result = normalizeString("¡Él Trabaja en Desarrollo_Software, 2023!");
    expect(result).to.equal("eltrabajaendesarrollosoftware2023");
  });
});

// Pruebas para squareEncoding
describe("squareEncoding", () => {
  // Prueba para cadena de ejemplo
  it("debería codificar correctamente la cadena dada", () => {
    const input =
      "A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.";
    const expected =
      "aldlemlp epelmael drdoatga uoedsiug afseicsi reasnoto dsrifsa  oorsone  erotrol ";
    expect(squareEncoding(input)).to.equal(expected);
  });
  // Prueba para cadena vacía
  it("debería manejar cadenas cortas", () => {
    const input = "Hola";
    const expected = "hl oa";
    expect(squareEncoding(input)).to.equal(expected);
  });
  // Prueba para cadena vacía
  it("debería manejar cadenas con longitud de cuadrado perfecto", () => {
    const input = "abcd";
    const expected = "ac bd";
    expect(squareEncoding(input)).to.equal(expected);
  });
  // Prueba para cadena vacía
  it("debería devolver una cadena vacía si la entrada es solo espacios y puntuación", () => {
    const input = "., ";
    const expected = "";
    expect(squareEncoding(input)).to.equal(expected);
  });
  // Prueba para mayúsculas y minúsculas
  it("debería tratar las mayúsculas y minúsculas por igual y eliminar acentos", () => {
    const input = "Él es Édgar.";
    const expected = "esg lea edr";
    expect(squareEncoding(input)).to.equal(expected);
  });
  // Prueba para intentar forzar la condición de rectangle[row] indefinido
  it("debería manejar correctamente un caso extremo de rectángulo", () => {
    const input = "Esta es una prueba extrema";
    const expected = "esrem suuxa tnet  aabr  epae ";
    expect(squareEncoding(input)).to.equal(expected);
  });

});
