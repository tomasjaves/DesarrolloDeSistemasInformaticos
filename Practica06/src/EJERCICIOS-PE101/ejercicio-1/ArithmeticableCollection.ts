import { Arithmeticable } from "./Arithmeticable";

/**
 * Clase que representa una colección de números aritméticos
 * @class ArithmeticableCollection
 * @template T
 * @property {T[]} elements Elementos de la colección
 * @method {void} addArithmeticable Añade un elemento a la colección
 * @method {T} getArithmeticable Devuelve un elemento de la colección
 * @method {number} getNumberOfArithmeticables Devuelve el número de elementos de la colección
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elements: T[] = [];

  /**
   * Función que añade un elemento a la colección
   * @param {T} element Elemento a añadir
   * @returns {void}
   */
  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  /**
   * Función que devuelve un elemento de la colección
   * @param {number} index Índice del elemento a devolver
   * @returns {T} Elemento de la colección
   */
  getArithmeticable(index: number): T {
    return this.elements[index];
  }

  /**
   * Función que devuelve el número de elementos de la colección
   * @returns {number} Número de elementos de la colección
   */
  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}
