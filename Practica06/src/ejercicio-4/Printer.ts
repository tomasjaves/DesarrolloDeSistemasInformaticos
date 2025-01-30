import { Printable } from "./Printable";

/**
 * Clase que implementa la interfaz Printable.
 * @implements Printable
 * @method print Método para imprimir.
 */
export class Printer implements Printable {
  /**
   * Método para imprimir.
   * @returns void
   */
  print(): void {
    console.log("Imprimiendo...");
  }

  /**
   * Método para imprimir en modo dúplex.
   * @returns void
   */
  printDuplex(): void {
    console.log("Imprimiendo a doble cara...");
  }
}
