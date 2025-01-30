# Informe de Práctica 9: Aplicación para coleccionistas de cartas Magic

| **Autor**                   | **Profesor**                              | **Asignatura**                            | **Universidad**                | **Ubicación**                    | **Fecha**        |
| --------------------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------ | -------------------------------- | ---------------- |
| **_TOMÁS JAVES TOMMASONE_** | **_Dr. EDUARDO MANUEL SEGREDO GONZALEZ_** | **_DESARROLLO DE SISTEMAS INFORMÁTICOS_** | **_UNIVERSIDAD DE LA LAGUNA_** | **_SAN CRISTOBAL DE LA LAGUNA_** | **_19/03/2024_** |

## Status Badges
<p align='center'>
  <a href='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101515458/actions/workflows/sonarcloud.yml'>
    <img src='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101515458/actions/workflows/sonarcloud.yml/badge.svg?branch=main' alt = 'Quality Gate Status'>
  </a>

  <a href='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101515458/actions/workflows/.coveralls.yml'>
    <img src='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101515458/actions/workflows/.coveralls.yml/badge.svg?branch=main' alt='Coveralls'>
  </a>

  <a href='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101515458/actions/workflows/node.js.yml'>
    <img src='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101515458/actions/workflows/node.js.yml/badge.svg' alt='Tests'>
  </a>
</p>

## Índice:

