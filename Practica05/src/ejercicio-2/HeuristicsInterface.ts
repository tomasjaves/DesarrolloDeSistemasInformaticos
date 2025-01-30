import { MenuInstance } from "./MenuInstance";
import { Plato } from "./Dish";
import { MenuSolution } from "./MenuSolution";

/**
 * Interfaz que representa una heurística.
 * Contiene un método para resolver el problema del menú.
 * @method solve Método para resolver el problema del menú.
 * @method getSelectedDishes Método para obtener los platos seleccionados.
 */
export interface HeuristicsInterface {
  // Método para resolver el problema del menú.
  solve(menuInstance: MenuInstance): MenuSolution;
  // Método para obtener los platos seleccionados.
  getSelectedDishes(): Plato[];
}
