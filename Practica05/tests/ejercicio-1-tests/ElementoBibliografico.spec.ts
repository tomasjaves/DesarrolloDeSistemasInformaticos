// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { ElementoBibliografico } from "../../src/ejercicio-1/ElementoBibliografico";

describe("ElementoBibliografico", () => {
  it("debería definir la interfaz ElementoBibliografico correctamente", () => {
    const elemento: ElementoBibliografico = {
      titulo: "Título del Elemento",
      autores: ["Autor1", "Autor2"],
      palabras_clave: ["Palabra Clave 1", "Palabra Clave 2"],
      resumen: "Resumen del elemento bibliográfico",
      fecha_publicacion: "2023-01-15",
      paginas: 10,
      editorial: "Editorial del Elemento",
      GetFormatIEEE: () => "Formato IEEE",
    };

    expect(elemento.titulo).to.equal("Título del Elemento");
    expect(elemento.autores).to.deep.equal(["Autor1", "Autor2"]);
    expect(elemento.palabras_clave).to.deep.equal([
      "Palabra Clave 1",
      "Palabra Clave 2",
    ]);
    expect(elemento.resumen).to.equal("Resumen del elemento bibliográfico");
    expect(elemento.fecha_publicacion).to.equal("2023-01-15");
    expect(elemento.paginas).to.equal(10);
    expect(elemento.editorial).to.equal("Editorial del Elemento");
    expect(elemento.GetFormatIEEE()).to.equal("Formato IEEE");
  });

  it("debería tener el método GetFormatIEEE definido", () => {
    const elemento: ElementoBibliografico = {
      titulo: "Título del Elemento",
      autores: ["Autor1"],
      palabras_clave: ["Palabra Clave"],
      resumen: "Resumen del elemento bibliográfico",
      fecha_publicacion: "2023-01-15",
      paginas: 5,
      editorial: "Editorial del Elemento",
      GetFormatIEEE: () => "Formato IEEE",
    };

    expect(elemento.GetFormatIEEE).to.be.a("function");
  });
});
