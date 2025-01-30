/**
 * Cree una función multiplyAll que tome como parámetro un array de números. Esta función deberá devolver
 * como resultado otra función que toma como argumento un único valor numérico y devuelve un nuevo array.
 * El array devuelto por la segunda función debe ser el resultado de la multiplicación de los números del array
 * por el valor numérico que recibe la segunda función. Además, no se debe modificar el primer array.
 * 
 * Ejemplos:
 * La invocación a multiplyAll([2, 6, 8])(3) devuelve [6, 18, 24].
 * La invocación a multiplyAll([])(3) devuelve [].
 */

/**
 * Devuelve una función que toma como argumento un único valor numérico y devuelve un nuevo array.
 * El array devuelto por la segunda función debe ser el resultado de la multiplicación de los números del array
 * por el valor numérico que recibe la segunda función. Además, no se debe modificar el primer array.
 * Si el array de números está vacío, la función devuelta debe devolver un array vacío.
 * @param numbers Array de números.
 * @returns Función que toma como argumento un único valor numérico y devuelve un nuevo array.
 * 
 * Ejemplo de uso:
 * ```typescript
 * multiplyAll([2, 6, 8])(3) = [6, 18, 24]
 * multiplyAll([])(3) = []
 * ```
 */
export function multiplyAll(numbers: number[]): (multiplier: number) => number[] {
  // Devolver una función que toma como argumento un único valor numérico y devuelve un nuevo array.
  return function(multiplier: number): number[] {
      return numbers.map(number => number * multiplier);
  };
}
