// test/file-manager.test.ts
import { expect } from 'chai';
import { FileManager } from '../../src/ejercicio-3/FileManager';
import { FileReader } from '../../src/ejercicio-3/FileReader';
import { FileWriter } from '../../src/ejercicio-3/FileWriter';

describe('FileManager', () => {
  
  it('debería leer el contenido de un fichero', () => {
    const filePath = './tests/ejercicio-3-tests/manager.txt';
    const testContent = 'Contenido de prueba para los tests de FileManager con mocha y chai.';
    const fileWriter = new FileWriter();
    fileWriter.writeFile(filePath, testContent);
    
    const fileManager = new FileManager(new FileReader(), new FileWriter());
    const content = fileManager.readFile(filePath);
    expect(content).to.equal(testContent);
  });
  
  it('debería escribir nuevo contenido a un fichero', () => {
    const filePath = './tests/ejercicio-3-tests/manager.txt';
    const testContent = 'Contenido de prueba para los tests de FileManager con mocha y chai.';
    const fileWriter = new FileWriter();
    fileWriter.writeFile(filePath, testContent);

    const fileManager = new FileManager(new FileReader(), new FileWriter());
    const newContent = 'Nuevo contenido de prueba para los tests de FileManager con mocha y chai.';
    fileManager.writeFile(filePath, newContent);
    const fileReader = new FileReader();
    const updatedContent = fileReader.readFile(filePath);
    expect(updatedContent).to.equal(newContent);
  });
});
