import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que representa un Trabajo de Fin de Grado.
 * Implementa la interfaz ElementoBibliografico.
 * @export
 * @class TFG
 * @implements {ElementoBibliografico}
 * @constructor
 * @property {string} titulo - Título del TFG.
 * @property {string[]} autores - Autores del TFG.
 * @property {string[]} palabras_clave - Palabras clave del TFG.
 * @property {string} resumen - Resumen del TFG.
 * @property {string} fecha_publicacion - Fecha de publicación del TFG.
 * @property {number} paginas - Número de páginas del TFG.
 * @property {string} editorial - Departamento académico del TFG.
 * @property {string} universidad - Universidad donde se realizó el TFG.
 * @property {string} grado - Grado obtenido.
 * @property {string[]} tutores - Tutores o directores del TFG.
 * @method GetFormatIEEE - Devuelve el TFG en formato IEEE.
 */
export class TFG implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string, // Departamento académico
    public universidad: string,
    public grado: string, // Especifica el grado obtenido
    public tutores: string[], // Los tutoreses o directores del TFG
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
    // Se formatea la lista de tutores.
    const tutoresesFormateados = this.tutores.join(", ");

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," ${this.grado} thesis, ${this.universidad}, ${anioPublicacion}.`;
  }
}
