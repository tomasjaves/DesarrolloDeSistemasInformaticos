// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { TFM } from "../../src/ejercicio-1/TFM";

describe("TFM", () => {
  let tfm: TFM;

  beforeEach(() => {
    tfm = new TFM(
      "Título del TFM",
      ["Autor 1", "Autor 2"],
      ["Palabra 1", "Palabra 2"],
      "Resumen del TFM",
      "01/01/2022",
      60,
      "Departamento de Ingeniería Electrónica",
      "Universidad de Ejemplo",
      "Ingeniería Electrónica",
      ["Director 1", "Director 2"],
    );
  });

  it("debería devolver el formato IEEE correctamente", () => {
    const formatoIEEE = tfm.GetFormatIEEE();
    const expectedFormatoIEEE =
      'Autor 1, Autor 2, "Título del TFM," Ingeniería Electrónica thesis, Universidad de Ejemplo, 2022.';
    expect(formatoIEEE).to.equal(expectedFormatoIEEE);
  });

  it("debería devolver el formato IEEE correctamente con un único autor", () => {
    tfm = new TFM(
      "Título del TFM",
      ["Autor Único"],
      ["Palabra 1", "Palabra 2"],
      "Resumen del TFM",
      "01/01/2022",
      60,
      "Departamento de Ingeniería Electrónica",
      "Universidad de Ejemplo",
      "Ingeniería Electrónica",
      ["Director 1", "Director 2"],
    );

    const formatoIEEE = tfm.GetFormatIEEE();
    const expectedFormatoIEEE =
      'Autor Único, "Título del TFM," Ingeniería Electrónica thesis, Universidad de Ejemplo, 2022.';
    expect(formatoIEEE).to.equal(expectedFormatoIEEE);
  });
});
