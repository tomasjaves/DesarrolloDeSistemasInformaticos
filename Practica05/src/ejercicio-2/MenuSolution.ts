import { Plato } from "./Dish";

/**
 * Clase que representa una solución al problema del menú.
 * Contiene los platos seleccionados y métodos para calcular la insalubridad y la puntuación nutricional total.
 * @method agregarPlato Método para añadir un plato a la solución.
 * @method agregarPlatos Método para añadir una lista de platos a la solución.
 * @method getSeleccionados Método para obtener los platos seleccionados.
 * @method calcularInsalubridadTotal Método para calcular la insalubridad total de los platos seleccionados.
 * @method calcularPuntuacionNutricionalTotal Método para calcular la puntuación nutricional total de los platos seleccionados.
 */
export class MenuSolution {
  // Atributo que almacena los platos seleccionados
  private seleccionados: Plato[];

  /**
   * Constructor de la clase.
   * @param seleccionados Platos seleccionados.
   */
  constructor(seleccionados: Plato[] = []) {
    this.seleccionados = seleccionados;
  }

  /**
   * Método que añade un plato a la solución.
   * @param plato Plato a añadir.
   */
  agregarPlato(plato: Plato): void {
    this.seleccionados.push(plato);
  }

  /**
   * Método que añade una lista de platos a la solución.
   * @param platos Platos a añadir.
   */
  agregarPlatos(platos: Plato[]): void {
    this.seleccionados.push(...platos);
  }

  /**
   * Método que devuelve los platos seleccionados.
   * @returns Platos seleccionados.
   */
  getSeleccionados(): Plato[] {
    return this.seleccionados;
  }

  /**
   * Método que calcula la insalubridad total de los platos seleccionados.
   * @returns Insalubridad total.
   */
  calcularInsalubridadTotal(): number {
    return this.seleccionados.reduce(
      (acc, plato) => acc + plato.insalubridad,
      0,
    );
  }

  /**
   * Método que calcula la puntuación nutricional total de los platos seleccionados.
   * @returns Puntuación nutricional total.
   */
  calcularPuntuacionNutricionalTotal(): number {
    return this.seleccionados.reduce(
      (acc, plato) => acc + plato.puntuacionNutricional,
      0,
    );
  }
}
