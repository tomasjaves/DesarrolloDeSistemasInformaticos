/**
 * Dadas las posiciones de dos reinas en un tablero de ajedrez, determine si ambas reinas podrían
 * atacarse. En el ajedrez, una reina puede atacar piezas ubicadas en la misma fila,
 * columna o diagonal. Un tablero de ajedrez puede representarse mediante un array bidimensional
 * de 8 x 8 casillas. Por lo tanto, si la reina negra está ubicada en la posición (1, 3),
 * mientras que la reina blanca está ubicada en la posición (3, 5),
 * tendríamos una estructura de datos como la que sigue:
 *
 * [
 *   [-, -, -, -, -, -, -, -]
 *   [-, -, -, N, -, -, -, -]
 *   [-, -, -, -, -, -, -, -]
 *   [-, -, -, -, -, B, -, -]
 *   [-, -, -, -, -, -, -, -]
 *   [-, -, -, -, -, -, -, -]
 *   [-, -, -, -, -, -, -, -]
 *   [-, -, -, -, -, -, -, -]
 * ]
 *
 * Escriba una función checkAtack que, dada una estructura de datos como la anterior,
 * devuelva un valor lógico indicando si ambas reinas podrían atacarse dadas las posiciones
 * de las mismas. Tenga en cuenta que solo puede haber una reina blanca y una reina negra en el tablero.
 * En caso de que lo anterior no suceda, la función deberá devolver el valor undefined.
 
 * Por último, el tablero debe consistir en, exactamente, 8 filas y 8 columnas,
 * donde cada casilla puede contener alguno de los valores -, N o B, exclusivamente.
*/


// Definimos un tipo para las celdas que puede ser "-", "N" o "B"
type ChessCell = "-" | "N" | "B";

// Creamos un tipo para el tablero de ajedrez utilizando el tipo ChessCell
export type ChessBoard = ChessCell[][];

/**
 * Función que recibe un tablero de ajedrez y devuelve si hay un ataque entre dos reinas
 * @param board
 * @returns true si hay ataque, false si no lo hay, undefined si el tablero no es válido
 */
export function checkAttack(board: ChessBoard): boolean | undefined {
  // Si el tablero no es de 8x8, devolver undefined
  if (board.length !== 8 || board.some((row) => row.length !== 8)) {
    return undefined;
  }
  // Encontrar las posiciones de las reinas
  let queenPositions = findQueens(board);
  // Si no hay dos reinas, devolver undefined
  if (queenPositions.length !== 2) {
    return undefined;
  }
  // Inicializamos las posiciones de las reinas
  let [q1, q2] = queenPositions;
  // Comprobamos si hay ataque. La expresión matemática comprueba si están en la misma diagonal.
  // |c1 - c2| = |f1 - f2|
  if (
    q1.row === q2.row ||
    q1.col === q2.col ||
    Math.abs(q1.row - q2.row) === Math.abs(q1.col - q2.col)
  ) {
    return true;
  }
  return false;
}

/**
 * Función que recibe un tablero de ajedrez y devuelve las posiciones de las reinas
 * @param board
 * @returns Un arreglo con las posiciones de las reinas
 */
function findQueens(
  board: ChessBoard,
): { row: number; col: number; type: string }[] {
  // Inicializamos un arreglo para guardar las posiciones
  let positions: { row: number; col: number; type: string }[] = [];
  // Recorremos el tablero y guardamos las posiciones de las reinas
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      // Si la celda es una reina, la guardamos
      if (cell === "N" || cell === "B") {
        positions.push({ row: rowIndex, col: colIndex, type: cell });
      }
    });
  });
  return positions;
}

// Creamos un tablero de ajedrez
const board: ChessBoard = [
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "N", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "B", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"]
];

// Debería imprimir true o false dependiendo de las posiciones
console.log(checkAttack(board));

