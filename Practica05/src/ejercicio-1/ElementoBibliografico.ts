/**
 * Interfaz que representa un elemento bibliográfico.
 * @exports
 * @interface ElementoBibliografico
 * @property {string} titulo - Título del elemento bibliográfico.
 * @property {string[]} autores - Autores del elemento bibliográfico.
 * @property {string[]} palabras_clave - Palabras clave del elemento bibliográfico.
 * @property {string} resumen - Resumen del elemento bibliográfico.
 * @property {string} fecha_publicacion - Fecha de publicación del elemento bibliográfico.
 * @property {number} paginas - Número de páginas del elemento bibliográfico.
 * @property {string} editorial - Editorial del elemento bibliográfico.
 * @method GetFormatIEEE - Devuelve el elemento bibliográfico en formato IEEE.
 */
export interface ElementoBibliografico {
  titulo: string;
  autores: string[];
  palabras_clave: string[];
  resumen: string;
  fecha_publicacion: string;
  paginas: number;
  editorial: string;
  GetFormatIEEE(): string;
}
