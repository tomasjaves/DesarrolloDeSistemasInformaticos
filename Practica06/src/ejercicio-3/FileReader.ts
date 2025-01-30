import * as fs from "fs";
import { IFileReader } from "./IFileReader";

/**
 * Clase que implementa la interfaz IFileReader.
 * @class FileReader
 * @method readFile Método que lee un fichero.
 */
export class FileReader implements IFileReader {
  /**
   * Método que lee un fichero.
   * @param filePath Ruta del archivo.
   * @returns string
   */
  public readFile(filePath: string): string {
    // Si el archivo no existe, se lanza un error.
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo:", error.message);
      return "";
    }
  }
}
