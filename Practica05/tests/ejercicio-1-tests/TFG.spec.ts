// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { TFG } from "../../src/ejercicio-1/TFG";

describe("TFG", () => {
  let tfg: TFG;

  beforeEach(() => {
    tfg = new TFG(
      "Título del TFG",
      ["Autor 1", "Autor 2"],
      ["Palabra 1", "Palabra 2"],
      "Resumen del TFG",
      "01/01/2021",
      50,
      "Departamento de Ingeniería Informática",
      "Universidad Ejemplo",
      "Ingeniería Informática",
      ["Tutor 1", "Tutor 2"],
    );
  });

  it("debería devolver el formato IEEE correctamente", () => {
    const formatoIEEE = tfg.GetFormatIEEE();
    const expectedFormatoIEEE =
      'Autor 1, Autor 2, "Título del TFG," Ingeniería Informática thesis, Universidad Ejemplo, 2021.';
    expect(formatoIEEE).to.equal(expectedFormatoIEEE);
  });

  it("debería devolver el formato IEEE correctamente con un único autor", () => {
    tfg = new TFG(
      "Título del TFG",
      ["Autor Único"],
      ["Palabra 1", "Palabra 2"],
      "Resumen del TFG",
      "01/01/2021",
      50,
      "Departamento de Ingeniería Informática",
      "Universidad Ejemplo",
      "Ingeniería Informática",
      ["Tutor 1", "Tutor 2"],
    );

    const formatoIEEE = tfg.GetFormatIEEE();
    const expectedFormatoIEEE =
      'Autor Único, "Título del TFG," Ingeniería Informática thesis, Universidad Ejemplo, 2021.';
    expect(formatoIEEE).to.equal(expectedFormatoIEEE);
  });
});
