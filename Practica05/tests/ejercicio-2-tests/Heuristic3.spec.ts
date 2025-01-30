// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Heuristic3 } from "../../src/ejercicio-2/Heuristic3";
import { MenuInstance } from "../../src/ejercicio-2/MenuInstance";
import { MenuSolution } from "../../src/ejercicio-2/MenuSolution";
import { Plato } from "../../src/ejercicio-2/Dish";

describe("Heuristic3", () => {
  let heuristic3: Heuristic3;

  beforeEach(() => {
    heuristic3 = new Heuristic3();
  });

  it("debería seleccionar platos con mejor relación puntuación nutricional/insalubridad hasta alcanzar el límite de insalubridad", () => {
    const platos = [
      new Plato("Plato1", 9, 2),
      new Plato("Plato2", 5, 7),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 10); // Límite de insalubridad establecido en 10

    const solution: MenuSolution = heuristic3.solve(instanciaMenu);
    const selectedDishes = heuristic3.getSelectedDishes();

    // Verificar que los platos seleccionados tienen una mejor relación puntuación nutricional/insalubridad
    expect(selectedDishes).to.deep.include.members([platos[0], platos[2]]);

    // Verificar que la insalubridad total de los platos seleccionados no excede el límite de insalubridad
    const totalUnhealthiness = selectedDishes.reduce(
      (acc, plato) => acc + plato.insalubridad,
      0,
    );
    expect(totalUnhealthiness).to.be.at.most(10);
  });

  it("debería devolver una solución vacía si el límite de insalubridad es demasiado bajo para seleccionar cualquier plato", () => {
    const platos = [
      new Plato("Plato1", 9, 2),
      new Plato("Plato2", 5, 7),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 1); // Límite de insalubridad establecido en 1

    const solution: MenuSolution = heuristic3.solve(instanciaMenu);
    const selectedDishes = heuristic3.getSelectedDishes();

    // Verificar que no se ha seleccionado ningún plato
    expect(selectedDishes).to.be.empty;
  });

  it("debería devolver los platos seleccionados", () => {
    const platos = [
      new Plato("Plato1", 9, 2),
      new Plato("Plato2", 5, 7),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 10); // Límite de insalubridad establecido en 10

    const solution: MenuSolution = heuristic3.solve(instanciaMenu);
    const selectedDishes = heuristic3.getSelectedDishes();

    // Verificar que los platos seleccionados coinciden con los de la solución
    expect(selectedDishes).to.have.deep.members(solution.getSeleccionados());
  });
});
