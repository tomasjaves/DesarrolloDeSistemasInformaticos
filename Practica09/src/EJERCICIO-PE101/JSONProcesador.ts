import { Hook } from './Hook.js';
import { ExtractorMochila } from './ExtractorMochila.js';
import * as fs from 'fs';

/**
 * @class JSONProcesador
 * @extends ExtractorMochila
 * 
 * Clase que procesa los datos de la mochila en formato JSON.
 * 
 * @method {leerArchivo} - Leer el archivo de datos.
 * @method {verificarDatos} - Verificar los datos leídos.
 */
export class JSONProcesador extends ExtractorMochila {

  /**
   * @constructor
   * @param {Hook} hook - Hook.
   */
  constructor(hook: Hook) {
    super(hook);
  }

  /**
   * Función para verificar los datos leídos.
   * @param {string} datos - Datos leídos.
   * @returns {{ beneficios: number[], pesos: number[] }} - Beneficios y pesos.
   */
  verificarDatos(datos: string): { beneficios: number[], pesos: number[] } {
    const objeto = JSON.parse(datos);
    const numElementos: number[] = objeto.numElementos;
    const beneficios: number[] = objeto.elementos.map((elem: any) => elem.beneficio);
    const pesos: number[] = objeto.elementos.map((elem: any) => elem.peso);

    const elementos = objeto.elementos.length;
    if (numElementos != elementos) {
      throw new Error("El número de elementos leídos no coincide con el número esperado.");
    }

    return { beneficios, pesos };
  }
}
