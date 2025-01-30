# Informe de Práctica 4: Arrays, Tuplas y Enumerados en TypeScript

| **Autor** | **Profesor** | **Asignatura** | **Universidad** | **Ubicación** | **Fecha** | 
|--------------|--------------|--------------|--------------|--------------|--------------|
| ***TOMÁS JAVES TOMMASONE*** | ***Dr. EDUARDO MANUEL SEGREDO GONZALEZ*** | ***DESARROLLO DE SISTEMAS INFORMÁTICOS*** | ***UNIVERSIDAD DE LA LAGUNA*** | ***SAN CRISTOBAL DE LA LAGUNA*** | ***17/02/2024*** |


#### Índice:  
1. [_Objetivo_](#1-objetivo)
2. [_Tareas Previas_](#2-tareas-previas)
3. [_Ejercicios Propuestos_](#3-ejercicios-propuestos)  
3.1 [Ejercicio 1 - Números Racionales](#ejercicio-1---numeros-racionales)  
3.2 [Ejercicio 2 - Señales Corporales](#ejercicio-2---señales-corporales)  
3.3 [Ejercicio 3 - Scrabble](#ejercicio-3---scrabble)  
3.4 [Ejercicio 4 - Recolección de Objetos](#ejercicio-4---recolección-de-objetos)  
3.5 [Ejercicio 5 - Tablas de Multiplicar](#ejercicio-5---tablas-de-multiplicar)  
3.6 [Ejercicio 6 - Factoría de Multiplicaciones](#ejercicio-6---factoría-de-multiplicaciones)  
3.7 [Ejercicio 7 - El Cartesiano](#ejercicio-7---el-cartesiano)  
3.8 [Ejercicio 8 - Todos los Caminos Llevan a Roma](#ejercicio-8---todos-los-caminos-llevan-a-roma)  
3.9 [Ejercicio 9 - Operaciones con Listas](#ejercicio-9---operaciones-con-listas)  
3.10 [Ejercicio 10 - Menús Saludables](#ejercicio-10---menús-saludables)  

## 1. Objetivo
El propósito de esta práctica es adentrarnos en el manejo de estructuras de datos complejas como arrays, tuplas y enumerados en TypeScript, aplicando estos conceptos a la resolución de problemas prácticos.  
Buscamos no solo entender su sintaxis y uso básico, sino también cómo estos tipos de datos pueden ser utilizados para implementar soluciones eficientes y elegantes a problemas de programación cotidianos y específicos. A través de una serie de ejercicios diseñados para explorar diversas operaciones, pretendemos consolidar nuestra comprensión de TypeScript como herramienta poderosa en el desarrollo de software, enfocando en la precisión, claridad y eficiencia del código.

## 2. Tareas Previas
Antes de embarcarnos en la resolución de los ejercicios propuestos, realizamos una serie de preparativos esenciales.

Comenzamos aceptando la asignación de GitHub Classroom, lo que nos proporcionó un repositorio inicial donde alojaríamos todas las soluciones. Posteriormente, dedicamos tiempo a revisar la documentación sobre TypeDoc, una herramienta de documentación para TypeScript, lo que nos permitiría documentar de manera efectiva nuestros desarrollos. Además, visualizamos un video tutorial sobre la configuración y uso de TypeDoc, asegurando que podríamos aplicarlo correctamente en nuestro proyecto.

Igualmente, profundizamos en el aprendizaje de Mocha y Chai, herramientas esenciales para el desarrollo dirigido por pruebas (TDD) y el desarrollo dirigido por el comportamiento (BDD). A través de la documentación y un video tutorial específico, adquirimos los conocimientos necesarios para integrar estas prácticas de pruebas en nuestra metodología de trabajo, lo que nos permitiría verificar la corrección de nuestras soluciones y su robustez ante entradas inesperadas.

## 3. Ejercicios Propuestos
### Ejercicio 1 - Numeros Racionales
Para abordar la representación y manipulación de números racionales, definimos un tipo de datos Racional como una tupla de dos números, representando el numerador y el denominador. Implementamos funciones para operaciones básicas como el valor absoluto, el inverso multiplicativo, la suma, resta, multiplicación y división de racionales. La clave de nuestra solución fue la función simplificar, que utiliza el máximo común divisor (calculado mediante el algoritmo de Euclides) para reducir los racionales a su forma más simple. Este enfoque no solo garantiza la precisión de las operaciones, sino que también optimiza la representación de los resultados.

### Ejercicio 2 - Señales Corporales
Desarrollamos un enumerado SeñalesCorporales para representar las distintas señales que podrían ser usadas para comunicar un número entero mediante gestos corporales. La función fromIntToActions traduce un número dado en una secuencia de señales, utilizando operaciones a nivel de bits para determinar la combinación de señales requerida. Este ejercicio nos permitió explorar el uso práctico de enumerados y la manipulación de bits en TypeScript.

### Ejercicio 3 - Scrabble
Para calcular la puntuación de palabras en Scrabble, diseñamos un enumerado ScrabbleScore que asigna valores a cada letra y combinación especial del alfabeto español. La función getScore calcula la puntuación total de una lista de palabras, considerando las reglas del juego y sustituyendo letras acentuadas. Este ejercicio destacó la importancia de la abstracción y el manejo de cadenas en la implementación de reglas de negocio complejas.

### Ejercicio 4 - Recolección de Objetos
La función getPoints calcula los puntos obtenidos por un jugador basándose en los objetos recolectados durante una fase del juego. Empleamos un enfoque que combina la generación de múltiplos y su posterior filtrado para eliminar duplicados, ilustrando una técnica efectiva para el manejo de arrays y operaciones numéricas en TypeScript.

### Ejercicio 5 - Tablas de Multiplicar
Implementamos productTable para generar un array de arrays con las tablas de multiplicar hasta un número N. Este ejercicio nos permitió practicar la creación dinámica de estructuras de datos complejas y reforzó nuestra comprensión de los bucles y el control de flujo en TypeScript.

### Ejercicio 6 - Factoría de Multiplicaciones
La función multiplyAll representa un enfoque funcional al problema de multiplicación de arrays, donde retorna una función que, al ser llamada con un número, multiplica cada elemento de un array inicial por este número. Este ejercicio nos permitió explorar el concepto de clausuras en TypeScript, demostrando cómo una función puede recordar y acceder a variables de su ámbito léxico, incluso después de que la función externa ha terminado de ejecutarse.

### Ejercicio 7 - El Cartesiano
En getCartesianPath, se plantea un problema de caminos en una cuadrícula, donde necesitamos asegurarnos de que el camino propuesto por la aplicación cumpla con el tiempo estipulado exactamente. La solución implica un conteo cuidadoso de los movimientos hacia el norte, sur, este y oeste, y valida que, al final del recorrido, el usuario regrese al punto de partida. Este ejercicio pone en práctica el manejo de arrays y enum, además de introducir conceptos básicos de algoritmos de búsqueda y validación de datos de entrada.

### Ejercicio 8 - Todos los Caminos Llevan a Roma
getPaths nos desafía a encontrar todas las rutas posibles a través de una matriz desde la esquina superior izquierda hasta la inferior derecha, moviéndonos únicamente hacia la derecha o hacia abajo. La solución se aborda mediante la recursividad, explorando cada posible movimiento en cada paso y construyendo gradualmente las rutas completas. Este ejercicio profundiza en el uso de recursión para explorar espacios de soluciones y la manipulación de estructuras de datos complejas.

### Ejercicio 9 - Operaciones con Listas
Este conjunto de funciones para operar sobre listas (arrays en TypeScript) nos permite practicar la implementación de operaciones fundamentales de programación funcional sin recurrir a los métodos incorporados de los arrays. Cada función, desde append hasta reverse, está diseñada para manipular y transformar arrays de manera pura (sin modificar los arrays originales), poniendo en práctica principios como inmutabilidad y composición funcional. Este ejercicio es fundamental para comprender cómo las operaciones sobre estructuras de datos se pueden componer de operaciones más simples y reutilizables.

### Ejercicio 10 - Menús Saludables
En este ejercicio, se nos pide diseñar un sistema para crear menús saludables a partir de una lista de platos, cada uno con un valor nutricional y un grado de insalubridad. A través de tres heurísticas diferentes, exploramos diferentes estrategias de selección de platos para maximizar el valor nutricional total sin exceder un límite de insalubridad. Este problema nos lleva a considerar cómo diferentes enfoques algorítmicos pueden llevar a resultados óptimos bajo diferentes criterios, y cómo podemos diseñar funciones en TypeScript para abordar problemas complejos de optimización y toma de decisiones.

## 4. Conclusión
La realización de esta práctica ha sido una inmersión profunda en las capacidades de TypeScript para abordar una variedad de problemas de programación, desde la manipulación de datos básica hasta la implementación de algoritmos complejos y la optimización de decisiones. A través de la resolución de estos ejercicios, hemos reforzado nuestra comprensión de los principios de la programación funcional, el diseño de algoritmos y la importancia de escribir código limpio y mantenible. Estos desafíos no solo han mejorado nuestras habilidades técnicas, sino que también han agudizado nuestra capacidad para pensar de manera crítica y creativa en la búsqueda de soluciones eficientes.

## 5. Referencias Bibliográficas
- ["Effective TypeScript: 62 Specific Ways to Improve Your TypeScript"](https://books.google.es/books?id=wD63DwAAQBAJ&printsec=copyright&redir_esc=y#v=onepage&q&f=false) por Dan Vanderkam.
- ["Programming TypeScript: Making Your JavaScript Applications Scale"](https://books.google.es/books?id=Y-mUDwAAQBAJ&printsec=copyright&redir_esc=y#v=onepage&q&f=false) por Boris Cherny.
- Documentación oficial de TypeScript: [TypeScript Documentation](https://www.typescriptlang.org/docs/).
- TypeDoc: [TypeDoc](https://typedoc.org).
- Mocha: [Mocha](https://mochajs.org).
