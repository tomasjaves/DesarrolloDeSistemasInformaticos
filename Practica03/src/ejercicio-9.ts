/**
 * Un número racional está compuesto por un numerador y un denominador, ambos números enteros,
 * donde el denominador no puede tomar el valor cero.
 *
 * Escriba un conjunto de funciones que permita trabajar con números racionales:
 * Función abs que recibe como argumento la representación en cadena de un racional y devuelve una cadena representando el valor absoluto de dicho racional.
 * Función inv que recibe como argumento la representación en cadena de un racional y devuelve una cadena representando el inverso multiplicativo de dicho racional.
 * Función add, que recibe como argumentos la representación en cadena de dos racionales y devuelve una cadena representando la suma de dichos racionales.
 * Función sub, que recibe como argumentos la representación en cadena de dos racionales y devuelve una cadena representando la diferencia de dichos racionales.
 * Función mult, que recibe como argumentos la representación en cadena de dos racionales y devuelve una cadena representando el producto de dichos racionales.
 * Función div, que recibe como argumentos la representación en cadena de dos racionales y devuelve una cadena representando la división de dichos racionales.
 *
 * Todas las funciones anteriores deberán devolver la representación en cadena de aquel número racional
 * donde su numerador y denominador sean los valores mínimos posibles.
 * Por ejemplo, el racional representado por la cadena “5/20” debería devolverse como el racional representado por la cadena “1/4”.
 * Por lo tanto, de algún modo, también deberá escribir una función mcd(num, denom) que permita calcular el máximo común divisor de dos enteros positivos,
 * en este caso, de los valores del numerador y denominador. En nuestro ejemplo anterior, mcd(5, 20) devuelve el valor 5.
 * Dividiendo tanto el numerador (5), como el denominador (20) por 5, se obtiene el racional “1/4”
 */

/**
 * Calcula el máximo común divisor (MCD) de dos números utilizando el algoritmo de Euclides.
 * 
 * @param a Primer número entero.
 * @param b Segundo número entero.
 * @returns El MCD de `a` y `b`. Si ambos números son cero, devuelve `undefined`.
 * 
 * Ejemplo de uso:
 * ```typescript
 * mcd(5, 20) = 5
 * mcd(1, 2) = 1
 * mcd(0, 0) = undefined
 * ```
 */
