// test/server.test.js
import "mocha";
import { expect } from "chai";
import * as net from "net";
import * as fs from "fs";
import { CardCollection } from "../../src/Cartas/CardCollection.js";
import { Color } from "../../src/Cartas/EColor.js";
import { TipoLinea } from "../../src/Cartas/ETipoLinea.js";
import { Rareza } from "../../src/Cartas/ERareza.js";
import { Card } from "../../src/Cartas/ICard.js";
import { server } from "../../src/Cliente-Servidor/Server.js";


describe('Servidor de Cartas', function() {
  let client: net.Socket;
  let cardCollections = {};

  let colección: CardCollection;
  const usuarioPrueba = 'testUser2';
  const dirPath = `./data/${usuarioPrueba}`;

  after(done => {
    // Cerramos servidor después de todas las pruebas
    server.close(done);
    // Limpiamos el directorio
    if (fs.existsSync(dirPath)) {
      fs.rmdirSync(dirPath, { recursive: true });
    }
  });

  beforeEach(done => {
    // Iniciamos nuevo cliente para cada prueba
    client = new net.Socket();
    client.connect({ port: 2424 }, done);

    // Preparamos el directorio
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    colección = new CardCollection(usuarioPrueba);
  });

  afterEach(done => {
    client.end();
    done();
  });

  it('debería responder a un comando "add" válido', done => {
    const testData = {
      usuario: "testUser2",
      comando: "add",
      carta: { 
        id: 1,
        nombre: "testCard",
        color: Color.Azul,
        rareza: Rareza.Común,
        tipoLinea: TipoLinea.Criatura,
        costeMana: 1,
        textoReglas: "prueba",
        fuerzaResistencia: [1, 1],
        valorMercado: 0.5
      }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Nueva carta añadida');
      done();
    });
  });

  it('debería responder a un comando "list" válido', done => {
    this.timeout(5000);
    const testData = {
      usuario: "testUser2",
      comando: "list"
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Colección de cartas');
      done();
    });
  });

  it('debería responder a un comando "update" válido', done => {
    this.timeout(5000);
    const testData = {
      usuario: "testUser2",
      comando: "update",
      carta: { 
        id: 1,
        nombre: "testCard",
        color: Color.Azul,
        rareza: Rareza.Común,
        tipoLinea: TipoLinea.Criatura,
        costeMana: 1,
        textoReglas: "prueba",
        fuerzaResistencia: [1, 1],
        valorMercado: 0.5
      }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Carta actualizada');
      done();
    });
  });

  it('debería responder a un comando "read" válido', done => {
    this.timeout(5000);
    const testData = {
      usuario: "testUser2",
      comando: "read",
      carta: { id: 1 }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Información de la carta con ID');
      done();
    });
  });

  it('debería responder a un comando "remove" válido', done => {
    const testData = {
      usuario: "testUser2",
      comando: "remove",
      carta: { id: 1 }
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Carta eliminada');
      done();
    });
  });

  it('debería responder a un comando desconocido', done => {
    const testData = {
      usuario: "testUser2",
      comando: "unknown"
    };

    client.write(JSON.stringify(testData) + '\n');

    client.on('data', data => {
      expect(data.toString()).to.include('Comando no reconocido');
      done();
    });
  });
});
