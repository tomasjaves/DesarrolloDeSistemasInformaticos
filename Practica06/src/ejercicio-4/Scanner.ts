import { Scannable } from "./Scannable";

/**
 * Clase que implementa la interfaz Scannable.
 * @implements Scannable
 * @method scan Método para escanear.
 */
export class Scanner implements Scannable {
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
