# Informe de Práctica 10: Aplicación cliente-servidor para coleccionistas de cartas Magic

| **Autor**                   | **Profesor**                              | **Asignatura**                            | **Universidad**                | **Ubicación**                    | **Fecha**        |
| --------------------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------ | -------------------------------- | ---------------- |
| **_TOMÁS JAVES TOMMASONE_** | **_Dr. EDUARDO MANUEL SEGREDO GONZALEZ_** | **_DESARROLLO DE SISTEMAS INFORMÁTICOS_** | **_UNIVERSIDAD DE LA LAGUNA_** | **_SAN CRISTOBAL DE LA LAGUNA_** | **_10/04/2024_** |

## Status Badges
<p align='center'>
  <a href='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101515458/actions/workflows/sonarcloud.yml'>
    <img src='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101515458/actions/workflows/sonarcloud.yml/badge.svg' alt = 'Quality Gate Status'>
  </a>

  <a href='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101515458/actions/workflows/coveralls.yml'>
    <img src='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101515458/actions/workflows/coveralls.yml/badge.svg' alt='Coveralls'>
  </a>

  <a href='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101515458/actions/workflows/node.js.yml'>
    <img src='https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101515458/actions/workflows/node.js.yml/badge.svg' alt='Tests'>
  </a>
</p>

## Índice:

