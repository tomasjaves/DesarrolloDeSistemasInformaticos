// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Heuristic2 } from "../../src/ejercicio-2/Heuristic2";
import { MenuInstance } from "../../src/ejercicio-2/MenuInstance";
import { MenuSolution } from "../../src/ejercicio-2/MenuSolution";
import { Plato } from "../../src/ejercicio-2/Dish";

describe("Heurística 2", () => {
  let heuristica2: Heuristic2;

  beforeEach(() => {
    heuristica2 = new Heuristic2();
  });

  it("debería seleccionar platos con la mejor puntuación nutricional y la menor insalubridad hasta alcanzar el límite de insalubridad", () => {
    const platos = [
      new Plato("Plato1", 10, 2),
      new Plato("Plato2", 5, 4),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 10); // Máxima insalubridad establecida en 10

    const solucion: MenuSolution = heuristica2.solve(instanciaMenu);

    // Comprobamos si la solución no está vacía
    expect(solucion.getSeleccionados()).to.not.be.empty;

    // Comprobamos si la insalubridad total de los platos seleccionados no supera la máxima insalubridad
    const insalubridadTotal = solucion
      .getSeleccionados()
      .reduce((acc, plato) => acc + plato.insalubridad, 0);
    expect(insalubridadTotal).to.be.at.most(10);
  });

  it("debería devolver una solución vacía si la máxima insalubridad es demasiado baja para seleccionar algún plato", () => {
    const platos = [
      new Plato("Plato1", 10, 2),
      new Plato("Plato2", 5, 4),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 1); // Máxima insalubridad establecida en 1

    const solucion: MenuSolution = heuristica2.solve(instanciaMenu);

    expect(solucion.getSeleccionados()).to.be.empty;
  });

  it("debería devolver los platos seleccionados", () => {
    const platos = [
      new Plato("Plato1", 10, 2),
      new Plato("Plato2", 5, 4),
      new Plato("Plato3", 8, 3),
    ];
    const instanciaMenu = new MenuInstance(platos, 10); // Máxima insalubridad establecida en 10

    const solucion: MenuSolution = heuristica2.solve(instanciaMenu);
    const platosSeleccionados = heuristica2.getSelectedDishes();

    // Comprobamos si los platos seleccionados coinciden con los de la solución
    expect(platosSeleccionados).to.have.deep.members(
      solucion.getSeleccionados(),
    );
  });

  it("debería seleccionar platos saludables si no superan el límite de insalubridad", () => {
    // Definimos algunos platos con diferentes puntuaciones nutricionales e insalubridades
    const platos = [
      new Plato("Ensalada Cesar", 9, 2),
      new Plato("Pizza Margarita", 5, 7),
      new Plato("Sopa Minestrone", 8, 3),
      new Plato("Carpaccio", 4, 5),
      new Plato("Lasaña", 7, 9),
      new Plato("Tiramisú", 3, 4),
      new Plato("Gelato", 6, 8),
      new Plato("Cannoli", 2, 6),
      new Plato("Panna Cotta", 5, 2),
      new Plato("Risotto", 8, 5),
      new Plato("Spaghetti Carbonara", 3, 7),
      new Plato("Pesto", 6, 4),
      new Plato("Prosciutto", 4, 6),
    ];

    // Creamos una instancia de MenuInstance con los platos y un límite de insalubridad de 10
    const instanciaMenu = new MenuInstance(platos, 10);

    // Creamos una instancia de la Heurística 2
    const heuristica2 = new Heuristic2();

    // Resolvemos el menú con la Heurística 2
    const solucion: MenuSolution = heuristica2.solve(instanciaMenu);

    // Obtenemos los platos seleccionados por la heurística
    const platosSeleccionados = heuristica2.getSelectedDishes();

    // Verificamos que los platos seleccionados no superen el límite de insalubridad
    const insalubridadTotal = platosSeleccionados.reduce(
      (total, plato) => total + plato.insalubridad,
      0,
    );
    expect(insalubridadTotal).to.be.at.most(10);

    // Verificamos que todos los platos seleccionados sean saludables (insalubridad menor o igual a 5)
    const todosSaludables = platosSeleccionados.every(
      (plato) => plato.insalubridad <= 5,
    );
    expect(todosSaludables).to.be.true;
  });
});
