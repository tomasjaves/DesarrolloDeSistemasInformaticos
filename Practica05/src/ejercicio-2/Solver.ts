import { MenuInstance } from "./MenuInstance";
import { MenuSolution } from "./MenuSolution";
import { Heuristic1 } from "./Heuristic1";
import { Heuristic2 } from "./Heuristic2";
import { Heuristic3 } from "./Heuristic3";

/**
 * Clase que representa un solucionador de instancias del problema del menú.
 * Contiene métodos para resolver el problema del menú con diferentes heurísticas.
 * @method resolverConHeuristica1 Método para resolver el problema del menú con la heurística 1.
 * @method resolverConHeuristica2 Método para resolver el problema del menú con la heurística 2.
 * @method resolverConHeuristica3 Método para resolver el problema del menú con la heurística 3.
 * @method resolver Método para resolver el problema del menú con una heurística dada a través de un número.
 */
export class Solver {
  // Atributo que almacena la instancia del menú a resolver
  private instancia: MenuInstance;

  /**
   * Constructor de la clase.
   * @param instancia Instancia del menú a resolver.
   */
  constructor(instancia: MenuInstance) {
    this.instancia = instancia;
  }

  /**
   * Método que resuelve el problema del menú con la heurística 1.
   * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
   */
  resolverConHeuristica1(): MenuSolution {
    // Instanciamos la heurística 1 y resolvemos el problema del menú
    const heuristic1 = new Heuristic1();
    return heuristic1.solve(this.instancia);
  }

  /**
   * Método que resuelve el problema del menú con la heurística 2.
   * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
   */
  resolverConHeuristica2(): MenuSolution {
    // Instanciamos la heurística 2 y resolvemos el problema del menú
    const heuristic2 = new Heuristic2();
    return heuristic2.solve(this.instancia);
  }

  /**
   * Método que resuelve el problema del menú con la heurística 3.
   * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
   */
  resolverConHeuristica3(): MenuSolution {
    // Instanciamos la heurística 3 y resolvemos el problema del menú
    const heuristic3 = new Heuristic3();
    return heuristic3.solve(this.instancia);
  }

  /**
   * Método que resuelve el problema del menú con una heurística dada a través de un número.
   * @param heuristica Número que representa la heurística a utilizar.
   * @returns Una solución al problema del menú encapsulada en un objeto MenuSolution.
   * @throws Error si la heurística no está definida.
   */
  resolver(heuristica: number): MenuSolution {
    switch (heuristica) {
      case 1:
        return this.resolverConHeuristica1();
      case 2:
        return this.resolverConHeuristica2();
      case 3:
        return this.resolverConHeuristica3();
      default:
        throw new Error("Heurística no definida");
    }
  }
}
