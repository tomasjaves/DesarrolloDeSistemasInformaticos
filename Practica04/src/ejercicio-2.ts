/**
 * Un número entero positivo puede comunicarse a otra persona llevando a cabo una secuencia de señales corporales.
 * Las posibles señales son las siguientes:
 * 
 * Parpadear (1)
 * Parpadear dos veces (2)
 * Mover la nariz (4)
 * Levantar las cejas (8)
 * Saltar (16)
 * Saltar a la pata coja (32)
 * Agacharse (64)
 * Dar un aplauso (128)
 * 
 * Si, por ejemplo, quisiéramos comunicar el número 192, las señales corporales a llevar a cabo serían “Agacharse” (64) y
 * “Dar un aplauso” (128), dado que 64 + 128 = 192.
 * 
 * Escriba una función fromIntToActions que reciba un número entero positivo y que devuelva una lista con las señales corporales
 * que deben llevarse a cabo para comunicarlo. Las señales corporales deberán implementarse a través de un enumerado.
 * 
 * Tenga en cuenta que, en este caso, la función podría recibir un entero positivo que incluya señales no contempladas
 * en la lista de más arriba, es decir, señales corporales cuyo valor numérico asociado sea 256, 512, 1024, etc.
 * Además, si el valor pasado como argumento no es un entero positivo, la función deberá devolver undefined.
 * 
 * Ejemplos:
 * La invocación a fromIntToActions(192) debería devolver la lista [Agacharse, Dar un aplauso].
 * La invocación a fromIntToActions(129) debería devolver la lista [Parpadear, Dar un aplauso].
 * La invocación a fromIntToActions(257) debería devolver la lista [Parpadear].
 * La invocación a fromIntToActions(256) debería devolver la lista [].
 * La invocación a fromIntToActions(515) debería devolver la lista [Parpadear, Parpadear dos veces].
 * La invocación a fromIntToActions(84) debería devolver la lista [Mover la nariz, Saltar, Agacharse].
 * La invocación a fromIntToActions(-14) debería devolver la lista undefined.
 */

/**
 * Enumerado que representa las señales corporales que se pueden llevar a cabo.
 */
export enum SeñalesCorporales {
  Parpadear = 1,
  ParpadearDosVeces = 2,
  MoverLaNariz = 4,
  LevantarLasCejas = 8,
  Saltar = 16,
  SaltarALaPataCoja = 32,
  Agacharse = 64,
  DarUnAplauso = 128
}

/**
 * Función que recibe un número entero positivo y devuelve una lista con las señales corporales que deben llevarse a cabo para comunicarlo.
 * Si el valor pasado como argumento no es un entero positivo, la función deberá devolver undefined.
 * @param valor que representa el número entero positivo
 * @returns una lista con las señales corporales que deben llevarse a cabo para comunicarlo.
 * 
 * Ejemplo de uso:
 * ```typescript
 * fromIntToActions(192) = [SeñalesCorporales.Agacharse, SeñalesCorporales.DarUnAplauso]
 * fromIntToActions(129) = [SeñalesCorporales.Parpadear, SeñalesCorporales.DarUnAplauso]
 * fromIntToActions(257) = [SeñalesCorporales.Parpadear]
 * fromIntToActions(256) = []
 * ```
 */
export function fromIntToActions(valor: number): SeñalesCorporales[] | undefined {
  // Comprobar que el valor es un número entero positivo
  if (!Number.isInteger(valor) || valor <= 0) {
    return undefined;
  }
  // Variable para almacenar las señales corporales
  const acciones: SeñalesCorporales[] = [];
  // Iterar sobre las señales corporales
  for (const señal in SeñalesCorporales) {
    // Convertir a número ya que enum en TypeScript es un objeto bidireccional
    const valorSeñal = Number(SeñalesCorporales[señal as keyof typeof SeñalesCorporales]);
    if (isNaN(valorSeñal)) continue; // Ignorar las propiedades de string del enum
    // Comprobar si la señal corporal es menor o igual que el valor
    if ((valor & valorSeñal) === valorSeñal) acciones.push(valorSeñal);
  }
  return acciones;
}