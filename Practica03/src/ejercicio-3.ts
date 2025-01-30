/**
 * Dado un número entero entre 1 y 31, escriba una función fromIntToActions que, en primer lugar,
 * transforme dicho número a su equivalente binario y, luego, identifique qué señales corporales
 * debe llevar a cabo para comunicarle a otra persona dicho número, teniendo en cuenta los bits
 * activos (valor 1) en su representación binaria:
 *
 * 00001: parpadear
 * 00010: parpadear dos veces
 * 00100: mover la nariz
 * 01000: levantar las cejas
 * 10000: saltar
 *
 * La función deberá retornar una cadena de caracteres incluyendo todas las acciones
 * a llevar a cabo concatenadas y separadas por comas. En caso de que el número de entrada
 * sea inferior a 1 o superior a 31, la función deberá retornar undefined.
 */

/**
 * Convierte un número entero en un conjunto de acciones basado en su representación binaria.
 * 
 * La función transforma un número entero en el rango de 1 a 31 en un conjunto de acciones predefinidas,
 * cada una correspondiente a un bit activo en la representación binaria del número. Las acciones se definen de la siguiente manera:
 * - 1er bit: "parpadear"
 * - 2do bit: "parpadear dos veces"
 * - 3er bit: "mover la nariz"
 * - 4to bit: "levantar las cejas"
 * - 5to bit: "saltar"
 * 
 * La representación binaria se considera de derecha a izquierda, donde el bit menos significativo corresponde a "parpadear" y 
 * el más significativo a "saltar". Solo los bits activos (1) generan una acción.
 * 
 * Si el número proporcionado está fuera del rango de 1 a 31, o no es un entero, la función devuelve `undefined`.
 * 
 * @param number El número entero que se quiere convertir en acciones.
 * @returns Una cadena de texto que representa las acciones a realizar, separadas por comas, o `undefined` si el número está fuera de rango.
 * 
 * Ejemplo de uso:
 * ```typescript
 * fromIntToActions(3) = "parpadear, parpadear dos veces"
 * fromIntToActions(19) = "parpadear, mover la nariz, saltar"
 * fromIntToActions(0) = undefined
 * fromIntToActions(32) = undefined
 * ```
 */
export function fromIntToActions(number: number): string | undefined {
  // Verificar si el número está fuera del rango permitido
  if (number < 1 || number > 31) {
    return undefined;
  }
  // Convertir el número a su representación binaria como una cadena de caracteres
  const binaryString = number.toString(2).padStart(5, "0");
  // Definir las acciones correspondientes a cada bit, en el orden correcto desde el menos al más significativo
  const actions = [
    "parpadear",
    "parpadear dos veces",
    "mover la nariz",
    "levantar las cejas",
    "saltar",
  ];
  // Inicializar un array para almacenar las acciones resultantes
  let resultActions: string[] = [];
  // Iterar a través de la representación binaria desde el inicio hacia el final
  for (let i = 0; i < binaryString.length; i++) {
    const bit = binaryString[binaryString.length - 1 - i];
    // Si el bit está activo (1), añadir la acción correspondiente
    if (bit === "1") {
      // Añadir la acción correspondiente en el orden correcto
      resultActions.unshift(actions[i]);
    }
  }
  // Retornar las acciones concatenadas y separadas por comas
  return resultActions.join(", ");
}

// Pruebas
// console.log(fromIntToActions(1)); // "parpadear"
// console.log(fromIntToActions(3)); // "parpadear, parpadear dos veces"
// console.log(fromIntToActions(19)); // "parpadear, parpadear dos veces, saltar"
// console.log(fromIntToActions(31)); // "parpadear, parpadear dos veces, mover la nariz, levantar las cejas, saltar"
// console.log(fromIntToActions(0)); // undefined
// console.log(fromIntToActions(32)); // undefined
