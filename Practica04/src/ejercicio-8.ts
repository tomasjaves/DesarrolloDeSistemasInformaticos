/**
 * Escriba una función getPaths que dada una matriz de N filas y M columnas devuelva una lista de todos los posibles caminos
 * que llevan desde la esquina superior izquierda de la matriz a la esquina inferior derecha,
 * moviéndose solo hacia abajo en el número de filas o hacia la derecha en el número de columnas.
 * Cada camino debe consistir en una lista con las componentes de la matriz visitadas durante el mismo.
 * 
 * Ejemplo:
 * La invocación a getPaths(3, 2, [[0, 1], [2, 3], [4, 5]]) debe devolver la siguiente matriz (o lista de listas):
 * [
 * [0, 1, 3, 5],
 * [0, 2, 3, 5],
 * [0, 2, 4, 5]
 * ]
 * 
 * Se puede observar como la solución consiste en tres posibles caminos diferentes.
 */

/**
 * Devuelve una lista de todos los posibles caminos que llevan desde la esquina superior izquierda de la matriz a la esquina inferior derecha.
 * Si la matriz está vacía, la función devolverá un arreglo vacío.
 * @param N Número de filas de la matriz.
 * @param M Número de columnas de la matriz.
 * @param matrix Matriz de N filas y M columnas.
 * @returns Lista de todos los posibles caminos que llevan desde la esquina superior izquierda de la matriz a la esquina inferior derecha.
 * 
 * Ejemplo de uso:
 * ```typescript
 * getPaths(3, 2, [[0, 1], [2, 3], [4, 5]]) = [[0, 1, 3, 5], [0, 2, 3, 5], [0, 2, 4, 5]]
 * getPaths(1, 1, [[0]]) = [[0]]
 * getPaths(0, 0, []) = []
 * ```
 */
export function getPaths(N: number, M: number, matrix: number[][]): number[][] {
  // Si la matriz está vacía, devolver un arreglo vacío
  if (N === 0 || M === 0) {
    return [];
  }
  // Variable para almacenar los caminos posibles
  const paths: number[][] = [];

  // Función recursiva para encontrar los caminos posibles
  function findPath(row: number, col: number, path: number[]): void {
    // Si se llega a la esquina inferior derecha
    if (row === N - 1 && col === M - 1) {
      // Almacenar el camino encontrado
      paths.push([...path, matrix[row][col]]);
      return;
    }

    // Agregar el valor actual a la lista de caminos
    path.push(matrix[row][col]);

    // Si se puede mover hacia abajo
    if (row < N - 1) {
      // Llamar a la función recursivamente para moverse hacia abajo
      findPath(row + 1, col, [...path]);
    }

    // Si se puede mover hacia la derecha
    if (col < M - 1) {
      // Llamar a la función recursivamente para moverse hacia la derecha
      findPath(row, col + 1, [...path]);
    }
  }

  // Iniciar la búsqueda del camino
  findPath(0, 0, []);
  // Devolver los caminos encontrados
  return paths.reverse();
}
