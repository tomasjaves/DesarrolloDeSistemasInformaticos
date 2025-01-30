// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Plato } from "../../src/ejercicio-2/Dish";

describe("Plato", () => {
  describe("constructor", () => {
    it("debería crear un plato con los atributos correctos", () => {
      const nombre = "Ensalada Cesar";
      const puntuacionNutricional = 9;
      const insalubridad = 2;

      const plato = new Plato(nombre, puntuacionNutricional, insalubridad);

      expect(plato.nombre).to.equal(nombre);
      expect(plato.puntuacionNutricional).to.equal(puntuacionNutricional);
      expect(plato.insalubridad).to.equal(insalubridad);
    });

    it("debería lanzar un error si se proporciona una puntuación nutricional negativa", () => {
      const nombre = "Pizza Margarita";
      const puntuacionNutricional = -5; // Valor negativo
      const insalubridad = 7;

      // Aquí esperamos que el constructor lance un error al intentar crear el plato
      expect(
        () => new Plato(nombre, puntuacionNutricional, insalubridad),
      ).to.throw("Puntuación nutricional debe ser un número positivo");
    });

    it("debería lanzar un error si se proporciona una insalubridad negativa", () => {
      const nombre = "Pizza Margarita";
      const puntuacionNutricional = 5;
      const insalubridad = -7; // Valor negativo

      // Aquí esperamos que el constructor lance un error al intentar crear el plato
      expect(
        () => new Plato(nombre, puntuacionNutricional, insalubridad),
      ).to.throw("Insalubridad debe ser un número positivo");
    });
  });
});
