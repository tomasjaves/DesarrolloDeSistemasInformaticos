# Informe de Práctica 2: Instalación y configuración de Visual Studio Code

| **Autor** | **Profesor** | **Asignatura** | **Universidad** | **Ubicación** | **Fecha** | 
|--------------|--------------|--------------|--------------|--------------|--------------|
| ***TOMÁS JAVES TOMMASONE*** | ***Dr. EDUARDO MANUEL SEGREDO GONZALEZ*** | ***DESARROLLO DE SISTEMAS INFORMÁTICOS*** | ***UNIVERSIDAD DE LA LAGUNA*** | ***SAN CRISTOBAL DE LA LAGUNA*** | ***30/01/2024*** |


#### Índice:  
1. [_Objetivo_](#1-objetivo)
2. [_Tareas Previas_](#2-tareas-previas)
3. [_Visual Studio Code_](#3-visual-studio-code)  
3.1 [_Instalación de Visual Studio Code_](#instalación-de-visual-studio-code)  
3.2 [_Configuración Básica y Avanzada_](#configuración-básica-y-avanzada)  
3.3 [_Configuración de Visual Studio Code para Conectarse a una Máquina Remota por SSH_](#configuración-de-visual-studio-code-para-conectarse-a-una-máquina-remota-por-ssh)  
3.4 [_Sesiones Colaborativas con Visual Studio Live Share_](#sesiones-colaborativas-con-visual-studio-live-share)  
4. [_Creación de un Proyecto Inicial para Trabajar con TypeScript_](#4-creación-de-un-proyecto-inicial-para-trabajar-con-typescript)  
4.1 [_Comprobación y Resolución de Errores en la Lógica del Código con ESLint_](#comprobación-y-resolución-de-errores-en-la-lógica-del-código-con-eslint)  
4.2 [_Formateo del Código con Prettier_](#formateo-del-código-con-prettier)  
5. [_Conclusión_](#5-conclusión)
6. [_Referencias Bibliográficas_](#6-referencias-bibliográficas)

## 1. Objetivo
En este informe veremos cómo abordar la instalación y configuración de Visual Studio Code, el entorno de desarrollo elegido para la asignatura. Detallaremos cada paso seguido y cómo superamos los desafíos encontrados.

## 2. Tareas Previas
La primera tarea fue aceptar la asignación de la práctica en GitHub Classroom, lo que no permitió abordar todos los trabajos de nuestro proyecto dentro de un marco educativo.

Si en la práctica anterior no habíamos leído la introducción a Markdown proporcionada mediante un enlace, se nos pedía volver a leerlo pero este no fue el caso, por ende, continuamos con la siguiente tarea, la cuál constaba del aprendizaje sobre configuraciones de GitHub Pages pero, como en el caso anterior, ya lo habíamos hecho.

Una vez completadas estas tareas, podíamos proceder con la instalación y configuración del entorno de trabajo que, en nuestro caso, es Visual Studio Code.

## 3. Visual Studio Code
### Instalación de Visual Studio Code
- Para empezar con la instalación, en nuestra máquina local debemos ejecutar el siguiente comando para instalar el entorno de trabajo:
> sudo snap install code --classic

### Configuración Básica y Avanzada
Una vez instalado el entorno se nos aportan varios enlaces para aprender las funcionalidades básicas de Visual Studio Code junto con algunos tutoriales que nos sirven de guía para poder comprender el entorno y desarrollarnos de manera eficiente.

### Configuración de Visual Studio Code para Conectarse a una Máquina Remota por SSH
La configuración de Visual Studio Code (VSCode) para conectar con una máquina remota del IaaS por SSH es un proceso integral que comienza con la configuración del entorno local y la máquina virtual. Tras completar la Práctica 1 de DSI, la configuración SSH y la conexión VPN a la ULL ya estaban establecidas. Esto incluyó la generación de claves SSH y la verificación de que estas claves estaban correctamente asociadas a las cuentas de usuario tanto en la máquina local como en la virtual.

Para la conexión remota SSH, el primer paso fue abrir VSCode y navegar al Extension Marketplace, donde buscamos e instalamos la extensión 'Remote - SSH'. Esta extensión es muy importante, ya que permite que VSCode se conecte y ejecute una instancia de sí mismo en la máquina remota, brindando un entorno de desarrollo coherente independientemente de la ubicación física de la máquina.

- Una vez instalada la extensión, procedemos a configurar la conexión SSH. Esto se hizo abriendo la paleta de comandos con:
> _Ctrl + Shift + P_

En el menú de opciones, tecleamos ***"ssh"***, y seleccionando ***"Connect to Host..."***. Como ya se había completado la configuración del archivo ***~/.ssh/config*** durante la Práctica 1, la máquina virtual apareció listada en las opciones. 

En el archivo ***~/.ssh/config***, se había especificado el nombre de host (iaas-dsi), el nombre de usuario y la dirección IP de nuestra máquina virtual.

- Al seleccionar mi máquina virtual, VSCode inició una nueva instancia conectada a través de SSH. Comprobé la conexión exitosa abriendo una terminal en VSCode con el comando:
> _Ctrl + Shift + " "_

- Y ejecutando el comando: 
> _hostname_

Que confirmó que estaba operando en la máquina virtual ***iaas-dsi***.

### Sesiones Colaborativas con Visual Studio Live Share
La siguiente fase de la práctica involucró el uso de Visual Studio Live Share, una extensión diseñada para el desarrollo colaborativo en tiempo real. Live Share transforma el proceso de codificación en una experiencia colectiva, permitiendo que múltiples desarrolladores editen y depuren código simultáneamente en diferentes máquinas.

Procedimos entonces con la instalación de Live Share a través del Extension Marketplace de VSCode. Un detalle importante a tener en cuenta es que al estar conectado a una máquina remota por SSH, las extensiones se instalan en esa máquina remota y no en la máquina local. Por lo tanto, desconectamos la sesión SSH para instalar Live Share en la máquina local primero y luego hay que repetir el proceso en la máquina remota para mantener la coherencia en el entorno de desarrollo.

Una vez instalada, podemos iniciar una sesión de Live Share siguiendo las instrucciones proporcionadas en la sección 'Quickstart' de la documentación de Live Share y compartir el enlace de la sesión con algunos compañeros para determinar las características de la extensión; como el chat integrado y la pizarra (Live Share Whiteboard), que pueden ser herramientas útiles para la comunicación y la planificación durante el desarrollo colaborativo.

## 4. Creación de un Proyecto Inicial para Trabajar con TypeScript
- Para iniciar con el desarrollo de un proyecto en TypeScript, el primer paso fue la creación de un nuevo directorio para el proyecto, denominado "theory-examples". Esto se realizó a través de la terminal integrada en VSCode, utilizamos:
> _mkdir theory-examples_

- Y el comando:
> _cd theory-examples_

- Una vez en el directorio del proyecto, ejecutamos el comando para generar automáticamente un fichero ***package.json***, que es esencial para la gestión de dependencias de desarrollo y ejecución del proyecto:
> _npm init --yes_

Este archivo contiene metadatos relevantes del proyecto, como el nombre, versión, descripción y scripts.

- El siguiente paso importante fue la instalación del compilador de TypeScript. Utilizamos el comando para instalar TypeScript globalmente en mi máquina:
> _npm install --global typescript_

- Esto facilita el uso del compilador TypeScript (tsc) en cualquier proyecto en mi sistema. Tras la instalación, verifiqué la versión del compilador con el comando: 
> _tsc --version_

Confirmando que la ***versión 5.3.3*** estaba correctamente instalada.

Posteriormente, creamos un fichero ***tsconfig.json*** en la raíz del proyecto. Este archivo es importante ya que contiene las opciones de configuración del compilador TypeScript.

- Editamos este archivo con los siguientes atributos:
>{  
  "compilerOptions": {  
    "target": "es2022",  
    "module": "commonjs",  
    "rootDir": "./src",  
    "outDir": "./dist"  
  }  
}

Con esto logramos especificar opciones como el ***target*** (versión de ECMAScript para el código compilado), ***module*** (sistema de módulos a usar), ***rootDir*** (directorio que contiene los archivos TypeScript) y ***outDir*** (directorio donde se colocarán los archivos JavaScript compilados).  
Establecimos estas opciones para asegurar que el código generado sea compatible con versiones recientes de JavaScript y para organizar claramente los archivos fuente y compilados.

Para mantener una estructura de proyecto clara y con concordancia con lo dicho anteriormente, creamos dos directorios adicionales, ***src*** y ***dist***. El directorio "src" contiene los archivos TypeScript (.ts), mientras que dist alberga los archivos JavaScript compilados.

- Con el fin de mejorar la eficiencia del desarrollo, instalamos el paquete ***"tsc-watch"*** usando el comando:
> _npm install --save-dev tsc-watch_

Este paquete permite la recompilación automática del código TypeScript en el directorio "src" cada vez que se detectan cambios.  
Modificamos el archivo ***package.json*** para incluir un script "start" que utiliza tsc-watch. Esto permite ejecutar automáticamente el código JavaScript compilado en "dist" cada vez que se completa con éxito una recompilación.

- El contenido que debería incluir este archivo es el siguiente:
> {  
  "name": "theory-examples",  
  "version": "1.0.0",  
  "description": "",  
  "main": "index.js",  
  "scripts": {  
    "start": "tsc-watch --onSuccess \"node dist/index.js\""  
  },  
  "keywords": [],  
  "author": "",  
  "license": "ISC",  
  "devDependencies": {  
    "tsc-watch": "^6.0.4"  
  }  
}  

- Para un ejemplo inicial, escribimos un simple script TypeScript "index.ts" en el directorio "src", que simplemente declara una variable de cadena que contiene la sentencia "Hola Mundo" y la imprime en la consola, es decir, el contenido que contiene este script es el siguiente:  
> const myString: string = "Hola Mundo";
console.log(myString);

- Luego ejecuté:
> _npm start_

Lo que inició el proceso de compilación y ejecución automática, verificando que todo estaba funcionando como se esperaba.

### Comprobación y Resolución de Errores en la Lógica del Código con ESLint
Para asegurar la calidad del código y resolver errores lógicos, decidimos utilizar ***ESLint***, un linter popular para JavaScript y TypeScript.  
- Instalamos entonces ESLint globalmente con el comando:
> _npm i -g eslint_

Y, posteriormente, para configurarlo en mi proyecto:
> _eslint --init_

Durante la inicialización seleccionamos opciones adecuadas para el entorno de desarrollo, incluyendo el uso de TypeScript y Node.js.

- Una vez seleccionadas las opciones, podemos comprobar que se generó un archivo de configuración ".eslintrc.json" el cuál contiene la siguiente información:
> {  
    "env": {  
        "es2021": true,  
        "node": true  
    },  
    "extends": [  
        "eslint:recommended",  
        "plugin:@typescript-eslint/recommended"  
    ],  
    "parser": "@typescript-eslint/parser",  
    "parserOptions": {  
        "ecmaVersion": "latest"  
    },  
    "plugins": [  
        "@typescript-eslint"  
    ],  
    "rules": {  
    }  
}  

Cabe mencionar asimismo que podemos activar/desactivar reglas en la propiedad "rules".  
También instalamos las dependencias necesarias, incluyendo "@typescript-eslint/parser". Esta herramienta permite a ESLint entender y verificar correctamente el código TypeScript.

Para excluir ciertos archivos y directorios del proceso de linting, como los archivos TypeScript en el directorio "dist", creamos un archivo ".eslintignore".  
- Este archivo debería contener lo siguiente:
> _cat .eslintignore_
$ dist/

Luego ejecutamos ESLint en todo el proyecto para identificar y corregir advertencias y errores, lo que nos ayudará a mantener un código limpio y conforme a las buenas prácticas. Esto lo hacemos mediante el siguiente comando:
> _eslint ._

### Formateo del Código con Prettier
Para el formateo del código elegimos usar el paquete "Prettier" y "eslint-config-prettier". Este último nos permite integrar Prettier con ESLint, asegurando que las reglas de formateo de ESLint no entran en conflicto con las de Prettier.
- Para la instalación, aplicamos siguiente comando:
> _npm i --save-dev prettier eslint-config-prettier_

 Asimismo añadimos "prettier" al final de la propiedad "extends" en el archivo ".eslintrc.json" para sobreescribir cualquier regla de ESLint que pudiera interferir con Prettier.  
 - El archivo (".eslintrc.json") debe contener entonces:
> {  
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
    }  
}  

Posteriormente, creamos un archivo de configuración para Prettier, ".prettierrc.json", donde especificamos algunas reglas de formateo personalizadas, esto incluye preferencias como el uso de comillas simples y la inserción de punto y coma al final de las líneas, además, creamos un archivo ".prettierignore" para excluir directorios y archivos específicos del formateo, asegurando que solo los archivos fuente sean formateados.  
- El archivo (".prettierignore") contendrá entonces:
> dist  
.eslintrc.json  
.pretterignore  
.prettierrc.json  
package-lock.json  
package.json  
tsconfig.json  

Para aplicar el formateo a nuestros códigos, utilizamos el siguiente comando en la raíz del proyecto:
> _npx prettier --write ._

Esto reescribe todos los archivos ".ts" en el directorio src siguiendo las reglas especificadas. Este paso garantizó que todo el código fuente mantuviera una consistencia de estilo, mejorando la legibilidad y reduciendo la posibilidad de errores sintácticos.

Por último, para proceder con la integración de Prettier en el entorno de desarrollo de VSCode, instalamos la extensión de Prettier y configuramos VSCode para utilizar Prettier como el formateador por defecto para archivos TypeScript. Esto lo conseguimos ejecutando:
> _Click derecho en el código a formatear_  
> _Click en "Format Document With..."_  
> _Click en "Configure Default Formatter"_  
> _Click en Prettier - Code formatter_  

Esto nos permite formatear automáticamente el código cada vez que se guarda un archivo, integrando el formateo en el flujo de trabajo diario sin esfuerzo adicional.  
- Para poner esto en práctica ejecutamos el siguiente comando cada vez que queramos hacer uso de Prettier en nuestro código:
> _Shift + Alt + F_

## 5. Conclusión
La creación de este proyecto inicial con TypeScript en VSCode, complementado con herramientas de desarrollo como ESLint y Prettier, demostró ser una base sólida para el desarrollo de software.  
La integración de estas herramientas en el entorno de desarrollo no solo mejoró la eficiencia y la calidad del código, sino que también proporcionó un flujo de trabajo más fluido y automatizado.  
Este enfoque estructurado y bien organizado es esencial para proyectos de cualquier escala, asegurando que el código sea mantenible, escalable y fácil de entender para cualquier desarrollador que se una al proyecto en el futuro.

## 6. Referencias Bibliográficas
- _Práctica 2. Práctica 2 - Instalación y configuración de Visual Studio Code:_ [https://ull-esit-inf-dsi-2324.github.io/prct02-vscode/](#https://ull-esit-inf-dsi-2324.github.io/prct02-vscode/)
- _Práctica 2. Creación de un proyecto inicial para trabajar con TypeScript:_ [https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-project-setup.html](#https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-project-setup.html)
