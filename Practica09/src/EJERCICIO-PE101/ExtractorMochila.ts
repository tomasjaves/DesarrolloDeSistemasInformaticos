import { Hook } from "./Hook.js";
import * as fs from 'fs';
/**
 * @class ExtractorMochila
 * 
 * Clase abstracta que define el comportamiento de los extractores de datos de la mochila.
 * 
 * @method {leerArchivo} - Leer el archivo de datos.
 * @method {verificarDatos} - Verificar los datos leídos.
 * @method {procesar} - Procesar los datos.
 */
export abstract class ExtractorMochila {
  protected hook: Hook;

  /**
   * @constructor
   * @param {Hook} hook - Hook.
   */
  constructor(hook: Hook) {
    this.hook = hook;
  }

  /**
   * Función para leer el archivo de datos.
   * @param {string} ruta - Ruta del archivo.
   * @returns {string} - Contenido del archivo.
   */
  leerArchivo(ruta: string): string {
    return fs.readFileSync(ruta, { encoding: 'utf-8' });
  }

  /**
   * Función para verificar los datos leídos.
   * @param {string} datos - Datos leídos.
   * @returns {{ beneficios: number[], pesos: number[] }} - Beneficios y pesos.
   */
  abstract verificarDatos(datos: string): { beneficios: number[], pesos: number[] };

  /**
   * Función para procesar los datos.
   * @param {string} ruta - Ruta del archivo.
   * @returns {{ beneficios: number[], pesos: number[] }} - Beneficios y pesos.
   */
  procesar(ruta: string): { beneficios: number[], pesos: number[] } {
    // Ejecutamos el preprocesamiento
    this.hook.preProcesar();
    // Leemos los datos del archivo a partir de la ruta
    const datosCrudos = this.leerArchivo(ruta);
    // Verificamos los datos leídos
    const resultado = this.verificarDatos(datosCrudos);
    // Ejecutamos el postprocesamiento
    this.hook.postProcesar(resultado);
    return resultado;
  }
}