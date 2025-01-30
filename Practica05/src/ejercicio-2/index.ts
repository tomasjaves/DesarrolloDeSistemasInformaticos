import { MenuSolution } from "./MenuSolution";
import { MenuInstance } from "./MenuInstance";
import { Solver } from "./Solver";
import { Plato } from "./Dish";
import * as readline from "readline";

/**
 * Interfaz de línea de comandos para interactuar con el gestor bibliográfico.
 * @const
 * @instance
 * @type {readline.Interface}
 * @method createInterface
 * @param {NodeJS.ReadableStream} - Flujo de entrada.
 * @param {NodeJS.WritableStream} - Flujo de salida.
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Constante que almacena los platos disponibles.
 * @const
 * @instance
 * @type {Plato[]}
 */
const platos = [
  new Plato("Ensalada Cesar", 9, 2),
  new Plato("Pizza Margarita", 5, 7),
  new Plato("Sopa Minestrone", 8, 3),
  new Plato("Carpaccio", 4, 5),
  new Plato("Lasaña", 7, 9),
  new Plato("Tiramisú", 3, 4),
  new Plato("Gelato", 6, 8),
  new Plato("Cannoli", 2, 6),
  new Plato("Panna Cotta", 5, 2),
  new Plato("Risotto", 8, 5),
  new Plato("Spaghetti Carbonara", 3, 7),
  new Plato("Pesto", 6, 4),
  new Plato("Prosciutto", 4, 6),
];

/**
 * Instancia del problema del menú.
 * @const
 * @instance
 */
const instanciaMenu = new MenuInstance(platos, 10);

// Maximo de insalubridad
const maxInsalubridad = 10;

/**
 * Instancia del solucionador del problema del menú.
 * @const
 * @instance
 */
const instanciaDelMenu = new MenuInstance(platos, maxInsalubridad);

/**
 * Función que imprime la solución
 * @method printSolution
 * @param {MenuSolution} - Solución del menú.
 * @returns {void}
 */
function printSolution(solution: MenuSolution) {
  console.log("Platos en la solución:");
  solution.getSeleccionados().forEach((plato) => {
    console.log(
      `- ${plato.nombre}: Puntuación Nutricional: ${plato.puntuacionNutricional}, Insalubridad: ${plato.insalubridad}`,
    );
  });
}

/**
 * Función que añade un plato a la lista de platos
 * @method anadirPlato
 * @param '{() => void} - Función de callback.'
 */
function anadirPlato(callback: () => void) {
  // Preguntamos al usuario por los datos del plato.
  rl.question("Introduce el nombre del plato: ", nombre => {
    rl.question("Introduce la puntuación nutricional del plato: ", puntuacionStr => {
      rl.question("Introduce la insalubridad del plato: ", insalubridadStr => {
        // Convertimos los datos a números enteros y creamos un nuevo plato.
        const puntuacion = parseInt(puntuacionStr, 10);
        const insalubridad = parseInt(insalubridadStr, 10);
        const nuevoPlato = new Plato(nombre, puntuacion, insalubridad);
        platos.push(nuevoPlato);
        // Informamos al usuario y llamamos a la función de callback.
        console.log(`Plato ${nombre} añadido correctamente.`);
        callback();
      });
    });
  });
}

/**
 * Función que pregunta al usuario si quiere añadir más platos o elegir otra heurística.
 * @method anadirPlato
 * @method mostrarMenuHeuristicas
 * @method preguntarSiguienteAccion
 */
function preguntarSiguienteAccion() {
  // Preguntamos al usuario si quiere añadir más platos o elegir otra heurística.
  rl.question("¿Deseas añadir más platos (1) o elegir otra heurística (2)? Escribe 'salir' para terminar: ", accion => {
    // Si es 1, llamamos a anadirPlato y luego volvemos aquí.
    if (accion === "1") {
      anadirPlato(preguntarSiguienteAccion);
    } else if (accion === "2") { // Si es 2, llamamos a mostrarMenuHeuristicas.
      mostrarMenuHeuristicas();
    } else if (accion.toLowerCase() === "salir") { // Si es 'salir', terminamos el programa.
      console.log("Saliendo del programa. Gracias por usar el sistema.");
      rl.close();
    } else { // Si no se reconoce la opción, preguntamos de nuevo.
      console.log("Opción no reconocida.");
      preguntarSiguienteAccion();
    }
  });
}

/**
 * Función que muestra el menú de heurísticas y resuelve el problema con la heurística seleccionada.
 * @method mostrarMenuHeuristicas
 * @method Solver
 * @method printSolution
 * @method preguntarSiguienteAccion
 */
function mostrarMenuHeuristicas() {
  // Mostramos el menú de heurísticas y preguntamos al usuario por su elección.
  console.log("Menú de heurísticas:");
  console.log("1. Heurística 1: Seleccionar los platos con mayor puntuación nutricional.");
  console.log("2. Heurística 2: Seleccionar los platos con menor insalubridad.");
  console.log("3. Heurística 3: Seleccionar los platos con mayor puntuación nutricional y menor insalubridad.");
  rl.question("¿Qué estrategia heurística te gustaría implementar? (1-3): ", opcion => {
    // Creamos una instancia del solucionador y resolvemos el problema con la heurística seleccionada.
    const instanciaMenu = new MenuInstance(platos, maxInsalubridad);
    const solucionador = new Solver(instanciaMenu);

    // Dependiendo de la opción, resolvemos el problema con la heurística seleccionada.
    switch (opcion) {
      // Si es 1, resolvemos con la heurística 1 y mostramos la solución.
      case "1":
        console.log("Ejecutando la heurística 1...");
        printSolution(solucionador.resolverConHeuristica1());
        break;
      case "2": // Si es 2, resolvemos con la heurística 2 y mostramos la solución.
        console.log("Ejecutando la heurística 2...");
        printSolution(solucionador.resolverConHeuristica2());
        break;
      case "3": // Si es 3, resolvemos con la heurística 3 y mostramos la solución.
        console.log("Ejecutando la heurística 3...");
        printSolution(solucionador.resolverConHeuristica3());
        break;
      default: // Si no se reconoce la opción, informamos al usuario.
        console.log("Opción no reconocida.");
        mostrarMenuHeuristicas();
    }
    // Después de resolver, preguntamos la siguiente acción.
    preguntarSiguienteAccion();
  });
}

// Iniciamos el programa mostrando el menú de heurísticas.
mostrarMenuHeuristicas();