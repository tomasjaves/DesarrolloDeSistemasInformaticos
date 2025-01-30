/**
 * Implemente un conjunto de funciones que permita diseñar de forma automatizada un menú saludable.
 * 
 * Partiendo de un conjunto de platos, cada uno con su valor nutricional y una puntuación que indica el grado de insalubridad del mismo,
 * se deben seleccionar aquellos platos que maximicen el valor nutricional del menú, siempre y cuando el grado de insalubridad
 * de los platos seleccionados no supere un máximo preestablecido.
 * 
 * De este modo, sus funciones deberán trabajar con una lista de tuplas denominada dishes donde cada componente
 * de la lista consistirá en una tupla con dos componentes: (nutriScore, unhealthyScore), siendo la primera el valor
 * nutricional del plato en cuestión, y el segundo, su grado de insalubridad.
 * Las funciones también deberán trabajar con el grado de insalubridad máximo maxUnhealthyScore permitido en el menú a ser diseñado.
 * 
 * En concreto, deberá diseñar los menús atendiendo a tres heurísticas diferentes:
 * Ordenar los platos según valor nutricional de manera decreciente e ir introduciendo en el menú aquellos platos de mayor valor
 * nutricional primero, hasta que se deje de cumplir la restricción de grado de insalubridad máximo permitido.
 * 
 * Ordenar los platos según grado de insalubridad de manera creciente e ir introduciendo en el menú aquellos platos de menor grado
 * de insalubridad primero, hasta que se deje de cumplir la restricción de grado de insalubridad máximo permitido.
 * 
 * Ordenar los platos según ratio valor nutricional / grado de insalubridad de manera decreciente e ir introduciendo en el menú aquellos
 * platos de mayor ratio primero, hasta que se deje de cumplir la restricción de grado de insalubridad máximo permitido.
 * 
 * El diseño de las funciones a implementar es libre. Trate de implementarlas teniendo en cuenta la modularidad y
 * reutilización del código contenido en las mismas. Trate de aplicar las tres heurísticas anteriores a diferentes casos de uso,
 * esto es, a diferentes conjuntos de platos con diferentes valores nutricionales y grados de insalubridad.
 * ¿Qué heurística parece proporcionar los mejores menús (máximo valor nutricional)?
 */

/**
 * Se usa un tipo de dato para representar un plato, que consiste en una tupla con dos componentes:
 * - nutriScore: valor nutricional del plato
 * - unhealthyScore: grado de insalubridad del plato
 * Ambos componentes son números enteros.
 */
export type Dish = [number, number]; // [nutriScore, unhealthyScore]

/**
 * Selecciona platos de una lista basándose en su valor nutricional,
 * priorizando aquellos con mayor puntuación.
 * La selección se detiene cuando agregar otro plato haría que el
 * total de insalubridad exceda el límite permitido.
 * 
 * @param dishes Lista de platos
 * @param maxUnhealthyScore Grado de insalubridad máximo permitido
 * @returns Lista de platos seleccionados
 * 
 * Ejemplo de uso:
 * ```typescript
 * const maxUnhealthyScore = 25;
 * const dishes: Dish[] = [[80, 10], [60, 5], [40, 3], [20, 2]];
 * const selectedDishes = selectDishesByNutritionalValue(dishes, maxUnhealthyScore);
 * selectedDishes = [[80, 10], [60, 5]]
 * ```
 */
export function selectDishesByNutritionalValue(dishes: Dish[], maxUnhealthyScore: number): Dish[] {
  dishes.sort((a, b) => b[0] - a[0]); // Orden decreciente por valor nutricional
  return selectDishesWithMaxUnhealthyScore(dishes, maxUnhealthyScore);
}

/**
 * Selecciona platos de una lista ordenándolos por su grado de
 * insalubridad de menor a mayor, comenzando por los menos
 * insalubres hasta alcanzar el límite de insalubridad permitido.
 * 
 * @param dishes Lista de platos
 * @param maxUnhealthyScore Grado de insalubridad máximo permitido
 * @returns Lista de platos seleccionados
 * 
 * Ejemplo de uso:
 * ```typescript
 * const maxUnhealthyScore = 25;
 * const dishes: Dish[] = [[80, 10], [60, 5], [40, 3], [20, 2]];
 * const selectedDishes = selectDishesByUnhealthyScore(dishes, maxUnhealthyScore);
 * selectedDishes = [[60, 5], [80, 10]]
 * ```
 */
export function selectDishesByUnhealthyScore(dishes: Dish[], maxUnhealthyScore: number): Dish[] {
  dishes.sort((a, b) => a[1] - b[1]); // Orden creciente por grado de insalubridad
  return selectDishesWithMaxUnhealthyScore(dishes, maxUnhealthyScore);
}

/**
 * Selecciona platos basándose en la mejor relación entre el valor
 * nutricional y el grado de insalubridad, priorizando aquellos
 * con una mayor proporción de nutrición frente a insalubridad.
 * 
 * @param dishes Lista de platos
 * @param maxUnhealthyScore Grado de insalubridad máximo permitido
 * @returns Lista de platos seleccionados
 * 
 * Ejemplo de uso:
 * ```typescript
 * const maxUnhealthyScore = 25;
 * const dishes: Dish[] = [[80, 10], [60, 5], [40, 3], [20, 2]];
 * const selectedDishes = selectDishesByNutritionUnhealthyRatio(dishes, maxUnhealthyScore);
 * selectedDishes = [[80, 10], [60, 5]]
 * ```
 */
export function selectDishesByNutritionUnhealthyRatio(dishes: Dish[], maxUnhealthyScore: number): Dish[] {
  dishes.sort((a, b) => (b[0] / b[1]) - (a[0] / a[1])); // Orden decreciente por ratio
  return selectDishesWithMaxUnhealthyScore(dishes, maxUnhealthyScore);
}

/**
 * Función auxiliar que selecciona platos de la lista proporcionada
 * sin exceder un grado máximo de insalubridad.
 * Esta función es utilizada internamente por las estrategias
 * de selección basadas en diferentes criterios.
 *  
 * @param dishes Lista de platos
 * @param maxUnhealthyScore Grado de insalubridad máximo permitido
 * @returns Lista de platos seleccionados
 * 
 * Ejemplo de uso:
 * ```typescript
 * const maxUnhealthyScore = 25;
 * const dishes: Dish[] = [[80, 10], [60, 5], [40, 3], [20, 2]];
 * const selectedDishes = selectDishesWithMaxUnhealthyScore(dishes, maxUnhealthyScore);
 * selectedDishes = [[80, 10], [60, 5]]
 * ```
 */
export function selectDishesWithMaxUnhealthyScore(dishes: Dish[], maxUnhealthyScore: number): Dish[] {
  let totalUnhealthyScore = 0;
  const selectedDishes: Dish[] = [];
  for (const dish of dishes) {
    if ((totalUnhealthyScore + dish[1]) <= maxUnhealthyScore) {
      selectedDishes.push(dish);
      totalUnhealthyScore += dish[1];
    } else {
      break; // No añadir más platos si excedemos el grado de insalubridad máximo
    }
  }
  return selectedDishes;
}
