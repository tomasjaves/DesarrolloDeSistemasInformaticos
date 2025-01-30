/**
 * Cree una función productTable que reciba como parámetro un número N >= 1 y que devuelva un array de arrays
 * con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos.
 * En caso de que el argumento no sea correcto, la función debe devolver undefined.
 * 
 * Ejemplos:
 * N = 2; Resultado: [[1, 2], [2, 4]]
 * N = 3; Resultado: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
 * N = 4; Resultado: [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
 */

/**
 * Crea un array de arrays con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos.
 * @param N Número de tablas de multiplicar a crear.
 * @returns Array de arrays con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos.
 * En caso de que el argumento no sea correcto, la función debe devolver undefined.
 * 
 * Ejemplo de uso:
 * ```typescript
 * productTable(2) = [[1, 2], [2, 4]]
 * productTable(3) = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
 * productTable(4) = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
 * ```
*/
export function productTable(N: number): number[][] | undefined {
  // Si el argumento es menor que 1 o no es un entero, la función debe devolver undefined.
  if (N < 1 || !Number.isInteger(N)) {
    return undefined;
  }

  // Variable para almacenar las tablas de multiplicar.
  const table: number[][] = [];

  // Iterar sobre cada fila para calcular los productos.
  for (let i = 1; i <= N; i++) {
    // Variable para almacenar la fila actual.
    const row: number[] = [];
    // Iterar sobre cada columna para calcular los productos.
    for (let j = 1; j <= N; j++) {
      // Calcular el producto y añadirlo a la fila.
      row.push(i * j);
    }
    // Añadir la fila a la tabla.
    table.push(row);
  }
  return table;
}