export function mcd(a: number, b: number): number | undefined {
  // Si ambos números son cero, devolver undefined
  if (a === 0 && b === 0) return undefined;
  // Tomar el valor absoluto de ambos números para manejar casos negativos
  a = Math.abs(a);
  b = Math.abs(b);
  // Algoritmo de Euclides para calcular el MCD
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

/**
 * Simplifica una fracción a su mínima expresión.
 * 
 * Utiliza el MCD para reducir el numerador y el denominador a sus valores mínimos.
 * Si el denominador es cero o alguno de los valores no es un número, devuelve `undefined`.
 * 
 * @param numerador El numerador de la fracción.
 * @param denominador El denominador de la fracción.
 * @returns La fracción simplificada como una cadena "numerador/denominador", o "1" si numerador y denominador son iguales. Devuelve `undefined` para denominador cero o entradas no válidas.
 * 
 * Ejemplos de uso:
 * ```typescript
 * simplify(5, 20) = "1/4"
 * simplify(1, 2) = "1/2"
 * simplify(3, 3) = "1"
 * simplify(5, 0) = undefined
 * simplify(1, "abc") = undefined
 * ```
 */
export function simplify(
  numerador: number,
  denominador: number,
): string | undefined {
  // Si el denominador es cero o si el numerador/denominador no es un numero, retornar undefined
  if (denominador === 0 || isNaN(denominador) || isNaN(numerador))
    return undefined;
  // Calcular el máximo común divisor
  const divisor = mcd(numerador, denominador);
  // Verificar que el divisor no sea undefined
  if (divisor !== undefined) {
    // Simplificar el racional dividiendo numerador y denominador por el máximo común divisor
    numerador /= divisor;
    denominador /= divisor;
  }
  // Si el numerador y denominador son iguales, devolver "1"
  if (numerador === denominador) return "1";
  return `${numerador}/${denominador}`;
}

/**
 * Calcula el valor absoluto de una fracción representada como una cadena.
 * 
 * @param racional La fracción en formato cadena "numerador/denominador".
 * @returns La fracción con numerador y denominador en valor absoluto, simplificada a su mínima expresión.
 * 
 * Ejemplo de uso:
 * ```typescript
 * abs("-3/9") = "1/3"
 * abs("3/9") = "1/3"
 * abs("-3/-9") = "1/3"
 * abs("0/5") = "0/1"
 * ```
 */
export function abs(racional: string): string | undefined {
  // Obtener el numerador y denominador del racional
  let [numerador, denominador] = racional.split("/").map(Number);
  // Tomar el valor absoluto de numerador y denominador
  numerador = Math.abs(numerador);
  denominador = Math.abs(denominador);
  return simplify(numerador, denominador);
}

/**
 * Calcula el inverso multiplicativo de una fracción.
 * 
 * @param racional La fracción en formato cadena "numerador/denominador".
 * @returns La fracción inversa "denominador/numerador", simplificada a su mínima expresión.
 * 
 * Ejemplo de uso:
 * ```typescript
 * inv("1/4") = "4/1"
 * inv("4/1") = "1/4"
 * inv("0/5") = undefined
 * ```
 */
export function inv(racional: string): string | undefined {
  // Obtener el numerador y denominador del racional
  let [numerador, denominador] = racional.split("/").map(Number);
  // Devolver el racional invertido
  return simplify(denominador, numerador);
}

/**
 * Suma dos fracciones representadas como cadenas.
 * 
 * Calcula el numerador y denominador común para realizar la suma, luego simplifica el resultado.
 * 
 * @param racional1 La primera fracción en formato cadena.
 * @param racional2 La segunda fracción en formato cadena.
 * @returns La suma de las fracciones como una cadena, simplificada a su mínima expresión.
 * 
 * Ejemplos de uso:
 * ```typescript
 * add("1/2", "2/3") = "7/6"
 * add("1/4", "2/3") = "11/12"
 * add("1/2", "0/1") = "1/2"
 * ```
 */
export function add(racional1: string, racional2: string): string | undefined {
  // Obtener el numerador y denominador de cada racional
  let [numerador1, denominador1] = racional1.split("/").map(Number);
  let [numerador2, denominador2] = racional2.split("/").map(Number);
  // Calcular el numerador y denominador común
  let denominadorComun = denominador1 * denominador2;
  // Calcular el numerador de la suma
  let numerador = numerador1 * denominador2 + numerador2 * denominador1;
  // Devolver el racional simplificado
  return simplify(numerador, denominadorComun);
}

/**
 * Resta dos fracciones representadas como cadenas.
 * 
 * Calcula el numerador y denominador común para realizar la resta, luego simplifica el resultado.
 * 
 * @param racional1 La primera fracción en formato cadena.
 * @param racional2 La segunda fracción en formato cadena.
 * @returns La diferencia de las fracciones como una cadena, simplificada a su mínima expresión.
 * 
 * Ejemplos de uso:
 * ```typescript
 * sub("1/2", "2/3") = "-1/6"
 * sub("1/4", "2/3") = "-5/12"
 * sub("1/2", "0/1") = "1/2"
 * ```
 */
export function sub(racional1: string, racional2: string): string | undefined {
  // Obtener el numerador y denominador de cada racional
  let [numerador1, denominador1] = racional1.split("/").map(Number);
  let [numerador2, denominador2] = racional2.split("/").map(Number);
  // Calcular el numerador y denominador común
  let denominadorComun = denominador1 * denominador2;
  // Calcular el numerador de la resta
  let numerador = numerador1 * denominador2 - numerador2 * denominador1;
  // Devolver el racional simplificado
  return simplify(numerador, denominadorComun);
}

/**
 * Multiplica dos fracciones representadas como cadenas.
 * 
 * Multiplica los numeradores entre sí y los denominadores entre sí, luego simplifica el resultado.
 * 
 * @param racional1 La primera fracción en formato cadena.
 * @param racional2 La segunda fracción en formato cadena.
 * @returns El producto de las fracciones como una cadena, simplificada a su mínima expresión.
 * 
 * Ejemplos de uso:
 * ```typescript
 * mult("1/2", "3/4") = "3/8"
 * mult("1/4", "2/3") = "1/6"
 * mult("1/2", "0/1") = undefined
 * ```
 */
export function mult(racional1: string, racional2: string): string | undefined {
  // Obtener el numerador y denominador de cada racional
  let [numerador1, denominador1] = racional1.split("/").map(Number);
  let [numerador2, denominador2] = racional2.split("/").map(Number);
  // Calcular el numerador y denominador de la multiplicación
  let numerador = numerador1 * numerador2;
  let denominador = denominador1 * denominador2;
  // Si ambos son negativos, devolver el racional positivo
  if (numerador < 0 && denominador < 0) {
    numerador = Math.abs(numerador);
    denominador = Math.abs(denominador);
  }
  // Devolver el racional simplificado
  return simplify(numerador, denominador);
}

/**
 * Divide una fracción representada como cadena por otra.
 * 
 * Invierte la segunda fracción para realizar la división como una multiplicación, luego simplifica el resultado.
 * 
 * @param racional1 La fracción dividendo en formato cadena.
 * @param racional2 La fracción divisor en formato cadena.
 * @returns El cociente de las fracciones como una cadena, simplificada a su mínima expresión.
 * 
 * Ejemplos de uso:
 * ```typescript
 * div("1/2", "3/4") = "2/3"
 * div("1/4", "2/3") = "3/8"
 * div("1/2", "0/1") = undefined
 * ```
 */
export function div(racional1: string, racional2: string): string | undefined {
  // Obtener el numerador y denominador de cada racional
  let [numerador2, denominador2] = racional2.split("/").map(Number);
  // Invertir el segundo racional para realizar la división como una multiplicación
  return mult(racional1, `${denominador2}/${numerador2}`);
}

// Pruebas de MCD y simplificación
// console.log(mcd(5, 20)); // Debería imprimir 5
// console.log(simplify(5, 20)); // Debería imprimir "1/4"

// // Pruebas de operaciones con números racionales
// console.log(abs("-3/9")); // Debería imprimir "1/3"
// console.log(inv("1/4")); // Debería imprimir "4/1"
// console.log(add("1/3", "2/3")); // Debería imprimir "1/1" o "1"
// console.log(sub("2/3", "1/6")); // Debería imprimir "1/2"
// console.log(mult("1/4", "2/3")); // Debería imprimir "1/6"
// console.log(div("1/2", "3/4")); // Debería imprimir "2/3"

// // Pruebas adicionales donde hay errores
// console.log(simplify(5, 0)); // Debería imprimir `undefined` ya que el denominador no puede ser 0
// console.log(inv("0/5")); // Debería imprimir `undefined` ya que el inverso de 0 no está definido
// console.log(add("1/2", "2/0")); // Debería imprimir `undefined` ya que "2/0" no es un racional válido
// console.log(sub("1/0", "3/4")); // Debería imprimir `undefined` ya que "1/0" no es un racional válido
// console.log(div("1/2", "0/1")); // Debería imprimir `undefined` ya que la división por cero no está definida
// console.log(mult("1/2", "abc")); // Debería imprimir `undefined` ya que "abc" no es un racional
