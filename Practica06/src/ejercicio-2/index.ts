// Importamos las clases e interfaces
import { Factura } from "./Factura";
import { ColeccionFacturas } from "./ColeccionFacturas";
import { HTML } from "./HTML";
import { PDF } from "./PDF";

// Creamos instancias de facturas HTML y PDF
const facturaHTML = new HTML(
  150,
  "Empresa A",
  new Date(),
  "Cliente B",
  "Compra de productos en formato HTML",
);
const facturaPDF = new PDF(
  200,
  "Empresa X",
  new Date(),
  "Cliente Y",
  "Compra de servicios en formato PDF",
);

// Creamos una colección de facturas y agregamos las facturas
const coleccionFacturas = new ColeccionFacturas<Factura>();
coleccionFacturas.agregarFactura(facturaHTML);
coleccionFacturas.agregarFactura(facturaPDF);

// Pruebas
console.log("Facturas generadas:");
const facturasGeneradas = coleccionFacturas.generarTodasLasFacturas();
facturasGeneradas.forEach((factura) => console.log(factura));