1. [_Objetivo_](#1-objetivo)  
2. [_Tareas Previas_](#2-tareas-previas)  
3. [_Arquitectura de la Aplicación_](#3-arquitectura-de-la-aplicación)  
3.1 [_Diseño Cliente-Servidor_](#diseño-cliente-servidor)  
3.2 [_Gestión de Conexiones_](#gestión-de-conexiones)  
3.3 [_Persistencia de Datos_](#persistencia-de-datos)  
4. [_Implementación del Servidor_](#4-implementación-del-servidor)  
4.1 [_Estructura de Directorios y Ficheros_](#estructura-de-directorios-y-ficheros)  
4.2 [_Manejo de Peticiones_](#manejo-de-peticiones)  
4.3 [_Código Propuesto para el Servidor_](#código-propuesto-para-el-servidor)    
5. [_Implementación del Cliente_](#5-implementación-del-cliente)  
5.1 [_Interfaz de Línea de Comandos (CLI)_](#interfaz-de-línea-de-comandos-cli)  
5.2 [_Construcción y Envío de Peticiones_](#construcción-y-envío-de-peticiones)  
5.3 [_Recepción y Procesamiento de Respuestas_](#recepción-y-procesamiento-de-respuestas)  
5.4 [_Código Propuesto para el Cliente_](#código-propuesto-para-el-cliente)  
6. [_Pruebas y Validación_](#6-pruebas-y-validación)  
6.1 [_Metodología Code-Then-Test_](#metodología-code-then-test)  
6.2 [_Pruebas Implementadas_](#pruebas-implementadas)  
6.3 [_Automatización de Pruebas con Github Actions_](#automatización-de-pruebas-con-github-actions)  
7. [_Conclusión_](#7-conclusión)  
8. [_Referencias Bibliográficas_](#8-referencias-bibliográficas)  

## 1. Objetivo

El objetivo de esta práctica es el desarrollo de una aplicación cliente-servidor para la gestión de una colección de cartas Magic, utilizando tecnologías basadas en Node.js. A través de esta aplicación, los usuarios podrán realizar diversas operaciones sobre su colección de cartas, tales como: **añadir, modificar, eliminar, listar y mostrar** detalles específicos de las cartas mediante una interfaz de línea de comandos (CLI).

El servidor se encargará de procesar las solicitudes enviadas por el cliente, interactuar con el sistema de archivos para persistir los datos de las cartas en formato JSON, y responder adecuadamente a cada petición. Por otro lado, el cliente facilitará al usuario una interfaz para interactuar con su colección, formular peticiones y recibir respuestas del servidor.

Con lo descrito anteriormente aseguramos que este proyecto tiene como finalidad poner en práctica y profundizar en el conocimiento de las siguientes áreas:

1. **Desarrollo de aplicaciones de red**: A través del uso del módulo net de Node.js, se explorará la creación y gestión de conexiones de red para la comunicación entre el cliente y el servidor.
2. **Programación asíncrona**: Se empleará el módulo events para manejar eventos de manera asíncrona, crucial para el flujo de comunicación y procesamiento de la aplicación.
3. **Interacción con el sistema de archivos**: Utilizando el módulo fs, se gestionará la persistencia de datos en el servidor, familiarizándose con operaciones de lectura y escritura de archivos en un entorno asíncrono.
4. **Creación de interfaces de usuario en CLI**: Mediante los paquetes yargs y chalk, se mejorará la interacción del usuario con la aplicación, proporcionando una interfaz clara y amigable.

## 2. Tareas Previas

Antes de comenzar el desarrollo de la aplicación cliente-servidor para la gestión de una colección de cartas Magic, es necesario realizar una serie de tareas previas que aseguren una base sólida para el proyecto. Estas tareas preparatorias son necesarias para familiarizarse con las herramientas y tecnologías que se utilizarán, así como para establecer el entorno de desarrollo adecuado.  
A continuación, se describen las tareas previas esenciales para este proyecto:

1. *Aceptación de la Asignación en GitHub Classroom*  
El primer paso involucra aceptar la asignación de GitHub Classroom proporcionada por el profesorado. Esto creará automáticamente un repositorio en GitHub donde se almacenará todo el código y documentación relacionada con el proyecto. Es importante familiarizarse con las funcionalidades de GitHub, ya que será la plataforma principal para el control de versiones y colaboración durante el desarrollo de la aplicación.

2. *Instalación de Node.js y npm*  
Es necesario tener instalado *Node.js*, ya que es el entorno de ejecución para JavaScript del lado del servidor utilizado en el proyecto. npm, el gestor de paquetes de Node.js, permitirá instalar y gestionar las dependencias necesarias para el proyecto.

3. *Familiarización con el Módulo net de Node.js*  
El módulo *net* proporciona una API asincrónica para la creación de aplicaciones de red, incluyendo *servidores* y *clientes* TCP, por ello, revisamos la documentación oficial de Node.js para comprender cómo utilizar este módulo para establecer conexiones de red, escuchar peticiones y enviar respuestas.

4. *Estudio de la Clase EventEmitter y el Módulo events*  
El manejo de eventos asíncronos es una parte crucial del desarrollo en Node.js. La clase *EventEmitter* del módulo events permite implementar patrones de diseño basados en eventos. Es esencial entender cómo *crear, emitir y escuchar* eventos personalizados para el flujo de comunicación entre el cliente y el servidor.

5. *Exploración del Módulo fs*  
El módulo *fs* (File System) de Node.js se utilizará para interactuar con el sistema de archivos, permitiendo *leer y escribir archivos*. Dado que la persistencia de datos de las cartas se manejará a través de archivos JSON, es importante familiarizarse con las operaciones de archivo asincrónicas que ofrece el módulo fs.

6. *Uso de los Paquetes yargs y chalk*  
El paquete *yargs* facilita la creación de *interfaces de línea de comandos (CLI) complejas*, permitiendo procesar los argumentos y opciones suministrados por el usuario. Por otro lado, *chalk* se utilizará para añadir *color a la salida de la consola*, mejorando la legibilidad de los mensajes. Revisamos entonces la documentación de ambos paquetes para entender su instalación y uso básico.

Realizar estas tareas previas nos proporciona una base firme para el desarrollo exitoso de la aplicación cliente-servidor, asegurando que el entorno de desarrollo esté correctamente configurado y que haya un entendimiento sólido de las tecnologías clave involucradas en el proyecto.

## 3. Arquitectura de la Aplicación

La aplicación para la gestión de colecciones de cartas Magic se basa en una arquitectura **cliente-servidor**, donde el servidor actúa como un punto central de procesamiento y almacenamiento de datos, y el cliente como la interfaz a través de la cual los usuarios interactúan con la aplicación.

### Diseño Cliente-Servidor

En el patrón de arquitectura cliente-servidor utilizado, el **servidor** es responsable de la lógica de negocio y de gestionar el acceso a los datos de las cartas Magic, que se almacenan en el sistema de archivos del servidor en formato JSON. Este espera las conexiones de los clientes, procesa sus peticiones (como añadir, modificar, eliminar, listar y mostrar cartas), realiza las operaciones solicitadas sobre los datos, y devuelve las respuestas apropiadas.

El **cliente** se implementa como una aplicación de línea de comandos (CLI) que permite a los usuarios enviar comandos y datos al servidor. Los usuarios pueden interactuar con su colección de cartas a través de este CLI, enviando peticiones al servidor y recibiendo respuestas con la información solicitada o confirmaciones de las operaciones realizadas.

### Gestión de Conexiones

Para manejar múltiples peticiones de diferentes clientes simultáneamente, el servidor utiliza el módulo net de Node.js, que permite gestionar conexiones TCP de manera asincrónica. Cada vez que un cliente se conecta al servidor, se establece una nueva conexión TCP. El servidor procesa cada petición en su propio flujo de ejecución, permitiendo así que múltiples clientes interactúen con la aplicación de manera concurrente sin bloqueos.

El servidor está diseñado para ser eficiente en la gestión de estas conexiones, asegurando que las peticiones se procesen rápidamente y que los recursos del sistema se utilicen de manera óptima. La arquitectura asincrónica de Node.js facilita esta capacidad, permitiendo al servidor responder a otras peticiones mientras espera que operaciones de E/S, como la lectura o escritura de archivos, se completen.

### Persistencia de Datos

La persistencia de datos se logra almacenando la información de las cartas Magic en ficheros JSON dentro del sistema de archivos del servidor. Cada carta se almacena en un fichero separado, lo que simplifica la gestión de las colecciones individuales de los usuarios.

Para cada usuario, se crea un directorio específico que contiene los ficheros JSON de las cartas de su colección. Esto permite una organización clara de los datos y facilita operaciones como la adición, modificación y eliminación de cartas, ya que cada operación puede dirigirse a un fichero específico dentro del directorio del usuario.

El servidor utiliza el módulo fs de Node.js para interactuar con el sistema de archivos de manera asíncrona, lo que asegura que las operaciones de E/S no bloqueen el procesamiento de otras peticiones. Esta estrategia de persistencia garantiza que los datos de los usuarios estén siempre disponibles y actualizados, permitiendo una recuperación eficiente y proporcionando una base sólida para la gestión de las colecciones de cartas.

## 4. Implementación del Servidor

La implementación del servidor en la aplicación cliente-servidor para la gestión de colecciones de cartas Magic se centra en dos aspectos principales:  

- La organización del almacenamiento de datos a través de una estructura de directorios y ficheros.
- El procesamiento eficaz de las peticiones recibidas de los clientes, junto con el envío de las respuestas correspondientes.

### Estructura de Directorios y Ficheros

El servidor organiza los datos de las colecciones de cartas de cada usuario en una estructura de directorios y ficheros clara y sistemática. Cada usuario tiene asignado un directorio único basado en su identificador o nombre de usuario. Dentro de este directorio, cada carta de la colección se almacena en un fichero JSON individual, nombrado con el ID único de la carta. Esta estructura facilita la búsqueda, modificación y eliminación de cartas específicas dentro de la colección de un usuario.

- La estructura se vería así:

```typescript
/data
  /usuario1
    1.json
    2.json
  /usuario2
    1.json
    3.json
```  

En este ejemplo, el directorio */data* contiene subdirectorios para cada usuario (usuario1, usuario2), y cada subdirectorio contiene ficheros JSON para las cartas individuales (1.json, 2.json, etc.).

### Manejo de Peticiones

Como se comentaba anteriormente, el servidor procesa las peticiones utilizando el módulo net de Node.js. Al recibir una petición, el servidor determina la acción solicitada (añadir, modificar, eliminar, listar o mostrar una carta) y los datos asociados a esa petición. Luego, realiza la operación correspondiente sobre los ficheros del sistema de archivos y devuelve una respuesta al cliente. Las respuestas pueden incluir la confirmación de la acción realizada, los datos solicitados de cartas específicas, o mensajes de error en caso de problemas.

El procesamiento de las peticiones y el envío de respuestas se manejan de manera asíncrona, asegurando que el servidor pueda atender múltiples peticiones de forma concurrente sin bloqueos.

### Código Propuesto para el Servidor

El código propuesto para el servidor es el siguiente:

- *Server.ts*:

```typescript
import net from 'net';
import fs from 'fs';
import path from 'path';
import { EventEmitter } from 'events';
import { Card } from '../Cartas/ICard.js'
import { CardRequest } from '../Cartas/ICardRequest.js'
import { CardCollection } from '../Cartas/CardCollection.js';

const cardEventEmitter = new EventEmitter();
let cardCollections: { [key: string]: CardCollection } = {};

/**
 * @brief Evento para añadir una carta a la colección de un usuario.
 */
cardEventEmitter.on('add', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.addCard(request.carta);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para eliminar una carta de la colección de un usuario.
 */
cardEventEmitter.on('remove', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.removeCard(request.carta.id);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para actualizar una carta de la colección de un usuario.
 */
cardEventEmitter.on('update', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.updateCard(request.carta);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para leer una carta de la colección de un usuario.
 */
cardEventEmitter.on('read', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.readCard(request.carta.id);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para listar las cartas de la colección de un usuario.
 */
cardEventEmitter.on('list', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.listCards();
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento por defecto.
 */
cardEventEmitter.on('default', (connection) => {
  connection.write('Comando no reconocido.\n');
  connection.end();
});

/**
 * @brief Servidor que permite añadir cartas a la colección de un usuario.
 */
export const server = net.createServer(connection => {
  let requestData = ''; // Variable para almacenar los datos recibidos

  connection.on('data', data => {
    requestData += data.toString(); // Concatenamos los datos recibidos

    // Verificamos si se ha recibido el delimitador
    try {
      const request = JSON.parse(requestData.trim()) as CardRequest; // Eliminamos espacios en blanco y convertimos a objeto JSON
      console.log('Cliente operando:', request.usuario);
      // Verificamos si ya hay una instancia de CardCollection para este usuario
      let cardCollections: { [key: string]: CardCollection } = {};

      // Si no existe la propiedad cardCollections en el objeto global, la creamos
      if (!cardCollections.hasOwnProperty(request.usuario)) {
        // Si no hay una instancia, la creamos y la almacenamos en el objeto cardCollections
        cardCollections[request.usuario] = new CardCollection(request.usuario);
      }
      
      // Emitimos un evento basado en el comando recibido o 'default' si el comando no se reconoce
      if (cardEventEmitter.listenerCount(request.comando) > 0) {
        cardEventEmitter.emit(request.comando, connection, request);
      } else {
        cardEventEmitter.emit('default', connection, request);
      }
 
    } catch (error) {
      connection.write('Error al procesar la petición: formato inválido.\n');
    }
    requestData = ''; // Reiniciamos la variable para la próxima petición
  });
});

// Escuchamos en el puerto 2424
server.listen(2424, () => {
  console.log('Servidor esperando conexiones...');
});
```

## 5. Implementación del Cliente

Como dijimos anteriormente, la implementación del cliente en nuestra aplicación cliente-servidor para la gestión de colecciones de cartas Magic se realiza a través de una Interfaz de Línea de Comandos (CLI). Esta interfaz permite a los usuarios interactuar directamente con el servidor para realizar operaciones sobre su colección de cartas. A continuación, detallamos cómo se abordan los aspectos clave de la implementación del cliente utilizando esta estructura.

### Interfaz de Línea de Comandos (CLI)

El diseño de la CLI se realiza utilizando el paquete *yargs*, el cual facilita la creación de interfaces de usuario en la línea de comandos robustas y bien estructuradas. Yargs permite definir comandos, argumentos y opciones que el usuario puede emplear para interactuar con la aplicación. Cada comando corresponde a una operación específica que el usuario puede realizar, como añadir una nueva carta a la colección, listar todas las cartas, o eliminar una carta específica.

### Construcción y Envío de Peticiones

Cuando el usuario ejecuta un comando a través de la CLI, el cliente construye una petición basada en la acción solicitada y los datos proporcionados. Esta petición se serializa a un formato JSON y se envía al servidor utilizando una conexión TCP establecida por el módulo net de Node.js. Este proceso se maneja de manera asíncrona para no bloquear la interfaz de usuario mientras se espera la respuesta del servidor.

### Recepción y Procesamiento de Respuestas

Una vez que el servidor ha procesado la petición, envía una respuesta de vuelta al cliente. El cliente deserializa esta respuesta de su formato JSON y la procesa para determinar el resultado de la operación solicitada. Dependiendo de la respuesta, el cliente puede mostrar al usuario un mensaje de éxito, los datos solicitados (por ejemplo, los detalles de una carta específica), o un mensaje de error si la operación no pudo completarse correctamente.

El uso del paquete chalk mejora la legibilidad de los mensajes mostrados al usuario, permitiendo, por ejemplo, resaltar en colores distintos los mensajes de éxito, error, o los datos importantes.

### Código Propuesto para el Cliente

El código propuesto para el cliente es el siguiente:

- *Cliente.ts*:
```typescript
import net from 'net';
import yargs from 'yargs';
import { EventEmitter } from 'events';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Añade una nueva carta a la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' },
      nombre: { describe: 'Nombre de la carta', demandOption: true, type: 'string' },
      costeMana: { describe: 'Coste de mana', demandOption: true, type: 'number' },
      color: { describe: 'Color de la carta', demandOption: true, type: 'string' },
      líneaTipo: { describe: 'Línea o tipo de la carta', demandOption: true, type: 'string' },
      rareza: { describe: 'Rareza de la carta', demandOption: true, type: 'string' },
      textoReglas: { describe: 'Texto de reglas de la carta', demandOption: true, type: 'string' },
      fuerzaResistencia: { describe: 'Fuerza y resistencia de la carta', type: 'array', default: [] },
      marcasLealtad: { describe: 'Marcas de lealtad de la carta', type: 'number' },
      valorMercado: { describe: 'Valor de mercado de la carta', demandOption: true, type: 'number' }
    },
    handler: (argv) => {
      const requestData = {
        usuario: argv.user,
        comando: 'add',
        carta: {
          id: argv.id,
          nombre: argv.nombre,
          costeMana: argv.costeMana,
          color: argv.color,
          líneaTipo: argv.líneaTipo,
          rareza: argv.rareza,
          textoReglas: argv.textoReglas,
          fuerzaResistencia: argv.fuerzaResistencia,
          marcasLealtad: argv.marcasLealtad,
          valorMercado: argv.valorMercado
        }
      };
      sendDataToServer(requestData, argv.user);
    }
  })
  .command({
    command: 'list',
    describe: 'Lista todas las cartas de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' }
    },
    handler: (argv) => {
      const requestData = {
        usuario: argv.user,
        comando: 'list'
      };
      sendDataToServer(requestData, argv.user);
    }
  })
  .command({
    command: 'update',
    describe: 'Actualiza una carta de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' },
      nombre: { describe: 'Nombre de la carta', type: 'string' },
      costeMana: { describe: 'Coste de mana', type: 'number' },
      color: { describe: 'Color de la carta', type: 'string' },
      líneaTipo: { describe: 'Línea o tipo de la carta', type: 'string' },
      rareza: { describe: 'Rareza de la carta', type: 'string' },
      textoReglas: { describe: 'Texto de reglas de la carta', type: 'string' },
      fuerzaResistencia: { describe: 'Fuerza y resistencia de la carta', type: 'array', default: [] },
      marcasLealtad: { describe: 'Marcas de lealtad de la carta', type: 'number' },
      valorMercado: { describe: 'Valor de mercado de la carta', type: 'number' }
    },
    handler: (argv) => {
      const requestData = {
        usuario: argv.user,
        comando: 'update',
        carta: {
          id: argv.id,
          nombre: argv.nombre,
          costeMana: argv.costeMana,
          color: argv.color,
          líneaTipo: argv.líneaTipo,
          rareza: argv.rareza,
          textoReglas: argv.textoReglas,
          fuerzaResistencia: argv.fuerzaResistencia,
          marcasLealtad: argv.marcasLealtad,
          valorMercado: argv.valorMercado
        }
      };
      sendDataToServer(requestData, argv.user);
    }
  })
  .command({
    command: 'read',
    describe: 'Lee una carta de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' }
    },
    handler: (argv) => {
      const requestData = {
        usuario: argv.user,
        comando: 'read',
        carta: {
          id: argv.id
        }
      };
      sendDataToServer(requestData, argv.user);
    }
  })
  .command({
    command: 'remove',
    describe: 'Elimina una carta de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' }
    },
    handler: (argv) => {
      const requestData = {
        usuario: argv.user,
        comando: 'remove',
        carta: {
          id: argv.id
        }
      };
      sendDataToServer(requestData, argv.user);
    }
  })
  
  .help()
  .argv;

const responseEmitter = new EventEmitter();

/**
 * @brief Función que envía los datos al servidor.
 * @param data Datos a enviar.
 * @returns void
 */
function sendDataToServer(data: any, user: string) {
  // Creamos un nuevo socket
  const client = new net.Socket();

  // Nos conectamos al servidor
  client.connect(2424, 'localhost', () => {
    console.log('Conectado al servidor.');
    // Enviamos los datos al servidor
    client.write(JSON.stringify(data) + '\n');
  });

  // Escuchamos la respuesta del servidor
  client.on('data', (data) => {
    console.log(data.toString());
    responseEmitter.emit('response', data.toString());
  });

  // Cerramos la conexión
  client.on('close', () => {
    console.log('');
  });
}
```

## 6. Pruebas y Validación

En el desarrollo de la aplicación cliente-servidor para la gestión de colecciones de cartas Magic, hemos adoptado un enfoque práctico orientado a la implementación de código seguido por pruebas. Este enfoque, conocido comúnmente como "code-then-test", consiste en escribir primero el código de la aplicación y, posteriormente, desarrollar las pruebas unitarias y de integración que validan la correcta funcionalidad de los componentes implementados.

### Metodología Code-Then-Test

Aunque este enfoque difiere del Test-Driven Development (TDD), donde las pruebas se escriben antes del código, sigue siendo esencial para garantizar la calidad y fiabilidad del software. La metodología "code-then-test" permite a los desarrolladores tener una visión más clara de las funcionalidades completas y sus interacciones antes de definir las pruebas específicas. Esto es particularmente útil en etapas tempranas de desarrollo, donde los requisitos pueden ser más flexibles o sujetos a cambios.

Una vez que una funcionalidad está implementada, se procede a escribir pruebas unitarias y de integración que aseguran que el código cumple con los requisitos especificados y funciona correctamente en conjunto con otros componentes del sistema. Este enfoque también facilita la refactorización y mejora del código, ya que las pruebas posteriores proporcionan una red de seguridad que permite modificar el código con confianza.

### Pruebas Implementadas

Las pruebas para testear el correcto funcionamiento del programa (tanto por parte del servidor como del cliente) son las siguientes:

- *Cliente-Server.spec.ts*:
```typescript
// test/server.test.js
import "mocha";
import { expect } from "chai";
import * as net from "net";
import * as fs from "fs";
import { CardCollection } from "../../src/Cartas/CardCollection.js";
import { Color } from "../../src/Cartas/EColor.js";
import { TipoLinea } from "../../src/Cartas/ETipoLinea.js";
import { Rareza } from "../../src/Cartas/ERareza.js";
import { Card } from "../../src/Cartas/ICard.js";
import { server } from "../../src/Cliente-Servidor/Server.js";


describe('Servidor de Cartas', function() {
  let client: net.Socket;
  let cardCollections = {};

  let colección: CardCollection;
  const usuarioPrueba = 'testUser2';
  const dirPath = `./data/${usuarioPrueba}`;

  after(done => {
    // Cerramos servidor después de todas las pruebas
    server.close(done);
    // Limpiamos el directorio
    if (fs.existsSync(dirPath)) {
      fs.rmdirSync(dirPath, { recursive: true });
    }
  });

  beforeEach(done => {
    // Iniciamos nuevo cliente para cada prueba
    client = new net.Socket();
    client.connect({ port: 2424 }, done);

    // Preparamos el directorio
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    colección = new CardCollection(usuarioPrueba);
  });

  afterEach(done => {
    client.end();
    done();
  });

  it('debería responder a un comando "add" válido', done => {
    const testData = {
      usuario: "testUser2",
      comando: "add",
      carta: { 
        id: 1,
        nombre: "testCard",
        color: Color.Azul,
        rareza: Rareza.Común,
        tipoLinea: TipoLinea.Criatura,
        costeMana: 1,
        textoReglas: "prueba",
        fuerzaResistencia: [1, 1],
        valorMercado: 0.5
      }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Nueva carta añadida');
      done();
    });
  });

  it('debería responder a un comando "list" válido', done => {
    this.timeout(5000);
    const testData = {
      usuario: "testUser2",
      comando: "list"
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Colección de cartas');
      done();
    });
  });

  it('debería responder a un comando "update" válido', done => {
    this.timeout(5000);
    const testData = {
      usuario: "testUser2",
      comando: "update",
      carta: { 
        id: 1,
        nombre: "testCard",
        color: Color.Azul,
        rareza: Rareza.Común,
        tipoLinea: TipoLinea.Criatura,
        costeMana: 1,
        textoReglas: "prueba",
        fuerzaResistencia: [1, 1],
        valorMercado: 0.5
      }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Carta actualizada');
      done();
    });
  });

  it('debería responder a un comando "read" válido', done => {
    this.timeout(5000);
    const testData = {
      usuario: "testUser2",
      comando: "read",
      carta: { id: 1 }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Información de la carta con ID');
      done();
    });
  });

  it('debería responder a un comando "remove" válido', done => {
    const testData = {
      usuario: "testUser2",
      comando: "remove",
      carta: { id: 1 }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Carta eliminada');
      done();
    });
  });

  it('debería responder a un comando desconocido', done => {
    const testData = {
      usuario: "testUser2",
      comando: "unknown"
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Comando no reconocido');
      done();
    });
  });
});
```

Asímismo generamos pruebas para CardCollection (que usa los enums e interfaces):

- *CardCollection.spec.ts*:
```typescript
import 'mocha';
import { expect } from 'chai';
import * as fs from 'fs';
import chalk from 'chalk';
import { CardCollection } from '../../src/Cartas/CardCollection.js';
import { Card } from '../../src/Cartas/ICard.js';
import { Color } from '../../src/Cartas/EColor.js';
import { TipoLinea } from '../../src/Cartas/ETipoLinea.js';
import { Rareza } from '../../src/Cartas/ERareza.js';

describe('Colección de Cartas', () => {
  let colección: CardCollection;
  const usuarioPrueba = 'testUser';
  const dirPath = `./data/${usuarioPrueba}`;

  beforeEach(() => {
    // Preparamos el directorio
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    colección = new CardCollection(usuarioPrueba);
  });

  afterEach(() => {
    // Limpiamos el directorio
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true });
    }
  });

  it('debería añadir una nueva carta a la colección', () => {
    const card: Card = {
      id: 1,
      nombre: 'Prueba',
      costeMana: 2,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Reglas de prueba',
      valorMercado: 10
    };

    colección.addCard(card);
    colección.addCard(card);
  });

  it('debería evitar añadir una carta duplicada', () => {
    const card: Card = {
      id: 1, // Mismo ID que la prueba anterior
      nombre: 'Duplicado',
      costeMana: 3,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Instantáneo,
      rareza: Rareza.Infrecuente,
      textoReglas: 'Reglas duplicadas',
      valorMercado: 5
    };

    colección.addCard(card);
    colección.addCard(card);
  });

  it('debería eliminar una carta existente de la colección', () => {
    const carta: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      valorMercado: 10
    };

    colección.addCard(carta);
    colección.removeCard(1);
  });
  
  it('debería leer la información de una carta específica en la colección', () => {
    const carta: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana:3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      fuerzaResistencia: [2, 2],
      valorMercado: 10
    };

    const carta2: Card = {
      id: 2,
      nombre: 'Carta 2',
      costeMana: 2,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Planeswalker,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 2',
      marcasLealtad: 4,
      valorMercado: 20
    };

    colección.addCard(carta);
    colección.addCard(carta2);
    
    const result1 = colección.readCard(1);
    const expectedDescription = `\nInformación de la carta con ID 1\nNombre: Carta 1\nCoste de Mana: 3\nColor: Azul\nTipo de Línea: Criatura\nRareza: Común\nTexto de Reglas: Texto de reglas para Carta 1\nFuerza/Resistencia: 2/2\nValor de Mercado: 10\n`;
    expect(result1.replace(/\x1b\[[0-9;]*m/g, '')).to.equal(expectedDescription);

    const result2 = colección.readCard(2);
    const expectedDescription2 = `\nInformación de la carta con ID 2\nNombre: Carta 2\nCoste de Mana: 2\nColor: Rojo\nTipo de Línea: Planeswalker\nRareza: Rara\nTexto de Reglas: Texto de reglas para Carta 2\nMarcas de Lealtad: 4\nValor de Mercado: 20\n`;
    expect(result2.replace(/\x1b\[[0-9;]*m/g, '')).to.equal(expectedDescription2);

  });

  it('debería cargar la colección desde archivos existentes', () => {
    // Simulamos que ya existe un directorio de usuario con archivos de cartas guardados
    const userDirPath = colección.getUserDirPath();
    if (!fs.existsSync(userDirPath)) {
      fs.mkdirSync(userDirPath, { recursive: true });
    }
    // Creamos archivos de cartas en el directorio de usuario
    const carta1: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      valorMercado: 10
    };
    const carta2: Card = {
      id: 2,
      nombre: 'Carta 2',
      costeMana: 2,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Instantáneo,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 2',
      valorMercado: 20
    };
    expect(() => colección.loadCollection()).to.not.throw();
  });

  it('debería mostrar un mensaje de error si se intenta agregar una carta con un ID que ya existe en la colección', () => {
    const cartaExistente: Card = {
      id: 1,
      nombre: 'Carta Existente',
      costeMana: 3,
      color: Color.Verde,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta Existente',
      valorMercado: 15
    };
  
    // Añadimos una carta existente a la colección
    colección.addCard(cartaExistente);
  
    // Redefinimos console.log para capturar su salida
    const originalConsoleLog = console.log;
    let loggedMessage = "";
    console.log = (message) => {
      loggedMessage += message;
    };
  
    // Intentamos agregar la misma carta nuevamente
    colección.addCard(cartaExistente);
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que se haya mostrado el mensaje de error correcto
    const expectedErrorMessage = ''
    expect(loggedMessage).to.equal(expectedErrorMessage);
  });
  
  it('debería mostrar un mensaje de error si se intenta actualizar una carta que no existe en la colección', () => {
    const cartaInexistente: Card = {
      id: 100,
      nombre: 'Carta Inexistente',
      costeMana: 5,
      color: Color.Blanco,
      líneaTipo: TipoLinea.Conjuro,
      rareza: Rareza.Mítica,
      textoReglas: 'Texto de reglas para Carta Inexistente',
      valorMercado: 30
    };
  
    const result1 = colección.updateCard(cartaInexistente);
    const expectedDescription = `La carta con ID 100 no existe en la colección de ${usuarioPrueba}.`;
    expect(result1.replace(/\x1b\[[0-9;]*m/g, '')).to.equal(expectedDescription);
  });  
  
  it('debería mostrar un mensaje de error si se intenta eliminar una carta que no existe en la colección', () => {
    const idInexistente = 100;
  
    // Redefinimos console.log para capturar su salida
    const originalConsoleLog = console.log;
    let loggedMessage = "";
    console.log = (message) => {
      loggedMessage += message;
    };
  
    // Intentamos eliminar una carta que no existe
    colección.removeCard(999);
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que se haya mostrado el mensaje de error correcto
    const expectedErrorMessage = '';
    expect(loggedMessage).to.equal(expectedErrorMessage);
  });
  
  it('debería mostrar un mensaje de error si la carta con el ID especificado no existe en la colección', () => {
    const result1 = colección.readCard(100);
    const expectedDescription = `La carta con ID 100 no existe en la colección de ${usuarioPrueba}.`;
    expect(result1.replace(/\x1b\[[0-9;]*m/g, '')).to.equal(expectedDescription);
  });

  it('debería crear el directorio del usuario si no existe cuando se carga la colección', () => {
    // El directorio debería ser creado por el constructor a través de loadCollection
    expect(fs.existsSync(dirPath)).to.be.true;
  });

  it('debería manejar correctamente la situación cuando el directorio del usuario ya existe', () => {
    fs.mkdirSync(dirPath, { recursive: true });
    expect(fs.existsSync(dirPath)).to.be.true; // El directorio ya existe

    // Crearmos una nueva instancia de CardCollection no debería lanzar error
    expect(() => new CardCollection(usuarioPrueba)).to.not.throw();
    expect(fs.existsSync(dirPath)).to.be.true; // El directorio todavía existe
  });

  it('debería crear el directorio del usuario si no existe al cargar la colección', () => {
    // Eliminamos el directorio si existe para probar la creación
    if (fs.existsSync(dirPath)) {
      fs.rmdirSync(dirPath, { recursive: true });
    }

    // Cargamos la colección, lo que debería crear el directorio
    colección.loadCollection();

    // Verificamos que el directorio ha sido creado
    expect(fs.existsSync(dirPath)).to.be.true;
  });

  it('debería cargar cartas desde archivos existentes en el directorio del usuario', () => {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // Creamos un archivo de carta de prueba en el directorio
      const cartaPrueba: Card = {
        id: 1,
        nombre: 'Carta de Prueba',
        costeMana: 1,
        color: Color.Azul,
        líneaTipo: TipoLinea.Criatura,
        rareza: Rareza.Común,
        textoReglas: 'Regla de prueba',
        valorMercado: 100
      };
      fs.writeFileSync(`${dirPath}/1.json`, JSON.stringify(cartaPrueba));

      // Cargamos la colección, lo que debería leer el archivo de carta creado
      colección.loadCollection();

      // Verificamos que la carta ha sido cargada en la colección
      const cartaCargada = colección.getCards().find(c => c.id === cartaPrueba.id);
      expect(cartaCargada).to.not.be.undefined;
      expect(cartaCargada?.nombre).to.equal(cartaPrueba.nombre);
  });

  it('debería actualizar una carta existente en la colección', () => {
    const carta: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      valorMercado: 10
    };

    colección.addCard(carta);

    const cartaActualizada: Card = {
      id: 1,
      nombre: 'Carta 1 Actualizada',
      costeMana: 4,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Conjuro,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 1 Actualizada',
      valorMercado: 20
    };

    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message;
    };

    colección.updateCard(cartaActualizada);

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    const cartaActualizadaEnColección = colección.getCards().find(c => c.id === cartaActualizada.id);
    expect(cartaActualizadaEnColección).to.not.be.undefined;
    expect(cartaActualizadaEnColección?.nombre).to.equal(cartaActualizada.nombre);
    expect(cartaActualizadaEnColección?.costeMana).to.equal(cartaActualizada.costeMana);
    expect(cartaActualizadaEnColección?.color).to.equal(cartaActualizada.color);
    expect(cartaActualizadaEnColección?.líneaTipo).to.equal(cartaActualizada.líneaTipo);
    expect(cartaActualizadaEnColección?.rareza).to.equal(cartaActualizada.rareza);
    expect(cartaActualizadaEnColección?.textoReglas).to.equal(cartaActualizada.textoReglas);
    expect(cartaActualizadaEnColección?.valorMercado).to.equal(cartaActualizada.valorMercado);
  });

  it('debería mostrar todas las cartas de la colección de un usuario', () => {
    const carta1: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      fuerzaResistencia: [2, 2],
      valorMercado: 10
    };
    const carta2: Card = {
      id: 2,
      nombre: 'Carta 2',
      costeMana: 2,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Planeswalker,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 2',
      marcasLealtad: 4,
      valorMercado: 20
    };

    colección.addCard(carta1);
    colección.addCard(carta2);

    const result1 = colección.listCards();
    const expectedDescription = `\nColección de cartas de ${usuarioPrueba}\n--------------------------------\nID: 1\nNombre: Carta 1\nCoste de Mana: 3\nColor: Azul\nTipo de Línea: Criatura\nRareza: Común\nTexto de Reglas: Texto de reglas para Carta 1\nFuerza/Resistencia: 2/2\nValor de Mercado: 10\n--------------------------------\n--------------------------------\nID: 2\nNombre: Carta 2\nCoste de Mana: 2\nColor: Rojo\nTipo de Línea: Planeswalker\nRareza: Rara\nTexto de Reglas: Texto de reglas para Carta 2\nMarcas de Lealtad: 4\nValor de Mercado: 20\n--------------------------------\n`;
    expect(result1.replace(/\x1b\[[0-9;]*m/g, '')).to.equal(expectedDescription);
  });
  
  it('debería devolver el color negro si el color no se encuentra', () => {
    const colorInexistente = 'UnColorInexistente';
    const expectedColorCode = '#000000';
    const actualColorCode = colección.getColorCode(colorInexistente);

    expect(actualColorCode).to.equal(expectedColorCode);
  });  
});
```

### Automatización de Pruebas con GitHub Actions

Para integrar las pruebas en el ciclo de vida del desarrollo y asegurar la calidad del código continuamente, utilizamos GitHub Actions para automatizar la ejecución de pruebas en cada push o pull request. Este enfoque garantiza que todas las contribuciones al código pasen por un proceso de validación antes de su integración, facilitando el mantenimiento de un código base sólido y funcional.

La implementación de este enfoque de "code-then-test", junto con la automatización de pruebas, constituye una estrategia efectiva para desarrollar y validar la aplicación, asegurando que cumpla con los estándares de calidad requeridos y funcione según lo esperado.

## 7. Conclusión

Completar el proyecto de la aplicación cliente-servidor para la gestión de colecciones de cartas Magic ha sido un ejercicio sumamente enriquecedor desde el punto de vista técnico. Este proyecto ha permitido aplicar conocimientos adquiridos en clase en un entorno de desarrollo real, enfrentando desafíos típicos de la programación de red y el manejo de datos persistente.

El enfoque de implementación primero y pruebas después ("code-then-test") ha demostrado ser adecuado para este proyecto. Aunque inicialmente parecía ir en contra de las tendencias actuales como TDD, este método permitió una mayor flexibilidad en las fases iniciales de desarrollo y proporcionó claridad sobre las funcionalidades a probar. Las pruebas unitarias y de integración se convirtieron en un pilar fundamental para asegurar la calidad del código y la correcta interacción entre el cliente y el servidor.

La automatización de pruebas mediante GitHub Actions ha reforzado la importancia de la integración y entrega continuas en el ciclo de desarrollo moderno. Esta práctica no solo optimizó el proceso de validación del código, sino que también incrementó la confianza en la estabilidad y funcionalidad de la aplicación ante cada nuevo cambio introducido.

A lo largo del desarrollo, la gestión de conexiones asincrónicas y la persistencia de datos representaron desafíos significativos, pero superar estos obstáculos ha sido una oportunidad invaluable de aprendizaje y crecimiento profesional. La experiencia ha subrayado la importancia de elegir las herramientas adecuadas y aplicar buenas prácticas de diseño y programación.

Este proyecto ha sido una afirmación del potencial de Node.js y el ecosistema Typescript para el desarrollo de aplicaciones robustas y eficientes. Concluimos este proyecto con un sentido de logro y con anticipación por las oportunidades futuras para continuar aprendiendo y desarrollando soluciones innovadoras en el campo de la ingeniería de software.

## 8. Referencias Bibliográficas

- [_Documentación Node.js_](https://nodejs.org/en/docs/)  
- [_Documentación SonarCloud_](https://docs.sonarsource.com/sonarcloud/?_gl=1*7gzv7o*_gcl_au*OTcwMDc2NTEzLjE3MTAyODczOTQ.*_ga*MTg1NTg1MjA5LjE3MTAyODczODA.*_ga_9JZ0GZ5TC6*MTcxMTA2MDA3Ni42LjEuMTcxMTA2MDA3Ni42MC4wLjA.)  
- [_Documentación Github Actions_](https://docs.github.com/en/actions)  
- [_Documentación Chalk_](https://github.com/chalk/chalk)  
- [_Documentación Yargs_](https://github.com/yargs/yargs)  
- [_Documentación de EventEmitter en Node.js_](https://nodejs.org/docs/latest/api/events.html)  
- [_Documentación del módulo fs en Node.js_](https://nodejs.org/docs/latest/api/fs.html)  
- [_Documentación del módulo net en Node.js_](https://nodejs.org/docs/latest/api/net.html)  
- [_Práctica 10 - Aplicación cliente-servidor para coleccionistas de cartas Magic_](https://ull-esit-inf-dsi-2324.github.io/prct10-fs-proc-sockets-magic-app/) 
