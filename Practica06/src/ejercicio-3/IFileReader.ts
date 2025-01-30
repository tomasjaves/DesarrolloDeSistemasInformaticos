/**
 * Interfaz que define las operaciones que se pueden realizar con un fichero.
 * @method readFile Método que lee un fichero.
 */
export interface IFileReader {
  readFile(filePath: string): string;
}
