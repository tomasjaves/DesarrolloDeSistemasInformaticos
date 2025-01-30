/**
 * Escriba una función checkCreditCard que reciba como argumento una cadena representando
 * el número de una tarjeta de crédito (están formados por 16 dígitos).
 * Dicha cadena puede contener espacios, por ejemplo, agrupando los números de cuatro en cuatro.
 * Una vez realizadas las comprobaciones necesarias para saber si la cadena de entrada es válida
 * (se trata de una cadena formada por, exactamente, 16 dígitos, tras haber eliminado los espacios),
 * la función deberá, en primer lugar, multiplicar por dos aquellos dígitos ubicados en las posiciones pares.
 * Aquellos dígitos que, al multiplicarlos por dos, sean mayores que 9, habrá que restarles el valor 9.
 * A continuación, se deberán sumar todos los números. Si el resultado es divisible por 10,
 * entonces se tratará de un número de tarjeta válido. En caso contrario, el número no será válido.
 * La función deberá devolver un tipo de datos propio, indicando si la tarjeta es válida ('valid'),
 * si no es válida ('notValid') o undefined en el caso de que la entrada no se ajuste al formato indicado.
 * Declare dicho tipo de datos propio como una unión de tipos.
 *
 * Ejemplos:
 * La invocación a checkCreditCard('8273 1232 7352 0569 0123') devuelve undefined.
 * La invocación a checkCreditCard('8273 0569') devuelve undefined.
 * La invocación a checkCreditCard('4539 3195 0343 6467') devuelve 'valid'.
 * La invocación a checkCreditCard('4539319503436467') devuelve 'valid'.
 * La invocación a checkCreditCard('8273 1232 7352 0569') devuelve 'notValid'.
 * La invocación a checkCreditCard('8273123273520569') devuelve 'notValid'.
 */

// Condición: la función checkCreditCard debe devolver un tipo de datos propio,
// indicando si la tarjeta es válida ('valid'), si no es válida ('notValid') o undefined
// en el caso de que la entrada no se ajuste al formato indicado.
type CreditCardStatus = "valid" | "notValid" | undefined;

/**
 * Verifica la validez de un número de tarjeta de crédito.
 * 
 * La función valida primero el formato del número de tarjeta de crédito utilizando una expresión regular para asegurarse de que contiene exactamente 16 dígitos, ignorando espacios.
 * Luego, implementa el algoritmo de Luhn para determinar si el número de tarjeta de crédito es válido.
 * Cada dígito se procesa de derecha a izquierda, duplicando cada segundo dígito. Si el resultado de esta duplicación es mayor que 9, se le resta 9.
 * Finalmente, si la suma de todos los dígitos es divisible por 10, la tarjeta se considera válida.
 * 
 * @param creditCard Una cadena que representa el número de la tarjeta de crédito, que puede incluir espacios entre los dígitos.
 * @returns Un estado que indica si la tarjeta de crédito es `valid`, `notValid`, o `undefined` si el formato de entrada no es correcto.
 * 
 * Ejemplo de uso:
 * ```typescript
 * checkCreditCard("4539 1488 0343 6467") = "valid"
 * checkCreditCard("4539 1488 0343 6460") = "notValid"
 * checkCreditCard("1234 5678 9101 112") = undefined
 * ```
 */
export function checkCreditCard(creditCard: string): CreditCardStatus {
  // Generamos una expresión regular para validar que la cadena de entrada sea válida
  const regex = /^\d{16}$/;
  // Si la cadena de entrada no es válida, devolvemos undefined
  if (!regex.test(creditCard.replace(/\s/g, ""))) {
    return undefined;
  }
  // Eliminamos los espacios y convertimos la cadena en un array de números
  const creditCardNumbers = creditCard.replace(/\s/g, "").split("").map(Number);
  // Inicializamos una variable para almacenar la suma de los números
  let sum = 0;
  // Recorremos el array de números
  creditCardNumbers.forEach((num, i) => {
    // Si el índice es par, multiplicamos el número por 2
    if (i % 2 === 0) {
      num *= 2;
      if (num > 9) {
        // Si el número es mayor que 9, le restamos 9
        num -= 9;
      }
    }
    // Sumamos el número a la suma total
    sum += num;
  });
  // Si la suma total es divisible por 10, devolvemos "valid", en caso contrario, devolvemos "notValid"
  return sum % 10 === 0 ? "valid" : "notValid";
}

// Pruebas
// console.log(checkCreditCard("8273 1232 7352 0569 0123")); // undefined
// console.log(checkCreditCard("8273 0569")); // undefined
// console.log(checkCreditCard("4539 3195 0343 6467")); // valid
// console.log(checkCreditCard("4539319503436467")); // valid
// console.log(checkCreditCard("8273 1232 7352 0569")); // notValid
// console.log(checkCreditCard("8273123273520569")); // notValid
