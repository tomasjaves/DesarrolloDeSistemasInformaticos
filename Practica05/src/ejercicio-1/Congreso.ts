import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que representa un congreso o conferencia.
 * @exports
 * @class Congreso
 * @implements ElementoBibliografico
 * @constructor
 * @property {string} titulo - Título del congreso.
 * @property {string[]} autores - Autores del congreso.
 * @property {string[]} palabras_clave - Palabras clave del congreso.
 * @property {string} resumen - Resumen del congreso.
 * @property {string} fecha_publicacion - Fecha de publicación del congreso.
 * @property {number} paginas - Número de páginas del congreso.
 * @property {string} editorial - Editorial del congreso.
 * @property {string} nombreCongreso - Nombre del congreso o conferencia.
 * @property {string} ubicacion - Ubicación del congreso.
 * @method GetFormatIEEE - Devuelve el congreso en formato IEEE.
 */
export class Congreso implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public nombreCongreso: string, // Nombre del congreso o conferencia
    public ubicacion: string, // Ubicación del congreso
  ) {}

  /**
   * Método que devuelve el formato de la referencia bibliográfica en formato IEEE.
   * @returns La referencia bibliográfica en formato IEEE.
   */
  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
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

    // Construyendo la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," presented at the ${this.nombreCongreso}, ${this.ubicacion}, ${anioPublicacion}, ${this.editorial}.`;
  }
}
