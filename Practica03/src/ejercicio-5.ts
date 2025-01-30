/**
 * Escriba una función getTriplets que, dado un valor entero positivo N encuentre
 * todas las posibles tripletas (a, b, c) tales que
 * a < b < c, a^2 + b^2 = c^2 y a + b + c = N.
 * La función deberá devolver una cadena con todas las tripletas encontradas separadas
 * por puntos y comas. En el caso de que getTriplets no reciba un valor entero positivo
 * o que no encuentre, al menos, una tripleta, deberá devolver undefined.
 *
 * Ejemplo:
 * La invocación getTriplets(1000) deberá devolver la cadena "(200, 375, 425)".
 * La invocación getTriplets(-153) deberá devolver undefined.
 * La invocación getTriplets(3) deberá devolver undefined.
 */

/**
 * Encuentra todas las tripletas pitagóricas cuya suma sea igual a un número dado `n`.
 * 
 * Una tripleta pitagórica consiste en tres números enteros positivos `a`, `b`, y `c`, tal que a^2 + b^2 = c^2.
 * Esta función busca todas las combinaciones de `a`, `b`, y `c` que satisfacen tanto la ecuación pitagórica
 * como la condición de que su suma (`a + b + c`) sea igual al número de entrada `n`.
 * 
 * Las tripletas se devuelven en una cadena, donde cada tripleta `(a, b, c)` se separa de las demás sin ningún delimitador.
 * Si no se encuentran tripletas que cumplan las condiciones, o si `n` no es un entero positivo, la función devuelve `undefined`.
 * 
 * Nota: `a`, `b`, y `c` deben cumplir con las condiciones a < b < c y a + b + c = n para ser consideradas una tripleta válida.
 * 
 * @param n El número entero positivo que representa la suma de las tripletas pitagóricas a buscar.
 * @returns Una cadena con todas las tripletas pitagóricas encontradas que suman `n`, o `undefined` si no se encuentran tripletas válidas o si `n` no es un entero positivo.
 * 
 * Ejemplo de uso:
 * ```typescript
 * getTriplets(1000) = "(200, 375, 425)"
 * getTriplets(12) = "(3, 4, 5)"
 * getTriplets(-1) = undefined
 * ```
 */
export function getTriplets(n: number): string | undefined {
  // Si n no es un entero positivo, devolvemos undefined
  if (n < 0 || !Number.isInteger(n)) {
    return undefined;
  }
  // Inicializamos una cadena vacía para almacenar el resultado
  let result = "";
  // Generamos todas las posibles tripletas (a, b, c) tales que a < b < c, a^2 + b^2 = c^2 y a + b + c = N
  for (let a = 1; a < n; a++) {
    // b debe ser mayor que a
    for (let b = a + 1; b < n; b++) {
      // c debe ser mayor que b
      const c = n - a - b;
      // Si se cumple la condición a^2 + b^2 = c^2, añadimos la terna a la cadena de resultado
      if (a ** 2 + b ** 2 === c ** 2) {
        result += `(${a}, ${b}, ${c})`;
      }
    }
  }
  return result || undefined;
}

// Pruebas
// console.log(getTriplets(1000)); // "(200, 375, 425)"
// console.log(getTriplets(-153)); // undefined
// console.log(getTriplets(3)); // undefined
