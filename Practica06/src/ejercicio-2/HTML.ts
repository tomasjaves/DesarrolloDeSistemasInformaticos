import { Factura } from "./Factura";

/**
 * @class HTML
 * @implements Factura
 * @property total Total de la factura
 * @property remitente Remitente de la factura
 * @property formato Formato de la factura
 * @property fechaEmision Fecha de emisión de la factura
 * @property destinatario Destinatario de la factura
 * @property descripcion Descripción de la factura
 * @method getTotal Método para obtener el total de la factura
 * @method getRemitente Método para obtener el remitente de la factura
 * @method getFormato Método para obtener el formato de la factura
 * @method getFechaEmision Método para obtener la fecha de emisión de la factura
 * @method getDestinatario Método para obtener el destinatario de la factura
 * @method getDescripcion Método para obtener la descripción de la factura
 * @method generarFactura Método para generar la factura en formato HTML
 */
export class HTML implements Factura {
  public total: number;
  public remitente: string;
  public formato: string;
  public fechaEmision: Date;
  public destinatario: string;
  public descripcion: string;

  /**
   * Constructor de la clase HTML
   * @param total Total de la factura
   * @param remitente Remitente de la factura
   * @param fechaEmision Fecha de emisión de la factura
   * @param destinatario Destinatario de la factura
   * @param descripcion Descripción de la factura
   */
  constructor(
    total: number,
    remitente: string,
    fechaEmision: Date,
    destinatario: string,
    descripcion: string,
  ) {
    this.total = total;
    this.remitente = remitente;
    this.fechaEmision = fechaEmision;
    this.destinatario = destinatario;
    this.descripcion = descripcion;
    this.formato = "HTML"; // Se establece el formato como HTML por defecto
  }

  /**
   * Método para obtener el total de la factura
   * @returns number Total de la factura
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Método para obtener el remitente de la factura
   * @returns string Remitente de la factura
   */
  getRemitente(): string {
    return this.remitente;
  }

  /**
   * Método para obtener el formato de la factura
   * @returns string Formato de la factura
   */
  getFormato(): string {
    return this.formato;
  }

  /**
   * Método para obtener la fecha de emisión de la factura
   * @returns Date Fecha de emisión de la factura
   */
  getFechaEmision(): Date {
    return this.fechaEmision;
  }

  /**
   * Método para obtener el destinatario de la factura
   * @returns string Destinatario de la factura
   */
  getDestinatario(): string {
    return this.destinatario;
  }

  /**
   * Método para obtener la descripción de la factura
   * @returns string Descripción de la factura
   */
  getDescripcion(): string {
    return this.descripcion;
  }

  /**
   * Método para generar la factura en formato HTML
   * @returns string Factura en formato HTML
   */
  generarFactura(): string {
    // Generación de la factura en formato HTML
    return `
      <html>
        <head>
          <title>Factura</title>
        </head>
        <body>
          <h1>Factura en formato HTML</h1>
          <p><strong>Remitente:</strong> ${this.remitente}</p>
          <p><strong>Fecha de emisión:</strong> ${this.fechaEmision.toDateString()}</p>
          <p><strong>Destinatario:</strong> ${this.destinatario}</p>
          <p><strong>Descripción:</strong> ${this.descripcion}</p>
          <p><strong>Total:</strong> ${this.total}</p>
        </body>
      </html>
    `;
  }
}
