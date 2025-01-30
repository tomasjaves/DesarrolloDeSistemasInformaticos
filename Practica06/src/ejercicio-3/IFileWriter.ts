/**
 * Interfaz que define las operaciones que se pueden realizar con un fichero.
 * @method writeFile Método que escribe en un fichero.
 */
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}
