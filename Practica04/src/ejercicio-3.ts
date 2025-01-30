/**
 * Dada una lista de palabras en español, escriba una función getScore que calcule su puntuación en el Scrabble,
 * dadas las siguientes puntuaciones:
 * 
 * A, E, I, O, U, L, N, R, S, T: 1 punto
 * D, G: 2 puntos
 * B, C, M, P: 3 puntos
 * F, H, V, Y: 4 puntos
 * CH, Q: 5 puntos
 * J, LL, Ñ, RR, X: 8 puntos
 * Z: 10 puntos
 * 
 * Se omiten la K y la W, ya que su uso no es común en el idioma. El uso de una C y una H, por separado, en lugar de la CH no está permitido.
 * Lo mismo sucede con el uso de dos L independientes para LL y dos R independientes para RR.
 * 
 * La función debe recibir una lista de palabras y debe devolver la lista de puntuaciones numéricas correspondiente.
 * Además, las letras acentuadas de las palabras de la lista de entrada deberán ser reemplazadas por las correspondientes letras sin acentos.
 * Por último, si alguna de las palabras de la lista de entrada no es válida, es decir, si por ejemplo contiene una K o una W,
 * la lista de salida contendrá el valor undefined para dicha palabra de entrada en la posición correspondiente.
 * 
 * Ejemplos:
 * getScore([]) devuelve [].
 * getScore(['kilo', 'almendras', 'llano' 'wenceslao', 'ratón']) devuelve [undefined, 12, 11, undefined, 5].
 * Obsérvese en el ejemplo anterior como la puntuación de la palabra llano es igual a 11,
 * dado que se considera la LL con un valor igual a 8 puntos, en lugar de considerar dos letras L independientes con un valor de 2 puntos
 * (lo que daría lugar a una puntuación de 5, en lugar de 11). También obsérvese como se ha reemplazado la letra ó (con acento)
 * de la última palabra de la lista por una o (sin acento) para calcular su puntuación.
 */

/**
 * Enumerado que representa las letras del alfabeto en español.
 */
enum ScrabbleScore {
  A = 1, E = 1, I = 1, O = 1, U = 1, L = 1, N = 1, R = 1, S = 1, T = 1,
  D = 2, G = 2,
  B = 3, C = 3, M = 3, P = 3,
  F = 4, H = 4, V = 4, Y = 4,
  CH = 5, Q = 5,
  J = 8, LL = 8, Ñ = 8, RR = 8, X = 8,
  Z = 10
}

/**
 * Calcula la puntuación de una lista de palabras en el juego del Scrabble.
 * Si alguna de las palabras de la lista de entrada no es válida, es decir, si por ejemplo contiene una K o una W,
 * la lista de salida contendrá el valor undefined para dicha palabra de entrada en la posición correspondiente.
 * @param words Lista de palabras.
 * @returns Lista de puntuaciones correspondientes a cada palabra.
 * 
 * Ejemplo de uso:
 * ```typescript
 * getScore([]) = []
 * getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón']) = [undefined, 12, 11, undefined, 5]
 * ```
 */
export function getScore(words: string[]): (number | undefined)[] {
  // Función para remover acentos y caracteres especiales.
  const removeAccents = (str: string): string => {
    // En primer lugar, normalizar la cadena para que los caracteres acentuados se conviertan en caracteres no acentuados.
    // Luego, reemplazar las combinaciones de CH, LL, y RR por sus respectivas mayúsculas.
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
           .replace(/ch/gi, "CH").replace(/ll/gi, "LL")
           .replace(/rr/gi, "RR").toUpperCase();
  };

  // Calcular la puntuación de una palabra.
  const calculateScore = (word: string): number|undefined => {
    // Inicializar la puntuación.
    let score = 0;
    // Iterar sobre cada letra de la palabra.
    for (let i = 0; i < word.length; i++) {
      // Manejar casos especiales como CH, LL, y RR.
      if ((word[i] === 'C' && word[i + 1] === 'H') || (word[i] === 'L' && word[i + 1] === 'L') || (word[i] === 'R' && word[i + 1] === 'R')) {
        score += ScrabbleScore[word[i] + word[i + 1] as keyof typeof ScrabbleScore];
        i++; // Saltar el siguiente caracter ya que forma parte de un par.
      } else if (Object.keys(ScrabbleScore).includes(word[i])) {
        // Si la letra es válida, sumar su puntuación.
        score += ScrabbleScore[word[i] as keyof typeof ScrabbleScore];
      } else {
        // Si encuentra un caracter no válido, retorna undefined.
        return undefined;
      }
    }
    return score;
  };

  // Mapear cada palabra a su puntuación.
  return words.map(word => {
    // Remover acentos y caracteres especiales.
    const cleanedWord = removeAccents(word);
    // Si la palabra contiene K o W, retornar undefined.
    return cleanedWord.match(/[KW]/) ? undefined : calculateScore(cleanedWord);
  });
}