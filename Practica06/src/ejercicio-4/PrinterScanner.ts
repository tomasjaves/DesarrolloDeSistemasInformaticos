// printer-scanner.ts
import { Printable } from "./Printable";
import { Scannable } from "./Scannable";

/**
 * Clase que implementa las interfaces Printable y Scannable.
 * @implements Printable
 * @implements Scannable
 * @method print Método para imprimir.
 * @method scan Método para escanear.
 */
export class PrinterScanner implements Printable, Scannable {
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

  /**
   * Método para escanear.
   * @returns void
   */
  scan(): void {
    console.log("Escaneando...");
  }

  /**
   * Método para escanear en color.
   * @returns void
   */
  scanColor(): void {
    console.log("Escaneando en color...");
  }
}
