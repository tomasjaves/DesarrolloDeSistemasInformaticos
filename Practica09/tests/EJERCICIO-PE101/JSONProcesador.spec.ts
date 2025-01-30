// JSONProcesador.spec.ts
import "mocha";
import { expect } from "chai";
import { JSONProcesador } from "../../src/EJERCICIO-PE101/JSONProcesador.js";
import { Hook } from "../../src/EJERCICIO-PE101/Hook.js";
import * as fs from "fs";

describe("JSONProcesador", () => {
  before(() => {
    // Crear el archivo JSON de prueba antes de ejecutar las pruebas
    const testJSONContent = JSON.stringify({
      capacidad: 50,
      numElementos: 2,
      elementos: [
        { númElemento: 1, "peso": 10, "beneficio": 30 },
        { númElemento: 2, "peso": 20, "beneficio": 20 }
      ]
    });
    fs.writeFileSync("test.json", testJSONContent);
    // Fichero incorrecto
    const testFilePathIncorrecto = "testIncorrecto.json";
    const testJSONContentIncorrecto = JSON.stringify({
      "capacidad": 100,
      "numElementos": 3, // Especifica 3 elementos, pero solo proporciona 2.
      "elementos": [
        {"númElemento": 1, "peso": 10, "beneficio": 30},
        {"númElemento": 2, "peso": 20, "beneficio": 20}
      ]
    });
    fs.writeFileSync(testFilePathIncorrecto, testJSONContentIncorrecto);

  });

  after(() => {
    // Limpiar el archivo JSON de prueba después de las pruebas
    fs.unlinkSync("test.json");
    fs.unlinkSync("testIncorrecto.json");
  });

  it("debe procesar correctamente los datos de un archivo JSON", () => {
    const hook = new Hook();
    const procesador = new JSONProcesador(hook);
    const resultado = procesador.verificarDatos(fs.readFileSync("test.json", { encoding: "utf8" }));

    expect(resultado.beneficios).to.deep.equal([30, 20]);
    expect(resultado.pesos).to.deep.equal([10, 20]);
  });

  it("debe lanzar un error si el número de elementos leídos no coincide con el número esperado", () => {
    const hook = new Hook();
    const procesador = new JSONProcesador(hook);
    const datosCrudos = fs.readFileSync("testIncorrecto.json", { encoding: "utf-8" });

    expect(() => procesador.verificarDatos(datosCrudos)).to.throw("El número de elementos leídos no coincide con el número esperado.");
  });

});
