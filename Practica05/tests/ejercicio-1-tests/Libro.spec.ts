// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Libro } from "../../src/ejercicio-1/Libro";

describe("Libro", () => {
  let libro: Libro;

  beforeEach(() => {
    libro = new Libro(
      "Título del libro",
      ["Autor 1", "Autor 2"],
      ["Palabra 1", "Palabra 2"],
      "Resumen del libro",
      "01/01/2021",
      200,
      "Editorial del libro",
      "123456789X",
      1,
    );
  });

  it("debería instanciar un libro correctamente", () => {
    expect(libro).to.be.an.instanceOf(Libro);
    expect(libro.titulo).to.equal("Título del libro");
    expect(libro.autores).to.deep.equal(["Autor 1", "Autor 2"]);
    expect(libro.palabras_clave).to.deep.equal(["Palabra 1", "Palabra 2"]);
    expect(libro.resumen).to.equal("Resumen del libro");
    expect(libro.fecha_publicacion).to.equal("01/01/2021");
    expect(libro.paginas).to.equal(200);
    expect(libro.editorial).to.equal("Editorial del libro");
    expect(libro.ISBN).to.equal("123456789X");
    expect(libro.edicion).to.equal(1);
  });

  it("debería devolver el formato IEEE correctamente", () => {
    const formatoIEEE = libro.GetFormatIEEE();
    const expectedFormatoIEEE =
      "Autor 1, Autor 2, Título del libro, 1 ed., Editorial del libro, 2021, ISBN: 123456789X.";
    expect(formatoIEEE).to.equal(expectedFormatoIEEE);
  });

  it("debería devolver el formato IEEE correctamente para un libro con un solo autor", () => {
    libro = new Libro(
      "Título del libro",
      ["Autor único"],
      ["Palabra 1", "Palabra 2"],
      "Resumen del libro",
      "01/01/2021",
      200,
      "Editorial del libro",
      "123456789X",
      1,
    );

    const formatoIEEE = libro.GetFormatIEEE();
    const expectedFormatoIEEE =
      "Autor único, Título del libro, 1 ed., Editorial del libro, 2021, ISBN: 123456789X.";
    expect(formatoIEEE).to.equal(expectedFormatoIEEE);
  });
});
