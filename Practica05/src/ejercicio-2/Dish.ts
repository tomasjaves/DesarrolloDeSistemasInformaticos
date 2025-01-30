/**
 * Interfaz que representa un plato.
 * Contiene el nombre, la puntuación nutricional y la insalubridad.
 * @interface IPlato
 * @property nombre Nombre del plato.
 * @property puntuacionNutricional Puntuación nutricional del plato.
 * @property insalubridad Insalubridad del plato.
 */
interface IPlato {
  nombre: string;
  puntuacionNutricional: number;
  insalubridad: number;
}

/**
 * Clase que representa un plato.
 * Contiene el nombre, la puntuación nutricional y la insalubridad.
 * @implements IPlato
 * @constructor
 * @property nombre Nombre del plato.
 * @property puntuacionNutricional Puntuación nutricional del plato.
 * @property insalubridad Insalubridad del plato.
 */
export class Plato implements IPlato {
  constructor(
    public nombre: string,
    public puntuacionNutricional: number,
    public insalubridad: number,
  ) {
    if (puntuacionNutricional < 0) {
      throw new Error('Puntuación nutricional debe ser un número positivo');
    }
    if (insalubridad < 0) {
      throw new Error('Insalubridad debe ser un número positivo');
    }
  }
}
