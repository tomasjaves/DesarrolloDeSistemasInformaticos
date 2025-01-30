/**
 * Escriba una función squareEncoding que reciba como argumento una cadena de caracteres y devuelva
 * la cadena cifrada, teniendo en cuenta el siguiente algoritmo.
 *
 * En primer lugar, se debe estandarizar la cadena de entrada, lo cual consiste en eliminar espacios,
 * signos de puntuación, acentos y reemplazar mayúsculas por minúsculas. Por ejemplo, ante la cadena:
 *
 * "A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio."
 *
 * Se debería obtener la siguiente cadena como resultado de este primer paso:
 *
 * "aeduardoelprofesordedesarrollodesistemasinformaticosnolegustaelplagio"
 *
 * Seguidamente, la cadena anterior debe organizarse en un rectángulo de dimensiones f x c donde f es el número de filas y c es el número de columnas, de modo que c >= f y c - f <= 1. En nuestro ejemplo, el texto estandarizado contiene 69 caracteres, por lo que se necesita un rectángulo con f = 8 filas y c = 9 columnas:
 *
 * "aeduardoe"
 * "lprofesor"
 * "dedesarro"
 * "llodesist"
 * "emasinfor"
 * "maticosno"
 * "legustael"
 * "plagio   "
 *
 * El mensaje cifrado se obtiene leyendo de arriba a abajo y de izquierda a derecha las columnas anteriores.
 * El texto cifrado debe devolverse en una cadena dividida en c = 9 trozos de longitud f = 8,
 * separados por espacios. Aquellos trozos que tengan una longitud inferior a f caracteres deben completarse
 * con espacios hasta cumplir con la longitud f:
 *
 * "aldlemlp epelmael drdoatga uoedsiug afseicsi reasnoto dsrifsa  oorsone  erotrol "
 *
 * En el ejemplo anterior, los tres últimos trozos tienen longitud 7 y han tenido que completarse con
 * un espacio adicional hasta llegar a la longitud f = 8. La cadena anterior es la que deve devolver la función squareEncoding.
 *
 * Obsérvese que si las anteriores palabras vuelven a organizarse, se puede decodificar visualmente el mensaje codificado para obtener
 * el texto original (leyendo las columnas de arriba hacia abajo y de izquierda a derecha):
 *
 * "aldlemlp"
 * "epelmael"
 * "drdoatga"
 * "uoedsiug"
 * "afseicsi"
 * "reasnoto"
 * "dsrifsa "
 * "oorsone "
 * "erotrol "
 */

/**
 * Normaliza una cadena eliminando diacríticos, convirtiéndola a minúsculas y eliminando espacios, puntuación y caracteres especiales.
 * 
 * La cadena se normaliza mediante los siguientes pasos:
 * 1. Utiliza la normalización Unicode NFD para descomponer los caracteres en sus componentes básicos, separando los diacríticos.
 * 2. Elimina los diacríticos (acentos) mediante una expresión regular.
 * 3. Convierte toda la cadena a minúsculas para uniformidad.
 * 4. Elimina todos los caracteres que no son letras alfanuméricas, incluyendo espacios, puntuación y caracteres especiales, usando otra expresión regular.
 * 
 * @param str La cadena de texto a normalizar.
 * @returns La cadena normalizada.
 * 
 * Ejemplo de uso:
 * ```typescript
 * normalizeString("A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.");
 * // Devuelve "aeduardoelprofesordedesarrollodesistemasinformaticosnolegustaelplagio"
 * ```
 */
export function normalizeString(str: string): string {
  return (
    str
      // Separamos caracteres con diacríticos
      .normalize("NFD")
      // Usamos una expresión regular para sustituir los diacríticos por una cadena vacía
      .replace(/[\u0300-\u036f]/g, "") // Eliminar los diacríticos
      // Convertir a minúsculas
      .toLowerCase()
      // Sustituimos espacios, puntuación y caracteres especiales por una cadena vacía
      .replace(/[\W_]+/g, "")
  );
}

/**
 * Codifica una cadena utilizando un algoritmo de cifrado que organiza el texto en un rectángulo y luego lee las columnas para formar la cadena cifrada.
 * 
 * Primero, normaliza la cadena de entrada mediante `normalizeString` para eliminar diacríticos, convertirla a minúsculas y eliminar caracteres no alfanuméricos.
 * Luego, calcula las dimensiones óptimas de un rectángulo (f x c) tal que c >= f y c - f <= 1, donde f es el número de filas y c el de columnas.
 * Organiza la cadena normalizada en este rectángulo, rellenando con espacios si es necesario.
 * Finalmente, lee las columnas de arriba hacia abajo y de izquierda a derecha para formar la cadena cifrada, separando los trozos de texto de cada columna con un espacio.
 * 
 * @param str La cadena de texto a codificar.
 * @returns La cadena cifrada resultante.
 * 
 * Ejemplo de uso:
 * ```typescript
 * squareEncoding("A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.");
 * // Devuelve una cadena cifrada basada en el algoritmo descrito.
 * ```
 */
export function squareEncoding(str: string): string {
  // Normalizar la cadena
  const normalizedStr = normalizeString(str);
  // Calcular las dimensiones del rectángulo
  const length = normalizedStr.length;
  // Calcular las dimensiones del rectángulo
  const c = Math.ceil(Math.sqrt(length)); // Columnas
  const f = Math.round(Math.sqrt(length)); // Filas

  // Organizar la cadena en un rectángulo de dimensiones f x c
  let rectangle: string[] = [];
  // Dividir la cadena en trozos de longitud c
  for (let i = 0; i < length; i += c) {
    // Añadir substring de longitud c, rellenando con espacios al final
    rectangle.push(normalizedStr.substring(i, i + c).padEnd(c, " "));
  }

  // Variable para almacenar la cadena cifrada
  let encodedStr = "";
  // Leer las columnas de arriba a abajo y de izquierda a derecha
  for (let col = 0; col < c; col++) {
    for (let row = 0; row < f; row++) {
      // Añadir el carácter a la cadena cifrada (si no hay carácter, añadir espacio)
      encodedStr += rectangle[row] ? rectangle[row][col] : " ";
    }
    // Añadir espacio entre trozos excepto en el último
    if (col < c - 1) encodedStr += " ";
  }
  return encodedStr;
}

// Pruebas
// Debería imprimir "aldlemlp epelmael drdoatga uoedsiug afseicsi reasnoto dsrifsa  oorsone  erotrol "
// console.log(squareEncoding("A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio."));
