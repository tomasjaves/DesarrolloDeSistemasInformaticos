// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { HTML } from "../../src/ejercicio-2/HTML";

describe('HTML', () => {
  it('debería generar una factura en formato HTML correctamente', () => {
    const fechaEmision = new Date('2024-02-27');
    const factura = new HTML(150, 'Empresa A', fechaEmision, 'Cliente B', 'Compra de productos');

    const facturaGenerada = factura.generarFactura();

    const facturaEsperada = `
      <html>
        <head>
          <title>Factura</title>
        </head>
        <body>
          <h1>Factura en formato HTML</h1>
          <p><strong>Remitente:</strong> Empresa A</p>
          <p><strong>Fecha de emisión:</strong> Tue Feb 27 2024</p>
          <p><strong>Destinatario:</strong> Cliente B</p>
          <p><strong>Descripción:</strong> Compra de productos</p>
          <p><strong>Total:</strong> 150</p>
        </body>
      </html>
    `;

    expect(facturaGenerada).to.equal(facturaEsperada);
  });

  it('debería devolver el formato correcto', () => {
    const factura = new HTML(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const formato = factura.getFormato();

    expect(formato).to.equal('HTML');
  });

  it('debería devolver el remitente correcto', () => {
    const factura = new HTML(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const remitente = factura.getRemitente();

    expect(remitente).to.equal('Empresa A');
  });

  it('debería devolver la fecha de emisión correcta', () => {
    const fechaEmision = new Date('2024-02-27');
    const factura = new HTML(150, 'Empresa A', fechaEmision, 'Cliente B', 'Compra de productos');

    const fechaEmisionObtenida = factura.getFechaEmision();

    expect(fechaEmisionObtenida).to.equal(fechaEmision);
  });

  it('debería devolver el destinatario correcto', () => {
    const factura = new HTML(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const destinatario = factura.getDestinatario();

    expect(destinatario).to.equal('Cliente B');
  });

  it('debería devolver la descripción correcta', () => {
    const factura = new HTML(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const descripcion = factura.getDescripcion();

    expect(descripcion).to.equal('Compra de productos');
  });

  it('debería devolver el total correcto', () => {
    const factura = new HTML(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const total = factura.getTotal();

    expect(total).to.equal(150);
  });
});