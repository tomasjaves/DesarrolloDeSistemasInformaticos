// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { CapituloLibro } from "../../src/ejercicio-1/CapituloLibro";

describe("CapituloLibro", () => {
  it("GetFormatIEEE debería formatear correctamente un capítulo de libro", () => {
    // Arrange
    const capitulo = new CapituloLibro(
      "Título del Capítulo",
      ["Autor1", "Autor2"],
      ["Palabra Clave 1", "Palabra Clave 2"],
      "Resumen del capítulo",
      "2023-01-15",
      10,
      "Editorial del Libro",
      "Nombre del Libro",
      ["Editor1", "Editor2"],
      5,
    );

    // Act
    const formatoIEEE = capitulo.GetFormatIEEE();

    // Assert
    expect(formatoIEEE).to.equal(
      'Autor1, Autor2, "Título del Capítulo," in Nombre del Libro, Editor1, Editor2, Eds., Editorial del Libro, ch. 5, pp. 10, 2023.',
    );
  });

  it("GetFormatIEEE debería formatear correctamente un capítulo de libro con un solo autor y un solo editor", () => {
    // Arrange
    const capitulo = new CapituloLibro(
      "Título del Capítulo",
      ["Autor Único"],
      ["Palabra Clave 1", "Palabra Clave 2"],
      "Resumen del capítulo",
      "2023-01-15",
      10,
      "Editorial del Libro",
      "Nombre del Libro",
      ["Editor Único"],
      5,
    );

    // Act
    const formatoIEEE = capitulo.GetFormatIEEE();

    // Assert
    expect(formatoIEEE).to.equal(
      'Autor Único, "Título del Capítulo," in Nombre del Libro, Editor Único, Eds., Editorial del Libro, ch. 5, pp. 10, 2023.',
    );
  });

  it("GetFormatIEEE debería formatear correctamente las páginas", () => {
    // Arrange
    const capitulo1 = new CapituloLibro(
      "Título del Capítulo",
      ["Autor"],
      ["Palabra Clave"],
      "Resumen del capítulo",
      "2023-01-15",
      1, // Solo una página
      "Editorial del Libro",
      "Nombre del Libro",
      ["Editor"],
      5,
    );

    const capitulo2 = new CapituloLibro(
      "Título del Capítulo",
      ["Autor"],
      ["Palabra Clave"],
      "Resumen del capítulo",
      "2023-01-15",
      10, // Varias páginas
      "Editorial del Libro",
      "Nombre del Libro",
      ["Editor"],
      5,
    );

    // Act
    const formatoIEEE1 = capitulo1.GetFormatIEEE();
    const formatoIEEE2 = capitulo2.GetFormatIEEE();

    // Assert
    expect(formatoIEEE1).to.contain("p. 1"); // Para una sola página
    expect(formatoIEEE2).to.contain("pp. 10"); // Para más de una página
  });
});
