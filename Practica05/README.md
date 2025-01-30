# Informe de Práctica 5: Objetos, Clases e Interfaces en TypeScript

| **Autor** | **Profesor** | **Asignatura** | **Universidad** | **Ubicación** | **Fecha** | 
|--------------|--------------|--------------|--------------|--------------|--------------|
| ***TOMÁS JAVES TOMMASONE*** | ***Dr. EDUARDO MANUEL SEGREDO GONZALEZ*** | ***DESARROLLO DE SISTEMAS INFORMÁTICOS*** | ***UNIVERSIDAD DE LA LAGUNA*** | ***SAN CRISTOBAL DE LA LAGUNA*** | ***21/02/2024*** |

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101515458/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101515458?branch=main)

#### Índice:  
1. [_Objetivo_](#1-objetivo)
2. [_Tareas Previas_](#2-tareas-previas)
3. [_Ejercicios Propuestos_](#3-ejercicios-propuestos)  
3.1 [Ejercicio 1 - Gestor de Referencias Bibliográficas](#ejercicio-1---gestor-de-referencias-bibliográficas)  
3.2 [Ejercicio 2 - Menús Saludables Orientados a Objetos](#ejercicio-2---menús-saludables-orientados-a-objetos)  
4. [_Conclusión_](#4-conclusión)
5. [_Referencias Bibliográficas_](#5-referencias-bibliográficas)

## 1. Objetivo
La práctica 5 se centra en el uso de objetos, clases e interfaces en TypeScript para resolver una serie de ejercicios prácticos. Estos conceptos son fundamentales en el desarrollo de software orientado a objetos, ya que permiten organizar y estructurar el código de manera eficiente, facilitando la reutilización y mantenimiento del mismo.

Al profundizar en el manejo de objetos, clases e interfaces, adquirimos una comprensión más sólida de cómo diseñar y estructurar sistemas de software de manera modular y escalable. Esto nos permite abordar problemas de mayor complejidad y desarrollar soluciones más robustas y flexibles.

Durante la práctica, hemos aplicado los principios SOLID de programación orientada a objetos, lo que nos ayuda a escribir código más limpio, mantenible y extensible. Además, aprendemos a documentar adecuadamente el código utilizando herramientas como TypeDoc, lo que mejora la legibilidad y comprensión del mismo para otros desarrolladores.

Además de resolver los ejercicios propuestos, también tenemos la oportunidad de familiarizarnos con herramientas como Instanbul y Coveralls para realizar pruebas de cobertura de código y evaluar la calidad del mismo. Esto nos ayuda a identificar áreas que requieren mayor atención y a mejorar la calidad general del código.

## 2. Tareas Previas
Antes de abordar la resolución de los ejercicios propuestos en la práctica 5, es crucial realizar una serie de tareas previas para asegurar un desarrollo efectivo y eficiente. Estas tareas previas proporcionan una base sólida y preparan el terreno para el trabajo práctico que se realizará a continuación. Aquí se detallan estas tareas:

1. Aceptación de la asignación de GitHub Classroom para la práctica: El primer paso es aceptar la asignación de la práctica en GitHub Classroom. Esta plataforma proporciona un entorno de desarrollo colaborativo y versionado que facilita la gestión de proyectos y la colaboración entre los miembros del equipo.

2. Familiarización con los principios SOLID de Programación Orientada a Objetos: Los principios SOLID son un conjunto de reglas y directrices que guían el diseño de software orientado a objetos hacia la creación de sistemas más mantenibles, flexibles y escalables. Es fundamental comprender estos principios antes de comenzar a desarrollar el código, ya que nos ayudarán a estructurar nuestras clases y objetos de manera coherente y eficaz.

3. Investigación sobre las herramientas Instanbul y Coveralls: Instanbul y Coveralls son herramientas utilizadas para evaluar la cobertura de código en proyectos de software. Proporcionan informes detallados sobre qué partes del código están siendo ejecutadas durante las pruebas y cuáles no, lo que permite identificar áreas que requieren más pruebas o refactorización.

4. Configuración de las herramientas mencionadas: Una vez comprendido el propósito y funcionamiento de Instanbul y Coveralls, es importante configurar correctamente estas herramientas en nuestro entorno de desarrollo. Esto implica instalar las dependencias necesarias, configurar los archivos de configuración y establecer una integración continua para que los informes de cobertura se generen automáticamente después de cada ejecución de pruebas.

Estas tareas previas sientan las bases para un desarrollo exitoso en la práctica 5, garantizando que estemos bien preparados y equipados con las herramientas y conocimientos necesarios para abordar los ejercicios propuestos de manera efectiva.

## 3. Ejercicios Propuestos
### Ejercicio 1 - Gestor de Referencias Bibliográficas
Para abordar este ejercicio, se diseñó e implementó un sistema de gestión de referencias bibliográficas utilizando objetos, clases e interfaces en TypeScript. La solución incluye una serie de clases y una interfaz principal que representan diferentes tipos de elementos bibliográficos y un gestor para organizar estas referencias.  
A continuación, se presentan los detalles de implementación y los fragmentos de código correspondientes:

- **Interfaces y Clases Implementadas**:  

***ElementoBibliografico.ts***: Define una interfaz común para todos los tipos de elementos bibliográficos. Incluye propiedades como título, autores, palabras clave, resumen, fecha de publicación, número de páginas, editorial y un método GetFormatIEEE para obtener la representación del elemento en formato IEEE.

***GestorBibliografico.ts***: Implementa una clase que actúa como un gestor para almacenar, buscar y exportar elementos bibliográficos. Permite añadir elementos al gestor, buscar por palabra clave, mostrar la información en formato de tabla y exportar los resultados de búsqueda en formato IEEE.

***CapituloLibro.ts, Congreso.ts, Libro.ts, TFG.ts, TFM.ts, ArticuloRevista.ts***: Clases que representan diferentes tipos de elementos bibliográficos. Cada clase implementa la interfaz ElementoBibliografico y proporciona su propia implementación del método GetFormatIEEE, adaptando el formato a las características específicas de cada tipo de elemento.

El código propuesto para cada interfaz y clases son los siguientes:  
- ***ElementoBibliográfico.ts***:
```typescript
export interface ElementoBibliografico {
  titulo: string;
  autores: string[];
  palabras_clave: string[];
  resumen: string;
  fecha_publicacion: string;
  paginas: number;
  editorial: string;
  GetFormatIEEE(): string;
}
```  
- ***GestorBibliografico.ts***:
```typescript
export class GestorBibliografico {
  /**
   * Array que almacena los elementos bibliográficos del gestor.
   * @type {ElementoBibliografico[]}
   * @private
   */
  private elementos: ElementoBibliografico[];

  constructor() {
    this.elementos = [];
  }

  addElement(elemento: ElementoBibliografico): void {
    this.elementos.push(elemento);
  }

  getElements(): ElementoBibliografico[] {
    return this.elementos;
  }

  showElementsTable(): void {
    console.table(this.elementos);
  }

  searchByKeyword(
    keyword: string,
    field: "titulo" | "autores" | "fecha_publicacion" | "editorial",
  ): ElementoBibliografico[] {
    return this.elementos.filter((elemento) => {
      if (field in elemento) {
        const fieldValue = Array.isArray(elemento[field])
          ? (elemento[field] as string[]).join(", ")
          : (elemento[field] as string);
        return fieldValue.toLowerCase().includes(keyword.toLowerCase());
      }
      return false;
    });
  }

  showSearchResultsTable(
    keyword: string,
    field: "titulo" | "autores" | "fecha_publicacion" | "editorial",
  ): void {
    const searchResults = this.searchByKeyword(keyword, field);
    console.table(searchResults);
  }

  exportSearchResultsIEEE(
    keyword: string,
    field: "titulo" | "autores" | "fecha_publicacion" | "editorial",
  ): string {
    const searchResults = this.searchByKeyword(keyword, field);
    return searchResults
      .map((elemento) => {
        return `${elemento.autores}. "${elemento.titulo}", ${elemento.editorial}, ${elemento.fecha_publicacion}.`;
      })
      .join("\n");
  }
}
```
- ***ArticuloRevista.ts***:
```typescript
export class ArticuloRevista implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public nombreRevista: string, // Nombre de la revista donde se publicó el artículo
    public volumen: number, // Volumen de la revista
    public numero: number, // Número de la edición dentro del volumen
    public paginaInicio: number, // Página de inicio del artículo
    public paginaFin: number, // Página final del artículo
  ) {}

  /**
   * Devuelve el artículo en formato IEEE.
   * @returns {string} - Artículo en formato IEEE.
   */
  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
      // Si hay más de un autor, se separan por comas y se añade "and" al final. Si no, se devuelve el único autor.
      this.autores.length > 1
        ? this.autores.slice(0, -1).join(", ") +
          ", " +
          this.autores.slice(-1)
        : this.autores[0];
    // Se formatea la lista de páginas.
    const paginasFormateado = `pp. ${this.paginaInicio}-${this.paginaFin}`;
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," ${this.nombreRevista}, vol. ${this.volumen}, no. ${this.numero}, ${paginasFormateado}, ${anioPublicacion}.`;
  }
}
```
- ***CapituloLibro.ts***:
```typescript
export class CapituloLibro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public nombreLibro: string, // Nombre del libro que contiene el capítulo
    public editoresLibro: string[], // Editores del libro
    public numeroCapitulo: number, // Número del capítulo dentro del libro
  ) {}

  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
      // Si hay más de un autor, se separan por comas y se añade "and" al final. Si no, se devuelve el único autor.
      this.autores.length > 1
        ? this.autores.slice(0, -1).join(", ") +
          ", " +
          this.autores.slice(-1)
        : this.autores[0];
    // Se formatea la lista de páginas.
    const paginasFormateado =
      this.paginas > 1 ? `pp. ${this.paginas}` : `p. ${this.paginas}`;
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();
    // Se formatea la lista de editores.
    const editoresFormateados =
      // Si hay más de un editor, se separan por comas y se añade "and" al final. Si no, se devuelve el único editor.
      this.editoresLibro.length > 1
        ? this.editoresLibro.slice(0, -1).join(", ") +
          ", " +
          this.editoresLibro.slice(-1)
        : this.editoresLibro[0];

    // Se construye la cadena en formato IEEE.
    return `${autoresFormateados}, "${this.titulo}," in ${this.nombreLibro}, ${editoresFormateados}, Eds., ${this.editorial}, ch. ${this.numeroCapitulo}, ${paginasFormateado}, ${anioPublicacion}.`;
  }
}
```
- ***Congreso.ts***:
```typescript
export class Congreso implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public nombreCongreso: string, // Nombre del congreso o conferencia
    public ubicacion: string, // Ubicación del congreso
  ) {}

  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
      this.autores.length > 1
        ? this.autores.slice(0, -1).join(", ") +
          ", " +
          this.autores.slice(-1)
        : this.autores[0];
    // Se formatea la lista de páginas.
    const paginasFormateado =
      this.paginas > 1 ? `pp. ${this.paginas}` : `p. ${this.paginas}`;
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();

    // Construyendo la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," presented at the ${this.nombreCongreso}, ${this.ubicacion}, ${anioPublicacion}, ${this.editorial}.`;
  }
}
```
- ***Libro.ts***:
```typescript
export class Libro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string,
    public ISBN: string, // Número Estándar Internacional de Libros
    public edicion: number, // Número de edición del libro
  ) {}

  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
      // Si hay más de un autor, se separan por comas y se añade "and" al final. Si no, se devuelve el único autor.
      this.autores.length > 1
        ? this.autores.slice(0, -1).join(", ") +
          ", " +
          this.autores.slice(-1)
        : this.autores[0];
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, ${this.titulo}, ${this.edicion} ed., ${this.editorial}, ${anioPublicacion}, ISBN: ${this.ISBN}.`;
  }
}
```

