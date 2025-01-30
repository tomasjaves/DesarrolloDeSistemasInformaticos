import { HeuristicsInterface } from "./HeuristicsInterface";
import { MenuInstance } from "./MenuInstance";
import { MenuSolution } from "./MenuSolution";
import { Plato } from "./Dish";

/**
 * Heurística 1:
 * Selecciona los platos con la mayor puntuación nutricional hasta alcanzar el límite de insalubridad.
 */

/**
 * Interfaz que representa una heurística.
 * Contiene un método para resolver el problema del menú.
 * @implements HeuristicsInterface
 * @method solve Método para resolver el problema del menú.
 * @method getSelectedDishes Método para obtener los platos seleccionados.
 * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
 */
export class Heuristic1 implements HeuristicsInterface {
  private selectedDishes: Plato[] = [];

  /**
   * Método que resuelve el problema del menú con la heurística 1.
   * Selecciona los platos con la mayor puntuación nutricional hasta alcanzar el límite de insalubridad.
   * @param menuInstance Instancia del menú a resolver.
   * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
   */
  solve(menuInstance: MenuInstance): MenuSolution {
    // Reiniciamos el estado de selectedDishes para cada solución
    this.selectedDishes = [];
    // Ordenamos los platos por puntuación nutricional de mayor a menor
    const platosOrdenados = [...menuInstance.getPlatos()].sort(
      (a, b) => b.puntuacionNutricional - a.puntuacionNutricional,
    );
    // Inicializamos la insalubridad acumulada
    let insalubridadActual = 0;

    // Bucle para seleccionar los platos hasta alcanzar el límite de insalubridad
    for (const plato of platosOrdenados) {
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
   * Método que devuelve los platos seleccionados.
   * @returns Un arreglo de Plato con los platos que han sido seleccionados.
   */
  getSelectedDishes(): Plato[] {
    return this.selectedDishes;
  }
}
