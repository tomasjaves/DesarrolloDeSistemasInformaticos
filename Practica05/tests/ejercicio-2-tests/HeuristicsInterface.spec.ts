// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { HeuristicsInterface } from "../../src/ejercicio-2/HeuristicsInterface";
import { MenuInstance } from "../../src/ejercicio-2/MenuInstance";
import { MenuSolution } from "../../src/ejercicio-2/MenuSolution";
import { Plato } from "../../src/ejercicio-2/Dish";

class MockHeuristic implements HeuristicsInterface {
  private selectedDishes: Plato[];

  constructor(selectedDishes: Plato[]) {
    this.selectedDishes = selectedDishes;
  }

  solve(menuInstance: MenuInstance): MenuSolution {
    return new MenuSolution(this.selectedDishes);
  }

  getSelectedDishes(): Plato[] {
    return this.selectedDishes;
  }
}

describe("HeuristicsInterface", () => {
  it("debería resolver el problema del menú", () => {
    const platos = [
      new Plato("Plato1", 9, 2),
      new Plato("Plato2", 5, 7),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 10); // Límite de insalubridad establecido en 10

    const mockSelectedDishes = [platos[0], platos[2]]; // Platos seleccionados de forma simulada
    const mockHeuristic = new MockHeuristic(mockSelectedDishes);

    const solution: MenuSolution = mockHeuristic.solve(instanciaMenu);
    const selectedDishes = mockHeuristic.getSelectedDishes();

    // Verificar que los platos seleccionados coinciden con los de la solución
    expect(selectedDishes).to.have.deep.members(solution.getSeleccionados());
  });

  it("debería devolver los platos seleccionados", () => {
    const platos = [
      new Plato("Plato1", 9, 2),
      new Plato("Plato2", 5, 7),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 10); // Límite de insalubridad establecido en 10

    const mockSelectedDishes = [platos[0], platos[2]]; // Platos seleccionados de forma simulada
    const mockHeuristic = new MockHeuristic(mockSelectedDishes);

    const selectedDishes = mockHeuristic.getSelectedDishes();

    // Verificar que los platos seleccionados coinciden con los de la solución
    expect(selectedDishes).to.have.deep.members(mockSelectedDishes);
  });
});