- ***TFG.ts***:
```typescript
export class TFG implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string, // Departamento académico
    public universidad: string,
    public grado: string, // Especifica el grado obtenido
    public tutores: string[], // Los tutoreses o directores del TFG
  ) {}

  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
      this.autores.length > 1
        ? this.autores.slice(0, -1).join(", ") +
          ", " +
          this.autores.slice(-1)
        : this.autores[0];
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();
    // Se formatea la lista de tutores.
    const tutoresesFormateados = this.tutores.join(", ");

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," ${this.grado} thesis, ${this.universidad}, ${anioPublicacion}.`;
  }
}
```
- ***TFM.ts***:
```typescript
export class TFM implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha_publicacion: string,
    public paginas: number,
    public editorial: string, // También podría ser el departamento académico
    public universidad: string,
    public master: string, // Especifica el máster obtenido
    public director: string[], // Los directores del TFM
  ) {}

  GetFormatIEEE(): string {
    // Se formatea la lista de autores.
    const autoresFormateados =
      this.autores.length > 1
        ? this.autores.slice(0, -1).join(", ") +
          ", " +
          this.autores.slice(-1)
        : this.autores[0];
    // Se obtiene el año de publicación en formato numérico.
    const anioPublicacion = new Date(this.fecha_publicacion).getFullYear();
    // Se formatea la lista de directores.
    const directoresFormateados = this.director.join(", ");

    // Se construye la cadena en formato IEEE
    return `${autoresFormateados}, "${this.titulo}," ${this.master} thesis, ${this.universidad}, ${anioPublicacion}.`;
  }
}
```

### Ejercicio 2 - Menús Saludables Orientados a Objetos
Este ejercicio se centra en el diseño y desarrollo de un sistema orientado a objetos para la automatización del diseño de menús saludables. Se utilizó TypeScript para implementar un conjunto de clases e interfaces que permiten modelar platos con sus respectivas puntuaciones nutricionales e insalubridades, instancias de menús con un conjunto de platos disponibles y un límite de insalubridad, y soluciones de menús que cumplen con criterios de salud específicos.  
A continuación, se detalla la implementación y los códigos utilizados.

- **Interfaces y Clases Implementadas**:

***Dish.ts***: Define la interfaz IPlato y la clase Plato, representando los platos disponibles para ser incluidos en el menú. Cada plato tiene un nombre, una puntuación nutricional y un nivel de insalubridad.

***MenuInstance.ts***: Implementa la clase MenuInstance, que representa una instancia de menú con un conjunto de platos disponibles y un límite máximo de insalubridad que no debe ser superado por el menú.

***MenuSolution.ts***: Implementa la clase MenuSolution, que representa la solución a una instancia de menú, incluyendo los platos seleccionados y métodos para calcular la insalubridad total y la puntuación nutricional total de los platos seleccionados.

***HeuristicsInterface.ts***: Define la interfaz HeuristicsInterface, que establece los métodos necesarios para resolver el problema del menú y obtener los platos seleccionados.

***Heuristic1.ts, Heuristic2.ts, Heuristic3.ts***: Clases que implementan diferentes heurísticas para resolver el problema del menú, seleccionando platos basados en criterios específicos para maximizar la puntuación nutricional mientras se mantiene dentro del límite de insalubridad.

***Solver.ts***: Implementa la clase Solver, que utiliza las heurísticas definidas para resolver una instancia de menú y determinar la mejor solución posible.

El código propuesto para cada interfaz y clases son los siguientes:

- ***Dish.ts***:
```typescript
interface IPlato {
  nombre: string;
  puntuacionNutricional: number;
  insalubridad: number;
}

