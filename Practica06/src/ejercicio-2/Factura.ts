/**
 * Interfaz Factura
 * @property total Total de la factura
 * @property remitente Remitente de la factura
 * @property formato Formato de la factura (PDF, HTML)
 * @property fechaEmision Fecha de emisión de la factura
 * @property destinatario Destinatario de la factura
 * @property descripcion Descripción de la factura
 * @method generarFactura Método para generar la factura en el formato especificado
 */
export interface Factura {
  total: number; // Total de la factura
  remitente: string; // Remitente de la factura
  formato: string; // Formato de la factura (PDF, HTML)
  fechaEmision: Date; // Fecha de emisión de la factura
  destinatario: string; // Destinatario de la factura
  descripcion: string; // Descripción de la factura
  generarFactura(): string; // Método para generar la factura en el formato especificado
}
