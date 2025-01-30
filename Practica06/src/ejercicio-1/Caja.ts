import { Enser } from "./Enser";

/**
 * Clase que representa una caja que puede contener Ensers
 * @typeParam T Tipo de Enser que puede contener la caja
 * @property contents Lista de Ensers que contiene la caja
 * @method addEnser Método para añadir un Enser a la caja
 * @method removeEnser Método para eliminar un Enser de la caja
 * @method listEnsers Método para listar los Ensers que contiene la caja
 * @method getEnsers Método para obtener los Ensers que contiene la caja
 * @method findEnser Método para buscar un Enser en la caja
 */
export class Caja<T extends Enser> {
  private contents: T[] = [];

  /**
   * Método para añadir un Enser a la caja   *
   * @param Enser Enser a añadir a la caja
   * @returns void
   */
  addEnser(Enser: T): void {
    this.contents.push(Enser);
  }

  /**
   * Método para eliminar un Enser de la caja
   * @param name Nombre del Enser a eliminar
   * @returns T | undefined
   */
  removeEnser(name: string): T | undefined {
    // Obtenemos el índice del Enser a eliminar
    const index = this.contents.findIndex((Enser) => Enser.name === name);
    // Si el índice no es -1, existe y, por tanto, lo eliminamos
    if (index !== -1) {
      return this.contents.splice(index, 1)[0];
    }
    // Si el índice es -1, no existe y, por tanto, devolvemos undefined
    return undefined;
  }

  /**
   * Método para listar los Ensers que contiene la caja
   * @returns void
   */
  listEnsers(): void {
    // Listamos la descripción de cada Enser
    this.contents.forEach((Enser) => console.log(Enser.getDescription()));
  }

  /**
   * Método para obtener los Ensers que contiene la caja
   * @returns T[]
   */
  getEnsers(): T[] {
    return this.contents;
  }

  /**
   * Método para buscar un Enser en la caja
   * @param name Nombre del Enser a buscar
   * @returns T | undefined
   */
  findEnser(name: string): T | undefined {
    // Devolvemos el Enser si lo encontramos
    return this.contents.find((Enser) => Enser.name === name);
  }
}
