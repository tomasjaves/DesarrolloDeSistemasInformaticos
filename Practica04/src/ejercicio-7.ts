/**
 * Vives en Cartesia, la ciudad donde todas las carreteras están diseñadas para formar una rejilla perfecta.
 * Imagina que tienes una reunión muy importante y llegas 10 minutos antes de la hora prevista.
 * Para tranquilizarte un poco, te dispones a dar un paseo corto. Afortunadamente, la ciudad ha desarrollado
 * una aplicación que genera paseos en sus smartphones (cada vez que se ejecuta la aplicación, nos envia un array de cadenas
 * de una única letra que representan las direcciones en las que debemos caminar [‘n’, ‘s’, ‘e’, ‘o’]).
 * Ten en cuenta que solo caminas un bloque por cada letra y que, además, cada bloque se recorre en un minuto.
 * 
 * El objetivo es escribir una función getCartesianPath que reciba como argumento un array con las letras que
 * definen el paseo que ha generado la app y devuelva verdadero o falso si el paseo que nos ha proporcionado
 * la app se puede realizar en exactamente n minutos, donde n es también un argumento de la función.
 * Recuerda que quieres ser puntual para la reunión. Por lo tanto, habrá que tener en cuenta que el paseo nos debe devolver al punto de partida.
 * En otro caso, la función debería devolver falso.
 * En el caso de que la función reciba argumentos no válidos, deberá devolver el valor undefined, por ejemplo,
 * si se pasa un array vacío como argumento. ¡Esto último no es un paseo, es hacer el vago!
 */

/**
 * Enumerado con las direcciones posibles.
 */
enum Direction {
  N = 'n',
  S = 's',
  E = 'e',
  O = 'o'
}

/**
 * Comprueba si el paseo que nos ha proporcionado la app se puede realizar en exactamente n minutos.
 * En el caso de que la función reciba argumentos no válidos, deberá devolver el valor undefined.
 * @param directions Array con las letras que definen el paseo que ha generado la app.
 * @param n Minutos que debe durar el paseo.
 * @returns Verdadero o falso si el paseo que nos ha proporcionado la app se puede realizar en exactamente n minutos.
 * 
 * Ejemplo de uso:
 * ```typescript
 * getCartesianPath(['n', 's', 'e', 'o'], 4) = true
 * getCartesianPath(['n', 's', 'e', 'o'], 3) = false
 * getCartesianPath([], 3) = undefined
 * ```
 */
export function getCartesianPath(directions: string[], n: number): boolean | undefined {
  // Verificar que el array no esté vacío y que la longitud sea igual a n
  if (!Array.isArray(directions) || directions.length === 0 || directions.length !== n) {
    return undefined;
  }

  // Inicializar contadores para las direcciones
  let ns = 0; // Norte-Sur
  let eo = 0; // Este-Oeste

  // Iterar sobre cada dirección y actualizar contadores
  for (const direction of directions) {
    switch (direction) {
      case Direction.N:
        ns++;
        break;
      case Direction.S:
        ns--;
        break;
      case Direction.E:
        eo++;
        break;
      case Direction.O:
        eo--;
        break;
      default:
        // Si se encuentra una dirección no válida, retorna undefined
        return undefined;
    }
  }

  // El paseo es válido si termina en el punto de origen
  return ns === 0 && eo === 0;
}
