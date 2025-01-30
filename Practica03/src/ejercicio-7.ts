/**
 * Astérix necesita aprender ciertas costumbres romanas, entre ellas, su manera de expresar los números,
 * para entenderlos un poco mejor. Implemente una función romanToDecimal que ayude a Astérix
 * a convertir un número romano pasado como argumento al número entero en base decimal correspondiente,
 * el cual tiene que retornar la función. Si la función no recibe un número romano válido,
 * deberá devolver undefined.
 *
 * También implemente la función decimalToRoman que permita a Astérix transformar un número entero decimal
 * en un número romano. En el caso de que la función no reciba un valor entero positivo, deberá devolver undefined.
 *
 * Algunos ejemplos:
 * La invocación a romanToDecimal("MCMXCV") deberá retornar el número 1995.
 * La invocación a romanToDecimal("MMXIV") deberá retornar el número 2014.
 * La invocación a romanToDecimal("XIIII") deberá retornar undefined (“XIIII” no es un número romano válido para representar el 14).
 * La invocación a decimalToRoman(1995) deberá retornar la cadena “MCMXCV”.
 * La invocación a decimalToRoman(2014) deberá retornar la cadena “MMXIV”.
 * La invocación a decimalToRoman(-1995) deberá retornar undefined.
 */

/**
 * Convierte un número romano a su equivalente en decimal.
 * 
 * La función valida la cadena de entrada usando una expresión regular para asegurarse de que sigue el formato correcto de un número romano.
 * Si la cadena no cumple con el patrón de un número romano válido, devuelve `undefined`.
 * 
 * @param roman La cadena que representa el número romano a convertir.
 * @returns El valor decimal correspondiente al número romano, o `undefined` si la cadena de entrada no es un número romano válido.
 * 
 * Ejemplo de uso:
 * ```typescript
 * romanToDecimal("MCMXCV"); // devuelve 1995
 * romanToDecimal("MMXIV"); // devuelve 2014
 * romanToDecimal("XIIII"); // devuelve undefined, ya que no es un formato válido
 * ```
 */

export function romanToDecimal(roman: string): number | undefined {
  // Expresión regular para validar la estructura de un número romano
  const validRomanPattern =
    /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!validRomanPattern.test(roman)) {
    return undefined; // No es un número romano válido según las reglas de formato
  }
  // Crear un diccionario con los valores de cada letra romana y su correspondiente valor decimal
  const romanValues: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // Inicializar el total en 0 y el valor previo en 0
  let total = 0;
  let prevValue = 0;
  // Iterar a través de cada letra romana en orden inverso
  for (const char of roman.split("").reverse()) {
    // Obtener el valor decimal correspondiente a la letra romana
    const value = romanValues[char];
    // Si el valor no existe, retornar undefined
    if (!value) return undefined;
    // Si el valor es menor que el valor previo, restarlo del total
    if (value < prevValue) {
      total -= value;
    } else {
      // Si el valor es mayor o igual que el valor previo, sumarlo al total
      total += value;
    }
    // Actualizar el valor previo
    prevValue = value;
  }
  return total;
}

/**
 * Convierte un número decimal a su representación en número romano.
 * 
 * La función verifica primero que el número de entrada sea un entero positivo.
 * Si el número no es un entero positivo, devuelve `undefined`.
 * Utiliza un mapeo de valores decimales a símbolos romanos para construir la representación en número romano del número decimal.
 * 
 * @param num El número decimal que se desea convertir a número romano.
 * @returns La cadena que representa el número en formato romano, o `undefined` si el número de entrada no es un entero positivo.
 * 
 * Ejemplo de uso:
 * ```typescript
 * decimalToRoman(1995) = "MCMXCV"
 * decimalToRoman(2014) = "MMXIV"
 * decimalToRoman(-10) = undefined
 * ```
 */
export function decimalToRoman(num: number): string | undefined {
  // Validar que el número sea un entero positivo
  if (num <= 0 || !Number.isInteger(num)) return undefined;
  // Crear un mapa de valores decimales y su correspondiente letra romana
  const valueMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  // Inicializar el resultado como una cadena vacía
  let result = "";
  // Iterar a través de cada valor en el mapa
  for (const [value, symbol] of valueMap) {
    // Mientras el número sea mayor o igual que el valor actual
    while (num >= value) {
      // Agregar el símbolo al resultado y restar el valor del número
      result += symbol;
      num -= value;
    }
  }
  return result;
}

// Pruebas para romanToDecimal
// console.log(romanToDecimal("MCMXCV")); // Debería retornar 1995
// console.log(romanToDecimal("MMXIV")); // Debería retornar 2014
// console.log(romanToDecimal("XIIII")); // Debería retornar undefined

// Pruebas para decimalToRoman
// console.log(decimalToRoman(1995)); // Debería retornar "MCMXCV"
// console.log(decimalToRoman(2014)); // Debería retornar "MMXIV"
// console.log(decimalToRoman(-1995)); // Debería retornar undefined
