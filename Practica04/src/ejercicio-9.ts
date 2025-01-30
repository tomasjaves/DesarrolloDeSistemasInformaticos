/**
 * Implemente el siguiente conjunto de operaciones sobre listas:
 * 
 * append: Dadas dos listas, se deben añadir todos los elementos de la segunda lista al final de la primera.
 * 
 * concatenate: Dado un conjunto de listas, se deben combinar todos sus elementos en una única lista.
 * 
 * filter: Dado un predicado pred y una lista, devolver la lista de aquellos elementos que permiten que el predicado
 * sea evaluado como verdadero, esto es, pred(item) == True.
 * 
 * length: Dada una lista, debe devolver el número de elementos contenidos en la misma.
 * 
 * map: Dada una función func y una lista, devolver la lista de los resultados de aplicar func(item) a todos los elementos de la lista.
 * 
 * reduce: Dada una función func, una lista y un acumulador inicial accum, se debe reducir cada elemento de la lista en el acumulador
 * desde la izquierda haciendo uso de func(accum, item).
 * 
 * reverse: Dada una lista, se debe devolver una lista con los mismos elementos pero en orden inverso.
 * 
 * Se podrá utilizar la funcionalidad básica proporcionada por el lenguaje para construir y deconstruir arrays pero no se podrán utilizar funciones pertenecientes a Array.prototype.
 */

/**
 * Función que añade todos los elementos de la segunda lista al final de la primera.
 * @param list1 
 * @param list2 
 * @returns Una nueva lista con todos los elementos de la primera lista y todos los elementos de la segunda lista.
 * 
 * Ejemplo de uso:
 * ```typescript
 * const list1 = [1, 2, 3];
 * const list2 = [4, 5, 6];
 * append(list1, list2) = [1, 2, 3, 4, 5, 6]
 */
export function append<T>(list1: T[], list2: T[]): T[] {
  return [...list1, ...list2];
}

/**
 * Función que combina todos los elementos de un conjunto de listas en una única lista.
 * @param lists 
 * @returns Una nueva lista con todos los elementos de las listas.
 * 
 * Ejemplo de uso:
 * ```typescript
 * const lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 * concatenate(lists) = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
export function concatenate<T>(lists: T[][]): T[] {
  // Variable que almacenará el resultado
  let result: T[] = [];
  // Iteramos sobre cada lista y añadimos sus elementos al resultado
  for (let list of lists) {
      result = [...result, ...list];
  }
  return result;
}

/**
 * Función que devuelve una lista con aquellos elementos que permiten que el predicado sea evaluado como verdadero.
 * @param pred 
 * @param list 
 * @returns Una nueva lista con los elementos que cumplen el predicado.
 * 
 * Ejemplo de uso:
 * ```typescript
 * const pred = (item: number) => item % 2 === 0;
 * const list = [1, 2, 3, 4, 5, 6];
 * filter(pred, list) = [2, 4, 6]
 * ```
 */
export function filter<T>(pred: (item: T) => boolean, list: T[]): T[] {
  // Variable que almacenará el resultado
  let result: T[] = [];
  // Iteramos sobre cada elemento y añadimos aquellos que cumplen el predicado
  for (let item of list) {
      if (pred(item)) {
          result.push(item);
      }
  }
  return result;
}

/**
 * Función que devuelve el número de elementos contenidos en la lista.
 * @param list 
 * @returns El número de elementos de la lista.
 * 
 * Ejemplo de uso:
 * ```typescript
 * const list = [1, 2, 3, 4, 5, 6];
 * length(list) = 6
 * ```
 */
export function length<T>(list: T[]): number {
  return list.length;
}

/**
 * Función que devuelve una lista con los resultados de aplicar una función a todos los elementos de la lista.
 * @param func 
 * @param list 
 * @returns Una nueva lista con los resultados de aplicar la función a todos los elementos de la lista.
 * 
 * Ejemplo de uso:
 * ```typescript
 * const func = (item: number) => item * 2;
 * const list = [1, 2, 3, 4, 5, 6];
 * map(func, list) = [2, 4, 6, 8, 10, 12]
 * ```
 */
export function map<T, U>(func: (item: T) => U, list: T[]): U[] {
  // Variable que almacenará el resultado
  let result: U[] = [];
  // Iteramos sobre cada elemento y añadimos el resultado de aplicar la función
  for (let item of list) {
      result.push(func(item));
  }
  return result;
}

/**
 * Función que reduce cada elemento de la lista en el acumulador desde la izquierda haciendo uso de una función.
 * @param func 
 * @param list 
 * @param accum 
 * @returns El resultado de reducir cada elemento de la lista en el acumulador desde la izquierda haciendo uso de la función.
 * 
 * Ejemplo de uso:
 * ```typescript
 * const func = (accum: number, item: number) => accum + item;
 * const list = [1, 2, 3, 4, 5, 6];
 * const accum = 0;
 * reduce(func, list, accum) = 21
 * ```
 */
export function reduce<T, U>(func: (accum: U, item: T) => U, list: T[], accum: U): U {
  // Variable que almacenará el resultado
  let result = accum;
  // Iteramos sobre cada elemento y reducimos el acumulador
  for (let item of list) {
      result = func(result, item);
  }
  return result;
}

/**
 * Función que devuelve una lista con los mismos elementos pero en orden inverso.
 * @param list 
 * @returns Una nueva lista con los mismos elementos pero en orden inverso.
 * 
 * Ejemplo de uso:
 * ```typescript
 * const list = [1, 2, 3, 4, 5, 6];
 * reverse(list) = [6, 5, 4, 3, 2, 1]
 * ```
 */
export function reverse<T>(list: T[]): T[] {
  // Variable que almacenará el resultado
  let result: T[] = [];
  // Iteramos sobre la lista en orden inverso y añadimos sus elementos al resultado
  for (let i = list.length - 1; i >= 0; i--) {
      result.push(list[i]);
  }
  return result;
}