export class Plato implements IPlato {
  constructor(
    public nombre: string,
    public puntuacionNutricional: number,
    public insalubridad: number,
  ) {
    if (puntuacionNutricional < 0) {
      throw new Error('Puntuación nutricional debe ser un número positivo');
    }
    if (insalubridad < 0) {
      throw new Error('Insalubridad debe ser un número positivo');
    }
  }
}
```
- ***MenuInstance.ts***:
```typescript
export class MenuInstance {
  // Atributo que almacena los platos disponibles
  private platos: Plato[];
  // Atributo que almacena el límite de insalubridad
  private maxInsalubridad: number;

  constructor(platos: Plato[], maxInsalubridad: number) {
    this.platos = platos;
    this.maxInsalubridad = maxInsalubridad;
  }

  getPlatos(): Plato[] {
    return this.platos;
  }

  getMaxInsalubridad(): number {
    return this.maxInsalubridad;
  }
}
```
- ***MenuSolution.ts***:
```typescript
export class MenuSolution {
  // Atributo que almacena los platos seleccionados
  private seleccionados: Plato[];

  constructor(seleccionados: Plato[] = []) {
    this.seleccionados = seleccionados;
  }

  agregarPlato(plato: Plato): void {
    this.seleccionados.push(plato);
  }

  agregarPlatos(platos: Plato[]): void {
    this.seleccionados.push(...platos);
  }

