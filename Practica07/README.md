# Práctica 7 - Modelo de datos de un sistema de información que permite gestionar una tienda de muebles

---

**Integrantes del grupo:** Alba Pérez Rodríguez

**Integrantes del grupo:** Tomás Javes Tommasone

**Integrantes del grupo:** Guillermo Plaza Gayan


**Fecha:** 12/03/2024

**Estudios:** Ingeniería Informática

**Asignatura:** Desarrollo en Sistemas Informáticos

**Profesor:** Eduardo Manuel Segredo González

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/coveralls.yml)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/node.js.yml)

[![Sonarcloud](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/sonarcloud.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/sonarcloud.yml)

---

# Índice

1. [Introducción](#1-introducción)
2. [Objetivos](#2-objetivos)
3. [Antes de empezar](#3-antes-de-empezar)
4. [Configuración de Istambul y coveralls](#4-configuracion-de-istambul-y-coveralls)
5. [Principios SOLID](#5-principios-solid)
6. [GitHub Actions](#github-actions)
7. [SonarCloud](#sonarcloud)
8. [Ejercicio](#8-ejercicio)
9. [Conclusiones](#9-conclusiones)

---


# 1. Introducción:
El presente informe detalla el proceso de desarrollo de una aplicación de gestión de muebles, diseñada como parte de un proyecto universitario. Esta aplicación tiene como objetivo facilitar la gestión integral de clientes, proveedores, muebles y el stock de una empresa del sector mobiliario. Se ha implementado utilizando TypeScript y se han empleado las bibliotecas inquirer y lowdb para la interfaz de línea de comandos y la gestión de la base de datos, respectivamente.

# 2. Objetivos:
1. El objetivo de esta práctica consiste en diseñar un sistema de gestión para una tienda de muebles mediante un enfoque orientado a objetos. Esto implica la creación de un modelo de datos que contemple entidades como muebles, proveedores y clientes, junto con sus respectivos atributos.

2. Se busca desarrollar un sistema interactivo que permita agregar, eliminar y modificar información sobre muebles, proveedores y clientes a través de una interfaz de línea de comandos.

3. Además, se requiere la implementación de una clase denominada `Stock`, la cual facilitará la gestión del inventario de muebles, registrará transacciones como ventas, devoluciones, compras y devoluciones a proveedores, y generará informes sobre el estado del inventario, ventas, gastos y el historial de transacciones.

4. Se enfatiza la utilización de módulos como Inquirer.js y Lowdb para la interacción con la línea de comandos y el almacenamiento de datos, así como la adopción de principios SOLID y una metodología de desarrollo dirigido por pruebas/comportamiento para garantizar la calidad del software.

5. El resultado final será documentado en un informe detallado, explicando las decisiones de diseño tomadas en el sistema, incluyendo el modelo de datos, la interacción con la línea de comandos, la implementación de la clase `Stock` y la metodología de desarrollo utilizada, el cual se entregará como una página de GitHub asociada al repositorio de la práctica.


# 3. Antes de empezar
Antes de comenzar con la resolución de ejercicios de la práctica deberemos poner a punto nuestro entorno de trabajo. Para ello, lo haremos siguiendo los siguientes pasos:

## Creación de directorios.
Crearemos los siguientes directorios para nuestro proyecto:

  - **src/:** Este directorio almacenará los archivos fuente de TypeScript. En este caso, el código fuente escrito en TypeScript se encuentra en el directorio src.

  - **dist/:** Este directorio se utilizará para almacenar los archivos JavaScript generados por el compilador de TypeScript. La compilación de TypeScript produce código JavaScript, y este código se guarda en el directorio dist.

## Configuración para llevar a cabo la práctica:
Necesitaremo inicializar el proyecto con ***npm***, para ello seguiremos los pasos siguientes:

**Paso 1:**

Utilizamos el comando ***npm init --yes** para generar un archivo **package.json**. Este archivo contiene la información del proyecto, incluidas las dependencias y scripts.

```bash 
{
  "name": "ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-albaaperez",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\"",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
}

``` 

**Paso 2:**

Instalación del Compilador de TypeScript. Se instala el compilador de TypeScript globalmente con el comando ***npm install --global typescript***.

**Paso 3:**

Configuración del Compilador con tsconfig.json. Se crea un archivo de configuración llamado **tsconfig.json** en la raíz del proyecto. Este archivo especifica opciones para el compilador de TypeScript, como el directorio de entrada **(rootDir)** y el directorio de salida **(outDir)**.

```bash
{
  "exclude": [
    "./tests",
    "./node_modules",
    "./dist"
  ],
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "declaration": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true
  }
}
```
**Paso 4:**

Instalación de tsc-watch para Compilación Automática. Se instala tsc-watch como una dependencia de desarrollo con el comando **npm install --save-dev tsc-watch**.

**Paso 5:** 

Modificamos la sección de scripts en **package.json** para utilizar tsc-watch y ejecutar el código compilado solo si la compilación es exitosa.

```bash
"scripts": 
    "start": "tsc-watch --onSuccess \"node dist/index.js\""
```

**Paso 6:**
Ejecutamos el comando **npm start**, que utiliza **tsc-watch** para observar cambios en los archivos de origen y compilar automáticamente.


## Instalación de ESlint.
ESLint, un linter muy conocido para trabajar con JavaScript y TypeScript. Para instalarlo haremos lo siguiente:

1. **Instalación de ESLint**:
  - Instalamos el ESLint de manera global utilizando el comando ***npm i -g eslint***.
  - Verificamos la instalación con **eslint --version**.

2. **Configuración de ESLint**:
  - Iniciamos la configuración de ESLint con el comando ***eslint --init***.
  - Durante la configuración, se elige el tipo de proyecto, el sistema de módulos, el framework (en este caso, ninguno), si se utiliza TypeScript, el entorno de ejecución (Node.js), el formato del archivo de configuración (JSON), y se instalan las dependencias necesarias.

3. **Archivo de Configuración de ESLint**:
  - Configuraremos el archivo de configuración **.eslintrc.json**, que indica el entorno, las extensiones recomendadas (como eslint:recommended y plugin:@typescript-eslint/recommended), el parser de TypeScript, y la configuración de reglas. Se verá de la siguiente manera:
  ```bash
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "require-jsdoc": "off",
        "valid-jsdoc": "off"
    }
  ```

4. **Personalización de Reglas**
  - Editamos el archivo de configuración para activar, desactivar o personalizar reglas específicas según las necesidades del proyecto.

5. **Ignorar Archivos:**
  - Creamos un archivo **.eslintignore** para especificar qué archivos y directorios deben ser ignorados por ESLint.

6. **Ejecución de ESLint:**
  - Ejecutamos ESLint en el proyecto con el comando **eslint .**, y se muestra cómo se informan los problemas detectados.

7. **Formateo del Código con Prettier:**
  - Instalamos Prettier y eslint-config-prettier para desactivar reglas de formato en ESLint.
  - Configuramos el ESLint para integrarse con Prettier añadiendo "prettier" a la lista de extensiones en el archivo de configuración.
  - Se crea un archivo de configuración de Prettier (.prettierrc.json) y un archivo de ignorar (.prettierignore).

---

## Typedoc.
***TypeDoc*** es una herramienta de generación de documentación para proyectos TypeScript. Proporciona una forma eficiente de documentar el código fuente y generar automáticamente documentación en formato HTML. A continuación, se presenta una breve introducción a TypeDoc y cómo se puede utilizar en el contexto de esta práctica.

### Instalación de la herramienta.
Podemos instalar TypeDoc utilizando ***npm*** (Node Package Manager). Abrimos la terminal y ejecutamos el siguiente comando:

```bash
npm install --save-dev typedoc
```
Este comando instalará TypeDoc como una dependencia de desarrollo en el proyecto.

### Uso básico.
Para generar documentación con TypeDoc, simplemente ejecutamos el siguiente comando en la terminal desde el directorio de su proyecto:

```bash
npx typedoc
```
Otra forma de hacerlo, es en el compilador, cuyo fichero es ***package.json***. Aquí especificaremos la siguiente línea en el apartado de **scripts**:

```bash
"doc": "typedoc"
```

### Configuración.
**TypeDoc** puede configurarse utilizando un archivo ***typedoc.json*** en la raíz del proyecto. Aquí podemos especificar la configuración específica que deseamos para la documentación. 

**Paso 1: Crear el archivo typedoc.json:**

En la raíz de nuestro proyecto crearemos a mano un archivo denominado **typedoc.json**.
Este es un archivo de configuración para TypeDoc.

**Paso 2: Configuración específica:**

Una vez creado el fichero, dentro escribiremos lo siguiente:

```bash
{
  "entryPoints": [
    "./src/**/*.ts
  ],
  "out": "./docs",

}
```
Este archivo de configuración le dice a TypeDoc qué archivos deben considerarse para la **generación de documentación**, en este caso, todos los ficheros de los ejercicios realizados y, **dónde debe colocar esa documentación generada**, en nuestro directorio /docs. Cuando ejecutemos **npx typedoc** desde la terminal, TypeDoc utilizará esta configuración para procesar los archivos de entrada y generar la documentación en el directorio especificado.

Configurado TypeDoc podremos ejecutarlo desde la terminal con el comando:

```bash
npm run doc
```

---
## mocha y chai
***Mocha y Chai*** son herramientas populares para realizar pruebas unitarias en proyectos JavaScript y TypeScript. Mocha es un marco de ejecución de pruebas y Chai es una biblioteca de aserciones que se integra bien con Mocha. Aquí hay una breve introducción sobre cómo comenzar con Mocha y Chai.

### Instalación de las herramientas.
En primer lugar, instalaremos Mocha y Chai como dependencias de desarrollo en nuestro proyecto con el comando:

```bash
 npm install --save-dev mocha chai@4.4.1 @types/mocha @types/chai ts-node
```
  - mocha: El marco de ejecución de pruebas.
  - chai: Una biblioteca de aserciones. Le especificaremos la versión anterior para trabajar de forma correcta con chai.
  - @types/mocha y @types/chai: Tipos TypeScript para Mocha y Chai.
  - ts-node: Permite ejecutar archivos TypeScript directamente en Node.js.


Hecho esto, crearemos un fichero denominado ***.mocharc.json***. Este fichero se utiliza para especificar configuraciones personalizadas para la ejecución de pruebas con Mocha.
Este contendrá lo siguiente:

```bash
{
  "extension": ["ts"],
  "spec": "tests/**/*.spec.ts",
  "require": "ts-node/register"
}
```
  - **"extension"** --> Mocha reconocerá los archivos con la extensión .ts como archivos de prueba TypeScript.
  - **"spec"** --> Mocha buscará los archivos de prueba en la carpeta tests y sus subdirectorios (**/) que tengan la extensión .spec.ts.
  - **"require"** --> antes de ejecutar las pruebas, se debe registrar el módulo ts-node para permitir la ejecución de archivos TypeScript directamente en Mocha.

### Estructura de las pruebas.
En nuestro directorio raíz crearemos un nuevo directorio denominado **/tests** que contendrá nuestros archivos para las pruebas. Nuestros directorios deberán quedar de una forma similar a esta:

```bash
/proyecto
  /src
    /EJERCICIO1
      - interfaz.ts
      - clase.ts
      - index.ts
    /EJERCICIO2
      - clase1.ts
      - clase2.ts
      - index.ts
    ...
  /test
    /EJERCICIO1
      - interfaz.spec.ts
      - clase.spec.ts
      - index.spec.ts
    /EJERCICIO2
      - clase1.spec.ts
      - clase2.spec.ts
      - index.spec.ts
    ...

```

### Escribir las pruebas.
Por último, lo que deberemos hacer será escribir las pruebas en esos ficheros que vamos a crear terminados en **.spec.ts**. La importancion de mocha y chai en nuestro archivos de prueba serán:

```bash
import 'mocha';
import {expect} from 'chai';
import { mcd } from '../src/EJERCICIO1';
```
  - Utilizamos **describe** para agrupar las pruebas relacionadas
  - Cada prueba se crea con **it**.
  - Usamos las aserciones de Chai, por ejemplo, **expect(result).to.be.undefined.**

## Subir archivos 
Una vez hayamos terminado de realizar los ejercicios, procederemos a subirlos a nuestro repositorio de github mediante:

  - **git add .**
  - **git commit -m " "**
  - **git push**

Pero antes de hacer esto deberemos crear un fichero ***.gitignore** donde introduciremos lo siguiente:
```bash
node_modules
dist
package-lock.json
```
El archivo **.gitignore** se utiliza para especificar archivos y directorios que no deben ser incluidos en el control de versiones de Git. En este caso, estos archivos serán ignorados a la hora de subirlos a GitHub.

---

# 4. Configuracion de Istanbul y coveralls.

### ¿Que son?
En esta sección, detallaremos la configuración necesaria para utilizar **Istanbul y Coveralls** en nuestro proyecto. Estas herramientas son valiosas para evaluar la cobertura de nuestro código fuente y realizar un seguimiento de la misma.

### Instalación

Primero, realizaremos la instalación de los mismos con los siguientes comandos:
```bash
npm install --save-dev nyc coveralls
```
En nuestro fichero **package.json** detallaremos lo siguiente para terminar de configurar Istanbul y coveralls:

```bash 
"test": "nyc mocha",
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output",
```

### Inicio de sesión en Coveralls para el cubrimiento del código

Para realizar esto, nos deberemos meter en la página de [Coveralls](#https://coveralls.io/).
Dentro de esta iniciaremos sesión con nuestras credenciales de GitHub.
Si deseamos agregar un repositorio para el cubrimiento de nuestro código este deberá ser de visibilidad pública.  
Lo agregaremos dándole a **ADD REPOS** y una vez elegido el repositorio copiaremos el token.
Por último, en nuestro directorio raíz crearemos el **.coveralls.yml** que contendrá el token de nuestro repositorio:

```bash
repo_token: xbwn8u45rB3Q44dE2hFjQT0kbhDmRPDuu
```

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-ALBAAPEREZ/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-ALBAAPEREZ?branch=main)

---

# 5. Principios SOLID.

En el desarrollo de software, ***los Principios SOLID*** son un conjunto de principios de diseño orientados a la creación de sistemas más mantenibles, flexibles y escalables. Estos principios fueron introducidos por el ingeniero de software Robert C. Martin y representan un conjunto de directrices que buscan mejorar la calidad del código y facilitar su mantenimiento a lo largo del tiempo.

## ¿Cuáles son?

Los Principios SOLID son un acrónimo que representa los siguientes principios:

### S - Principio de Responsabilidad Única (Single Responsibility Principle - SRP)

El **SRP** establece que una clase debería tener una única razón para cambiar. En otras palabras, una clase debería tener una **única responsabilidad**, una única función.

### O - Principio de Abierto/Cerrado (Open/Closed Principle - OCP)

El **OCP** propone que una entidad de software, como una clase, debe estar **abierta para la extensión pero cerrada para la modificación**. Se busca lograr esto mediante la creación de código que pueda ser extendido sin modificar su funcionalidad existente.

### L - Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP)

El **LSP** establece que los objetos de una clase base deben **poder ser sustituidos por objetos de sus clases derivadas** sin afectar la corrección del programa.

### I - Principio de Segregación de Interfaces (Interface Segregation Principle - ISP)

El **ISP** propone que una clase no debería verse obligada a implementar interfaces que no utiliza. En lugar de interfaces generales, se prefieren interfaces más específicas.

### D - Principio de Inversión de Dependencia (Dependency Inversion Principle - DIP)

El **DIP** propone que las dependencias de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.

## Importancia y Beneficios

La aplicación de los Principios SOLID en el desarrollo de software tiene varios beneficios, entre ellos:

- **Mantenibilidad:** Facilitan el mantenimiento del código a lo largo del tiempo.
- **Escalabilidad:** Permiten construir sistemas más flexibles y escalables.
- **Reusabilidad:** Favorecen la reutilización de código y componentes.
- **Legibilidad:** Mejoran la claridad y la comprensión del código.


En esta práctica, se presentarán ejemplos específicos de código que ilustrarán la aplicación práctica de los Principios SOLID en nuestro proyecto. Veremos cómo estos principios se traducen en un código más limpio, modular y fácil de entender.

A lo largo de la revisión de los ejercicios, se destacarán las áreas donde los Principios SOLID han sido implementados con éxito, subrayando la importancia de seguir estas directrices para lograr un diseño de software robusto y sostenible.

---

# 6. Githuub Actions.

## ¿Qué es?
GitHub Actions es una característica integrada en GitHub que te permite automatizar, personalizar y ejecutar flujos de trabajo directamente desde tu repositorio. Con GitHub Actions, puedes crear flujos de trabajo que respondan a eventos específicos en tu repositorio, como solicitudes de extracción, confirmaciones de código, creación de problemas y mucho más.

## Caracteristicas
### Automatización de tareas
Con GitHub Actions, puedes automatizar tareas repetitivas, como pruebas de código, compilaciones, despliegues, notificaciones y más.

### Personalización
Los flujos de trabajo de GitHub Actions son altamente personalizables. Puedes crear flujos de trabajo específicos para tus necesidades utilizando una variedad de acciones predefinidas o creando tus propias acciones personalizadas.

### Eventos del repositorio
Los flujos de trabajo pueden activarse en respuesta a una amplia gama de eventos en tu repositorio, lo que te permite ejecutar acciones específicas en función de las acciones de los colaboradores, el estado del código y otros factores.

### Integración con el ecosistema de GitHub
GitHub Actions se integra perfectamente con el ecosistema de GitHub, lo que te permite acceder a tus repositorios, problemas, solicitudes de extracción y otros datos directamente desde tus flujos de trabajo.


## Configuración
Para la configuración de las Github Actions deberemos meternos en el apartado de nuestro repositorio de **Actions** y seleccionar **Node.js** como flujo de trabajo. 
Se creará un archivo un archivo denominado node.js.yml que contendrá:
```typescript
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x, 18.x, 19.x, 20.x, 21.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm test
  ```

  Haremos un git commmit y comenzaremos a usar las actions. Este se correposnde con los tests, para el coveralls deberemos crear el archivo coveralls.yml y poner lo siguiente: 
  ```typescript
  # This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Coveralls

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Cloning repo
      uses: actions/checkout@v4
    - name: Use Node.js 21.x
      uses: actions/setup-node@v4
      with:
        node-version: 21.x
    - name: Installing dependencies
      run: npm ci
    - name: Generating coverage information
      run: npm run coverage
    - name: Coveralls GitHub Action
      uses: coverallsapp/github-action@v2.2.3
      with:
        github-token: ${{ secrets.GITHUB_TOKEN }}
  ```
  
  Hecho esto, cada vez que hagamos un git commit y un git push nos saldrán las Acciones.


# 7. Sonarcloud

### ¿Qué es SonarCloud?
SonarCloud es una plataforma de análisis estático de código diseñada para mejorar la calidad del software. Utiliza técnicas de análisis estático para identificar y reportar problemas de calidad del código, como errores, vulnerabilidades de seguridad, malas prácticas y duplicación de código.

### Características de SonarCloud:

- **Análisis de código estático:** SonarCloud examina el código fuente de tu proyecto en busca de posibles problemas de calidad, proporcionando una visión detallada de la salud del código.

- **Integración continua:** Puedes integrar SonarCloud en tu proceso de integración continua para automatizar el análisis del código cada vez que se realice un cambio, lo que te permite detectar problemas de calidad de forma proactiva.

- **Métricas y seguimiento:** SonarCloud ofrece métricas detalladas sobre la calidad del código y su evolución a lo largo del tiempo, lo que te permite realizar un seguimiento del progreso y tomar medidas para mejorar la calidad del código.

- **Comentarios y recomendaciones:** SonarCloud proporciona comentarios detallados y recomendaciones para cada problema identificado, ayudándote a comprender la naturaleza del problema y cómo solucionarlo de manera efectiva.

- **Integración con GitHub:** SonarCloud se integra estrechamente con GitHub, lo que te permite ver los resultados del análisis directamente en tus solicitudes de extracción y gestionar la calidad del código desde el mismo entorno en el que trabajas.



---

# 8. Ejercicio 


1. **Diseño de la Base de Datos:**
Se ha diseñado una estructura de base de datos flexible y escalable para almacenar la información relevante del negocio. La base de datos se ha implementado utilizando lowdb, una base de datos basada en archivos JSON que facilita el almacenamiento y manipulación de datos. Se han definido las siguientes entidades principales:

**Clientes**: Contiene información sobre los clientes, incluyendo su nombre, contacto y dirección.

``` ts
export interface Customer {
  id: number;
  name: string;
  contact: string;
  address: string;
}
```

**Proveedores**: Almacena los detalles de los proveedores, como su nombre, contacto y dirección.

``` ts
export interface Provider {
  id: number;
  name: string;
  contact: string;
  address: string;
}
```

**Muebles**: Registra información detallada sobre los muebles disponibles, como nombre, descripción, material, dimensiones, precio y cantidad en stock.

``` ts
export interface Furniture {
  id: number;
  name: string;
  description: string;
  material: string;
  dimensions: string;
  price: number;
}
```

**Stock**: Gestiona el inventario de muebles, incluyendo transacciones de compra y venta, así como el seguimiento de la cantidad disponible de cada artículo.

primero, creo la clase stock, cuyos atributos serán un map que contendrá los muebles según su nombre y un vector de transacciones donde se guardarán todas las transacciones hechas durante la sesión.

``` ts
export class Stock {

  private furniturestock: Map<string, Furniture> = new Map<string, Furniture>;

  private transactionshistory: Transaction[] = [];

  constructor(items: Furniture[]) {
    items.forEach((item) => {
      this.furniturestock.set(item.name, item)
    })
  }

```

Implementamos funciones básicas para meter muebles al map a la vez que se añade la transacción. También lo hacemos para eliminar muebles.

``` ts

  addItem(item: Furniture, quantity: number): void {
    this.furniturestock.set(item.name, item);
    const id: number = Math.floor(Math.random() * 1000000);
    const date: Date = new Date();
    const price: number = item.price;
    const transactiontype: TransactionType = "Compra";
    const furniture: Furniture = item
    this.transactionshistory.push({
      id,
      date,
      price,
      quantity,
      transactiontype,
      furniture
    });
  }
  
  removeItem(item: Furniture, quantity: number): void {
    this.furniturestock.set(item.name, item)
    const id: number = Math.floor(Math.random() * 1000000);
    const date: Date = new Date();
    const price: number = item.price;
    const transactiontype: TransactionType = "Venta";
    const furniture: Furniture = item
    this.transactionshistory.push({
      id,
      date, 
      price, 
      quantity, 
      transactiontype, 
      furniture
    })
  }

```

A partir de ahora se muestran las funciones las cuales son específicas del stock como mostrar todo el stock, mostrar la información de un mueble en específico, enseñar las transacciones o mostrar información sobre el histórico de transacciones

``` ts
  printStock() {
    this.furniturestock.forEach((item) => {
      console.log(item.name + ".............................." + item.quantity)
    });
  }

  specificItemInfo(name: string): void {
    const item: Furniture = this.furniturestock.get(name) as Furniture;
    console.log()
    console.log("Objeto .............................. " + item.name);
    console.log("Material ............................ " + item.material);
    console.log("Precio .............................. " + item.price);
    console.log("Dimensiones ......................... " + item.dimensions);
    console.log("Cantidad en stock ................... " + item.quantity);
    console.log("Más detalles ........................ " + item.description);
    console.log("Id del objeto ....................... " + item.id);
    console.log()
  }

  printTransactions() {
    this.transactionshistory.forEach(transaction => {
      console.log();
      console.log("Id de la transacción .............. " + transaction.id);
      console.log("Fecha de la transacción ........... " + transaction.date);
      console.log("Precio ............................ " + transaction.price);
      console.log("Objeto ............................ " + transaction.furniture.name);
      console.log("Cantidad de objetos ............... " + transaction.quantity);
      console.log("Tipo de transacción ............... " + transaction.transactiontype);
      console.log();
    });
  }

  getHistoricInfo(dias: number) {
    const miliseconds = dias * 24 * 60 * 60 * 1000;
    const thisday: Date = new Date();
    let fromday: Date = new Date(thisday.getTime() - miliseconds);
    let profit: number = 0;
    let losses: number = 0;
    let mostselled: Map<string, [Furniture, number]> = new Map<string, [Furniture, number]>;
    
    this.transactionshistory.forEach(transaction => {
      if (transaction.date >= fromday) {
        console.log();
        console.log("Id de la transacción ............ " + transaction.id);
        console.log("Fecha de la transacción ......... " + transaction.date);
        console.log("Precio .......................... " + transaction.price);
        console.log("Objeto .......................... " + transaction.furniture.name);
        console.log("Cantidad de objetos ............. " + transaction.quantity);
        console.log("Tipo de transacción ............. " + transaction.transactiontype);
        console.log();
        
        if (transaction.transactiontype == "Venta") {
          profit = profit + transaction.price;
          if (!mostselled.has(transaction.furniture.name)) {
            mostselled.set(transaction.furniture.name, [transaction.furniture, 1]);
          }
        } else if (transaction.transactiontype == "Compra") {
          losses = losses + transaction.price;
        }
      }
    })
    console.log();
    console.log("Ganancias ....................... " + profit);
    console.log("Pérdidas ........................ " + losses);
    console.log("Balance ........................ " + (profit - losses));
    console.log("Estadísticas de los objetos: ");
    
    mostselled.forEach((value, index) => {
      console.log()
      console.log("Nombre ........................ " + index);
      console.log("ventas ........................ " + value[1]);
    }) 
    console.log();
  }
}
```

2. **Implementación de la Interfaz de Usuario**:
La interfaz de usuario se ha desarrollado utilizando la biblioteca inquirer, que permite una interacción amigable a través de la línea de comandos. Se han diseñado distintas opciones de menú para realizar operaciones de gestión y consulta en la base de datos. Cada opción del menú desencadena una serie de acciones específicas, como agregar, eliminar, buscar o consultar información detallada.

**Ejemplo**:

``` ts
async function mainMenu() {
  // Menú principal
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción:',
    choices: [
      'Gestionar los clientes',
      'Gestionar los muebles',
      'Gestionar los proveedores',
      'Consultar el stock',
      'Salir'
    ],
  });
  // Dependiendo de la opción seleccionada, llamamos a la función correspondiente
  switch (answer.action) {
    case 'Gestionar los clientes':
      await manageCustomers();
      break;
    case 'Gestionar los muebles':
      await manageFurniture();
      break;
    case 'Gestionar los proveedores':
      await manageProviders();
      break;
    case 'Consultar el stock':
      await ConsultarStock();
      break;
    case 'Salir':
      console.log('Saliendo...');
      process.exit();
  }
  await mainMenu();
}
```

Como podemos ver, se da al usuario a elegir entre opciones determinadas y, según la opción escogida por consola, llamamos a una función u otra.

3. **Gestión de Clientes**:
Para la gestión de clientes, se han implementado funciones que permiten agregar, eliminar y buscar clientes en la base de datos. Los usuarios pueden ingresar los detalles del cliente, como nombre, contacto y dirección, y realizar acciones según las necesidades del negocio.

``` ts
async function addCustomer() {
  const customer = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del cliente:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del cliente:',
    },
    {
      name: 'contact',
      message: 'Ingrese el contacto del cliente:',
    },
    {
      name: 'address',
      message: 'Ingrese la dirección del cliente:',
    },
  ]);
  (db.get('clients')as any).push(customer).write();
  console.log(`Cliente agregado con éxito.`);
}

async function deleteCustomer() {
  db.read();
  const clients: Customer[] = db.get('clients').value();
  if (clients.length === 0) {
    console.log('No hay clientes para eliminar.');
    return;
  }
  const clientNames = clients.map(client => client.name);
  const { clientNameToDelete } = await inquirer.prompt({
    name: 'clientNameToDelete',
    type: 'list',
    choices: clientNames,
    message: 'Seleccione el cliente a eliminar:'
  });
  const updatedClients = clients.filter(client => client.name !== clientNameToDelete);
  db.set('clients', updatedClients).write();
  console.log(`Cliente eliminado con éxito.`);
}
```

Además de estas funciones encontramos más funciones para buscar clientes en la base de datos o manejar los clientes por consola

4. **Gestión de Muebles**:
La gestión de muebles sigue un proceso similar, con funciones para agregar, eliminar y buscar muebles en la base de datos. Además, se ha incluido una función para consultar información detallada sobre un mueble específico, proporcionando detalles como descripción, material, precio y cantidad en stock.

``` ts
async function addFurniture() {
  const furniture = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del mueble:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del mueble:',
    },
    {
      name: 'description',
      message: 'Ingrese la descripción del mueble:',
    },
    {
      name: 'material',
      message: 'Ingrese el material del mueble:',
    },
    {
      name: 'dimensions',
      message: 'Ingrese las dimensiones del mueble:',
    },
    {
      name: 'price',
      type: 'number',
      message: 'Ingrese el precio del mueble:',
    },
    {
      name: 'quantity',
      type: 'number',
      message: 'Ingrese cuantos quiere añadir',
    }
  ]);
  (db.get('furniture') as any).push(furniture).write();
  stock.addItem(furniture, furniture.quantity)
  console.log(`Mueble agregado con éxito.`);
}


async function deleteFurniture() {
  db.read();
  const furnitureList: Furniture[] = db.get('furniture').value();
  if (!furnitureList.length) {
    console.log('No hay muebles para eliminar.');
    return;
  }
  let furnitureNames = furnitureList.map((furniture) => furniture.name);
  furnitureNames = furnitureNames.filter((item, index) => furnitureNames.indexOf(item) === index);
  const deletefurnitureinfo = await inquirer.prompt([
    {
    type: 'list',
    name: 'furnitureNameToDelete',
    choices: furnitureNames,
    message: 'Seleccione el mueble a eliminar:'
    },
    {
      type: 'number',
      name: 'quantity',
      message: '¿Cuántos desea eliminar?'
    }
  ]);
  const updatedFurnitureList = [...furnitureList];
  const furnituretodelete: Furniture = updatedFurnitureList.find(value => value.name == deletefurnitureinfo.furnitureNameToDelete) as Furniture;
  const rest = furnituretodelete.quantity - deletefurnitureinfo.quantity;
  updatedFurnitureList.forEach((item, index) => {
    if (item === furnituretodelete) {
      item.quantity == 0 ? updatedFurnitureList.splice(index, 1) : item.quantity = rest;
    }
  });
  db.set('furniture', updatedFurnitureList).write();
  stock.removeItem(furnituretodelete, rest);
  console.log(`Mueble eliminado con éxito.`);
}
```

Igual que en apartado anterior, también contamos con funciones para buscar muebles en la base de datos y para manejar los muebles desde la consola

5. **Gestión de Proveedores**:
Se han desarrollado funciones para agregar, eliminar y buscar proveedores en la base de datos. Los usuarios pueden ingresar detalles como nombre, contacto y dirección del proveedor, lo que facilita el seguimiento y la gestión de la cadena de suministro.

``` ts
async function addProvider() {
  const provider = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del proveedor:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del proveedor:',
    },
    {
      name: 'contact',
      message: 'Ingrese el contacto del proveedor:',
    },
    {
      name: 'address',
      message: 'Ingrese la dirección del proveedor:',
    },
  ]);
  (db.get('suppliers') as any).push(provider).write();
  console.log(`Proveedor agregado con éxito.`);
}

async function deleteProvider() {
  db.read();
  const providers: Provider[] = db.get('suppliers').value();
  if (!providers.length) {
    console.log('No hay proveedores para eliminar.');
    return;
  }
  const providerNames = providers.map((provider) => provider.name);
  const { providerNameToDelete } = await inquirer.prompt([{
    name: 'providerNameToDelete',
    type: 'list',
    choices: providerNames,
    message: 'Seleccione el proveedor a eliminar:'
  }]);
  const updatedProviders = providers.filter((provider) => provider.name !== providerNameToDelete);
  db.set('suppliers', updatedProviders).write();
  console.log(`Proveedor eliminado con éxito.`);
}
```

---

# 9. Conclusiones:

La aplicación de gestión de muebles desarrollada constituye una solución integral y eficiente para administrar clientes, proveedores, muebles y stock en el sector mobiliario. Este proyecto ha permitido aplicar conceptos teóricos en un contexto práctico, fortaleciendo las habilidades de desarrollo de software y gestión de bases de datos. La implementación exitosa de esta aplicación demuestra la capacidad para diseñar y desarrollar soluciones tecnológicas adaptadas a las necesidades específicas de las empresas del sector.
