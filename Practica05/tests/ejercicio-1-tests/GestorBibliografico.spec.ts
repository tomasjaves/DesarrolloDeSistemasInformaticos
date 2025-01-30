// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { GestorBibliografico } from "../../src/ejercicio-1/GestorBibliografico";
import { ElementoBibliografico } from "../../src/ejercicio-1/ElementoBibliografico";

describe("GestorBibliografico", () => {
  let gestor: GestorBibliografico;

  beforeEach(() => {
    gestor = new GestorBibliografico();
  });

  it("debería agregar un elemento correctamente", () => {
    const mockElemento: ElementoBibliografico = {
      titulo: "Título del libro",
      autores: ["Autor 1", "Autor 2"],
      palabras_clave: ["Palabra 1", "Palabra 2"],
      resumen: "Resumen del libro",
      fecha_publicacion: "01/01/2021",
      paginas: 100,
      editorial: "Editorial del libro",
      GetFormatIEEE: () =>
        'autores 1, autores 2. "Título del libro", Editorial del libro, 01/01/2021.',
    };
    gestor.addElement(mockElemento);
    const elementos = gestor.getElements();
    expect(elementos).to.have.lengthOf(1);
    expect(elementos[0]).equal(mockElemento);
  });

  it("debería obtener un elemento correctamente", () => {
    const mockElementos: ElementoBibliografico[] = [
      {
        titulo: "Título 1",
        autores: ["Autor 1"],
        palabras_clave: ["Palabra 1", "Palabra 2"],
        resumen: "Resumen 1",
        fecha_publicacion: "2023-01-01",
        paginas: 100,
        editorial: "Editorial 1",
        GetFormatIEEE: () => "Formato IEEE 1",
      },
      {
        titulo: "Título 2",
        autores: ["Autor 2"],
        palabras_clave: ["Palabra 2", "Palabra 3"],
        resumen: "Resumen 2",
        fecha_publicacion: "2023-02-01",
        paginas: 120,
        editorial: "Editorial 2",
        GetFormatIEEE: () => "Formato IEEE 2",
      },
    ];
    mockElementos.forEach((elemento) => gestor.addElement(elemento));
    const elementos = gestor.getElements();
    expect(elementos).to.have.lengthOf(2);
    expect(elementos).to.deep.include.members(mockElementos);
  });

  it("debería buscar elementos por palabras claves correctamente", () => {
    const mockElementos: ElementoBibliografico[] = [
      {
        titulo: "Título 1",
        autores: ["Autor 1"],
        palabras_clave: ["Palabra 1", "Palabra 2"],
        resumen: "Resumen 1",
        fecha_publicacion: "2023-01-01",
        paginas: 100,
        editorial: "Editorial 1",
        GetFormatIEEE: () => "Formato IEEE 1",
      },
      {
        titulo: "Título 2",
        autores: ["Autor 2"],
        palabras_clave: ["Palabra 2", "Palabra 3"],
        resumen: "Resumen 2",
        fecha_publicacion: "2023-02-01",
        paginas: 120,
        editorial: "Editorial 2",
        GetFormatIEEE: () => "Formato IEEE 2",
      },
    ];
    mockElementos.forEach((elemento) => gestor.addElement(elemento));
    const searchResults = gestor.searchByKeyword("Título 2", "titulo");
    expect(searchResults).to.have.lengthOf(1);
    expect(searchResults[0].titulo).to.equal("Título 2");
  });

  it("debería buscar elementos por palabras claves correctamente cuando el campo existe", () => {
    const mockElementos: ElementoBibliografico[] = [
      {
        titulo: "Título 1",
        autores: ["Autor 1"],
        palabras_clave: ["Palabra 1", "Palabra 2"],
        resumen: "Resumen 1",
        fecha_publicacion: "2023-01-01",
        paginas: 100,
        editorial: "Editorial 1",
        GetFormatIEEE: () => "Formato IEEE 1",
      },
      {
        titulo: "Título 2",
        autores: ["Autor 2"],
        palabras_clave: ["Palabra 2", "Palabra 3"],
        resumen: "Resumen 2",
        fecha_publicacion: "2023-02-01",
        paginas: 120,
        editorial: "Editorial 2",
        GetFormatIEEE: () => "Formato IEEE 2",
      },
    ];
    mockElementos.forEach((elemento) => gestor.addElement(elemento));
    const searchResults = gestor.searchByKeyword("Autor 2", "autores");
    expect(searchResults.length).to.equal(1);
    expect(searchResults[0].autores).to.deep.equal(["Autor 2"]);
  });

  it("debería buscar elementos por palabras claves correctamente cuando el campo no existe", () => {
    const mockElementos: ElementoBibliografico[] = [
      {
        titulo: "Título 1",
        autores: ["Autor 1"],
        palabras_clave: ["Palabra 1", "Palabra 2"],
        resumen: "Resumen 1",
        fecha_publicacion: "2023-01-01",
        paginas: 100,
        editorial: "Editorial 1",
        GetFormatIEEE: () => "Formato IEEE 1",
      },
      {
        titulo: "Título 2",
        autores: ["Autor 2"],
        palabras_clave: ["Palabra 2", "Palabra 3"],
        resumen: "Resumen 2",
        fecha_publicacion: "2023-02-01",
        paginas: 120,
        editorial: "Editorial 2",
        GetFormatIEEE: () => "Formato IEEE 2",
      },
    ];
    mockElementos.forEach((elemento) => gestor.addElement(elemento));
    const searchResults = gestor.searchByKeyword(
      "2023-01-01",
      "fecha_publicacion",
    );
    expect(searchResults.length).to.equal(1);
    expect(searchResults[0].fecha_publicacion).to.equal("2023-01-01");
  });

  it("debería devolver un array vacio cuando no han sido añadidos elementos", () => {
    const elementos = gestor.getElements();
    expect(elementos).to.be.an("array").that.is.empty;
  });

  // Test para línea 94: asegura que showElementsTable() no genere ningún error
  it("no debería mostrar algun error cuando se llama a la función showElementsTable()", () => {
    expect(() => gestor.showElementsTable()).not.to.throw();
  });

  // Test para línea 132: asegura que showSearchResultsTable() no genere ningún error
  it("no debería mostrar algun error cuando se llama a la función showSearchResultsTable()", () => {
    expect(() =>
      gestor.showSearchResultsTable("Palabra 1", "titulo"),
    ).not.to.throw();
  });

  it("debería exportar resultados buscados en el formato IEEE correctamente", () => {
    const mockElementos: ElementoBibliografico[] = [
      {
        titulo: "Título 1",
        autores: ["Autor 1"],
        palabras_clave: ["Palabra 1", "Palabra 2"],
        resumen: "Resumen 1",
        fecha_publicacion: "2023-01-01",
        paginas: 100,
        editorial: "Editorial 1",
        GetFormatIEEE: () => 'Autor 1. "Título 1", Editorial 1, 2023-01-01.',
      },
      {
        titulo: "Título 2",
        autores: ["Autor 2"],
        palabras_clave: ["Palabra 2", "Palabra 3"],
        resumen: "Resumen 2",
        fecha_publicacion: "2023-02-01",
        paginas: 120,
        editorial: "Editorial 2",
        GetFormatIEEE: () => 'Autor 2. "Título 2", Editorial 2, 2023-02-01.',
      },
    ];
    mockElementos.forEach((elemento) => gestor.addElement(elemento));

    const ieeeFormat = gestor.exportSearchResultsIEEE("Título 1", "titulo");
    const expectedIEEEFormat = 'Autor 1. "Título 1", Editorial 1, 2023-01-01.';
    expect(ieeeFormat).to.equal(expectedIEEEFormat);
  });

  it("debería devolver un array vacío cuando la palabra clave no existe en algún campo", () => {
    const mockElementos: ElementoBibliografico[] = [
      {
        titulo: "Título 1",
        autores: ["Autor 1"],
        palabras_clave: ["Palabra 1", "Palabra 2"],
        resumen: "Resumen 1",
        fecha_publicacion: "2023-01-01",
        paginas: 100,
        editorial: "Editorial 1",
        GetFormatIEEE: () => "Formato IEEE 1",
      },
      {
        titulo: "Título 2",
        autores: ["Autor 2"],
        palabras_clave: ["Palabra 2", "Palabra 3"],
        resumen: "Resumen 2",
        fecha_publicacion: "2023-02-01",
        paginas: 120,
        editorial: "Editorial 2",
        GetFormatIEEE: () => "Formato IEEE 2",
      },
    ];
    mockElementos.forEach((elemento) => gestor.addElement(elemento));

    // Buscar una palabra clave que no existe en ningún campo
    const searchResults = gestor.searchByKeyword("NoExiste", "titulo");
    expect(searchResults).to.have.lengthOf(0);
  });
});