  getSeleccionados(): Plato[] {
    return this.seleccionados;
  }

  calcularInsalubridadTotal(): number {
    return this.seleccionados.reduce(
      (acc, plato) => acc + plato.insalubridad,
      0,
    );
  }

  calcularPuntuacionNutricionalTotal(): number {
    return this.seleccionados.reduce(
      (acc, plato) => acc + plato.puntuacionNutricional,
      0,
    );
  }
}
```
- ***HeuristicsInterface.ts***:
```typescript
export interface HeuristicsInterface {
  // Método para resolver el problema del menú.
  solve(menuInstance: MenuInstance): MenuSolution;
  // Método para obtener los platos seleccionados.
  getSelectedDishes(): Plato[];
}
```

- ***Heuristic1.ts***:
```typescript
export class Heuristic1 implements HeuristicsInterface {
  private selectedDishes: Plato[] = [];

  solve(menuInstance: MenuInstance): MenuSolution {
    // Reiniciamos el estado de selectedDishes para cada solución
    this.selectedDishes = [];
    // Ordenamos los platos por puntuación nutricional de mayor a menor
    const platosOrdenados = [...menuInstance.getPlatos()].sort(
      (a, b) => b.puntuacionNutricional - a.puntuacionNutricional,
    );
    // Inicializamos la insalubridad acumulada
    let insalubridadActual = 0;

    // Bucle para seleccionar los platos hasta alcanzar el límite de insalubridad
    for (const plato of platosOrdenados) {
      // Si el plato no supera el límite de insalubridad, lo añadimos a la solución
      if (
        insalubridadActual + plato.insalubridad <=
        menuInstance.getMaxInsalubridad()
      ) {
        this.selectedDishes.push(plato);
        insalubridadActual += plato.insalubridad;
      }
    }

    // Creamos una nueva solución MenuSolution con los platos seleccionados
    const solucion = new MenuSolution(this.selectedDishes);
    return solucion;
  }

