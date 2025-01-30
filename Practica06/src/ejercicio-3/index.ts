// Importamos las clases e interfaces
import { FileReader } from "./FileReader";
import { FileWriter } from "./FileWriter";
import { FileManager } from "./FileManager";

// Creamos una instancia de FileManager con FileReader y FileWriter
const fileManager = new FileManager(new FileReader(), new FileWriter());

// Definimos la ruta del archivo
const filePath = "./src/ejercicio-3/index.txt";

// Leemos el contenido del archivo
const currentContent = fileManager.readFile(filePath);
console.log("Contenido actual del archivo:", currentContent);

// Escribimos nuevo contenido en el archivo
const newData = "Este es un nuevo contenido para escribir en el archivo.";
fileManager.writeFile(filePath, newData);
console.log("Nuevo contenido escrito en el archivo.");

// Volvemos a leer el contenido del archivo para verificar la escritura
const updatedContent = fileManager.readFile(filePath);
console.log("Contenido actualizado del archivo:", updatedContent);
