import { IFileReader } from "./IFileReader";
import { IFileWriter } from "./IFileWriter";

/**
 * Clase que representa un gestor de archivos.
 * @exports
 * @class FileManager
 * @constructor
 * @property {IFileReader} IFileReader - Interfaz de FileReader.
 * @property {IFileWriter} IFileWriter - Interfaz de FileWriter.
 * @method readFile - Método que lee un archivo.
 * @method writeFile - Método que escribe en un archivo.
 */
export class FileManager {
  private fileReader: IFileReader;
  private fileWriter: IFileWriter;

  constructor(reader: IFileReader, writer: IFileWriter) {
    this.fileReader = reader;
    this.fileWriter = writer;
  }

  /**
   * Método que lee un archivo.
   * @param {string} filePath - Ruta del archivo.
   * @returns El contenido del archivo.
   */
  public readFile(filePath: string): string {
    return this.fileReader.readFile(filePath);
  }

  /**
   * Método que escribe en un archivo.
   * @param {string} filePath - Ruta del archivo.
   * @param {string} data - Datos a escribir en el archivo.
   * @returns void
   */
  public writeFile(filePath: string, data: string): void {
    this.fileWriter.writeFile(filePath, data);
  }
}
