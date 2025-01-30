// src/services/mudanza.ts
import { Caja } from "./Caja";
import { Enser } from "./Enser";

/**
 * Clase que representa una mudanza
 * @class
 * @typeParam T Tipo de Enser que puede contener la mudanza
 * @property Caja Lista de Cajas que contiene la mudanza
 * @method addCaja Método para añadir una Caja a la mudanza
 * @method removeCaja Método para eliminar una Caja de la mudanza
 * @method listAllEnsers Método para listar los Ensers que contiene la mudanza
 * @method getTotalWeight Método para obtener el peso total de la mudanza
 */
export class Mudanza<T extends Enser> {
  private Caja: Caja<T>[] = [];

  /**
   * Método para añadir una Caja a la mudanza
   * @param Caja Caja a añadir a la mudanza
   * @returns void
   */
  addCaja(Caja: Caja<T>): void {
    // Añadir Caja a la mudanza
    this.Caja.push(Caja);
  }

  /**
   * Método para eliminar una Caja de la mudanza
   * @param index Índice de la Caja a eliminar
   * @returns Caja<T> | undefined
   */
  removeCaja(index: number): Caja<T> | undefined {
    // Si el índice es válido, eliminar Caja de la mudanza
    if (index >= 0 && index < this.Caja.length) {
      return this.Caja.splice(index, 1)[0];
    }
    // Si el índice no es válido, devolver undefined
    return undefined;
  }

  /**
   * Método para listar los Ensers que contiene la mudanza
   * @returns void
   */
  listAllEnsers(): void {
    // Listar los Ensers de cada Caja
    this.Caja.forEach((Caja, index) => {
      // Mostrar el número de Caja y listar sus Ensers
      console.log(`Caja #${index + 1}:`);
      Caja.listEnsers();
    });
  }

  /**
   * Método para obtener el peso total de la mudanza
   * @returns number
   */
  getTotalWeight(): number {
    // Calcular el peso total de la mudanza
    return this.Caja.reduce((totalWeight, Caja) => {
      const CajaWeight = Caja.getEnsers().reduce(
        (weight, Enser) => weight + Enser.weight,
        0,
      );
      return totalWeight + CajaWeight;
    }, 0);
  }

  /**
   * Método para obtener las Cajas que contiene la mudanza
   * @returns Caja<T>[]
   */
  getCajas(): Caja<T>[] {
    return this.Caja;
  }
}
