// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { MenuInstance } from "../../src/ejercicio-2/MenuInstance";
import { Plato } from "../../src/ejercicio-2/Dish";

describe("MenuInstance", () => {
  // Creamos algunos platos de ejemplo para usar en las pruebas
  const platos = [
    new Plato("Ensalada Cesar", 9, 2),
    new Plato("Pizza Margarita", 5, 7),
    new Plato("Sopa Minestrone", 8, 3),
  ];

  // Creamos una instancia de MenuInstance para usar en las pruebas
  const instanciaMenu = new MenuInstance(platos, 10);

  it("debería devolver los platos disponibles correctamente", () => {
    // Obtenemos los platos disponibles de la instancia
    const platosDisponibles = instanciaMenu.getPlatos();

    // Verificamos que la cantidad de platos devueltos sea la misma que la cantidad de platos creados
    expect(platosDisponibles).to.have.lengthOf(platos.length);

    // Verificamos que todos los platos devueltos sean instancias de Plato y tengan los mismos valores que los platos creados
    platosDisponibles.forEach((platoDisponible, index) => {
      const platoOriginal = platos[index];
      expect(platoDisponible).to.be.an.instanceOf(Plato);
      expect(platoDisponible.nombre).to.equal(platoOriginal.nombre);
      expect(platoDisponible.puntuacionNutricional).to.equal(
        platoOriginal.puntuacionNutricional,
      );
      expect(platoDisponible.insalubridad).to.equal(platoOriginal.insalubridad);
    });
  });

  it("debería devolver el límite de insalubridad correctamente", () => {
    // Obtenemos el límite de insalubridad de la instancia
    const maxInsalubridad = instanciaMenu.getMaxInsalubridad();

    // Verificamos que el límite de insalubridad devuelto sea el mismo que el límite pasado al constructor
    expect(maxInsalubridad).to.equal(10);
  });
});
