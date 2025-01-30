/**
 * Cree una función getTypeTriangle que determine si un triángulo es equilátero, isósceles o escaleno.
 * Recuerde que un triángulo es equilátero cuando sus tres lados tienen la misma longitud.
 * Un triángulo isósceles tiene, al menos, dos lados de igual longitud.
 * Por último, en un triángulo escaleno todos los lados tienen diferente longitud.
 *
 * En primer lugar, la función deberá comprobar que los tres lados del triángulo tienen una longitud mayor que cero.
 * Además, la suma de las longitudes de cualesquiera dos lados debe ser mayor que la longitud del tercer lado.
 * Lo anterior cumple con el principio de desigualdad triangular.
 *
 * La función recibirá tres argumentos numéricos y devolverá una cadena de caracteres indicando
 * el tipo de triángulo correspondiente o undefined en el caso de que los tres lados del triángulo no
 * cumplan con el principio de desigualdad triangular o en el caso de que los argumentos no sean válidos.
 *
 * Ejemplos:
 * La invocación a getTypeTriangle(7, 7, 7) deberá devolver la cadena "Equilátero".
 * La invocación a getTypeTriangle(5, 5, 9.5) deberá devolver la cadena "Isósceles".
 * La invocación a getTypeTriangle(5, 6, 7) deberá devolver la cadena "Escaleno".
 * La invocación a getTypeTriangle(3, 1, 1) deberá devolver el valor undefined (no cumple con el principio de desigualdad triangular).
 * La invocación a getTypeTriangle(-3, 1, 1) deberá devolver el valor undefined (primer argumento no válido).
 */

/**
 * Determina el tipo de un triángulo basado en las longitudes de sus lados.
 * 
 * La función evalúa las longitudes de los lados de un triángulo (a, b, y c) y determina si el triángulo es:
 * - Equilátero: Todos los lados tienen la misma longitud.
 * - Isósceles: Dos lados tienen la misma longitud, y el tercero es diferente.
 * - Escaleno: Todos los lados tienen diferentes longitudes.
 * 
 * Antes de determinar el tipo de triángulo, la función verifica dos condiciones:
 * 1. Todos los lados deben ser números positivos.
 * 2. Las longitudes de los lados deben cumplir con el principio de desigualdad triangular (la suma de las longitudes
 *    de cualquier par de lados debe ser mayor que la longitud del tercer lado).
 * 
 * Si alguna de estas condiciones no se cumple, la función devuelve `undefined`.
 * 
 * @param a La longitud del primer lado del triángulo.
 * @param b La longitud del segundo lado del triángulo.
 * @param c La longitud del tercer lado del triángulo.
 * @returns Una cadena que indica el tipo de triángulo ("Equilátero", "Isósceles", o "Escaleno") o `undefined` si los lados no forman un triángulo válido.
 * 
 * Ejemplo de uso:
 * ```typescript
 * getTypeTriangle(7, 7, 7) = "Equilátero"
 * getTypeTriangle(5, 5, 9) = "Isósceles"
 * getTypeTriangle(5, 6, 7) = "Escaleno"
 * getTypeTriangle(1, 2, 3) = undefined
 * ```
 */
export function getTypeTriangle(
  a: number,
  b: number,
  c: number,
): string | undefined {
  // Si alguno de los argumentos no es un número positivo, retornar undefined
  if (a <= 0 || b <= 0 || c <= 0) {
    return undefined;
  }
  // Comprobación del principio de desigualdad triangular. Si no se cumple, retornar undefined
  if (a + b <= c || a + c <= b || b + c <= a) {
    return undefined;
  }
  // Determinación del tipo de triángulo
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// Pruebas
// console.log(getTypeTriangle(7, 7, 7)); // "Equilátero"
// console.log(getTypeTriangle(5, 5, 9.5)); // "Isósceles"
// console.log(getTypeTriangle(5, 6, 7)); // "Escaleno"
// console.log(getTypeTriangle(3, 1, 1)); // undefined
// console.log(getTypeTriangle(-3, 1, 1)); // undefined
