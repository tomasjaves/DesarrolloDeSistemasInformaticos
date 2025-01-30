import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que representa un artículo de revista.
 * Implementa la interfaz ElementoBibliografico.
 * @export
 * @class ArticuloRevista
 * @implements {ElementoBibliografico}
 * @constructor
 * @property {string} titulo - Título del artículo.
 * @property {string[]} autores - Lista de autores del artículo.
 * @property {string[]} palabras_clave - Lista de palabras clave del artículo.
 * @property {string} resumen - Resumen del artículo.
 * @property {string} fecha_publicacion - Fecha de publicación del artículo.
 * @property {number} paginas - Número de páginas del artículo.
 * @property {string} editorial - Editorial de la revista.
 * @property {string} nombreRevista - Nombre de la revista donde se publicó el artículo.
 * @property {number} volumen - Volumen de la revista.
 * @property {number} numero - Número de la edición dentro del volumen.
 * @property {number} paginaInicio - Página de inicio del artículo.
 * @property {number} paginaFin - Página final del artículo.
 * @method GetFormatIEEE - Devuelve el artículo en formato IEEE.
 *
 */
export class ArticuloRevista implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public nombreRevista: string, // Nombre de la revista donde se publicó el artículo
    public volumen: number, // Volumen de la revista
    public numero: number, // Número de la edición dentro del volumen
    public paginaInicio: number, // Página de inicio del artículo
    public paginaFin: number, // Página final del artículo
  ) {}

  /**
   * Devuelve el artículo en formato IEEE.
   * @returns {string} - Artículo en formato IEEE.
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
    const paginasFormateado = `pp. ${this.paginaInicio}-${this.paginaFin}`;
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," ${this.nombreRevista}, vol. ${this.volumen}, no. ${this.numero}, ${paginasFormateado}, ${anioPublicacion}.`;
  }
}
