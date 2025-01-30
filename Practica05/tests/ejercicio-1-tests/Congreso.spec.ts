// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Congreso } from "../../src/ejercicio-1/Congreso";

describe("Congreso", () => {
  it("GetFormatIEEE debería formatear correctamente el congreso", () => {
    // Arrange
    const congreso = new Congreso(
      "Título del Congreso",
      ["Autor1", "Autor2"],
      ["Palabra Clave 1", "Palabra Clave 2"],
      "Resumen del congreso",
      "2023-01-15",
      10,
      "Editorial del Congreso",
      "Nombre del Congreso",
      "Ubicación del Congreso",
    );

    // Act
    const formatoIEEE = congreso.GetFormatIEEE();

    // Assert
    expect(formatoIEEE).to.equal(
      'Autor1, Autor2, "Título del Congreso," presented at the Nombre del Congreso, Ubicación del Congreso, 2023, Editorial del Congreso.',
    );
  });

  it("GetFormatIEEE debería formatear correctamente el congreso con un solo autor", () => {
    // Arrange
    const congreso = new Congreso(
      "Título del Congreso",
      ["Autor Único"],
      ["Palabra Clave 1", "Palabra Clave 2"],
      "Resumen del congreso",
      "2023-01-15",
      10,
      "Editorial del Congreso",
      "Nombre del Congreso",
      "Ubicación del Congreso",
    );

    // Act
    const formatoIEEE = congreso.GetFormatIEEE();

    // Assert
    expect(formatoIEEE).to.equal(
      'Autor Único, "Título del Congreso," presented at the Nombre del Congreso, Ubicación del Congreso, 2023, Editorial del Congreso.',
    );
  });

  it("GetFormatIEEE debería formatear correctamente el congreso con una sola página", () => {
    // Arrange
    const congreso = new Congreso(
      "Título del Congreso",
      ["Autor1", "Autor2"],
      ["Palabra Clave 1", "Palabra Clave 2"],
      "Resumen del congreso",
      "2023-01-15",
      1, // Solo una página
      "Editorial del Congreso",
      "Nombre del Congreso",
      "Ubicación del Congreso",
    );

    // Act
    const formatoIEEE = congreso.GetFormatIEEE();

    // Assert
    expect(formatoIEEE).to.equal(
      'Autor1, Autor2, "Título del Congreso," presented at the Nombre del Congreso, Ubicación del Congreso, 2023, Editorial del Congreso.',
    );
  });
});
