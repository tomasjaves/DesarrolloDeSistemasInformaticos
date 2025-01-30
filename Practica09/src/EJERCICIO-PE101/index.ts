import { Hook } from './Hook.js';
import { CSVProcesador } from './CSVProcesador.js';
import { JSONProcesador } from './JSONProcesador.js';

// Creamos instancias de los procesadores
const hook = new Hook();
const procesadorCSV = new CSVProcesador(hook);
const datosCSV = procesadorCSV.procesar('./src/EJERCICIO-PE101/datos_nuevos.csv');

console.log();

// Procesar archivo JSON
const procesadorJSON = new JSONProcesador(hook);
const datosJSON = procesadorJSON.procesar('./src/EJERCICIO-PE101/datos_nuevos.json');