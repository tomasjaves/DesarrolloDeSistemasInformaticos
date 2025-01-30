import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que representa un capítulo de un libro.
 * Contiene el título, los autores, las palabras clave, el resumen, la fecha de publicación, el número de páginas, la editorial, el nombre del libro, los editores del libro y el número del capítulo.
 * Implementa la interfaz ElementoBibliografico.
 * @exports
 * @class CapituloLibro
 * @implements ElementoBibliografico
 * @constructor
 * @property {string} titulo - Título del capítulo.
 * @property {string[]} autores - Autores del capítulo.
 * @property {string[]} palabras_clave - Palabras clave del capítulo.
 * @property {string} resumen - Resumen del capítulo.
 * @property {string} fecha_publicacion - Fecha de publicación del capítulo.
 * @property {number} paginas - Número de páginas del capítulo.
 * @property {string} editorial - Editorial del libro que contiene el capítulo.
 * @property {string} nombreLibro - Nombre del libro que contiene el capítulo.
 * @property {string[]} editoresLibro - Editores del libro que contiene el capítulo.
 * @property {number} numeroCapitulo - Número del capítulo dentro del libro.
 * @method GetFormatIEEE - Devuelve el capítulo en formato IEEE.
 */
export class CapituloLibro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public nombreLibro: string, // Nombre del libro que contiene el capítulo
    public editoresLibro: string[], // Editores del libro
    public numeroCapitulo: number, // Número del capítulo dentro del libro
  ) {}

  /**
   * Método que devuelve el formato de la referencia bibliográfica en formato IEEE.
   * @returns La referencia bibliográfica en formato IEEE.
   */
  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
      // Si hay más de un autor, se separan por comas y se añade "and" al final. Si no, se devuelve el único autor.
      this.autores.length > 1
        ? this.autores.slice(0, -1).join(", ") +
          ", " +
          this.autores.slice(-1)
        : this.autores[0];
    // Se formatea la lista de páginas.
    const paginasFormateado =
      this.paginas > 1 ? `pp. ${this.paginas}` : `p. ${this.paginas}`;
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();
    // Se formatea la lista de editores.
    const editoresFormateados =
      // Si hay más de un editor, se separan por comas y se añade "and" al final. Si no, se devuelve el único editor.
      this.editoresLibro.length > 1
        ? this.editoresLibro.slice(0, -1).join(", ") +
          ", " +
          this.editoresLibro.slice(-1)
        : this.editoresLibro[0];

    // Se construye la cadena en formato IEEE.
    return `${autoresFormateados}, "${this.titulo}," in ${this.nombreLibro}, ${editoresFormateados}, Eds., ${this.editorial}, ch. ${this.numeroCapitulo}, ${paginasFormateado}, ${anioPublicacion}.`;
  }
}
