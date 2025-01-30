// src/models/Tecnologia.ts
import { Enser } from "./Enser";

/**
 * Clase que representa un enser de tipo tecnología.
 * @implements {Enser}
 * @class
 * @property name Nombre del enser
 * @property category Categoría del enser
 * @property weight Peso del enser
 * @property dimensions Dimensiones del enser
 * @property tipo Tipo de tecnología
 * @method getDescription Método para obtener la descripción del enser
 */
export class Tecnologia implements Enser {
  name: string;
  category: string = "Tecnología";
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  tipo: string; // Televisores, Móviles

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
   * Método para obtener la descripción del enser
   * @returns string
   */
  getDescription(): string {
    return `${this.name} (${this.tipo}): ${this.weight}kg, ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}cm`;
  }
}
