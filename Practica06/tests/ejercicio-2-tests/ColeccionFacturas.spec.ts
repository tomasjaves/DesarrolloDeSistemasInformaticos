// Importamos las funciones a testear
import "mocha";
import { expect } from "chai";
import { Factura } from "../../src/ejercicio-2/Factura";
import { HTML } from "../../src/ejercicio-2/HTML";
import { PDF } from "../../src/ejercicio-2/PDF";
import { ColeccionFacturas } from "../../src/ejercicio-2/ColeccionFacturas";

describe('ColeccionFacturas', () => {
  it('debería agregar y generar facturas correctamente', () => {
    const facturaPDF = new PDF(100, "Empresa X", new Date(), "Cliente A", "Venta de productos");
    const facturaHTML = new HTML(150, "Empresa Y", new Date(), "Cliente B", "Compra de equipo");

    const coleccionFacturas = new ColeccionFacturas<Factura>();
    coleccionFacturas.agregarFactura(facturaPDF);
    coleccionFacturas.agregarFactura(facturaHTML);

    const facturasGeneradas = coleccionFacturas.generarTodasLasFacturas();

    expect(facturasGeneradas).to.have.lengthOf(2);
    expect(facturasGeneradas[0]).to.include("Factura en formato PDF");
    expect(facturasGeneradas[1]).to.include("Factura en formato HTML");
  });

  it('debería remover una factura correctamente', () => {
    const facturaPDF = new PDF(100, "Empresa X", new Date(), "Cliente A", "Venta de productos");
    const coleccionFacturas = new ColeccionFacturas<Factura>();
    coleccionFacturas.agregarFactura(facturaPDF);
    coleccionFacturas.removerFactura(0);

    const facturas = coleccionFacturas.obtenerFacturas();
    expect(facturas).to.be.empty;
  });
});
