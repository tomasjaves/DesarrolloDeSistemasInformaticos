import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que representa un gestor bibliográfico.
 * @export
 * @class GestorBibliografico
 * @constructor
 * @property {ElementoBibliografico[]} elementos Array que almacena los elementos bibliográficos del gestor.
 * @method {void} addElement Función que añade un elemento bibliográfico al gestor bibliográfico.
 * @method {ElementoBibliografico[]} getElements Función que devuelve los elementos bibliográficos del gestor.
 * @method {void} showElementsTable Función que muestra por consola los elementos bibliográficos del gestor.
 * @method {ElementoBibliografico[]} searchByKeyword Función que busca elementos bibliográficos por una palabra clave.
 * @method {void} showSearchResultsTable Función que muestra por consola los resultados de la búsqueda de elementos bibliográficos por una palabra clave.
 * @method {string} exportSearchResultsIEEE Función que exporta los resultados de la búsqueda de elementos bibliográficos por una palabra clave en formato IEEE.
 */
export class GestorBibliografico {
  /**
   * Array que almacena los elementos bibliográficos del gestor.
   * @type {ElementoBibliografico[]}
   * @private
   */
  private elementos: ElementoBibliografico[];

  constructor() {
    this.elementos = [];
  }

  /**
   * Función que añade un elemento bibliográfico al gestor bibliográfico.
   * @param elemento Elemento bibliográfico a añadir.
   * @example
   * ```typescript
   * const gestor = new GestorBibliografico();
   * gestor.addElement({
   * titulo: 'Título del libro',
   * autores: ['autores 1', 'autores 2'],
   * palabras_clave: ['Palabra 1', 'Palabra 2'],
   * resumen: 'Resumen del libro',
   * fecha_publicacion: '01/01/2021',
   * paginas: 100,
   * editorial: 'Editorial del libro',
   * GetFormatIEEE: () => 'autores 1, autores 2. "Título del libro", Editorial del libro, 01/01/2021.'
   * });
   * ```
   */
  addElement(elemento: ElementoBibliografico): void {
    this.elementos.push(elemento);
  }

  /**
   * Función que devuelve los elementos bibliográficos del gestor.
   * @returns Elementos bibliográficos del gestor.
   * @example
   * ```typescript
   * const gestor = new GestorBibliografico();
   * const elementos = gestor.getElements();
   * ```
   */
  getElements(): ElementoBibliografico[] {
    return this.elementos;
  }

  /**
   * Función que muestra por consola los elementos bibliográficos del gestor.
   * @returns Elementos bibliográficos del gestor.
   * @example
   * ```typescript
   * const gestor = new GestorBibliografico();
   * gestor.addElement({
   * titulo: 'Título del libro',
   * autores: ['autores 1', 'autores 2'],
   * palabras_clave: ['Palabra 1', 'Palabra 2'],
   * resumen: 'Resumen del libro',
   * fecha_publicacion: '01/01/2021',
   * paginas: 100,
   * editorial: 'Editorial del libro',
   * GetFormatIEEE: () => 'autores 1, autores 2. "Título del libro", Editorial del libro, 01/01/2021.'
   * });
   * gestor.showElementsTable();
   * ```
   */
  showElementsTable(): void {
    console.table(this.elementos);
  }

  /**
   * Función que busca elementos bibliográficos por una palabra clave.
   * @param keyword Palabra clave por la que buscar.
   * @returns Elementos bibliográficos que contienen la palabra clave.
   * @example
   * ```typescript
   * const gestor = new GestorBibliografico();
   * const elementos = gestor.searchByKeyword('Palabra 1');
   * ```
   */
  searchByKeyword(
    keyword: string,
    field: "titulo" | "autores" | "fecha_publicacion" | "editorial",
  ): ElementoBibliografico[] {
    return this.elementos.filter((elemento) => {
      if (field in elemento) {
        const fieldValue = Array.isArray(elemento[field])
          ? (elemento[field] as string[]).join(", ")
          : (elemento[field] as string);
        return fieldValue.toLowerCase().includes(keyword.toLowerCase());
      }
      return false;
    });
  }

  /**
   * Función que muestra por consola los resultados de la búsqueda de elementos bibliográficos por una palabra clave.
   * @param keyword Palabra clave por la que buscar.
   * @example
   * ```typescript
   * const gestor = new GestorBibliografico();
   * gestor.showSearchResultsTable('Palabra 1');
   * ```
   */
  showSearchResultsTable(
    keyword: string,
    field: "titulo" | "autores" | "fecha_publicacion" | "editorial",
  ): void {
    const searchResults = this.searchByKeyword(keyword, field);
    console.table(searchResults);
  }

  /**
   * Función que exporta los resultados de la búsqueda de elementos bibliográficos por una palabra clave en formato IEEE.
   * @param keyword Palabra clave por la que buscar.
   * @returns Resultados de la búsqueda en formato IEEE.
   * @example
   * ```typescript
   * const gestor = new GestorBibliografico();
   * const resultados = gestor.exportSearchResultsIEEE('Palabra 1');
   * ```
   */
  exportSearchResultsIEEE(
    keyword: string,
    field: "titulo" | "autores" | "fecha_publicacion" | "editorial",
  ): string {
    const searchResults = this.searchByKeyword(keyword, field);
    return searchResults
      .map((elemento) => {
        return `${elemento.autores}. "${elemento.titulo}", ${elemento.editorial}, ${elemento.fecha_publicacion}.`;
      })
      .join("\n");
  }
}
