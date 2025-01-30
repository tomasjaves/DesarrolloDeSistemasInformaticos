import "mocha";
import { expect } from 'chai';
import { CSVProcesador } from '../../src/EJERCICIO-PE101/CSVProcesador.js';
import { Hook } from '../../src/EJERCICIO-PE101/Hook.js';
import * as fs from 'fs';

describe('CSVProcesador', () => {
  let hook: Hook;

  beforeEach(() => {
    hook = new Hook();
  });

  it('debe procesar correctamente los datos de un archivo CSV', () => {
    const procesador = new CSVProcesador(hook);
    const testCSVContent = '100\n2\n1,10,30\n2,20,20';
    fs.writeFileSync('test.csv', testCSVContent);

    const resultado = procesador.verificarDatos(fs.readFileSync('test.csv', { encoding: 'utf-8' }));
    expect(resultado.beneficios).to.deep.equal([30, 20]);
    expect(resultado.pesos).to.deep.equal([10, 20]);

    fs.unlinkSync('test.csv');
  });

  it('debe lanzar un error si el número de elementos leídos no coincide con el número esperado', () => {
    const procesador = new CSVProcesador(hook);
    const testCSVContent = '100\n3\n1,10,30\n2,20,20'; // Aquí esperamos 3 elementos, pero solo proporcionamos 2.
    fs.writeFileSync('testError.csv', testCSVContent);

    expect(() => procesador.verificarDatos(fs.readFileSync('testError.csv', { encoding: 'utf-8' })))
      .to.throw("El número de elementos leídos no coincide con el número esperado.");

    fs.unlinkSync('testError.csv');
  });

  // Prueba para procesar
  it('debe procesar correctamente los datos de un archivo CSV', () => {
    const hook = new Hook();
    const procesador = new CSVProcesador(hook);
    const testFilePath = 'test.csv'
    const testCSVContent = '100\n2\n1,10,30\n2,20,20';
    fs.writeFileSync('test.csv', testCSVContent);
    const resultado = procesador.procesar(testFilePath);

    expect(resultado.beneficios).to.deep.equal([30, 20]);
    expect(resultado.pesos).to.deep.equal([10, 20]);
    fs.unlinkSync('test.csv');
  });
});
