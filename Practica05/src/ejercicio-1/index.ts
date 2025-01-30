import { GestorBibliografico } from "./GestorBibliografico";
import { ArticuloRevista } from "./ArticuloRevista";
import { CapituloLibro } from "./CapituloLibro";
import { Congreso } from "./Congreso";
import { Libro } from "./Libro";
import { TFG } from "./TFG";
import { TFM } from "./TFM";
import * as readline from "readline";

/**
 * Programa principal donde se crean y almacenan diferentes elementos bibliográficos.
 * Se muestra un menú para interactuar con el gestor bibliográfico.
 */

/**
 * Instancia de la clase GestorBibliografico.
 * @const
 * @instance
 * @type {GestorBibliografico}
 */
const gestor = new GestorBibliografico();

/**
 * Se añade un elemento ArticuloRevista al gestor bibliográfico.
 * @method addElement
 * @param {ElementoBibliografico} - Elemento bibliográfico a añadir.
 * @returns {void}
 */
gestor.addElement(
  new ArticuloRevista(
    "ESIT - ULL",
    ["Eduardo Segredo", "Tomás Javes"],
    ["Revista", "ESIT"],
    "Resumen del artículo de revista",
    "2023-01-01",
    10,
    "Editorial ULL",
    "ULL",
    1,
    1,
    1,
    10,
  ),
);

/**
 * Se añade un elemento CapituloLibro al gestor bibliográfico.
 * @method addElement
 * @param {ElementoBibliografico} - Elemento bibliográfico a añadir.
 * @returns {void}
 */
gestor.addElement(
  new CapituloLibro(
    "Capítulo 1 del libro La ULL te enseña",
    ["Eduardo Segredo", "Tomás Javes"],
    ["Libro", "Capítulo"],
    "Resumen del capítulo",
    "2023-02-01",
    20,
    "Editorial ULL",
    "La ULL te enseña",
    ["Eduardo Segredo", "Tomás Javes"],
    1,
  ),
);

/**
 * Se añade un elemento Congreso al gestor bibliográfico.
 * @method addElement
 * @param {ElementoBibliografico} - Elemento bibliográfico a añadir.
 * @returns {void}
 */
gestor.addElement(
  new Congreso(
    "CONGRESO 2024",
    ["Eduardo Segredo", "Tomás Javes"],
    ["Congreso", "2024"],
    "Resumen del congreso",
    "2023-03-01",
    30,
    "Editorial ULL",
    "Congreso de Estudiantes",
    "ESIT",
  ),
);

/**
 * Se añade un elemento Libro al gestor bibliográfico.
 * @method addElement
 * @param {ElementoBibliografico} - Elemento bibliográfico a añadir.
 * @returns {void}
 */
gestor.addElement(
  new Libro(
    "la ULL te enseña",
    ["Eduardo Segredo", "Tomás Javes"],
    ["Libro", "ULL"],
    "Resumen del libro",
    "2023-04-01",
    100,
    "Editorial ULL",
    "ISBN 1234567890",
    1,
  ),
);

/**
 * Se añade un elemento TFG al gestor bibliográfico.
 * @method addElement
 * @param {ElementoBibliografico} - Elemento bibliográfico a añadir.
 * @returns {void}
 */
gestor.addElement(
  new TFG(
    "Sistema de gestión de bibliografías en TypeScript",
    ["Tomás Javes"],
    ["Bibliografía", "TypeScript"],
    "Resumen del TFG",
    "2023-05-01",
    60,
    "Departamento académico",
    "ULL",
    "Ingeniería Informática",
    ["Eduardo Segredo"],
  ),
);

/**
 * Se añade un elemento TFM al gestor bibliográfico.
 * @method addElement
 * @param {ElementoBibliografico} - Elemento bibliográfico a añadir.
 * @returns {void}
 */
gestor.addElement(
  new TFM(
    "Desarrollo de un sistema de gestión de bibliografías en TypeScript",
    ["Tomás Javes"],
    ["Bibliografías", "Desarrollo"],
    "Resumen del TFM",
    "2023-06-01",
    80,
    "Departamento académico",
    "ULL",
    "Máster en Ingeniería Informática",
    ["Eduardo Segredo"],
  ),
);

// // Mostrar todos los elementos bibliográficos almacenados
// console.log("Todos los elementos bibliográficos:");
// gestor.showElementsTable();
//
// // Buscar y mostrar resultados por palabra clave
// console.log("Resultados de la búsqueda por 'ULL':");
// gestor.showSearchResultsTable("ULL", "titulo");
//
// // Exportar y mostrar los resultados de la búsqueda en formato IEEE
// console.log("Exportar búsqueda en formato IEEE:");
// const resultadosIEEE = gestor.exportSearchResultsIEEE(
//   "ULL",
//   "titulo",
// );
// console.log(resultadosIEEE);

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
 * Función que muestra el menú principal y maneja las opciones seleccionadas por el usuario.
 * @method mostrarMenu
 * @returns {void}
 */
function mostrarMenu(): void {
  // Mostrar el menú principal
  console.log("\nGestor Bibliográfico - Menú Principal");
  console.log("1. Mostrar todos los elementos bibliográficos");
  console.log("2. Buscar elementos por palabra clave y título");
  console.log("3. Exportar búsqueda en formato IEEE");
  console.log("4. Salir");
  // Preguntar al usuario por una opción
  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        // Mostrar todos los elementos bibliográficos almacenados
        console.log("Todos los elementos bibliográficos:");
        gestor.showElementsTable();
        volverAlMenu();
        break;
      case "2":
        // Buscar y mostrar resultados por palabra clave
        rl.question("Ingrese la palabra clave para buscar: ", (keyword) => {
          console.log(`Resultados de la búsqueda por '${keyword}':`);
          gestor.showSearchResultsTable(keyword, "titulo");
          volverAlMenu();
        });
        break;
      case "3":
        // Exportar y mostrar los resultados de la búsqueda en formato IEEE
        rl.question("Ingrese la palabra clave para exportar: ", (keyword) => {
          const resultadosIEEE = gestor.exportSearchResultsIEEE(
            keyword,
            "titulo",
          );
          console.log("Exportar búsqueda en formato IEEE:");
          console.log(resultadosIEEE);
          volverAlMenu();
        });
        break;
      case "4":
        // Salir del programa
        console.log("Saliendo del programa.");
        rl.close();
        break;
      default:
        // Opción no válida
        console.log("Opción no válida. Por favor, intente de nuevo.");
        volverAlMenu();
    }
  });
}

/**
 * Función que pregunta al usuario si desea realizar otra operación o salir del programa.
 * @method volverAlMenu
 * @returns {void}
 */
function volverAlMenu() {
  // Preguntar al usuario si desea realizar otra operación
  rl.question("¿Desea realizar otra operación? (s/n): ", (respuesta) => {
    // Si la respuesta es "s", mostrar el menú principal. Si no, salir del programa.
    if (respuesta.toLowerCase() === "s") {
      mostrarMenu();
    } else {
      console.log("Gracias por usar el gestor bibliográfico. Hasta luego.");
      rl.close();
    }
  });
}

/**
 * Mostrar el menú principal.
 * @method mostrarMenu
 * @returns {void}
 */
mostrarMenu();
