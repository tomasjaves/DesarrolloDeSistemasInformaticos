/**
 * Interfaz que define las operaciones aritméticas básicas.
 */
export interface Arithmeticable<T> {
  add(b: T): T;
  subtract(b: T): T;
  multiply(b: T): T;
  divide(b: T): T;
}