  getSelectedDishes(): Plato[] {
    return this.selectedDishes;
  }
}
```
- ***Heuristic2.ts***:
```typescript
export class Heuristic2 implements HeuristicsInterface {
  // Atributo que almacena los platos seleccionados
  private selectedDishes: Plato[] = [];

  solve(menuInstance: MenuInstance): MenuSolution {
    // Reiniciamos el estado de selectedDishes para cada solución
    this.selectedDishes = [];
    // Inicializamos la solución
    const solucion = new MenuSolution();

    // Ordenamos los platos por puntuación nutricional de mayor a menor y por insalubridad de menor a mayor
    const platosNutricionales = [...menuInstance.getPlatos()].sort(
      (a, b) => b.puntuacionNutricional - a.puntuacionNutricional,
    );
    const platosSaludables = [...menuInstance.getPlatos()].sort(
      (a, b) => a.insalubridad - b.insalubridad,
    );
    // Inicializamos la insalubridad acumulada
    let insalubridadActual = 0;
    // Inicializamos los índices para recorrer los arreglos de platos
    let i = 0,
      j = 0;

    // Mientras haya platos disponibles y no se haya alcanzado el límite de insalubridad
    while (
      (i < platosNutricionales.length || j < platosSaludables.length) &&
      insalubridadActual <= menuInstance.getMaxInsalubridad()
    ) {
      // Si hay platos nutricionales disponibles
      if (i < platosNutricionales.length) {
        // Recogemos el plato nutricional
        const platoNutricional = platosNutricionales[i++];
        // Si el plato no supera el límite de insalubridad y no ha sido seleccionado, lo añadimos a la solución
        if (
          insalubridadActual + platoNutricional.insalubridad <=
          menuInstance.getMaxInsalubridad()
        ) {
          this.selectedDishes.push(platoNutricional);
          insalubridadActual += platoNutricional.insalubridad;
        }
      }

      // Si hay platos saludables disponibles
      if (j < platosSaludables.length) {
        // Recogemos el plato saludable
        const platoSaludable = platosSaludables[j++];
        // Si el plato no supera el límite de insalubridad y no ha sido seleccionado, lo añadimos a la solución
        if (
          insalubridadActual + platoSaludable.insalubridad <=
            menuInstance.getMaxInsalubridad() &&
          !this.selectedDishes.includes(platoSaludable)
        ) {
          this.selectedDishes.push(platoSaludable);
          insalubridadActual += platoSaludable.insalubridad;
        }
      }
    }

    // Añadimos los platos seleccionados a la solución
    solucion.agregarPlatos(this.selectedDishes);
    return solucion;
  }

  getSelectedDishes(): Plato[] {
    return this.selectedDishes;
  }
}
```
- ***Heuristic3.ts***:
```typescript
export class Heuristic3 implements HeuristicsInterface {
  // Atributo que almacena los platos seleccionados
  private selectedDishes: Plato[] = [];

