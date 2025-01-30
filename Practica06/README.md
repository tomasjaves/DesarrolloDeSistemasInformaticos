# Informe de Práctica 6: Clases e interfaces genéricas. Principios SOLID

| **Autor**                   | **Profesor**                              | **Asignatura**                            | **Universidad**                | **Ubicación**                    | **Fecha**        |
| --------------------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------ | -------------------------------- | ---------------- |
| **_TOMÁS JAVES TOMMASONE_** | **_Dr. EDUARDO MANUEL SEGREDO GONZALEZ_** | **_DESARROLLO DE SISTEMAS INFORMÁTICOS_** | **_UNIVERSIDAD DE LA LAGUNA_** | **_SAN CRISTOBAL DE LA LAGUNA_** | **_27/02/2024_** |

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101515458/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101515458?branch=main)

#### Índice:

1. [_Objetivo_](#1-objetivo)
2. [_Tareas Previas_](#2-tareas-previas)
3. [_Ejercicios Propuestos_](#3-ejercicios-propuestos)  
3.1 [_Ejercicio 1 - La mudanza_](#ejercicio-1---la-mudanza)  
3.2 [_Ejercicio 2 - Facturas en diferentes formatos_](#ejercicio-2---facturas-en-diferentes-formatos)  
3.3 [_Ejercicio 3 - Gestor de ficheros_](#ejercicio-3---gestor-de-ficheros)  
3.4 [_Ejercicio 4 - Impresoras y escáneres_](#ejercicio-4---impresoras-y-escáneres)  
3.5 [_Ejercicio 5 -  Servicio de mensajería_](#ejercicio-5---servicio-de-mensajería)  
4. [_Conclusión_](#4-conclusión)
5. [_Referencias Bibliográficas_](#5-referencias-bibliográficas)

# 1. Objetivo

El objetivo de esta práctica es profundizar en el conocimiento y manejo de clases e interfaces genéricas en TypeScript, así como en la aplicación de los principios SOLID de diseño orientado a objetos. Mediante una serie de ejercicios prácticos, buscamos no solo comprender la sintaxis y el uso avanzado de TypeScript, sino también cómo estos conceptos pueden ser aplicados para desarrollar soluciones de software robustas, mantenibles y escalables. A través del desafío de implementar un conjunto de requisitos específicos, esta práctica está diseñada para reforzar nuestra habilidad en el uso de técnicas de programación orientada a objetos y genéricas, enfocándonos en la calidad del diseño de software. Al aplicar los principios SOLID, pretendemos crear un código que sea fácil de entender, modificar y ampliar, destacando la importancia de un diseño de software bien pensado en el desarrollo de aplicaciones eficientes y efectivas.

# 2. Tareas Previas

Antes de sumergirnos en la resolución de los ejercicios propuestos, realizamos una serie de pasos preparatorios esenciales para asegurar el éxito de nuestra práctica.

Primero, aceptamos la asignación en GitHub Classroom, lo que nos proporcionó un repositorio inicial para alojar todas nuestras soluciones. Este paso inicial es fundamental para organizar y versionar adecuadamente nuestro trabajo a lo largo de la práctica.

A continuación, dedicamos tiempo a repasar TypeDoc pues en prácticas anteriores ya habíamos hecho uso de esta herramienta.  
TypeDoc es indispensable para la documentación de proyectos TypeScript porque no solamente adquirimos las habilidades necesarias para documentar efectivamente nuestros desarrollos sino que también garantizamos que nuestro código es comprensible para otros desarrolladores.

Mocha y Chai fueron las herramientas clave para el desarrollo de pruebas. Aunque anteriormente habíamos hecho uso de ellas, volvimos a familiarizarnos para esta nueva práctica. Esto no solo nos permitiría verificar la corrección de nuestras implementaciones sino también asegurar su robustez frente a casos de uso y entradas inesperadas.

Con estas tareas previas completadas, nos encontramos en una posición óptima para abordar los ejercicios propuestos con confianza, equipados con las herramientas y conocimientos necesarios para crear soluciones efectivas y bien diseñadas, siguiendo las mejores prácticas en el desarrollo de software con TypeScript.

# 3. Ejercicios Propuestos

### Ejercicio 1 - La mudanza

Para abordar el ejercicio de diseño y gestión de ensers y mudanzas, se ha desarrollado un sistema flexible y escalable utilizando los principios de programación orientada a objetos y adherido a los principios SOLID en TypeScript. Este enfoque permite manejar de manera eficiente y organizada los distintos objetos involucrados en una mudanza, como prendas, tecnología y cualquier otro enser que requiera ser empacado y transportado. A continuación, se detalla la implementación del sistema y cómo se alinea con los principios SOLID:

- **Interfaces y Clases Implementadas**:

**_Enser.ts_**: Esta interfaz define la estructura común para todos los objetos que pueden ser manejados en el sistema de mudanza. Incluye propiedades esenciales como nombre, categoría, peso, dimensiones, y un método para obtener una descripción detallada del enser. Esta interfaz permite seguir el principio de Segregación de Interfaces (ISP) al especificar solo los métodos y propiedades que son necesarios para los objetos que implementan esta interfaz.

**_Caja.ts_**: La clase Caja es genérica y puede contener cualquier tipo de objeto que implemente la interfaz Enser. Esto permite una gran flexibilidad y reutilización de código, alineándose con el principio de Inversión de Dependencias (DIP) al depender de abstracciones (la interfaz Enser) en lugar de implementaciones concretas. Además, esta clase encapsula la lógica para añadir, eliminar, listar y buscar ensers dentro de una caja, siguiendo el principio de Responsabilidad Única (SRP).

**_Prendas.ts y Tecnologia.ts_**: Estas clases implementan la interfaz Enser y especifican detalles particulares para prendas y tecnología, respectivamente. Cada clase proporciona su propia implementación del método getDescription, lo que demuestra el principio de Sustitución de Liskov (LSP), ya que pueden ser utilizadas en lugar de su tipo base (Enser) sin afectar la integridad del programa.

**_Mudanza.ts_**: La clase Mudanza gestiona colecciones de cajas (Caja<T>) y ofrece funcionalidades para añadir y eliminar cajas, listar todos los ensers de la mudanza, y calcular el peso total. Esto ejemplifica el principio de Abierto/Cerrado (OCP), ya que la clase está abierta para extensión (pueden agregarse nuevos tipos de ensers o cajas) pero cerrada para modificación, manteniendo el código seguro ante cambios.

El código propuesto para cada interfaz y clases son los siguientes:

- **_Enser.ts_**:

```typescript
export interface Enser {
  name: string; // Nombre del enser
  category: string; // Categoría a la que pertenece el enser (ej: libros, ropa, electrónica)
  weight: number; // Peso del enser en kilogramos
  dimensions: {
    // Dimensiones del enser
    width: number; // Ancho del enser en centímetros
    height: number; // Altura del enser en centímetros
    depth: number; // Profundidad del enser en centímetros
  };
  getDescription(): string; // Método para obtener una descripción del enser
}
```

- **_Caja.ts_**:

```typescript
export class Caja<T extends Enser> {
  private contents: T[] = [];

  /**
   * Método para añadir un Enser a la caja   *
   * @param Enser Enser a añadir a la caja
   * @returns void
   */
  addEnser(Enser: T): void {
    this.contents.push(Enser);
  }

  /**
   * Método para eliminar un Enser de la caja
   * @param name Nombre del Enser a eliminar
   * @returns T | undefined
   */
  removeEnser(name: string): T | undefined {
    // Obtenemos el índice del Enser a eliminar
    const index = this.contents.findIndex((Enser) => Enser.name === name);
    // Si el índice no es -1, existe y, por tanto, lo eliminamos
    if (index !== -1) {
      return this.contents.splice(index, 1)[0];
    }
    // Si el índice es -1, no existe y, por tanto, devolvemos undefined
    return undefined;
  }

  /**
   * Método para listar los Ensers que contiene la caja
   * @returns void
   */
  listEnsers(): void {
    // Listamos la descripción de cada Enser
    this.contents.forEach((Enser) => console.log(Enser.getDescription()));
  }

  /**
   * Método para obtener los Ensers que contiene la caja
   * @returns T[]
   */
  getEnsers(): T[] {
    return this.contents;
  }

  /**
   * Método para buscar un Enser en la caja
   * @param name Nombre del Enser a buscar
   * @returns T | undefined
   */
  findEnser(name: string): T | undefined {
    // Devolvemos el Enser si lo encontramos
    return this.contents.find((Enser) => Enser.name === name);
  }
}
```

- **_Prendas.ts_**:

```typescript
export class Prendas implements Enser {
  name: string;
  category: string = "Prendas";
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  tipo: string; // Pantalones, Camisetas

  constructor(
    name: string,
    weight: number,
    dimensions: { width: number; height: number; depth: number },
    tipo: string,
  ) {
    this.name = name;
    this.weight = weight;
    this.dimensions = dimensions;
    this.tipo = tipo;
  }

  /**
   * Método para obtener la descripción de la prenda
   * @returns string
   */
  getDescription(): string {
    return `${this.name} (${this.tipo}): ${this.weight}kg, ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}cm`;
  }
}
```

- **_Tecnologia.ts_**:

```typescript
export class Tecnologia implements Enser {
  name: string;
  category: string = "Tecnología";
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  tipo: string; // Televisores, Móviles

  constructor(
    name: string,
    weight: number,
    dimensions: { width: number; height: number; depth: number },
    tipo: string,
  ) {
    this.name = name;
    this.weight = weight;
    this.dimensions = dimensions;
    this.tipo = tipo;
  }

  /**
   * Método para obtener la descripción del enser
   * @returns string
   */
  getDescription(): string {
    return `${this.name} (${this.tipo}): ${this.weight}kg, ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}cm`;
  }
}
```

- **_Mudanza.ts_**:

```typescript
export class Mudanza<T extends Enser> {
  private Caja: Caja<T>[] = [];

  /**
   * Método para añadir una Caja a la mudanza
   * @param Caja Caja a añadir a la mudanza
   * @returns void
   */
  addCaja(Caja: Caja<T>): void {
    // Añadir Caja a la mudanza
    this.Caja.push(Caja);
  }

  /**
   * Método para eliminar una Caja de la mudanza
   * @param index Índice de la Caja a eliminar
   * @returns Caja<T> | undefined
   */
  removeCaja(index: number): Caja<T> | undefined {
    // Si el índice es válido, eliminar Caja de la mudanza
    if (index >= 0 && index < this.Caja.length) {
      return this.Caja.splice(index, 1)[0];
    }
    // Si el índice no es válido, devolver undefined
    return undefined;
  }

  /**
   * Método para listar los Ensers que contiene la mudanza
   * @returns void
   */
  listAllEnsers(): void {
    // Listar los Ensers de cada Caja
    this.Caja.forEach((Caja, index) => {
      // Mostrar el número de Caja y listar sus Ensers
      console.log(`Caja #${index + 1}:`);
      Caja.listEnsers();
    });
  }

  /**
   * Método para obtener el peso total de la mudanza
   * @returns number
   */
  getTotalWeight(): number {
    // Calcular el peso total de la mudanza
    return this.Caja.reduce((totalWeight, Caja) => {
      const CajaWeight = Caja.getEnsers().reduce(
        (weight, Enser) => weight + Enser.weight,
        0,
      );
      return totalWeight + CajaWeight;
    }, 0);
  }

  /**
   * Método para obtener las Cajas que contiene la mudanza
   * @returns Caja<T>[]
   */
  getCajas(): Caja<T>[] {
    return this.Caja;
  }
}
```

### Ejercicio 2 - Facturas en diferentes formatos

Para desarrollar una solución eficiente y flexible para la gestión de facturas digitales, se ha diseñado un sistema basado en TypeScript que aprovecha los principios de la programación orientada a objetos y la implementación de interfaces y clases genéricas. Este enfoque no solo permite la creación de un sistema robusto y escalable sino que también facilita la integración y expansión futuras con nuevos formatos de factura o funcionalidades adicionales. A continuación, se detalla el diseño e implementación del sistema propuesto:

- **Interfaces y Clases Implementadas**:

**_Factura.ts_**: Esta interfaz define la estructura base de una factura, incluyendo propiedades esenciales como el total, remitente, destinatario, formato, fecha de emisión y descripción, además de un método generarFactura() para obtener la representación de la factura en el formato específico requerido. Esta interfaz asegura que todas las clases que representen tipos específicos de facturas implementen un conjunto común de propiedades y comportamientos, promoviendo así la reutilización de código y la interoperabilidad entre diferentes tipos de facturas.

**_ColeccionFacturas.ts_**: Se implementó una clase genérica ColeccionFacturas<T extends Factura>, que sirve como contenedor para almacenar y manejar un conjunto de facturas de cualquier tipo que cumpla con la interfaz Factura. Esta clase incluye métodos para agregar y remover facturas, obtener la lista de todas las facturas almacenadas, y generar todas las facturas en sus respectivos formatos. La utilización de genéricos aquí permite la creación de colecciones de facturas de diferentes tipos, ofreciendo flexibilidad y facilitando la gestión de diversas formas de facturas en un solo lugar.

**_HTML.ts y PDF.ts_**: Estas clases concretas implementan la interfaz Factura, proporcionando implementaciones específicas del método generarFactura() para generar representaciones de la factura en formatos HTML y PDF, respectivamente. Cada clase se encarga de definir cómo se presenta la información de la factura en su formato designado, permitiendo la fácil extensión del sistema para soportar más formatos en el futuro. Al separar las implementaciones específicas de formato en clases distintas, se promueve el principio de responsabilidad única, mejorando la mantenibilidad y la claridad del código.

El código propuesto para cada interfaz y clases son los siguientes:

- **_Factura.ts_**:

```typescript
export interface Factura {
  total: number; // Total de la factura
  remitente: string; // Remitente de la factura
  formato: string; // Formato de la factura (PDF, HTML)
  fechaEmision: Date; // Fecha de emisión de la factura
  destinatario: string; // Destinatario de la factura
  descripcion: string; // Descripción de la factura
  generarFactura(): string; // Método para generar la factura en el formato especificado
}
```

- **_ColeccionFactura.ts_**:

```typescript
export class ColeccionFacturas<T extends Factura> {
  private facturas: T[] = [];

  /**
   * Método para agregar una factura a la lista
   * @param factura T Factura a agregar
   * @returns void
   */
  agregarFactura(factura: T): void {
    this.facturas.push(factura);
  }

  /**
   * Método para remover una factura de la lista
   * @param indice number Índice de la factura a remover
   * @returns void
   */
  removerFactura(indice: number): void {
    this.facturas.splice(indice, 1);
  }

  /**
   * Método para obtener la lista de facturas
   * @returns T[] Lista de facturas
   */
  obtenerFacturas(): T[] {
    return this.facturas;
  }

  /**
   * Método para generar todas las facturas de la lista
   * @returns string[] Lista de facturas generadas
   */
  generarTodasLasFacturas(): string[] {
    return this.facturas.map((factura) => factura.generarFactura());
  }
}
```

- **_HTML.ts_**:

```typescript
export class HTML implements Factura {
  public total: number;
  public remitente: string;
  public formato: string;
  public fechaEmision: Date;
  public destinatario: string;
  public descripcion: string;

  /**
   * Constructor de la clase HTML
   * @param total Total de la factura
   * @param remitente Remitente de la factura
   * @param fechaEmision Fecha de emisión de la factura
   * @param destinatario Destinatario de la factura
   * @param descripcion Descripción de la factura
   */
  constructor(
    total: number,
    remitente: string,
    fechaEmision: Date,
    destinatario: string,
    descripcion: string,
  ) {
    this.total = total;
    this.remitente = remitente;
    this.fechaEmision = fechaEmision;
    this.destinatario = destinatario;
    this.descripcion = descripcion;
    this.formato = "HTML"; // Se establece el formato como HTML por defecto
  }

  /**
   * Método para obtener el total de la factura
   * @returns number Total de la factura
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Método para obtener el remitente de la factura
   * @returns string Remitente de la factura
   */
  getRemitente(): string {
    return this.remitente;
  }

  /**
   * Método para obtener el formato de la factura
   * @returns string Formato de la factura
   */
  getFormato(): string {
    return this.formato;
  }

  /**
   * Método para obtener la fecha de emisión de la factura
   * @returns Date Fecha de emisión de la factura
   */
  getFechaEmision(): Date {
    return this.fechaEmision;
  }

  /**
   * Método para obtener el destinatario de la factura
   * @returns string Destinatario de la factura
   */
  getDestinatario(): string {
    return this.destinatario;
  }

  /**
   * Método para obtener la descripción de la factura
   * @returns string Descripción de la factura
   */
  getDescripcion(): string {
    return this.descripcion;
  }

  /**
   * Método para generar la factura en formato HTML
   * @returns string Factura en formato HTML
   */
  generarFactura(): string {
    // Generación de la factura en formato HTML
    return `
      <html>
        <head>
          <title>Factura</title>
        </head>
        <body>
          <h1>Factura en formato HTML</h1>
          <p><strong>Remitente:</strong> ${this.remitente}</p>
          <p><strong>Fecha de emisión:</strong> ${this.fechaEmision.toDateString()}</p>
          <p><strong>Destinatario:</strong> ${this.destinatario}</p>
          <p><strong>Descripción:</strong> ${this.descripcion}</p>
          <p><strong>Total:</strong> ${this.total}</p>
        </body>
      </html>
    `;
  }
}
```

- **_PDF.ts_**:

```typescript
export class PDF implements Factura {
  public total: number;
  public remitente: string;
  public formato: string;
  public fechaEmision: Date;
  public destinatario: string;
  public descripcion: string;

  /**
   * Constructor de la clase PDF
   * @param total Total de la factura
   * @param remitente Remitente de la factura
   * @param fechaEmision Fecha de emisión de la factura
   * @param destinatario Destinatario de la factura
   * @param descripcion Descripción de la factura
   */
  constructor(
    total: number,
    remitente: string,
    fechaEmision: Date,
    destinatario: string,
    descripcion: string,
  ) {
    this.total = total;
    this.remitente = remitente;
    this.fechaEmision = fechaEmision;
    this.destinatario = destinatario;
    this.descripcion = descripcion;
    this.formato = "PDF"; // Se establece el formato como PDF por defecto
  }

  /**
   * Método para obtener el total de la factura
   * @returns number Total de la factura
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Método para obtener el remitente de la factura
   * @returns string Remitente de la factura
   */
  getRemitente(): string {
    return this.remitente;
  }

  /**
   * Método para obtener el formato de la factura
   * @returns string Formato de la factura
   */
  getFormato(): string {
    return this.formato;
  }

  /**
   * Método para obtener la fecha de emisión de la factura
   * @returns Date Fecha de emisión de la factura
   */
  getFechaEmision(): Date {
    return this.fechaEmision;
  }

  /**
   * Método para obtener el destinatario de la factura
   * @returns string Destinatario de la factura
   */
  getDestinatario(): string {
    return this.destinatario;
  }

  /**
   * Método para obtener la descripción de la factura
   * @returns string Descripción de la factura
   */
  getDescripcion(): string {
    return this.descripcion;
  }

  /**
   * Método para generar la factura en formato PDF
   * @returns string Factura en formato PDF
   */
  generarFactura(): string {
    // Lógica para generar la factura en formato PDF
    return `Factura en formato PDF:\n\nRemitente: ${this.remitente}\nFecha de emisión: ${this.fechaEmision.toDateString()}\nDestinatario: ${this.destinatario}\nDescripción: ${this.descripcion}\nTotal: ${this.total}`;
  }
}
```

### Ejercicio 3 - Gestor de ficheros

Entendiendo el ejercicio planteado en el enunciado, vemos que viola los siguientes principios SOLID:

_Principio de Responsabilidad Única (SRP - Single Responsibility Principle)_: Este principio establece que una clase debe tener una sola razón para cambiar, en cambio, la clase FileManager tiene dos responsabilidades: leer y escribir archivos. Esto viola el principio de SRP, ya que la clase debería tener una única responsabilidad.

_Principio de Abierto/Cerrado (OCP - Open/Closed Principle)_: Este principio sostiene que las entidades de software (clases, módulos, funciones, etc.) deben ser abiertas para su extensión pero cerradas para su modificación. En el código dado, si necesitamos agregar o cambiar la forma en que se leen o escriben archivos, tendríamos que modificar la clase FileManager, lo que viola el principio de OCP.

Con la refactorización del código, afirmamos que FileManager ahora depende de las interfaces IFileReader e IFileWriter, en lugar de las implementaciones concretas. Esto sigue el principio de Inversión de Dependencias (DIP). Además, FileManager ahora tiene una sola responsabilidad: coordinar las operaciones de lectura y escritura de archivos, lo que respeta mejor el Principio de Responsabilidad Única (SRP).

- **Interfaces y Clases Implementadas**:

**IFileWriter.ts**: Define una interfaz para escribir datos en un archivo. Cualquier clase que implemente esta interfaz debe proporcionar la implementación del método writeFile, que escribe datos en el archivo especificado.

**IFileReader.ts**: Define una interfaz similar para leer datos de un archivo. Las clases que implementan esta interfaz deben proporcionar la implementación del método readFile, que devuelve el contenido de un archivo como una cadena de texto.

**FileWriter.ts**: Es una implementación concreta de la interfaz IFileWriter. Utiliza el módulo fs de Node.js (File System) para escribir datos en un archivo. La existencia del archivo se verifica antes de escribir en él, y se lanza un error si el archivo no existe.

**FileReader.ts**: Es una implementación de IFileReader que también usa el módulo fs para leer el contenido de un archivo. Si ocurre un error durante la lectura, se captura la excepción, se registra un mensaje de error y se devuelve una cadena vacía.

**FileManager.ts**: Es una clase que compone IFileReader y IFileWriter para proporcionar una interfaz unificada para leer y escribir archivos. Esto permite a los usuarios de FileManager leer y escribir archivos sin preocuparse por los detalles de implementación específicos de la lectura o escritura de archivos.

El código propuesto para cada interfaz y clases son los siguientes:

- **_IFileReader.ts_**:

```typescript
export interface IFileReader {
  readFile(filePath: string): string;
}
```

- **_IFileWriter.ts_**:

```typescript
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}
```

- **_FileWriter.ts_**:

```typescript
export class FileWriter implements IFileWriter {
  /**
   * Método que escribe en un fichero.
   * @param filePath Ruta del archivo.
   * @param data Datos a escribir.
   * @returns void
   * @throws Error
   */
  public writeFile(filePath: string, data: string): void {
    // Si el archivo no existe, se lanza un error.
    if (!fs.existsSync(filePath)) {
      throw new Error("El archivo no existe.");
    }
    // Se escribe el archivo.
    fs.writeFileSync(filePath, data, "utf-8");
    console.log("Archivo escrito exitosamente.");
  }
}
```

- **_FileReader.ts_**:

```typescript
export class FileReader implements IFileReader {
  /**
   * Método que lee un fichero.
   * @param filePath Ruta del archivo.
   * @returns string
   */
  public readFile(filePath: string): string {
    // Si el archivo no existe, se lanza un error.
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo:", error.message);
      return "";
    }
  }
}
```

- **_FileManager.ts_**:

```typescript
export class FileManager {
  private fileReader: IFileReader;
  private fileWriter: IFileWriter;

  constructor(reader: IFileReader, writer: IFileWriter) {
    this.fileReader = reader;
    this.fileWriter = writer;
  }

  /**
   * Método que lee un archivo.
   * @param {string} filePath - Ruta del archivo.
   * @returns El contenido del archivo.
   */
  public readFile(filePath: string): string {
    return this.fileReader.readFile(filePath);
  }

  /**
   * Método que escribe en un archivo.
   * @param {string} filePath - Ruta del archivo.
   * @param {string} data - Datos a escribir en el archivo.
   * @returns void
   */
  public writeFile(filePath: string, data: string): void {
    this.fileWriter.writeFile(filePath, data);
  }
}
```

### Ejercicio 4 - Impresoras y escáneres

El código actual viola el Principio de Responsabilidad Única (SRP), ya que las clases Printer, Scanner y PrinterScanner tienen responsabilidades que deberían estar separadas.

Además, también viola el Principio de Segregación de la Interfaz (ISP), ya que la interfaz PrintableScannable obliga a todas las clases que la implementan a tener métodos para imprimir y escanear, incluso si no necesitan ambas funcionalidades.

La refactorización del código aborda de manera efectiva las violaciones de los principios SOLID identificados previamente:

Principio de Responsabilidad Única (SRP): Las interfaces Printable y Scannable definen responsabilidades únicas para imprimir y escanear, respectivamente. Además, las clases Printer, Scanner, y PrinterScanner implementan estas interfaces según las responsabilidades que les corresponden, lo cual asegura que cada clase tiene una única razón para cambiar.

Principio de Segregación de la Interfaz (ISP): Esto se corrige en la refactorización al introducir interfaces más específicas (Printable y Scannable), permitiendo que las implementaciones solo necesiten adherirse a las interfaces que correspondan a las funcionalidades que efectivamente ofrecen. De esta manera, se evita que las clases implementen métodos innecesarios, alineándose con el ISP.

Además, el código refactorizado introduce métodos adicionales (printDuplex y scanColor) en las clases Printer, Scanner, y PrinterScanner, lo cual sugiere una extensión de funcionalidades de manera coherente con las responsabilidades definidas por sus interfaces. Esto demuestra un diseño flexible y extensible que puede evolucionar con requisitos adicionales sin violar los principios SOLID.

- **Interfaces y Clases Implementadas**:

**Printable.ts**: Define una interfaz para operaciones de impresión, siguiendo el Principio de Segregación de la Interfaz (ISP) al no forzar a las clases implementadoras a depender de métodos que no utilizan. Cumple con el Principio de Responsabilidad Única (SRP) al enfocarse únicamente en la responsabilidad de imprimir.

**Scannable.ts**: Define una interfaz para operaciones de escaneo, aplicando el Principio de Segregación de la Interfaz (ISP) al permitir que las clases implementadoras solo tengan que preocuparse por el escaneo. También sigue el Principio de Responsabilidad Única (SRP), limitándose a la acción de escanear.

**Printer.ts**: Es una implementación concreta de Printable, cumpliendo con el Principio de Responsabilidad Única (SRP) al enfocarse solo en la funcionalidad de impresión. Al implementar solo Printable, respeta el Principio de Segregación de la Interfaz (ISP), asegurando que no se fuerce a la clase a implementar métodos irrelevantes para su propósito.

**Scanner.ts**: Es una implementación concreta de Scannable, adherente al Principio de Responsabilidad Única (SRP) al concentrarse únicamente en la funcionalidad de escaneo. Al igual que Printer, cumple con el Principio de Segregación de la Interfaz (ISP) implementando solo las interfaces que corresponden a sus capacidades.

**PrinterScanner.ts**: Implementa tanto Printable como Scannable, demostrando el Principio de Segregación de la Interfaz (ISP) al adherirse a interfaces específicas para cada funcionalidad. Este diseño también sigue el Principio de Responsabilidad Única (SRP) al separar las responsabilidades de impresión y escaneo, a pesar de que la clase maneja ambas. Al utilizar la composición de interfaces, también se alinea con el Principio de Inversión de Dependencia (DIP) al depender de abstracciones y no de clases concretas.

El código propuesto para cada interfaz y clases son los siguientes:

- **_Printable.ts_**:

```typescript
export interface Printable {
  print(): void;
}
```

- **_Scannable.ts_**:

```typescript
export interface Scannable {
  scan(): void;
}
```

- **_Printer.ts_**:

```typescript
export class Printer implements Printable {
  /**
   * Método para imprimir.
   * @returns void
   */
  print(): void {
    console.log("Imprimiendo...");
  }

  /**
   * Método para imprimir en modo dúplex.
   * @returns void
   */
  printDuplex(): void {
    console.log("Imprimiendo a doble cara...");
  }
}
```

- **_Scanner.ts_**:

```typescript
export class Scanner implements Scannable {
  /**
   * Método para escanear.
   * @returns void
   */
  scan(): void {
    console.log("Escaneando...");
  }

  /**
   * Método para escanear en color.
   * @returns void
   */
  scanColor(): void {
    console.log("Escaneando en color...");
  }
}
```

- **_PrinterScanner.ts_**:

```typescript
export class PrinterScanner implements Printable, Scannable {
  /**
   * Método para imprimir.
   * @returns void
   */
  print(): void {
    console.log("Imprimiendo...");
  }

  /**
   * Método para imprimir en modo dúplex.
   * @returns void
   */
  printDuplex(): void {
    console.log("Imprimiendo a doble cara...");
  }

  /**
   * Método para escanear.
   * @returns void
   */
  scan(): void {
    console.log("Escaneando...");
  }

  /**
   * Método para escanear en color.
   * @returns void
   */
  scanColor(): void {
    console.log("Escaneando en color...");
  }
}
```

### Ejercicio 5 - Servicio de mensajería

El código del enunciado viola principalmente el Principio de Inversión de Dependencias (Dependency Inversion Principle) de SOLID, que establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles; los detalles deben depender de las abstracciones. En este caso, la clase Notifier depende directamente de implementaciones concretas (EmailService y ShortMessageService) en lugar de abstracciones.

Para cumplir con los principios SOLID, especialmente el de Inversión de Dependencia, se puede introducir una interfaz o una clase abstracta que defina el contrato para los servicios de notificación. Así, EmailService y ShortMessageService implementarían esta interfaz. Esto no solo soluciona el problema de la dependencia directa, sino que también hace que el código sea más extensible y mantenible, alineándose con el Principio Abierto/Cerrado (las clases deben estar abiertas para extensión, pero cerradas para modificación).

- **Interfaces y Clases Implementadas**:

- **_NotificationService.ts_**: Define una interfaz para servicios de notificación. Cualquier servicio que implemente esta interfaz debe proporcionar una implementación del método notify. Con esto logramos respetar el Principio de Responsabilidad Única (SRP) pues esta interfaz asegura que cada servicio de notificación tenga una única responsabilidad, que es enviar una notificación. Asimismo, el Principio de Segregación de la Interfaz (ISP) es respetado porque se define una interfaz específica para la notificación, se asegura que las clases implementadoras no necesiten conocer o implementar métodos que no sean relevantes para el servicio de notificación. Por último, respeta también el Principio de Inversión de Dependencia (DIP) porque se promueve la dependencia en abstracciones, no en concreciones, permitiendo la flexibilidad y facilitando la integración de nuevos tipos de servicios de notificación sin modificar el código existente.

- **_Email.ts_**: Define el servicio de notificación por Email que implementa la interfaz NotificationService. Con esta clase se logra respetar el Principio de Responsabilidad Única (SRP) porque esta clase tiene una única razón para cambiar, que es la manera en que se envían las notificaciones por email. Se logra respetar también el Principio de Abierto/Cerrado (OCP) pues Email es un ejemplo de cómo el sistema puede extenderse (para soportar nuevos tipos de notificaciones) sin necesidad de modificar el código existente. Por último, el Principio de Inversión de Dependencia (DIP) debido a que al implementar la interfaz NotificationService, Email demuestra la dependencia de abstracciones en lugar de concreciones.

- **_SMS.ts_**: Define el servicio de notificación por SMS que implementa la interfaz NotificationService. Respetamos el Principio de Responsabilidad Única (SRP), Principio de Abierto/Cerrado (OCP) yPrincipio de Inversión de Dependencia (DIP)

- **_Notifier.ts_**: Gestiona el envío de notificaciones utilizando un servicio de notificación. Además respeta el Principio de Responsabilidad Única (SRP) pues tiene una única responsabilidad, que es enviar notificaciones a través del servicio de notificación configurado. También respeta el Principio de Inversión de Dependencia (DIP) porque depende de la abstracción NotificationService para enviar notificaciones, esta clase demuestra el DIP, permitiendo que el tipo de servicio de notificación pueda variar sin cambiar el código de Notifier.

El código propuesto para cada interfaz y clases son los siguientes:

- **_NotificationService.ts_**:

```typescript
export interface NotificationService {
  notify(message: string): void;
}
```

- **_Email.ts_**:

```typescript
export class Email implements NotificationService {
  /**
   * Método que notifica un mensaje.
   * @param message Mensaje a notificar.
   * @returns void
   */
  notify(message: string): void {
    // Se notifica el mensaje por email.
    console.log(`Enviando notificación via Email: ${message}`);
  }
}
```

- **_SMS.ts_**:

```typescript
export class SMS implements NotificationService {
  /**
   * Método que notifica un mensaje.
   * @param message Mensaje a notificar.
   * @returns void
   */
  notify(message: string): void {
    // Se notifica el mensaje por SMS.
    console.log(`Enviando notificación via SMS: ${message}`);
  }
}
```

- **_Notifier.ts_**:

```typescript
export class Notifier {
  private notificationService: NotificationService;

  constructor(notificationSVC: NotificationService) {
    this.notificationService = notificationSVC;
  }

  /**
   * Método que envía una notificación.
   * @param {string} message - Mensaje a notificar.
   * @returns void
   */
  sendNotification(message: string): void {
    // Se notifica el mensaje por el servicio de notificaciones.
    this.notificationService.notify(message);
  }
}
```

# 4. Conclusión
El proyecto ha representado una experiencia muy buena para profundizar en las técnicas avanzadas de programación orientada a objetos y en la aplicación de los principios SOLID mediante el uso de TypeScript. Al enfrentar los retos de diseño propuestos y desarrollo de sistemas de información complejos, hemos obtenido una comprensión más detallada de cómo la orientación a objetos y la adherencia a principios de diseño SOLID facilitan la creación de software robusto y flexible.

Una de las lecciones clave ha sido la eficacia de los principios SOLID para mejorar la calidad del software. La adopción de estos principios nos ha permitido diseñar sistemas que son más fáciles de entender, extender y mantener. Específicamente, la segregación de interfaces y la inversión de dependencias han promovido un acoplamiento bajo entre componentes, lo que resulta en una mayor flexibilidad y facilidad de prueba del sistema.

La práctica de encapsular comportamientos y estados dentro de clases y la utilización de interfaces han sido fundamentales para lograr una modularidad efectiva. Esto no solo ha facilitado la reutilización de componentes en diferentes contextos dentro del proyecto, sino que también en el ámbito de trabajo en equipo, se pudo preparar el terreno para una colaboración eficiente entre miembros del equipo, permitiendo que cada parte del sistema evolucione de manera independiente sin afectar negativamente al resto.

Además, el enfoque en la programación genérica ha permitido desarrollar soluciones más abstractas y reutilizables, demostrando la versatilidad de TypeScript para manejar diferentes tipos de datos de manera segura en tiempo de compilación. Este enfoque ha sido particularmente valioso para garantizar la integridad y la seguridad del tipo a lo largo de la aplicación, reduciendo la posibilidad de errores en tiempo de ejecución.

Concluimos diciendo que este proyecto ha subrayado la importancia de aplicar principios de diseño orientado a objetos y SOLID en el desarrollo de software. A través de la implementación de objetos, clases, interfaces y genéricos en TypeScript, hemos logrado crear un sistema que no solo satisface los requisitos funcionales sino que también se destaca por su claridad, mantenibilidad y capacidad de adaptación a futuras necesidades. 

# 5. Referencias Bibliográficas
[_SOLID Principles_](https://samueleresca.net/solid-principles-using-typescript/)  
[_TypeScript Documentation_](https://www.typescriptlang.org/docs/)
