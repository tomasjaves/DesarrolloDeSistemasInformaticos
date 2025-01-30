import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que representa un libro.
 * Implementa la interfaz ElementoBibliografico.
 * @export
 * @class Libro
 * @implements {ElementoBibliografico}
 * @constructor
 * @property {string} titulo - Título del libro.
 * @property {string[]} autores - Autores del libro.
 * @property {string[]} palabras_clave - Palabras clave del libro.
 * @property {string} resumen - Resumen del libro.
 * @property {string} fecha_publicacion - Fecha de publicación del libro.
 * @property {number} paginas - Número de páginas del libro.
 * @property {string} editorial - Editorial del libro.
 * @property {string} ISBN - Número Estándar Internacional de Libros.
 * @property {number} edicion - Número de edición del libro.
 * @method GetFormatIEEE - Devuelve el libro en formato IEEE.
 */
export class Libro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public ISBN: string, // Número Estándar Internacional de Libros
    public edicion: number, // Número de edición del libro
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
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, ${this.titulo}, ${this.edicion} ed., ${this.editorial}, ${anioPublicacion}, ISBN: ${this.ISBN}.`;
  }
}
