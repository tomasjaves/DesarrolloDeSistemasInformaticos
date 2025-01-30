// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Solver } from "../../src/ejercicio-2/Solver";
import { Heuristic1 } from "../../src/ejercicio-2/Heuristic1";
import { Heuristic2 } from "../../src/ejercicio-2/Heuristic2";
import { Heuristic3 } from "../../src/ejercicio-2/Heuristic3";
import { MenuInstance } from "../../src/ejercicio-2/MenuInstance";
import { Plato } from "../../src/ejercicio-2/Dish";
import { MenuSolution } from "../../src/ejercicio-2/MenuSolution";

describe("Solver", () => {
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

  const instanciaMenu = new MenuInstance(platos, 10);
  const solver = new Solver(instanciaMenu);

  it("debería resolver el menú con la heurística 1", () => {
    const heuristica1 = new Heuristic1();
    const solucion = solver.resolverConHeuristica1();
    const platosSeleccionados = solucion.getSeleccionados();

    expect(platosSeleccionados).to.be.an("array");
    expect(platosSeleccionados).to.not.be.empty;
  });

  it("debería resolver el menú con la heurística 2", () => {
    const heuristica2 = new Heuristic2();
    const solucion = solver.resolverConHeuristica2();
    const platosSeleccionados = solucion.getSeleccionados();

    expect(platosSeleccionados).to.be.an("array");
    expect(platosSeleccionados).to.not.be.empty;
  });

  it("debería resolver el menú con la heurística 3", () => {
    const heuristica3 = new Heuristic3();
    const solucion = solver.resolverConHeuristica3();
    const platosSeleccionados = solucion.getSeleccionados();

    expect(platosSeleccionados).to.be.an("array");
    expect(platosSeleccionados).to.not.be.empty;
  });

  it("debería resolver el menú con la heurística 1", () => {
    const solucion = solver.resolver(1);
    expect(solucion).to.be.an.instanceOf(MenuSolution);
  });

  it("debería resolver el menú con la heurística 2", () => {
    const solucion = solver.resolver(2);
    expect(solucion).to.be.an.instanceOf(MenuSolution);
  });

  it("debería resolver el menú con la heurística 3", () => {
    const solucion = solver.resolver(3);
    expect(solucion).to.be.an.instanceOf(MenuSolution);
  });

  it("debería lanzar un error si se proporciona una heurística no definida", () => {
    expect(() => solver.resolver(4)).to.throw("Heurística no definida");
  });
});
