// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { PDF } from "../../src/ejercicio-2/PDF";

describe('PDF', () => {
  it('debería generar una factura en formato PDF correctamente', () => {
    const fechaEmision = new Date('2024-02-27');
    const factura = new PDF(150, 'Empresa A', fechaEmision, 'Cliente B', 'Compra de productos');

    const facturaGenerada = factura.generarFactura();

    const facturaEsperada = `Factura en formato PDF:

Remitente: Empresa A
Fecha de emisión: Tue Feb 27 2024
Destinatario: Cliente B
Descripción: Compra de productos
Total: 150`;

    expect(facturaGenerada).to.equal(facturaEsperada);
  });

  it('debería devolver el formato correcto', () => {
    const factura = new PDF(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const formato = factura.getFormato();

    expect(formato).to.equal('PDF');
  });

  it('debería devolver el remitente correcto', () => {
    const factura = new PDF(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const remitente = factura.getRemitente();

    expect(remitente).to.equal('Empresa A');
  });

  it('debería devolver la fecha de emisión correcta', () => {
    const fechaEmision = new Date('2024-02-27');
    const factura = new PDF(150, 'Empresa A', fechaEmision, 'Cliente B', 'Compra de productos');

    const fechaEmisionObtenida = factura.getFechaEmision();

    expect(fechaEmisionObtenida).to.equal(fechaEmision);
  });

  it('debería devolver el destinatario correcto', () => {
    const factura = new PDF(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const destinatario = factura.getDestinatario();

    expect(destinatario).to.equal('Cliente B');
  });

  it('debería devolver la descripción correcta', () => {
    const factura = new PDF(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const descripcion = factura.getDescripcion();

    expect(descripcion).to.equal('Compra de productos');
  });

  it('debería devolver el total correcto', () => {
    const factura = new PDF(150, 'Empresa A', new Date(), 'Cliente B', 'Compra de productos');

    const total = factura.getTotal();

    expect(total).to.equal(150);
  });
});