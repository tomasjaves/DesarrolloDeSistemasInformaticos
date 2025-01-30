import * as fs from "fs";
import { IFileWriter } from "./IFileWriter";

/**
 * Clase que implementa la interfaz IFileWriter.
 * @method writeFile Método que escribe en un fichero.
 */
export class FileWriter implements IFileWriter {
  /**
   * Método que escribe en un fichero.
   * @param filePath Ruta del archivo.
   * @param data Datos a escribir.
   * @returns void
   * @throws Error
   */
  public writeFile(filePath: string, data: string): void {
    // Si el archivo no existe, se lanza un error.
    if (!fs.existsSync(filePath)) {
      throw new Error("El archivo no existe.");
    }
    // Se escribe el archivo.
    fs.writeFileSync(filePath, data, "utf-8");
    console.log("Archivo escrito exitosamente.");
  }
}
