/**
 * Defina un tipo de datos propio que permita representar un número racional, esto es, pares de valores numéricos,
 * donde la primera componente del par es el numerador, mientras que la segunda componente del par representa el denominador.
 * 
 * A continuación, partiendo de dicha definición de tipo, escriba funciones que permitan calcular las siguientes operaciones sobre números racionales:
 * 
 * Valor absoluto e inverso multiplicativo (funciones abs e inv). Estas funciones reciben como argumento un racional y devuelven un racional.
 * Suma, resta, multiplicación y división (funciones add, sub, mult y div). Estas funciones reciben como argumentos dos racionales y devuelven un racional.
 * 
 * Todas las funciones anteriores deberán devolver aquel número racional donde su numerador y denominador sean los valores mínimos posibles.
 * Por ejemplo, el racional 5/20 debería devolverse como el racional 1/4. Por lo tanto, de algún modo,
 * también deberá escribir una función mcd(num, denom) que permita calcular el máximo común divisor de dos enteros positivos,
 * en este caso, de los valores del numerador y denominador. En nuestro ejemplo anterior, mcd(5, 20) devuelve el valor 5.
 * Dividiendo tanto el numerador (5), como el denominador (20) por 5, se obtiene el racional 1/4.
 */

/**
 * Defina un tipo de datos propio que permita representar un número racional, esto es, pares de valores numéricos,
 * donde la primera componente del par es el numerador, mientras que la segunda componente del par representa el denominador.
 */
type Racional = [number, number];

/**
 * Función que calcula el máximo común divisor de dos números enteros positivos utilizando el algoritmo de Euclides.
 * @param a que representa el numerador
 * @param b que representa el denominador
 * @returns el máximo común divisor de los dos números.
 * 
 * Ejemplo de uso:
 * ```typescript
 * mcd(5, 20) = 5
 * mcd(20, 5) = 5
 * mcd(20, 0) = 20
 * mcd(0, 20) = 20
 * ```
 */
export function mcd(a: number, b: number): number {
  // Calculamos el valor absoluto de los números
  a = Math.abs(a);
  b = Math.abs(b);
  // Aplicamos el algoritmo de Euclides
  while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
  }
  return a;
}

/**
 * Función que calcula el valor absoluto de un número racional.
 * @param racional que representa el número racional
 * @returns el valor absoluto de un número racional.
 */
export function abs(racional: Racional): Racional {
  return [Math.abs(racional[0]), Math.abs(racional[1])];
}

/**
 * Función que calcula el inverso multiplicativo de un número racional.
 * @param racional que representa el número racional
 * @returns el inverso multiplicativo de un número racional.
 */
export function inv(racional: Racional): Racional {
  return [racional[1], racional[0]];
}

/**
 * Función que simplifica un número racional.
 * @param racional que representa el número racional
 * @returns el número racional simplificado.
 */
export function simplificar(racional: Racional): Racional {
  const divisor = mcd(racional[0], racional[1]);
  return [racional[0] / divisor, racional[1] / divisor];
}

/**
 * Función que suma dos racionales.
 * @param r1 que representa el primer racional
 * @param r2 que representa el segundo racional
 * @returns la suma de dos racionales.
 */
export function add(r1: Racional, r2: Racional): Racional {
  // Calculamos el numerador y el denominador de la suma
  const numerador = r1[0] * r2[1] + r2[0] * r1[1];
  const denominador = r1[1] * r2[1];
  // Devolvemos el número racional simplificado
  return simplificar([numerador, denominador]);
}

/**
 * Función que resta dos racionales.
 * @param r1 que representa el primer racional
 * @param r2 que representa el segundo racional
 * @returns la resta de dos racionales.
 */
export function sub(r1: Racional, r2: Racional): Racional {
  // Calculamos el numerador y el denominador de la resta
  const numerador = r1[0] * r2[1] - r2[0] * r1[1];
  const denominador = r1[1] * r2[1];
  // Devolvemos el número racional simplificado
  return simplificar([numerador, denominador]);
}

/**
 * Función que multiplica dos racionales.
 * @param r1 que representa el primer racional
 * @param r2 que representa el segundo racional
 * @returns la multiplicación de dos racionales.
 */
export function mult(r1: Racional, r2: Racional): Racional {
  // Calculamos el numerador y el denominador de la multiplicación
  return simplificar([r1[0] * r2[0], r1[1] * r2[1]]);
}

/**
 * Función que divide dos racionales.
 * @param r1 que representa el primer racional
 * @param r2 que representa el segundo racional
 * @returns la división de dos racionales.
 */
export function div(r1: Racional, r2: Racional): Racional {
  // Calculamos el numerador y el denominador de la división
  return simplificar([r1[0] * r2[1], r1[1] * r2[0]]);
}
