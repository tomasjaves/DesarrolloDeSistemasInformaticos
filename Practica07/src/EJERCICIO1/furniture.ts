/**
 * Interface Furniture que representa la entidad de muebles ya sean sillas, mesas, armarios, etc.
 * Cada mueble tiene un id, nombre, descripción, material, dimensiones y precio.
 * @interface Furniture
 * @param {number} id - Identificador único del mueble.
 * @param {string} name - Nombre del mueble.
 * @param {string} description - Descripción del mueble.
 * @param {string} material - Material del que está hecho el mueble.
 * @param {string} dimensions - Dimensiones del mueble.
 * @param {number} price - Precio del mueble.
 */
export interface Furniture {
  id: number;
  name: string;
  description: string;
  material: string;
  dimensions: string;
  price: number;
  quantity: number;
}