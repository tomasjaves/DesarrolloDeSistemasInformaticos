import { Hook } from './Hook.js';
import { ExtractorMochila } from './ExtractorMochila.js';
import * as fs from 'fs';

/**
 * @class CSVProcessor
 * @extends ExtractorMochila
 * 
 * Clase que procesa los datos de la mochila en formato CSV.
 * 
 * @method {leerArchivo} - Leer el archivo de datos.
 * @method {verificarDatos} - Verificar los datos leídos.
 */
export class CSVProcesador extends ExtractorMochila {

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
    const lineas = datos.split('\n');
    // Variable que recoge el numero de elementos esperados para futuras aserciones.
    const numElementosEsperados = parseInt(lineas[1], 10);
    // Dividimos los datos en líneas y eliminamos las dos primeras (se encargan de definir la capacidad de la mochila y el número de elementos)
    const elementos = datos.split('\n').slice(2);
    const beneficios: number[] = [];
    const pesos: number[] = [];

    // 
    elementos.forEach(linea => {
      const [ , peso, beneficio ] = linea.split(',').map(Number);
      beneficios.push(beneficio);
      pesos.push(peso);
    });

    const numElementosLeidos = elementos.length;

    if (numElementosEsperados !== numElementosLeidos) {
      throw new Error("El número de elementos leídos no coincide con el número esperado.");
    }  

    return { beneficios, pesos };
  }
}
