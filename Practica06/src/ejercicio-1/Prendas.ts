// src/models/Prendas.ts
import { Enser } from "./Enser";

/**
 * Clase que representa una prenda.
 * @implements {Enser}
 * @class
 * @property name Nombre de la prenda
 * @property category Categoría de la prenda
 * @property weight Peso de la prenda
 * @property dimensions Dimensiones de la prenda
 * @property tipo Tipo de prenda
 * @method getDescription Método para obtener la descripción de la prenda
 */
export class Prendas implements Enser {
  name: string;
  category: string = "Prendas";
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  tipo: string; // Pantalones, Camisetas

  constructor(
    name: string,
    weight: number,
    dimensions: { width: number; height: number; depth: number },
    tipo: string,
  ) {
    this.name = name;
    this.weight = weight;
    this.dimensions = dimensions;
    this.tipo = tipo;
  }

  /**
   * Método para obtener la descripción de la prenda
   * @returns string
   */
  getDescription(): string {
    return `${this.name} (${this.tipo}): ${this.weight}kg, ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}cm`;
  }
}
