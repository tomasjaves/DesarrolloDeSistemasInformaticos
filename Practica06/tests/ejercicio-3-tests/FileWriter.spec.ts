import "mocha";
import { expect } from 'chai';
import { FileWriter } from '../../src/ejercicio-3/FileWriter';
import { FileReader } from '../../src/ejercicio-3/FileReader';

describe('FileWriter', () => {
  it('debería escribit datos en un archivo', () => {
    const fileWriter = new FileWriter();
    const fileReader = new FileReader();
    const filePath = './tests/ejercicio-3-tests/write.txt';
    const data = 'Escribiendo datos para tests con mocha y chai.';
    
    fileWriter.writeFile(filePath, data);

    const content = fileReader.readFile(filePath);

    expect(content).to.equal(data);
  });

  it('debería dar error si no se puede escribir en el archivo', () => {
    const fileWriter = new FileWriter();
    const filePath = './tests/ejercicio-3-tests/non-existent-directory/write.txt';
    const data = 'Escribiendo datos para tests con mocha y chai.';

    expect(() => fileWriter.writeFile(filePath, data)).to.throw();
  });
});