import { Color } from "./EColor.js"
import { TipoLinea } from "./ETipoLinea.js";
import { Rareza } from "./ERareza.js";

/**
 * Interfaz que representa una carta.
 * @interface
 * @property {number} id - ID de la carta.
 * @property {string} nombre - Nombre de la carta.
 * @property {number} costeMana - Coste de mana de la carta.
 * @property {Color} color - Color de la carta.
 * @property {TipoLinea} líneaTipo - Tipo de línea de la carta.
 * @property {Rareza} rareza - Rareza de la carta.
 * @property {string} textoReglas - Texto de reglas de la carta.
 * @property {[number, number]} [fuerzaResistencia] - Fuerza y resistencia de la carta (opcional).
 * @property {number} [marcasLealtad] - Marcas de lealtad de la carta (opcional).
 * @property {number} valorMercado - Valor de mercado de la carta.
 */
export interface Card {
  id: number;
  nombre: string;
  costeMana: number;
  color: Color;
  líneaTipo: TipoLinea;
  rareza: Rareza;
  textoReglas: string;
  fuerzaResistencia?: [number, number]; // Opcional
  marcasLealtad?: number; // Opcional
  valorMercado: number;
}