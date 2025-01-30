// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Heuristic1 } from "../../src/ejercicio-2/Heuristic1";
import { MenuInstance } from "../../src/ejercicio-2/MenuInstance";
import { MenuSolution } from "../../src/ejercicio-2/MenuSolution";
import { Plato } from "../../src/ejercicio-2/Dish";

describe("Heurística 1", () => {
  let heuristica1: Heuristic1;

  beforeEach(() => {
    heuristica1 = new Heuristic1();
  });

  it("debería seleccionar platos con la mayor puntuación nutricional hasta alcanzar la máxima insalubridad", () => {
    const platos = [
      new Plato("Plato1", 10, 2),
      new Plato("Plato2", 5, 4),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 5); // Máxima insalubridad establecida en 5

    const solucion: MenuSolution = heuristica1.solve(instanciaMenu);

    // Comprueba si la insalubridad total de los platos seleccionados no supera la máxima insalubridad
    const insalubridadTotal = solucion
      .getSeleccionados()
      .reduce((acc, plato) => acc + plato.insalubridad, 0);
    expect(insalubridadTotal).to.be.at.most(5);
  });

  it("debería devolver una solución vacía si la máxima insalubridad es demasiado baja para seleccionar algún plato", () => {
    const platos = [
      new Plato("Plato1", 10, 2),
      new Plato("Plato2", 5, 4),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 1); // Máxima insalubridad establecida en 1

    const solucion: MenuSolution = heuristica1.solve(instanciaMenu);

    expect(solucion.getSeleccionados()).to.be.empty;
  });

  it("debería devolver los platos seleccionados", () => {
    const platos = [
      new Plato("Plato1", 10, 2),
      new Plato("Plato2", 5, 4),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 5); // Máxima insalubridad establecida en 5

    const solucion: MenuSolution = heuristica1.solve(instanciaMenu);
    const platosSeleccionados = heuristica1.getSelectedDishes();

    // Comprueba si los platos seleccionados coinciden con los de la solución
    expect(platosSeleccionados).to.have.deep.members(
      solucion.getSeleccionados(),
    );
  });
});
