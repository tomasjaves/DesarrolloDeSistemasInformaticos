import { HeuristicsInterface } from "./HeuristicsInterface";
import { MenuInstance } from "./MenuInstance";
import { MenuSolution } from "./MenuSolution";
import { Plato } from "./Dish";

/**
 * Heurística 2:
 * Selecciona platos basándose en la mejor puntuación nutricional y en la menor insalubridad hasta alcanzar el límite de insalubridad.
 */

/**
 * Clase que implementa la heurística 2.
 * Selecciona los platos con la mayor puntuación nutricional y la menor insalubridad hasta alcanzar el límite de insalubridad.
 * @implements HeuristicsInterface
 * @method solve Método para resolver el problema del menú.
 * @method getSelectedDishes Método para obtener los platos seleccionados.
 * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
 */
export class Heuristic2 implements HeuristicsInterface {
  // Atributo que almacena los platos seleccionados
  private selectedDishes: Plato[] = [];

  /**
   * Método que resuelve el problema del menú con la heurística 2.
   * Selecciona los platos con la mayor puntuación nutricional y la menor insalubridad hasta alcanzar el límite de insalubridad.
   * @param menuInstance Instancia del menú a resolver.
   * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
   */
  solve(menuInstance: MenuInstance): MenuSolution {
    // Reiniciamos el estado de selectedDishes para cada solución
    this.selectedDishes = [];
    // Inicializamos la solución
    const solucion = new MenuSolution();

    // Ordenamos los platos por puntuación nutricional de mayor a menor y por insalubridad de menor a mayor
    const platosNutricionales = [...menuInstance.getPlatos()].sort(
      (a, b) => b.puntuacionNutricional - a.puntuacionNutricional,
    );
    const platosSaludables = [...menuInstance.getPlatos()].sort(
      (a, b) => a.insalubridad - b.insalubridad,
    );
    // Inicializamos la insalubridad acumulada
    let insalubridadActual = 0;
    // Inicializamos los índices para recorrer los arreglos de platos
    let i = 0,
      j = 0;

    // Mientras haya platos disponibles y no se haya alcanzado el límite de insalubridad
    while (
      (i < platosNutricionales.length || j < platosSaludables.length) &&
      insalubridadActual <= menuInstance.getMaxInsalubridad()
    ) {
      // Si hay platos nutricionales disponibles
      if (i < platosNutricionales.length) {
        // Recogemos el plato nutricional
        const platoNutricional = platosNutricionales[i++];
        // Si el plato no supera el límite de insalubridad y no ha sido seleccionado, lo añadimos a la solución
        if (
          insalubridadActual + platoNutricional.insalubridad <=
          menuInstance.getMaxInsalubridad()
        ) {
          this.selectedDishes.push(platoNutricional);
          insalubridadActual += platoNutricional.insalubridad;
        }
      }

      // Si hay platos saludables disponibles
      if (j < platosSaludables.length) {
        // Recogemos el plato saludable
        const platoSaludable = platosSaludables[j++];
        // Si el plato no supera el límite de insalubridad y no ha sido seleccionado, lo añadimos a la solución
        if (
          insalubridadActual + platoSaludable.insalubridad <=
            menuInstance.getMaxInsalubridad() &&
          !this.selectedDishes.includes(platoSaludable)
        ) {
          this.selectedDishes.push(platoSaludable);
          insalubridadActual += platoSaludable.insalubridad;
        }
      }
    }

    // Añadimos los platos seleccionados a la solución
    solucion.agregarPlatos(this.selectedDishes);
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