1. [_Objetivo_](#1-objetivo)  
2. [_Tareas Previas_](#2-tareas-previas)  
2.1 [_Yargs y Chalk_](#yargs-y-chalk)  
2.2 [_API Node.js_](#api-nodejs)  
2.3 [_Cobertura de código "c8"_](#cobertura-de-código-c8)  
3. [_Github Actions_](#3-github-actions)  
3.1 [_Node.js_](#nodejs)  
3.2 [_Coveralls_](#coveralls)  
3.3 [_SonarCloud_](#sonarcloud)  
5. [_Ejercicio Propuesto_](#4-ejercicio-propuesto)  
6. [_Conclusión_](#5-conclusión)  
7. [_Referencias Bibliográficas_](#6-referencias-bibliográficas)  

## 1. Objetivo

Esta práctica tiene como objetivo primordial el fortalecimiento de habilidades en programación avanzada con TypeScript, manejo de la API síncrona de Node.js para operaciones en el sistema de archivos, y la creación de interfaces de línea de comandos eficientes y amigables para el usuario mediante los paquetes yargs y chalk. A través de la realización de este proyecto, los estudiantes profundizarán su comprensión en la estructuración y organización de proyectos de software complejos, adoptando prácticas de desarrollo profesional como el control de versiones, documentación del código y metodologías de testing.

Además, la práctica pone énfasis en el aprendizaje y aplicación de técnicas de cobertura de código y análisis de calidad mediante herramientas modernas como c8 para la cobertura de pruebas, así como la integración con SonarCloud para el análisis continuo de la calidad del código y seguridad. Esto refuerza la importancia de la calidad del software y seguridad desde las etapas tempranas del desarrollo, preparando a los estudiantes para enfrentar desafíos reales en entornos de producción.

## 2. Tareas Previas

Antes de abordar el desarrollo de la Práctica 9 - Aplicación para coleccionistas de cartas Magic, se realizaron varias tareas previas esenciales para asegurar una base sólida en conocimientos y herramientas que serían fundamentales para el éxito del proyecto. Estas tareas previas incluyen:

*Aceptación de la Asignación de GitHub Classroom*  
Se comenzó aceptando la asignación en GitHub Classroom, lo cual generó un repositorio específico para el proyecto. Esta etapa inicial fue crucial para establecer un entorno de control de versiones donde todo el código desarrollado y los documentos asociados podrían ser alojados, compartidos y revisados de manera eficiente. La familiarización con Git y GitHub es esencial para cualquier desarrollador de software moderno, facilitando la colaboración y el seguimiento de cambios en proyectos complejos.

*Aprendizaje y Uso de los Paquetes Yargs y Chalk*  
Para la creación de una interfaz de línea de comandos (CLI) eficiente y amigable, se hizo uso de dos paquetes de Node.js ampliamente reconocidos:

**Yargs**: Este paquete permite construir interfaces de línea de comandos robustas, facilitando la definición de comandos, argumentos y opciones. A través de Yargs, se logró gestionar de manera efectiva la interacción del usuario con la aplicación, parseando los argumentos de entrada y asociándolos a las diferentes funcionalidades requeridas, como añadir, modificar o eliminar cartas de la colección.

**Chalk**: Chalk se utilizó para mejorar la experiencia de usuario al añadir color y estilos al texto mostrado en la consola. Este paquete permitió destacar mensajes importantes, diferenciar entre mensajes informativos (verdes) y de error (rojos), y presentar la información de manera más organizada y legible.

*Familiarización con la API Síncrona de Node.js para el Trabajo con el Sistema de Ficheros*  
Dado que la persistencia de datos era un requisito fundamental del proyecto, se dedicó tiempo a comprender y aplicar la API síncrona de Node.js para el manejo del sistema de ficheros. Esto incluyó operaciones como leer, escribir y modificar archivos JSON que almacenan la información de las cartas. La capacidad de gestionar estos archivos directamente desde la aplicación fue vital para mantener actualizada la colección de cartas de cada usuario.

Estas tareas previas no solo fueron esenciales para sentar las bases técnicas del proyecto, sino que también contribuyeron al desarrollo de habilidades relevantes en la creación de aplicaciones con Node.js, preparando el terreno para abordar con éxito los retos de programación propuestos en la práctica. La familiarización con estas herramientas y procesos garantizó una comprensión sólida de los componentes necesarios para desarrollar una aplicación de consola efectiva y funcional.

### Yargs y Chalk

*Funcionalidad de Yargs*:

Yargs es una biblioteca de Node.js diseñada para construir interfaces de línea de comandos (CLI) complejas y fáciles de usar. Permite analizar y gestionar argumentos pasados desde la línea de comandos de una forma estructurada, facilitando la definición de comandos, opciones, y argumentos con características tales como obligatoriedad, valores predeterminados, y la generación automática de mensajes de ayuda. Esto es crucial para el desarrollo de aplicaciones CLI que requieren interacción del usuario, proporcionando una base sólida para una experiencia de usuario clara y dirigida.

*Instalación de Yargs y @types/yargs*:

Para comenzar a integrar Yargs en un proyecto y desarrollar una interfaz de línea de comandos robusta, es necesario instalar el paquete yargs junto con sus definiciones de tipos para TypeScript. Esto garantiza una integración fluida y aprovecha las ventajas de la tipificación fuerte de TypeScript. Se realiza mediante los siguientes comandos ejecutados en el terminal dentro del directorio del proyecto:

```typescript
npm install yargs --save
npm install --save-dev @types/yargs
```

La instalación de @types/yargs como una dependencia de desarrollo asegura que se pueda hacer uso de Yargs con el soporte completo de tipado de TypeScript, mejorando la calidad del código y facilitando el desarrollo.

*Uso Básico de Yargs*:

Con Yargs ya instalado, definir comandos y opciones para la aplicación CLI se convierte en un proceso intuitivo. A continuación, se muestra un ejemplo básico de cómo utilizar Yargs para procesar argumentos de línea de comandos y definir un comando simple:

```typescript
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command('saludar', 'Emite un saludo', {
    nombre: {
      describe: 'Tu nombre',
      demandOption: true,
      type: 'string'
    }
  }, (argv) => {
    console.log(`¡Hola, ${argv.nombre}!`);
  })
  .demandCommand(1, 'Debes proporcionar al menos un comando.')
  .help()
  .argv;
```

Este fragmento define un comando saludar que exige un argumento *--nombre*. Al ejecutar este comando, se generará un saludo personalizado. Este ejemplo demuestra la simplicidad con la que Yargs permite crear una CLI interactiva, facilitando la definición de comandos específicos y la gestión eficiente de opciones.

La combinación de Yargs con TypeScript mediante la instalación de @types/yargs enriquece el desarrollo de aplicaciones CLI, permitiendo un diseño más estructurado y tipos seguros para argumentos y opciones, lo cual es esencial para construir aplicaciones CLI avanzadas y amigables para el usuario en Node.js.

*Funcionalidad de Chalk*:

Chalk es una biblioteca que mejora la experiencia de interacción con aplicaciones de línea de comandos (CLI) al permitir la adición de colores y estilos al texto en la consola. Facilita destacar mensajes de error, advertencias o cualquier información relevante mediante el uso de diferentes colores y estilos, como negrita o subrayado. Esto contribuye significativamente a la legibilidad y al atractivo visual de la salida de la aplicación, haciendo la interacción más clara y agradable.

*Instalación de Chalk*:

Para incorporar Chalk y sus capacidades de estilización de texto en un proyecto, se realiza su instalación mediante npm con el siguiente comando:

```typescript
npm install chalk --save
```

Añadir Chalk como una dependencia en el archivo package.json permite su uso a lo largo del proyecto, facilitando así la mejora visual de las interfaces CLI desarrolladas.

*Configuración para Módulos ESM*:

Dado que la versión más reciente de Chalk opera como un módulo ESM (ECMAScript Module), se requieren algunas configuraciones específicas en el proyecto para su adecuada utilización:

Se debe ajustar el archivo package.json para especificar el tipo de módulo, estableciendo la propiedad *type* en *module*:

```typescript
{
  "name": "theory-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module"
}
```

La configuración del compilador TypeScript, en tsconfig.json, debe modificarse para soportar módulos ESM, asignando a la propiedad module el valor node16 o superior. Esto asegura que los módulos del proyecto se traten como ESM.

Para ejecutar pruebas con Mocha en entornos que utilizan módulos ESM, es necesario actualizar el archivo .mocharc.json para indicar el uso de un cargador ESM:

```typescript
{
  "extension": [
    "ts"
  ],
  "spec": "tests/**/*.spec.ts",
  "loader": "ts-node/esm"
}
```

Esta configuración permite a Mocha ejecutar las pruebas haciendo uso del cargador ESM de ts-node, siendo importante añadir la extensión .js a los módulos importados en los archivos de prueba.

*Uso Básico de Chalk*:

A continuación se muestra cómo emplear Chalk para estilizar el texto en la consola de forma efectiva:

```typescript
import chalk from 'chalk';

console.log(chalk.blue('Texto en azul'));
console.log(chalk.red.bold('Texto en rojo y en negrita'));
console.log(chalk.green.bgWhite('Texto verde con fondo blanco'));
```

Este ejemplo demuestra la aplicación de colores, estilos de texto como la negrita y fondos de color en la salida de la consola, ilustrando la flexibilidad y facilidad de uso de Chalk para realzar visualmente las aplicaciones CLI.

La combinación de Chalk con otras herramientas, como Yargs, facilita la creación de aplicaciones CLI que no solamente son funcionales y fáciles de manejar, sino que también ofrecen una experiencia visualmente enriquecedora y amigable.

### API Node.js

*Funcionalidad de la API de Node.js*:

Node.js proporciona una API completa para interactuar con el sistema de ficheros de manera síncrona y asíncrona. Esta API, accesible a través del módulo *fs*, permite realizar operaciones de entrada y salida (I/O) tales como leer, escribir, modificar y eliminar archivos, entre otras. Utilizar la API de sistema de ficheros es fundamental en aplicaciones que requieren persistencia de datos, manejo de configuraciones, o simplemente acceso y manipulación de archivos en el servidor.

*Uso Básico de la API de Node.js para el Sistema de Ficheros*:

Para comenzar a utilizar las funcionalidades del sistema de ficheros en el proyecto Node.js, primero debemos importar el módulo fs. A continuación, se presenta cómo realizar algunas operaciones básicas de manera síncrona, lo que significa que cada operación bloqueará el hilo de ejecución hasta que se complete. Esto puede ser útil para scripts o aplicaciones donde el flujo secuencial es necesario y no afecta negativamente la experiencia del usuario o el rendimiento.

*Lectura de un Archivo*:

Para leer el contenido de un archivo de forma síncrona, se puede utilizar el método *readFileSync*:

```typescript
import fs from 'fs';

const contenido = fs.readFileSync('ruta/al/archivo.txt', 'utf8');
console.log(contenido);
```

Este código lee el contenido de archivo.txt y lo imprime en la consola. El segundo argumento 'utf8' especifica la codificación del archivo, permitiendo que el contenido se lea como texto.

*Escritura en un Archivo*:

Para escribir en un archivo, se puede usar *writeFileSync*. Si el archivo especificado no existe, Node.js lo creará:

```typescript
import fs from 'fs';

fs.writeFileSync('ruta/al/nuevoArchivo.txt', 'Contenido del archivo', 'utf8');
```

Este código crea o sobrescribe nuevoArchivo.txt con el texto "*Contenido del archivo*".

*Agregar Contenido a un Archivo Existente*:

Si se desea agregar contenido al final de un archivo existente sin sobrescribirlo, se puede usar *appendFileSync*:

```typescript
import fs from 'fs';

fs.appendFileSync('ruta/al/archivo.txt', '\nTexto adicional', 'utf8');
```

Este código añade "*Texto adicional*" al final del archivo especificado, precedido por un salto de línea.

*Eliminar un Archivo*:

Para eliminar un archivo, el método *unlinkSync* puede ser utilizado:

```typescript
import fs from 'fs';

fs.unlinkSync('ruta/al/archivoAEliminar.txt');
```

Este código elimina el archivo archivoAEliminar.txt del sistema de ficheros.

*Consideraciones*:

Mientras que las operaciones síncronas son simples y fáciles de entender, pueden no ser la mejor elección para aplicaciones que requieren alta concurrencia o para operaciones de I/O que pueden tardar significativamente. En esos casos, se recomienda explorar las versiones asíncronas de estos métodos, que utilizan callbacks, promesas, o async/await para manejar operaciones sin bloquear el hilo principal de ejecución.

La API de Node.js para el sistema de ficheros es extensa y poderosa, brindando a los desarrolladores un control detallado sobre cómo interactuar con archivos y directorios, lo que la hace esencial para una amplia variedad de aplicaciones Node.js.

### Cobertura de código c8

*Funcionalidad de c8*:

c8 es una herramienta avanzada de cobertura de código diseñada específicamente para Node.js, que aprovecha las capacidades nativas de cobertura de código integradas en el motor V8, que es la base de Node.js. c8 ofrece un medio eficiente para recolectar estadísticas detalladas sobre la cobertura de las líneas de código, ramas y funciones dentro de una aplicación durante la ejecución de pruebas. La utilización de c8 es crucial en el ciclo de desarrollo de software, ya que facilita la identificación de segmentos del código no probados y asegura que las pruebas sean exhaustivas, contribuyendo significativamente a la mejora de la calidad del software.

*Instalación de c8*:

Para incorporar c8 en un proyecto Node.js y comenzar con la evaluación de la cobertura de pruebas, es necesario instalar la herramienta mediante npm. Este proceso se realiza ejecutando el siguiente comando en la terminal dentro del directorio del proyecto:

```typescript
npm install --save-dev c8
```

Al instalar c8 como una dependencia de desarrollo (--save-dev), se garantiza que la herramienta se utilice exclusivamente para las pruebas en el entorno de desarrollo, sin ser incluida en el paquete de producción final.

*Configuración en package.json*:

Dado que NYC no es compatible con módulos ESM, se recomienda el uso de c8 para proyectos que utilicen este formato. Para ello, es necesario ajustar los scripts en el archivo package.json, reemplazando el comando de NYC por c8 para el análisis de cobertura:

```typescript
{
  "name": "theory-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "tsc-watch --onSuccess \"node dist/index.js\"",
    "doc": "typedoc",
    "test": "mocha",
    "coverage": "c8 npm test && c8 report --reporter=lcov"
  }
}
```

*Uso Básico de c8*:

Con c8 correctamente instalado, se puede proceder a ejecutar las pruebas y generar informes de cobertura. Si se utilizan marcos de prueba como Mocha, el comando para ejecutar pruebas bajo la supervisión de c8 sería:

```typescript
npx c8 mocha
```

Este comando llevará a cabo las pruebas con Mocha, recolectando datos sobre la cobertura de código para su posterior análisis.

*Generación de Informes de Cobertura*:

Tras finalizar las pruebas, c8 permite la generación de informes en distintos formatos, facilitando el análisis de la cobertura de código. Para generar un informe legible directamente en la consola, se puede utilizar:

```typescript
npx c8 report
```

Para obtener una visión más detallada, es posible generar informes en formato HTML, que crean un conjunto interactivo de páginas web para una revisión detallada de la cobertura de código:

```typescript
npx c8 report --reporter=html
```

Este comando creará un informe en el directorio ./coverage, accesible mediante un navegador web, ofreciendo una inspección profunda de la cobertura de código línea por línea.

*Consideraciones*:

La adopción de c8 en el flujo de desarrollo y en procesos de Integración y Despliegue Continuo (CI/CD) es un paso esencial hacia la mejora continua de la calidad del software. Al asegurar una cobertura de pruebas amplia y profunda, c8 juega un papel crucial en el desarrollo de software, promoviendo la creación de aplicaciones más robustas, confiables y mantenibles.

## 3. Github Actions

La adopción de herramientas de Integración Continua (CI) y Despliegue Continuo (CD) como GitHub Actions, Node.js, Coveralls y SonarCloud, juega un papel crucial en la mejora y mantenimiento de la calidad del software. Estas herramientas automatizan pruebas, análisis de cobertura de código y evaluaciones de calidad, facilitando el desarrollo de aplicaciones más robustas y confiables.

## Node.js

GitHub Actions ofrece una plataforma de automatización directamente en GitHub, permitiendo definir flujos de trabajo para compilación, pruebas y despliegue.

*Configuración para Node.js*:

- Subida al Repositorio: Iniciamos subiendo el proyecto actualizado a GitHub mediante comandos estándar:

```typescript
git add
git commit
git push
```

- Configuración de Workflow: En GitHub, se debe navegar a la pestaña "Actions", seleccionamos "New workflow" y buscamos la plantilla de "*Node.js*".

- Definición del Workflow: Copiamos y pegamos el siguiente YAML en el editor de GitHub Actions para configurar el workflow:

```typescript
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

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm test
```

- Inclusión de Status Badge: Copiamos el badge de estado proporcionado por GitHub y lo añadimos al README.md del proyecto.

### Coveralls

Coveralls es una herramienta en línea que ayuda a seguir la cobertura de código a lo largo del tiempo, proporcionando una visión detallada de qué partes del código no están siendo probadas.

*Integración con Coveralls*:

Preparación: En caso de tener una integración previa, eliminamos Coveralls ejecutando:

```typescript
npm uninstall coveralls.
```

- Instalación de Dependencias: Aseguramos que todas las dependencias estén actualizadas con

```typescript
npm install.
```

- Generación de Cobertura: Ejecutamos las pruebas y la generación de cobertura con

```typescript
npm test
```
y
```typescript
npm run coverage.
```

- Configuración del Workflow: Creamos un archivo llamado coveralls.yml en el directorio "*.github/workflows*" y copiamos el siguiente contenido:

```typescript
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
    - uses: actions/checkout@v4
    - name: Use Node.js 21.x
      uses: actions/setup-node@v4
      with:
        node-version: 21.x
    - run: npm ci
    - run: npm run coverage
    - name: Coveralls GitHub Action
      uses: coverallsapp/github-action@v2.2.3
      with:
        github-token: ${{ secrets.GITHUB_TOKEN }}
```

- Actualización y Badge: Tras subir este workflow a GitHub, añadimos el badge de estado de Coveralls en el README.md.

### Sonarcloud

SonarCloud automatiza el análisis de código para detectar problemas de calidad y seguridad en proyectos.

*Configuración con SonarCloud*:

- Registro y Configuración: Accedemos a SonarCloud, iniciamos sesión y, si es necesario, importamos el proyecto desde GitHub.

- Desactivación del Análisis Automático: En "Administration > Analysis Method", apagamos "Automatic Analysis".

- Configuración de GitHub Action: En "Settings" del repositorio en GitHub, añadimos los secretos proporcionados por SonarCloud.

- Workflow de SonarCloud: Creamos un archivo "*sonarcloud.yml*" en "*.github/workflows*" con el siguiente contenido:

```typescript
name: Sonar-Cloud 
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - name: Cloning repo
        uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Shallow clones should be disabled for a better relevancy of analysis
      - name: Using Node.js 19.x
        uses: actions/setup-node@v3
        with:
          node-version: 19.x
      - name: Installing dependencies
        run: npm i
      - name: Generating coverage report
        run: npm run coverage
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

- Configuración de Propiedades de SonarCloud: Creamos un archivo "*sonar-project.properties*" en el directorio raíz del proyecto con la siguiente configuración básica, ajustando los valores "*sonar.projectKey*" y "*sonar.organization*" según el proyecto en SonarCloud:

```typescript
sonar.projectKey=ULL-ESIT-INF-DSI-2324_Prueba
sonar.organization=ull-esit-inf-dsi-2324

# This is the name and version displayed in the SonarCloud UI.
#sonar.projectName=Prueba
#sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file.
sonar.sources=src

# Encoding of the source code.
#sonar.sourceEncoding=UTF-8

# Source code coverage
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

- Inclusión de Status Badge: Finalmente, vamos a la página de SonarCloud y copiamos el status badge desde la sección "Information" situada en la esquina inferior izquierda de la interfaz del proyecto. Lo pegamos en el README.md del repositorio para mostrar el estado de calidad del código.

Al seguir estos pasos, se establecerá una robusta infraestructura CI/CD para el proyecto Node.js, permitiéndonos monitorear y mejorar continuamente la calidad del código, la cobertura de pruebas y mantener altos estándares de seguridad y mantenibilidad en el desarrollo de software.

## 4. Ejercicio Propuesto

En el desarrollo de un sistema de gestión de cartas mágicas, hemos adoptado los principios de la programación orientada a objetos para garantizar un diseño flexible, escalable y mantenible. Este enfoque ha permitido crear un sistema que no solo facilita la representación detallada de las cartas mágicas sino que también proporciona funcionalidades para gestionar colecciones de cartas de manera eficiente.

A continuación, se describen los componentes principales del sistema, incluidas las enumeraciones, interfaces y clases desarrolladas:

***Enumeraciones (Enums)***:

- *EColor.ts*: Define los posibles colores de las cartas, facilitando la asignación de valores específicos como Blanco, Azul, Negro, Rojo, Verde, Incoloro y Multicolor. Este enfoque enumera de forma explícita las opciones de color, mejorando la legibilidad y evitando errores de tipografía.

- *ERareza.ts*: Enumera las categorías de rareza de las cartas, como Común, Infrecuente, Rara y Mítica. Esta clasificación permite manejar lógicas específicas basadas en la rareza de la carta dentro del sistema.

- *TipoLinea.ts*: Representa los diferentes tipos de cartas disponibles, tales como Tierra, Criatura, Encantamiento, Conjuro, Instantáneo, Artefacto y Planeswalker. Al clasificar las cartas por tipo, se facilita su organización y se permite la implementación de reglas específicas según el tipo de carta.

***Interfaz Card***:

Esta interfaz define la estructura básica de una carta mágica, incluyendo propiedades como id, nombre, costeMana, color, líneaTipo, rareza, textoReglas, entre otros. La presencia de propiedades opcionales como fuerzaResistencia y marcasLealtad permite la flexibilidad en la representación de diferentes tipos de cartas. La implementación de esta interfaz asegura que todas las cartas en el sistema compartan una estructura común, facilitando su manejo y procesamiento.

***Clase CardCollection***:

La clase *CardCollection* sirve como contenedor para un conjunto de cartas, permitiendo operaciones como la adición, actualización, eliminación, listado y lectura de una carta en concreto. Esta clase utiliza un enfoque genérico para manejar colecciones de cualquier tipo de carta que cumpla con la interfaz *Card*, ofreciendo así una gran versatilidad. Funciones adicionales, como *getColorCode*, mejoran la interacción con las cartas al proporcionar una forma de obtener representaciones visuales de los colores de las cartas.

El código propuesto para cada enum, interfaz y clases son los siguientes:

- *EColor.ts*:

```typescript
export enum Color {
  Blanco = 'Blanco',
  Azul = 'Azul',
  Negro = 'Negro',
  Rojo = 'Rojo',
  Verde = 'Verde',
  Incoloro = 'Incoloro',
  Multicolor = 'Multicolor',
}
```

- *ERareza.ts*:

```typescript
export enum Rareza {
  Común = 'Común',
  Infrecuente = 'Infrecuente',
  Rara = 'Rara',
  Mítica = 'Mítica',
}
```

- *ETipoLínea.ts*:

```typescript
export enum TipoLinea {
  Tierra = 'Tierra',
  Criatura = 'Criatura',
  Encantamiento = 'Encantamiento',
  Conjuro = 'Conjuro',
  Instantáneo = 'Instantáneo',
  Artefacto = 'Artefacto',
  Planeswalker = 'Planeswalker',
}
```

- *ICard.ts*:

```typescript
export interface Card {
  id: number;
  nombre: string;
  costeMana: number;
  color: Color;
  líneaTipo: TipoLinea;
  rareza: Rareza;
  textoReglas: string;
  fuerzaResistencia?: [number, number]; // Opcional
  marcasLealtad?: number; // Opcional
  valorMercado: number;
}
```

- *CardCollection.ts*:

```typescript
export class CardCollection {
  private collection: Card[] = [];
  private user: string;

  /**
   * Constructor de la clase CardCollection.
   * @param {string} user - Nombre del usuario.
   */
  constructor(user: string) {
    this.user = user;
    this.loadCollection(); // Cargar la colección al instanciar
  }

  /**
   * Método para obtener el código hexadecimal de un color.
   * @param {string} colorName - Nombre del color.
   * @returns {string} - Código hexadecimal del color.
   */
  private getColorCode(colorName: string): string {
    const colorMap: { [key: string]: string } = {
      blanco: '#FFFFFF',
      azul: '#0000FF',
      negro: '#000000',
      rojo: '#FF0000',
      verde: '#00FF00',
      incoloro: '#CCCCCC', // Suponiendo un gris para incoloro
      multicolor: '#FF00FF' // Ejemplo para multicolor
    };
    return colorMap[colorName.toLowerCase()] || '#000000'; // Negro por defecto si no se encuentra
  }

  /**
   * Función que obtiene la carta con id específica ubicada en el directorio del usuario.
   * @param {number} id - ID de la carta.
   * @returns {string} - Carta ubicada en el directorio del usuario.
   */
  private getCardFilePath(id: number): string {
    return `${this.getUserDirPath()}/${id}.json`;
  }

  /**
   * Función que obtiene el directorio del usuario
   * @returns {string} - Directorio del usuario.
   */
  public getUserDirPath(): string {
    return `./data/${this.user}`;
  }

  /**
   * Función que retorna la colección de cartas.
   * @returns {Card[]} - Colección de cartas del usuario.
   */
  public getCards(): Card[] {
    return this.collection;
  }

  /**
   * Función que carga una colección específica (en caso de existencia).
   * @returns {void}
   */
  public loadCollection(): void {
    const userDirPath = this.getUserDirPath();
    if (!fs.existsSync(userDirPath)) {
      fs.mkdirSync(userDirPath, { recursive: true });
    } else {
      const fileNames = fs.readdirSync(userDirPath);
      this.collection = fileNames.map(fileName => {
        const filePath = `${userDirPath}/${fileName}`;
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent) as Card;
      });
    }
  }

  /**
   * Función que añade una nueva carta a la colección.
   * @param {Card} card - Carta a añadir.
   * @returns {void}
   */
  public addCard(card: Card): void {
    if (this.collection.some(c => c.id === card.id)) {
      console.log(chalk.red(`La carta con ID ${card.id} ya existe en la colección de ${this.user}.`));
    } else {
      this.collection.push(card);
      fs.writeFileSync(this.getCardFilePath(card.id), JSON.stringify(card, null, 2));
      console.log(chalk.green(`Nueva carta añadida a la colección de ${this.user}.`));
    }
  }

  /**
   * Función que actualiza una carta existente en la colección.
   * @param {Card} updatedCard - Carta actualizada.
   * @returns {void}
   */
  public updateCard(updatedCard: Card): void {
    const cardIndex = this.collection.findIndex(c => c.id === updatedCard.id);
    if (cardIndex === -1) {
      console.log(chalk.red(`La carta con ID ${updatedCard.id} no existe en la colección de ${this.user}.`));
    } else {
      this.collection[cardIndex] = updatedCard;
      fs.writeFileSync(this.getCardFilePath(updatedCard.id), JSON.stringify(updatedCard, null, 2));
      console.log(chalk.green(`Carta actualizada en la colección de ${this.user}.`));
    }
  }

  /**
   * Función que elimina una carta de la colección.
   * @param {number} id - ID de la carta a eliminar.
   * @returns {void}
   */
  public removeCard(id: number): void {
    const cardIndex = this.collection.findIndex(c => c.id === id);
    if (cardIndex === -1) {
      console.log(chalk.red(`La carta con ID ${id} no existe en la colección de ${this.user}.`));
    } else {
      this.collection.splice(cardIndex, 1);
      fs.unlinkSync(this.getCardFilePath(id));
      console.log(chalk.green(`Carta eliminada de la colección de ${this.user}.`));
    }
  }

  /**
   * Función que lista todas las cartas de la colección.
   * @returns {void}
   */
  public listCards(): void {
    console.log(chalk.bold(`\nColección de cartas de ${this.user}\n`));
    this.collection.forEach(card => {
      const colorCode = this.getColorCode(card.color);
      console.log(chalk.bold(chalk.white(`ID: ${card.id}`)));
      console.log(chalk.white(`Nombre: ${card.nombre}`));
      console.log(`Coste de Mana: ${card.costeMana}`);
      console.log(`Color: ${chalk.hex(colorCode)(card.color)}`);
      console.log(`Tipo de Línea: ${card.líneaTipo}`);
      console.log(`Rareza: ${card.rareza}`);
      console.log(`Texto de Reglas: ${card.textoReglas}`);
      if (card.líneaTipo === 'Criatura' && card.fuerzaResistencia) {
        console.log(`Fuerza/Resistencia: ${card.fuerzaResistencia[0]}/${card.fuerzaResistencia[1]}`);
      }
      if (card.marcasLealtad && card.líneaTipo === 'Planeswalker') {
        console.log(`Marcas de Lealtad: ${card.marcasLealtad}`);
      }
      console.log(`Valor de Mercado: ${card.valorMercado}`);
      console.log(""); // Salto de línea para separar las cartas
    });
  }

  /**
   * Función que lee una carta específica de la colección.
   * @param {number} id - ID de la carta a leer.
   * @returns {void}
   */
  public readCard(id: number): void {
    const card = this.collection.find(c => c.id === id);
    if (!card) {
      console.log(chalk.red(`La carta con ID ${id} no existe en la colección de ${this.user}.`));
    } else {
      const colorCode = this.getColorCode(card.color);
      console.log(chalk.bold(`\nInformación de la carta con ID ${id}\n`));
      console.log(chalk.white(`Nombre: ${card.nombre}`));
      console.log(`Coste de Mana: ${card.costeMana}`);
      console.log(`Color: ${chalk.hex(colorCode)(card.color)}`);
      console.log(`Tipo de Línea: ${card.líneaTipo}`);
      console.log(`Rareza: ${card.rareza}`);
      console.log(`Texto de Reglas: ${card.textoReglas}`);
      if (card.líneaTipo === 'Criatura' && card.fuerzaResistencia) {
        console.log(`Fuerza/Resistencia: ${card.fuerzaResistencia[0]}/${card.fuerzaResistencia[1]}`);
      }
      if (card.marcasLealtad && card.líneaTipo === 'Planeswalker') {
        console.log(`Marcas de Lealtad: ${card.marcasLealtad}`);
      }
      console.log(`Valor de Mercado: ${card.valorMercado}`);
    }
  }
}
```

## 5. Conclusión

La Práctica 9 ha sido un ejercicio exhaustivo y enriquecedor que nos ha permitido explorar la profundidad y la versatilidad de TypeScript junto con Node.js para el desarrollo de aplicaciones de gestión de datos complejas. La implementación de un sistema para coleccionistas de cartas Magic ha servido como un campo de pruebas ideal para aplicar y ampliar nuestros conocimientos en áreas clave como la programación orientada a objetos, el manejo del sistema de archivos y la creación de interfaces de línea de comandos.

A través del diseño e implementación de este sistema, hemos logrado los siguientes puntos clave:

Flexibilidad y Escalabilidad: El uso de interfaces, clases y enumeraciones no solo organizó el código de manera lógica y coherente sino que también aseguró la flexibilidad para agregar nuevas funcionalidades o tipos de cartas sin alterar significativamente la base del código existente.

Persistencia de Datos: La habilidad para almacenar y recuperar información de las cartas mediante archivos JSON ha subrayado la importancia de la persistencia de datos en aplicaciones modernas, demostrando cómo gestionar eficazmente el almacenamiento local de datos.

Interfaz de Usuario Clara: La implementación de Yargs y Chalk ha permitido crear una interfaz de usuario en línea de comandos que no solo es intuitiva sino también visualmente atractiva, mejorando significativamente la experiencia del usuario final.

Cobertura y Calidad del Código: La incorporación de herramientas de cobertura de código y análisis de calidad, como c8 y SonarCloud, ha enfatizado la importancia de mantener altos estándares de calidad y seguridad en el código desde las primeras etapas del desarrollo.

## 6. Referencias Bibliográficas

- [_Documentación Node.js_](https://nodejs.org/en/docs/)  
- [_Documentación SonarCloud_](https://docs.sonarsource.com/sonarcloud/?_gl=1*7gzv7o*_gcl_au*OTcwMDc2NTEzLjE3MTAyODczOTQ.*_ga*MTg1NTg1MjA5LjE3MTAyODczODA.*_ga_9JZ0GZ5TC6*MTcxMTA2MDA3Ni42LjEuMTcxMTA2MDA3Ni42MC4wLjA.)  
- [_Documentación Github Actions_](https://docs.github.com/en/actions)  
- [_Documentación Chalk_](https://github.com/chalk/chalk)  
- [_Documentación Yargs_](https://github.com/yargs/yargs)  
- [_Práctica 9 - Aplicación para coleccionistas de cartas Magic_](https://ull-esit-inf-dsi-2324.github.io/prct09-fiilesystem-magic-app/)  

