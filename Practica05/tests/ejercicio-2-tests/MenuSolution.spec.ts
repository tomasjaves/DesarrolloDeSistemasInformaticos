// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Plato } from "../../src/ejercicio-2/Dish";
import { MenuSolution } from "../../src/ejercicio-2/MenuSolution";

describe("MenuSolution", () => {
  const platos = [
    new Plato("Ensalada Cesar", 9, 2),
    new Plato("Pizza Margarita", 5, 7),
    new Plato("Sopa Minestrone", 8, 3),
  ];

  const solucion = new MenuSolution(platos);

  it("debería devolver los platos seleccionados correctamente", () => {
    const platosSeleccionados = solucion.getSeleccionados();

    expect(platosSeleccionados).to.have.lengthOf(platos.length);

    platosSeleccionados.forEach((platoSeleccionado, index) => {
      const platoOriginal = platos[index];
      expect(platoSeleccionado).to.be.an.instanceOf(Plato);
      expect(platoSeleccionado.nombre).to.equal(platoOriginal.nombre);
      expect(platoSeleccionado.puntuacionNutricional).to.equal(
        platoOriginal.puntuacionNutricional,
      );
      expect(platoSeleccionado.insalubridad).to.equal(
        platoOriginal.insalubridad,
      );
    });
  });

  it("debería agregar un plato correctamente", () => {
    const platoCarpaccio = new Plato("Carpaccio", 4, 5);
    solucion.agregarPlato(platoCarpaccio);
    const platosSeleccionados = solucion.getSeleccionados();
    expect(platosSeleccionados).to.deep.include(platoCarpaccio);
  });

  it("debería agregar una lista de platos correctamente", () => {
    const platoLasaña = new Plato("Lasaña", 7, 9);
    const platoTiramisu = new Plato("Tiramisú", 3, 4);
    const platosAgregar = [platoLasaña, platoTiramisu];

    solucion.agregarPlatos(platosAgregar);
    const platosSeleccionados = solucion.getSeleccionados();

    expect(platosSeleccionados).to.deep.include(platoLasaña);
    expect(platosSeleccionados).to.deep.include(platoTiramisu);
  });

  it("debería calcular la insalubridad total correctamente", () => {
    const insalubridadTotal = solucion.calcularInsalubridadTotal();
    const insalubridadEsperada = platos.reduce(
      (acc, plato) => acc + plato.insalubridad,
      0,
    );

    expect(insalubridadTotal).to.equal(insalubridadEsperada);
  });

  it("debería calcular la puntuación nutricional total correctamente", () => {
    const puntuacionTotal = solucion.calcularPuntuacionNutricionalTotal();
    const puntuacionEsperada = platos.reduce(
      (acc, plato) => acc + plato.puntuacionNutricional,
      0,
    );

    expect(puntuacionTotal).to.equal(puntuacionEsperada);
  });
});
