import { Plato } from "./Dish";

/**
 * Clase que representa una instancia del problema del menú.
 * Contiene los platos disponibles y el límite de insalubridad.
 * @method getPlatos Método para obtener los platos disponibles.
 * @method getMaxInsalubridad Método para obtener el límite de insalubridad.
 */
export class MenuInstance {
  // Atributo que almacena los platos disponibles
  private platos: Plato[];
  // Atributo que almacena el límite de insalubridad
  private maxInsalubridad: number;

  /**
   * Constructor de la clase.
   * @param platos Platos disponibles.
   * @param maxInsalubridad Límite de insalubridad.
   */
  constructor(platos: Plato[], maxInsalubridad: number) {
    this.platos = platos;
    this.maxInsalubridad = maxInsalubridad;
  }

  /**
   * Método que devuelve los platos disponibles.
   * @returns Platos disponibles.
   */
  getPlatos(): Plato[] {
    return this.platos;
  }

  /**
   * Método que devuelve el límite de insalubridad.
   * @returns Límite de insalubridad.
   */
  getMaxInsalubridad(): number {
    return this.maxInsalubridad;
  }
}
