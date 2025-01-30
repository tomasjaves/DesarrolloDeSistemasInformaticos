import "mocha";
import { expect } from "chai";
import { FileReader } from '../../src/ejercicio-3/FileReader';
import { FileManager } from '../../src/ejercicio-3/FileManager';

describe('FileReader', () => {
  it('debería leer el contenido de un fichero', () => {
    const fileReader = new FileReader();
    const content = fileReader.readFile('./src/ejercicio-3/index.txt');
    expect(content).to.equal('Este es un nuevo contenido para escribir en el archivo.');
  });

  it('debería devolver una cadena vacía si el archivo no existe', () => {
    const fileReader = new FileReader();
    const content = fileReader.readFile('non-existent-file.txt');
    expect(content).to.equal('');
  });
});

