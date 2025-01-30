import { HeuristicsInterface } from "./HeuristicsInterface";
import { MenuInstance } from "./MenuInstance";
import { MenuSolution } from "./MenuSolution";
import { Plato } from "./Dish";

/**
 * Heurística 3:
 * Selecciona los platos con la mejor relación puntuación nutricional/insalubridad hasta alcanzar el límite de insalubridad.
 */

/**
 * Clase que implementa la heurística 3.
 * Selecciona platos basándose en la mejor relación puntuación nutricional/insalubridad hasta alcanzar el límite de insalubridad.
 * @implements HeuristicsInterface
 * @method solve Método para resolver el problema del menú.
 * @method getSelectedDishes Método para obtener los platos seleccionados.
 * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
 */
export class Heuristic3 implements HeuristicsInterface {
  // Atributo que almacena los platos seleccionados
  private selectedDishes: Plato[] = [];

  /**
   * Resuelve el problema del menú seleccionando platos basándose en la mejor relación
   * puntuación nutricional/insalubridad hasta alcanzar el límite de insalubridad.
   * @param menuInstance Instancia del menú a resolver.
   * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
   */
  solve(menuInstance: MenuInstance): MenuSolution {
    // Reiniciamos el estado de selectedDishes para cada solución
    this.selectedDishes = [];
    // Ordenamos los platos por la mejor relación puntuación nutricional/insalubridad
    const platosRelacion = [...menuInstance.getPlatos()].sort(
      (a, b) =>
        b.puntuacionNutricional / b.insalubridad -
        a.puntuacionNutricional / a.insalubridad,
    );
    // Inicializamos la insalubridad acumulada
    let insalubridadActual = 0;

    // Bucle para seleccionar platos basándose en la mejor relación hasta alcanzar el límite de insalubridad
    for (const plato of platosRelacion) {
      // Si el plato no supera el límite de insalubridad, lo añadimos a la solución
      if (
        insalubridadActual + plato.insalubridad <=
        menuInstance.getMaxInsalubridad()
      ) {
        this.selectedDishes.push(plato);
        insalubridadActual += plato.insalubridad;
      }
    }

    // Creamos una nueva solución MenuSolution con los platos seleccionados
    const solucion = new MenuSolution(this.selectedDishes);
    return solucion;
  }

  /**
   * Devuelve los platos seleccionados por la última ejecución de solve.
   * @returns Un arreglo de Plato con los platos seleccionados.
   */
  getSelectedDishes(): Plato[] {
    return this.selectedDishes;
  }
}
