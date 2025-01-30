import { Factura } from "./Factura";

/**
 * Clase ColeccionFacturas
 * @template T Tipo de la factura
 * @property facturas Lista de facturas
 * @method agregarFactura Método para agregar una factura a la lista
 * @method removerFactura Método para remover una factura de la lista
 * @method obtenerFacturas Método para obtener la lista de facturas
 * @method generarTodasLasFacturas Método para generar todas las facturas de la lista
 */
export class ColeccionFacturas<T extends Factura> {
  private facturas: T[] = [];

  /**
   * Método para agregar una factura a la lista
   * @param factura T Factura a agregar
   * @returns void
   */
  agregarFactura(factura: T): void {
    this.facturas.push(factura);
  }

  /**
   * Método para remover una factura de la lista
   * @param indice number Índice de la factura a remover
   * @returns void
   */
  removerFactura(indice: number): void {
    this.facturas.splice(indice, 1);
  }

  /**
   * Método para obtener la lista de facturas
   * @returns T[] Lista de facturas
   */
  obtenerFacturas(): T[] {
    return this.facturas;
  }

  /**
   * Método para generar todas las facturas de la lista
   * @returns string[] Lista de facturas generadas
   */
  generarTodasLasFacturas(): string[] {
    return this.facturas.map((factura) => factura.generarFactura());
  }
}
