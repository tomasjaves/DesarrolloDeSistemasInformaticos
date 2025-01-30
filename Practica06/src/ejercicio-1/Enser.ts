/**
 * Interfaz que representa un enser
 * @property name Nombre del enser
 * @property category Categoría a la que pertenece el enser (ej: libros, ropa, electrónica)
 * @property weight Peso del enser en kilogramos
 * @property dimensions Dimensiones del enser
 * @property dimensions.width Ancho del enser en centímetros
 * @property dimensions.height Altura del enser en centímetros
 * @property dimensions.depth Profundidad del enser en centímetros
 * @method getDescription Método para obtener una descripción del enser
 */
export interface Enser {
  name: string; // Nombre del enser
  category: string; // Categoría a la que pertenece el enser (ej: libros, ropa, electrónica)
  weight: number; // Peso del enser en kilogramos
  dimensions: {
    // Dimensiones del enser
    width: number; // Ancho del enser en centímetros
    height: number; // Altura del enser en centímetros
    depth: number; // Profundidad del enser en centímetros
  };
  getDescription(): string; // Método para obtener una descripción del enser
}
