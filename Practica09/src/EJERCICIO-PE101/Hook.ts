/**
 * @class Hook
 * 
 * Clase abstracta que define los métodos que se ejecutarán antes y después de procesar los datos.
 * 
 * @method {preProcesar} - Preprocesar los datos.
 * @method {postProcesar} - Postprocesar los datos.
 */
export class Hook {
  /**
   * Función para preprocesar los datos.
   * @returns {void}
   */
  preProcesar(): void {
    console.log("Preprocesamiento de los datos...");
  }

  /**
   * Función para realizar el postprocesamiento de los datos.
   * @param {string} resultado - Resultados obtenidos
   * @returns {{ beneficios: number[], pesos: number[] }} - Beneficios y pesos.
   */
  postProcesar(resultado: { beneficios: number[], pesos: number[] }): void {
    console.log("Postprocesamiento de los datos:", resultado);
  }
}
