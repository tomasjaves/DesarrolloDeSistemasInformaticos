/**
 * A partir de cadenas de texto que representan direcciones IPv4, escriba una una función numberIPsInRange
 * que reciba como argumentos dos cadenas representando dos IPs válidas y que devuelva un valor numérico
 * que represente el número de IPs disponibles en el rango indicado
 * (incluyendo la primera y excluyendo la última).
 * Utilice expresiones regulares para comprobar que las IPs utilizadas como argumentos
 * son válidas, además de que la segunda IP sea superior a la primera.
 *
 * Ejemplos:
 * La invocación a numberIPsInRange("10.0.0.0", "10.0.0.50") debe devolver el valor 50.
 * La invocación a numberIPsInRange("10.0.0.0", "10.0.1.0") debe devolver el valor 256.
 * La invocación a numberIPsInRange("20.0.0.10", "20.0.1.0") debe devolver el valor 246.
 * La invocación a numberIPsInRange("20.0.1.0", "20.0.0.10") debe devolver undefined (la segunda IP es inferior a la primera).
 * La invocación a numberIPsInRange("10.0.1.256", "20.0.0.10") debe devolver undefined (la primera IP no es válida).
 * La invocación a numberIPsInRange("10.0.1.255", "20.0.0") debe devolver undefined (la segunda IP no es válida).
 */

/**
 * Valida si una cadena de texto corresponde a una dirección IP IPv4 válida.
 * 
 * Utiliza una expresión regular para verificar si la cadena de entrada cumple con el formato estándar de una dirección IP IPv4,
 * la cual debe consistir en cuatro octetos separados por puntos, con cada octeto siendo un número entero entre 0 y 255.
 * 
 * @param ip La cadena de texto que representa la dirección IP que se desea validar.
 * @returns `true` si la cadena de entrada es una dirección IP IPv4 válida; de lo contrario, `false`.
 * 
 * Ejemplo de uso:
 * ```typescript
 * isValidIP("192.168.1.1"); // devuelve true
 * isValidIP("999.999.999.999"); // devuelve false
 * ```
 */
function isValidIP(ip: string): boolean {
  // Expresión regular para validar una dirección IP IPv4
  const regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ip);
}

/**
 * Convierte una dirección IP IPv4 de formato cadena a un número entero.
 * 
 * Este proceso implica tratar cada octeto de la dirección IP como un componente de un número en base 256,
 * acumulando cada octeto ajustado por su correspondiente potencia de 256 para obtener el valor numérico total de la dirección IP.
 * 
 * @param ip La dirección IP en formato cadena que se desea convertir.
 * @returns El valor numérico que representa la dirección IP.
 * 
 * Ejemplo de uso:
 * ```typescript
 * ipToNumber("192.168.1.1"); // devuelve un número entero específico
 * ```
 */
function ipToNumber(ip: string): number {
  // Devolvemos la suma de cada octeto multiplicado por 256 elevado a la potencia correspondiente
  return ip
    .split(".")
    .reduce((acc, octet) => acc * 256 + parseInt(octet, 10), 0);
}

/**
 * Calcula el número de direcciones IP disponibles en el rango especificado, excluyendo la dirección final.
 * 
 * Valida primero que las direcciones IP de inicio y fin sean válidas utilizando `isValidIP`.
 * Luego, convierte ambas direcciones a sus respectivos valores numéricos mediante `ipToNumber` para facilitar la comparación.
 * Finalmente, calcula la diferencia entre estos valores numéricos para determinar el número de direcciones IP en el rango.
 * 
 * @param ip1 La dirección IP de inicio del rango.
 * @param ip2 La dirección IP final del rango.
 * @returns El número de direcciones IP disponibles entre `ip1` e `ip2`, excluyendo `ip2`; o `undefined` si alguna de las direcciones IP no es válida o si `ip2` no es mayor que `ip1`.
 * 
 * Ejemplo de uso:
 * ```typescript
 * numberIPsInRange("192.168.1.1", "192.168.1.5") = 4
 * numberIPsInRange("192.168.1.10", "192.168.1.9") = undefined
 * ```
 */
export function numberIPsInRange(ip1: string, ip2: string): number | undefined {
  // Validar que ambas IPs sean válidas
  if (!isValidIP(ip1) || !isValidIP(ip2)) {
    return undefined;
  }
  // Convertir IPs a números para facilitar la comparación y cálculo
  const num1 = ipToNumber(ip1);
  const num2 = ipToNumber(ip2);
  // Asegurar que la segunda IP sea mayor que la primera
  if (num2 <= num1) {
    return undefined;
  }
  // Calcular y devolver el número de IPs en el rango
  return num2 - num1;
}

// Pruebas
// console.log(numberIPsInRange("10.0.0.0", "10.0.0.50")); // 50
// console.log(numberIPsInRange("10.0.0.0", "10.0.1.0")); // 256
// console.log(numberIPsInRange("20.0.0.10", "20.0.1.0")); // 246
// console.log(numberIPsInRange("20.0.1.0", "20.0.0.10")); // undefined
// console.log(numberIPsInRange("10.0.1.256", "20.0.0.10")); // undefined
// console.log(numberIPsInRange("10.0.1.255", "20.0.0")); // undefined
