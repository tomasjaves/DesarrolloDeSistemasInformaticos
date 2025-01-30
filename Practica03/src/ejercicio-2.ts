/**
 * Cree una función isLeapYear que devuelva si un año concreto es bisiesto o no.
 * La función deberá recibir como parámetro el año a evaluar y devolverá verdadero o falso
 * según corresponda. Tenga en cuenta que un año bisiesto ocurre en el calendario gregoriano:
 *
 * Cada año que es divisible por 4.
 * Excepto cada año que es divisible por 100.
 * Al menos que el año también sea divisible por 400.
 *
 * Por ejemplo, el año 1997 no es un año bisiesto, pero 1996 sí.
 * Al igual que 1900 no es un año bisiesto pero el año 2000 sí.
 * La función isLeapYear devolverá undefined en el caso de no recibir un número entero positivo.
 */

/**
 * Determina si un año es bisiesto.
 * 
 * Un año es bisiesto si cumple las siguientes condiciones:
 * - Es divisible por 4.
 * - No es divisible por 100, excepto si también es divisible por 400.
 * 
 * Esto significa que los años bisiestos son aquellos que son divisibles por 4, pero si un año es divisible por 100, 
 * solo será bisiesto si también es divisible por 400. Por ejemplo, el año 1900 no fue bisiesto porque, aunque es divisible
 * por 100, no es divisible por 400. Por otro lado, el año 2000 fue bisiesto porque es divisible tanto por 100 como por 400.
 * 
 * La función primero verifica que el año proporcionado sea un número entero positivo. Si no lo es, devuelve `undefined`.
 * 
 * @param year El año que se quiere verificar, debe ser un número entero positivo.
 * @returns Retorna `true` si el año es bisiesto, `false` si no lo es, o `undefined` si el año proporcionado no es un número entero positivo.
 * 
 * Ejemplo de uso:
 * ```typescript
 * isLeapYear(1996) = true
 * isLeapYear(1900) = false
 * isLeapYear(2000) = true
 * isLeapYear(-1) = undefined
 * ```
 */
export function isLeapYear(year: number): boolean | undefined {
  // Si el año no es un número entero positivo, devolvemos undefined
  if (!Number.isInteger(year) || year < 0) {
    return undefined;
  }
  // Si el año es divisible por 4 y no es divisible por 100 o es divisible por 400, devolvemos true
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// Pruebas
// console.log(isLeapYear(1997)); // false
// console.log(isLeapYear(1996)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(-2000)); // undefined
// console.log(isLeapYear(2000.5)); // undefined
