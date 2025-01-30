/**
 * Interface Provider. Representa la entidad de proveedores.
 * Cada proveedor tiene un id, nombre, contacto y dirección.
 * @interface Provider
 * @param {number} id - Identificador único del proveedor.
 * @param {string} name - Nombre del proveedor.
 * @param {string} contact - Contacto del proveedor.
 * @param {string} address - Dirección del proveedor.
 */
export interface Provider {
  id: number;
  name: string;
  contact: string;
  address: string;
}