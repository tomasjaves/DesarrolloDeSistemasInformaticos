/**
 * Escriba una función getPoints que calcule los puntos ganados por un jugador al completar una fase de un juego.
 * 
 * Los puntos dependen, tanto de la fase completada, como de los objetos que se han recolectado
 * durante la misma, siguiendo el siguiente algoritmo:
 * 
 * Cada objeto recolectado y fase tienen asignados un identificador numérico. En este primer paso, para cada objeto recolectado,
 * habrá que calcular todos sus múltiplos menores que la fase completada. Teniendo en cuenta lo anterior,
 * al finalizar este paso, tendrá diferentes listas de múltiplos, una por cada objeto recolectado.
 * 
 * Combinar todas las listas de múltiplos en una única lista.
 * 
 * Eliminar los duplicados de la lista combinada.
 * 
 * Sumar los elementos de la lista combinada sin duplicados y devolverlo.
 * 
 * Ejemplo:
 * Suponga que ha recolectado tres objetos con identificadores 2, 3 y 7, y que ha completado la fase 25.
 * Los múltiplos de 2 menores que 25 serían [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]. Los múltiplos de 3 menores
 * que 25 serían [3, 6, 9, 12, 15, 18, 21, 24]. Por último, los múltiplos de 7 menores que 25 serían [7, 14, 21].
 * Combinando las listas anteriores y eliminando los duplicados, resultaría la lista [2, 3, 4, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24].
 * Al sumar todos sus elementos, la función getPoints debería devolver el valor 211.
 * 
 * La función deberá retornar undefined en el caso de que reciba argumentos no válidos como, por ejemplo,
 * un identificador de fase o de objeto negativo.
 */

/**
 * Calcula los puntos ganados por un jugador al completar una fase de un juego.
 * Si la fase o algún objeto es negativo, devolver undefined.
 * @param objects Lista de identificadores de objetos recolectados.
 * @param phase Identificador de la fase completada.
 * @returns Puntos ganados por el jugador al completar la fase.
 * 
 * Ejemplo de uso:
 * ```typescript
 * getPoints([2, 3, 7], 25) = 211
 * getPoints([2, 3, 7], -25) = undefined
 * ```
 */
export function getPoints(objects: number[], phase: number): number | undefined {
  // Si la fase o algún objeto es negativo, devolver undefined.
  if (phase < 0 || objects.some(obj => obj <= 0)) {
    return undefined;
  }

  // Variables para almacenar los múltiplos de cada objeto.
  let multiples: number[] = [];
  // Recorrer la lista de objetos recolectados.
  objects.forEach(obj => {
    // Calcular los múltiplos de cada objeto.
    for (let multiple = obj; multiple < phase; multiple += obj) {
      multiples.push(multiple);
    }
  });

  // Variables para almacenar los múltiplos únicos.
  // Esto se logra convirtiendo la lista de múltiplos en un conjunto porqué los conjuntos no permiten duplicados.
  let uniqueMultiples = Array.from(new Set(multiples));

  // Variable para almacenar la suma de los múltiplos únicos.
  let sum = uniqueMultiples.reduce((acc, curr) => acc + curr, 0);

  return sum;
}