import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que representa un Trabajo de Fin de Máster.
 * Implementa la interfaz ElementoBibliografico.
 * @export
 * @class TFM
 * @implements {ElementoBibliografico}
 * @constructor
 * @property {string} titulo - Título del TFM.
 * @property {string[]} autores - Autores del TFM.
 * @property {string[]} palabras_clave - Palabras clave del TFM.
 * @property {string} resumen - Resumen del TFM.
 * @property {string} fecha_publicacion - Fecha de publicación del TFM.
 * @property {number} paginas - Número de páginas del TFM.
 * @property {string} editorial - Departamento académico del TFM.
 * @property {string} universidad - Universidad donde se realizó el TFM.
 * @property {string} master - Máster obtenido.
 * @property {string[]} director - Directores del TFM.
 * @method GetFormatIEEE - Devuelve el TFM en formato IEEE.
 */
export class TFM implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string, // También podría ser el departamento académico
    public universidad: string,
    public master: string, // Especifica el máster obtenido
    public director: string[], // Los directores del TFM
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
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();
    // Se formatea la lista de directores.
    const directoresFormateados = this.director.join(", ");

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," ${this.master} thesis, ${this.universidad}, ${anioPublicacion}.`;
  }
}
