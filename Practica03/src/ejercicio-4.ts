/**
 * La conjetura de Collatz o el problema 3n + 1 parte de la definición de un entero positivo n.
 * Si n es par, hay que calcular n / 2 y hacer que el valor resultante sea el nuevo n.
 * Si n es impar, hay que calcular 3n + 1 y hacer que el valor resultante sea el nuevo n.
 * El anterior proceso se repite de manera indefinida.
 * La conjetura de Collatz establece que no importa el valor que tome n inicialmente,
 * dado que siempre se llegará al valor 1.
 *
 * Escriba una función collatz que reciba como argumento un número entero positivo y
 * que cuente el número de repeticiones del proceso indicado más arriba hasta llegar a n = 1.
 * La función deberá retornar dicho número de repeticiones:
 *
 * Ejemplo:
 * Suponga la siguiente invocación a la función: collatz(10).
 * Empezando con n = 10, tendriamos las siguientes iteraciones:
 *
 * n = 10 (par)
 * n = 5 (impar)
 * n = 16 (par)
 * n = 8 (par)
 * n = 4 (par)
 * n = 2 (par)
 * n = 1 (fin)
 *
 * Por lo tanto, collatz(10) debería devolver el valor numérico 6
 * (no se cuenta la iteración inicial donde n = 10).
 * En el caso de que la función no reciba un entero positivo como argumento,
 * la misma deberá devolver undefined.
 */

/**
 * Calcula la cantidad de pasos necesarios para alcanzar 1 en la secuencia de Collatz partiendo de un número dado.
 * 
 * La conjetura de Collatz, también conocida como la conjetura 3n + 1, propone que, dado un número entero positivo,
 * si el número es par, se divide entre 2; si el número es impar, se multiplica por 3 y se le suma 1.
 * Repitiendo este proceso, el número finalmente llegará a 1.
 * 
 * La función verifica primero que el número de entrada sea un entero positivo. Si no lo es, devuelve `undefined`.
 * Luego, aplica repetidamente las reglas de la secuencia de Collatz hasta que el número se reduce a 1,
 * contabilizando la cantidad de pasos necesarios para alcanzar este resultado.
 * 
 * @param n El número entero positivo desde el cual iniciar la secuencia de Collatz.
 * @returns El número de pasos necesarios para reducir el número a 1 según la conjetura de Collatz,
 *          o `undefined` si el número de entrada no es un entero positivo.
 * 
 * Ejemplo de uso:
 * ```typescript
 * collatz(6) = 8
 * ```
 * En este ejemplo, la secuencia de Collatz para el número 6 es 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1,
 * lo que requiere un total de 8 pasos para llegar a 1.
 */
export function collatz(n: number): number | undefined {
  // Si el número no es un entero positivo, devolvemos undefined
  if (n > 0 && Number.isInteger(n)) {
    // Inicializamos un contador
    let count = 0;
    // Mientras n no sea 1, aplicamos el proceso indicado
    while (n !== 1) {
      // Si n es par, dividimos n entre 2
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        // en caso contrario, multiplicamos n por 3 y le sumamos 1
        n = 3 * n + 1;
      }
      count++;
    }
    return count;
  }
  return undefined;
}

// Pruebas
// console.log(collatz(10)); // 6
// console.log(collatz(1)); // 0
// console.log(collatz(2)); // 1
// console.log(collatz(-3)); // undefined