  solve(menuInstance: MenuInstance): MenuSolution {
    // Reiniciamos el estado de selectedDishes para cada solución
    this.selectedDishes = [];
    // Ordenamos los platos por la mejor relación puntuación nutricional/insalubridad
    const platosRelacion = [...menuInstance.getPlatos()].sort(
      (a, b) =>
        b.puntuacionNutricional / b.insalubridad -
        a.puntuacionNutricional / a.insalubridad,
    );
    // Inicializamos la insalubridad acumulada
    let insalubridadActual = 0;

    // Bucle para seleccionar platos basándose en la mejor relación hasta alcanzar el límite de insalubridad
    for (const plato of platosRelacion) {
      // Si el plato no supera el límite de insalubridad, lo añadimos a la solución
      if (
        insalubridadActual + plato.insalubridad <=
        menuInstance.getMaxInsalubridad()
      ) {
        this.selectedDishes.push(plato);
        insalubridadActual += plato.insalubridad;
      }
    }

    // Creamos una nueva solución MenuSolution con los platos seleccionados
    const solucion = new MenuSolution(this.selectedDishes);
    return solucion;
  }

  getSelectedDishes(): Plato[] {
    return this.selectedDishes;
  }
}
```
- ***Solver.ts***:
```typescript
export class Solver {
  // Atributo que almacena la instancia del menú a resolver
  private instancia: MenuInstance;

  constructor(instancia: MenuInstance) {
    this.instancia = instancia;
  }

  resolverConHeuristica1(): MenuSolution {
    // Instanciamos la heurística 1 y resolvemos el problema del menú
    const heuristic1 = new Heuristic1();
    return heuristic1.solve(this.instancia);
  }

  resolverConHeuristica2(): MenuSolution {
    // Instanciamos la heurística 2 y resolvemos el problema del menú
    const heuristic2 = new Heuristic2();
    return heuristic2.solve(this.instancia);
  }

  resolverConHeuristica3(): MenuSolution {
    // Instanciamos la heurística 3 y resolvemos el problema del menú
    const heuristic3 = new Heuristic3();
    return heuristic3.solve(this.instancia);
  }


  resolver(heuristica: number): MenuSolution {
    switch (heuristica) {
      case 1:
        return this.resolverConHeuristica1();
      case 2:
        return this.resolverConHeuristica2();
      case 3:
        return this.resolverConHeuristica3();
      default:
        throw new Error("Heurística no definida");
    }
  }
}
```

## 4. Conclusión
La práctica ha sido una oportunidad valiosa para explorar en profundidad el uso avanzado de objetos, clases e interfaces en TypeScript. Al desarrollar soluciones para problemas complejos de programación, hemos podido apreciar de manera más clara cómo el enfoque orientado a objetos puede ser beneficioso en la construcción de sistemas de software sofisticados.

Una de las ventajas destacadas del diseño orientado a objetos es su capacidad para promover la reutilización del código. Al dividir la funcionalidad en clases y componentes bien definidos, podemos encapsular la lógica de negocio de manera que sea fácilmente accesible y reutilizable en diferentes partes de la aplicación. Esto no solo reduce la duplicación de código, sino que también facilita la mantenibilidad del sistema a largo plazo, ya que los cambios en una parte del código pueden propagarse de manera controlada a otras partes relacionadas.

Además, el uso de interfaces nos ha permitido establecer contratos claros entre diferentes componentes del sistema. Esto fomenta la interoperabilidad y la modularidad, ya que las clases pueden comunicarse entre sí de manera predecible a través de las interfaces definidas. Además, las interfaces proporcionan una forma de abstracción que facilita la comprensión del sistema en su conjunto, ya que nos permite centrarnos en cómo interactúan los componentes sin preocuparnos por los detalles de implementación.

Otro aspecto importante del diseño orientado a objetos es la separación de preocupaciones. Al dividir la funcionalidad en clases y componentes con responsabilidades específicas, podemos mantener el código limpio y modular, lo que facilita su comprensión y mantenimiento. Esto es especialmente útil en proyectos grandes y complejos, donde múltiples desarrolladores pueden estar trabajando en diferentes partes del sistema simultáneamente.

Concluimos diciendo que la práctica ha resaltado la importancia y la utilidad del diseño orientado a objetos en el desarrollo de software de calidad. Al aprovechar los conceptos de objetos, clases e interfaces en TypeScript, hemos podido construir sistemas robustos, escalables y fácilmente mantenibles que pueden adaptarse a las necesidades cambiantes del negocio.

## 5. Referencias Bibliográficas
- [_SOLID Principles_](https://samueleresca.net/solid-principles-using-typescript/)
- [_TypeScript Documentation_](https://www.typescriptlang.org/docs/)
- [_Istanbul_](https://istanbul.js.org)
- [_Coveralls_](https://coveralls.io)
