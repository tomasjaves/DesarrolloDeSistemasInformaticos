/**
 * Interface Customer. Representa la entidad de clientes.
 * Cada cliente tiene un id, nombre, contacto y dirección.
 * @interface Customer
 * @param {number} id - Identificador único del cliente.
 * @param {string} name - Nombre del cliente.
 * @param {string} contact - Contacto del cliente.
 * @param {string} address - Dirección del cliente.
 */
export interface Customer {
  id: number;
  name: string;
  contact: string;
  address: string;
}