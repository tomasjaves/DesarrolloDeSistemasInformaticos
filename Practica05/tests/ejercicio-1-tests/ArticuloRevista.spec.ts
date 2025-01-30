// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { ArticuloRevista } from "../../src/ejercicio-1/ArticuloRevista";

describe("ArticuloRevista", () => {
  const articulo = new ArticuloRevista(
    "Título del artículo",
    ["Autor1", "Autor2"],
    ["Palabra1", "Palabra2"],
    "Resumen del artículo",
    "2023-01-01",
    10,
    "Editorial de la revista",
    "Nombre de la revista",
    5,
    3,
    20,
    30,
  );

  it("debería crear una instancia de ArticuloRevista correctamente", () => {
    expect(articulo).to.be.an.instanceOf(ArticuloRevista);
  });

  it("debería devolver el artículo en formato IEEE correctamente", () => {
    const formatoIEEE = articulo.GetFormatIEEE();
    const expectedFormat =
      'Autor1, Autor2, "Título del artículo," Nombre de la revista, vol. 5, no. 3, pp. 20-30, 2023.';
    expect(formatoIEEE).to.equal(expectedFormat);
  });

  it("GetFormatIEEE debería formatear correctamente un artículo con un solo autor", () => {
    // Arrange
    const articulo = new ArticuloRevista(
      "Título del artículo",
      ["Autor Único"],
      ["Palabra Clave 1", "Palabra Clave 2"],
      "Resumen del artículo",
      "2023-05-15",
      10,
      "Editorial de la Revista",
      "Nombre de la Revista",
      5,
      2,
      15,
      20,
    );

    // Act
    const formatoIEEE = articulo.GetFormatIEEE();

    // Assert
    expect(formatoIEEE).to.equal(
      'Autor Único, "Título del artículo," Nombre de la Revista, vol. 5, no. 2, pp. 15-20, 2023.',
    );
  });
});
