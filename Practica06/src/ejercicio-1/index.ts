// Importamos las clases a probar
import { Caja } from "./Caja";
import { Mudanza } from "./Mudanza";
import { Prendas } from "./Prendas";
import { Tecnologia } from "./Tecnologia";

// Creamos algunas instancias de prendas y tecnología
const camiseta = new Prendas("Camiseta", 0.2, { width: 20, height: 30, depth: 2 }, "Camisetas");
const pantalon = new Prendas("Pantalón", 0.5, { width: 30, height: 40, depth: 5 }, "Pantalones");
const movil = new Tecnologia("Móvil", 0.3, { width: 8, height: 15, depth: 1 }, "Móviles");
const televisor = new Tecnologia("Televisor", 5, { width: 50, height: 40, depth: 5 }, "Televisores");

// Creamos una caja para prendas y agregamos las prendas
const cajaPrendas = new Caja<Prendas>();
cajaPrendas.addEnser(camiseta);
cajaPrendas.addEnser(pantalon);

// Creamos una caja para tecnología y agregamos los dispositivos
const cajaTecnologia = new Caja<Tecnologia>();
cajaTecnologia.addEnser(movil);
cajaTecnologia.addEnser(televisor);

// Creamos una mudanza y agregamos las cajas
const mudanza = new Mudanza<Prendas | Tecnologia>();
mudanza.addCaja(cajaPrendas);
mudanza.addCaja(cajaTecnologia);

// Pruebas 
console.log("Peso total de la mudanza:", mudanza.getTotalWeight());
mudanza.listAllEnsers();
// Output:
// Peso total de la mudanza: 6
// Caja #1:
// Camiseta (Camisetas): 0.2kg, 20x30x2cm
// Pantalón (Pantalones): 0.5kg, 30x40x5cm
// Caja #2:
// Móvil (Móviles): 0.3kg, 8x15x1cm
// Televisor (Televisores): 5kg, 50x40x5cm