import 'mocha';
import { expect } from 'chai';
import * as fs from 'fs';
import chalk from 'chalk';
import { CardCollection } from '../../src/EJERCICIO-PE101/CardCollection.js';
import { Card } from '../../src/EJERCICIO-PE101/ICard.js';
import { Color } from '../../src/EJERCICIO-PE101/EColor.js';
import { TipoLinea } from '../../src/EJERCICIO-PE101/ETipoLinea.js';
import { Rareza } from '../../src/EJERCICIO-PE101/ERareza.js';

describe('Colección de Cartas', () => {
  let colección: CardCollection;
  const usuarioPrueba = 'testUser';
  const dirPath = `./data/${usuarioPrueba}`;

  beforeEach(() => {
    // Preparamos el directorio
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    colección = new CardCollection(usuarioPrueba);
  });

  afterEach(() => {
    // Limpiamos el directorio
    if (fs.existsSync(dirPath)) {
      fs.rmdirSync(dirPath, { recursive: true });
    }
  });

  it('debería añadir una nueva carta a la colección', (done) => {
    const card: Card = {
      id: 1,
      nombre: 'Prueba',
      costeMana: 2,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Reglas de prueba',
      valorMercado: 10
    };

    colección.addCard(card, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });

    colección.addCard(card, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('existe');
      done();
    });
  });

  it('debería evitar añadir una carta duplicada', (done) => {
    const card: Card = {
      id: 1, // Mismo ID que la prueba anterior
      nombre: 'Duplicado',
      costeMana: 3,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Instantáneo,
      rareza: Rareza.Infrecuente,
      textoReglas: 'Reglas duplicadas',
      valorMercado: 5
    };

    colección.addCard(card, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });

    colección.addCard(card, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('existe');
      done();
    });
  });

  it('debería eliminar una carta existente de la colección', () => {
    const carta: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      valorMercado: 10
    };

    colección.addCard(carta, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });

    colección.removeCard(1, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('eliminada');
    });
  });
  
  it('debería leer la información de una carta específica en la colección', () => {
    const carta: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana:3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      fuerzaResistencia: [2, 2],
      valorMercado: 10
    };

    const carta2: Card = {
      id: 2,
      nombre: 'Carta 2',
      costeMana: 2,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Planeswalker,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 2',
      marcasLealtad: 4,
      valorMercado: 20
    };

    colección.addCard(carta, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });

    colección.addCard(carta2, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });

    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    colección.readCard(1);

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `\nInformación de la carta con ID 1\n\nNombre: Carta 1\nCoste de Mana: 3\nColor: Azul\nTipo de Línea: Criatura\nRareza: Común\nTexto de Reglas: Texto de reglas para Carta 1\nFuerza/Resistencia: 2/2\nValor de Mercado: 10\n`;
    const cleanedLoggedMessage = loggedMessage.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanedLoggedMessage).to.equal(expectedDescription);

    // Repetimos el proceso para la segunda carta
    loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    colección.readCard(2);

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    const expectedDescription2 = `\nInformación de la carta con ID 2\n\nNombre: Carta 2\nCoste de Mana: 2\nColor: Rojo\nTipo de Línea: Planeswalker\nRareza: Rara\nTexto de Reglas: Texto de reglas para Carta 2\nMarcas de Lealtad: 4\nValor de Mercado: 20\n`;
    const cleanedLoggedMessage2 = loggedMessage.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanedLoggedMessage2).to.equal(expectedDescription2);
  });

  it('debería cargar la colección desde archivos existentes', () => {
    // Simulamos que ya existe un directorio de usuario con archivos de cartas guardados
    const userDirPath = colección.getUserDirPath();
    if (!fs.existsSync(userDirPath)) {
      fs.mkdirSync(userDirPath, { recursive: true });
    }
    // Creamos archivos de cartas en el directorio de usuario
    const carta1: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      valorMercado: 10
    };
    const carta2: Card = {
      id: 2,
      nombre: 'Carta 2',
      costeMana: 2,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Instantáneo,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 2',
      valorMercado: 20
    };
    expect(() => colección.loadCollection()).to.not.throw();
  });

  it('debería mostrar un mensaje de error si se intenta agregar una carta con un ID que ya existe en la colección', () => {
    const cartaExistente: Card = {
      id: 1,
      nombre: 'Carta Existente',
      costeMana: 3,
      color: Color.Verde,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta Existente',
      valorMercado: 15
    };
  
    // Añadimos una carta existente a la colección
    colección.addCard(cartaExistente, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('');
    });
  
    // Redefinimos console.log para capturar su salida
    const originalConsoleLog = console.log;
    let loggedMessage = "";
    console.log = (message) => {
      loggedMessage += message;
    };
  
    // Intentamos agregar la misma carta nuevamente
    colección.addCard(cartaExistente, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('existe');
    });
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que se haya mostrado el mensaje de error correcto
    const expectedErrorMessage = ''
    expect(loggedMessage).to.equal(expectedErrorMessage);
  });
  
  it('debería mostrar un mensaje de error si se intenta actualizar una carta que no existe en la colección', () => {
    const cartaInexistente: Card = {
      id: 100,
      nombre: 'Carta Inexistente',
      costeMana: 5,
      color: Color.Blanco,
      líneaTipo: TipoLinea.Conjuro,
      rareza: Rareza.Mítica,
      textoReglas: 'Texto de reglas para Carta Inexistente',
      valorMercado: 30
    };
  
    // Redefinimos console.log para capturar su salida
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    console.log = (message) => {
      loggedMessage += message;
    };
  
    // Intentamos actualizar una carta que no existe
    colección.updateCard(cartaInexistente);
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que se haya mostrado el mensaje de error correcto
    const expectedErrorMessage = chalk.red(`La carta con ID ${cartaInexistente.id} no existe en la colección de ${usuarioPrueba}.`);
    expect(loggedMessage).to.equal(expectedErrorMessage);
  });  
  
  it('debería mostrar un mensaje de error si se intenta eliminar una carta que no existe en la colección', () => {
    const idInexistente = 100;
  
    // Redefinimos console.log para capturar su salida
    const originalConsoleLog = console.log;
    let loggedMessage = "";
    console.log = (message) => {
      loggedMessage += message;
    };
  
    // Intentamos eliminar una carta que no existe
    colección.removeCard(999, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('no existe');
    });
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que se haya mostrado el mensaje de error correcto
    const expectedErrorMessage = '';
    expect(loggedMessage).to.equal(expectedErrorMessage);
  });

  it('debería mostrar la información de una carta específica en la colección si existe', () => {
    const carta: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      valorMercado: 10
    };
    colección.addCard(carta, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });
    const originalConsoleLog = console.log;
    let loggedMessage = "";
  
    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };
  
    colección.readCard(1);
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `\nInformación de la carta con ID 1\n\nNombre: ${carta.nombre}\nCoste de Mana: ${carta.costeMana}\nColor: ${Color[carta.color]}\nTipo de Línea: ${carta.líneaTipo}\nRareza: ${carta.rareza}\nTexto de Reglas: ${carta.textoReglas}\nValor de Mercado: ${carta.valorMercado}\n`;
    const cleanedLoggedMessage = loggedMessage.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanedLoggedMessage).to.equal(expectedDescription);
  });
  
  it('debería mostrar un mensaje de error si la carta con el ID especificado no existe en la colección', () => {
    const originalConsoleLog = console.log;
    let loggedMessage = "";
  
    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };
  
    colección.readCard(999); // Intentamos leer una carta que no existe
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que se haya mostrado el mensaje de error adecuado
    const expectedErrorMessage = `La carta con ID 999 no existe en la colección de ${usuarioPrueba}.\n`;
    const cleanedLoggedMessage = loggedMessage.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanedLoggedMessage).to.equal(expectedErrorMessage);
  });

  it('debería crear el directorio del usuario si no existe cuando se carga la colección', () => {
    // El directorio debería ser creado por el constructor a través de loadCollection
    expect(fs.existsSync(dirPath)).to.be.true;
  });

  it('debería manejar correctamente la situación cuando el directorio del usuario ya existe', () => {
    fs.mkdirSync(dirPath, { recursive: true });
    expect(fs.existsSync(dirPath)).to.be.true; // El directorio ya existe

    // Crearmos una nueva instancia de CardCollection no debería lanzar error
    expect(() => new CardCollection(usuarioPrueba)).to.not.throw();
    expect(fs.existsSync(dirPath)).to.be.true; // El directorio todavía existe
  });

  it('debería crear el directorio del usuario si no existe al cargar la colección', () => {
    // Eliminamos el directorio si existe para probar la creación
    if (fs.existsSync(dirPath)) {
      fs.rmdirSync(dirPath, { recursive: true });
    }

    // Cargamos la colección, lo que debería crear el directorio
    colección.loadCollection();

    // Verificamos que el directorio ha sido creado
    expect(fs.existsSync(dirPath)).to.be.true;
  });

  it('debería cargar cartas desde archivos existentes en el directorio del usuario', () => {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // Creamos un archivo de carta de prueba en el directorio
      const cartaPrueba: Card = {
        id: 1,
        nombre: 'Carta de Prueba',
        costeMana: 1,
        color: Color.Azul,
        líneaTipo: TipoLinea.Criatura,
        rareza: Rareza.Común,
        textoReglas: 'Regla de prueba',
        valorMercado: 100
      };
      fs.writeFileSync(`${dirPath}/1.json`, JSON.stringify(cartaPrueba));

      // Cargamos la colección, lo que debería leer el archivo de carta creado
      colección.loadCollection();

      // Verificamos que la carta ha sido cargada en la colección
      const cartaCargada = colección.getCards().find(c => c.id === cartaPrueba.id);
      expect(cartaCargada).to.not.be.undefined;
      expect(cartaCargada?.nombre).to.equal(cartaPrueba.nombre);
  });

  it('debería actualizar una carta existente en la colección', () => {
    const carta: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      valorMercado: 10
    };

    colección.addCard(carta, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });

    const cartaActualizada: Card = {
      id: 1,
      nombre: 'Carta 1 Actualizada',
      costeMana: 4,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Conjuro,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 1 Actualizada',
      valorMercado: 20
    };

    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message;
    };

    colección.updateCard(cartaActualizada);

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    const cartaActualizadaEnColección = colección.getCards().find(c => c.id === cartaActualizada.id);
    expect(cartaActualizadaEnColección).to.not.be.undefined;
    expect(cartaActualizadaEnColección?.nombre).to.equal(cartaActualizada.nombre);
    expect(cartaActualizadaEnColección?.costeMana).to.equal(cartaActualizada.costeMana);
    expect(cartaActualizadaEnColección?.color).to.equal(cartaActualizada.color);
    expect(cartaActualizadaEnColección?.líneaTipo).to.equal(cartaActualizada.líneaTipo);
    expect(cartaActualizadaEnColección?.rareza).to.equal(cartaActualizada.rareza);
    expect(cartaActualizadaEnColección?.textoReglas).to.equal(cartaActualizada.textoReglas);
    expect(cartaActualizadaEnColección?.valorMercado).to.equal(cartaActualizada.valorMercado);
  });

  it('debería mostrar todas las cartas de la colección de un usuario', () => {
    const carta1: Card = {
      id: 1,
      nombre: 'Carta 1',
      costeMana: 3,
      color: Color.Azul,
      líneaTipo: TipoLinea.Criatura,
      rareza: Rareza.Común,
      textoReglas: 'Texto de reglas para Carta 1',
      fuerzaResistencia: [2, 2],
      valorMercado: 10
    };
    const carta2: Card = {
      id: 2,
      nombre: 'Carta 2',
      costeMana: 2,
      color: Color.Rojo,
      líneaTipo: TipoLinea.Planeswalker,
      rareza: Rareza.Rara,
      textoReglas: 'Texto de reglas para Carta 2',
      marcasLealtad: 4,
      valorMercado: 20
    };

    colección.addCard(carta1, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });
    colección.addCard(carta2, (error, result) => {
      expect(error).to.be.null;
      expect(result).to.include('añadida');
    });

    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    colección.listCards();

    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificamos que la salida capturada contenga las descripciones esperadas
    const expectedDescription1 = `\nColección de cartas de ${usuarioPrueba}\n\nID: 1\nNombre: Carta 1\nCoste de Mana: 3\nColor: Azul\nTipo de Línea: Criatura\nRareza: Común\nTexto de Reglas: Texto de reglas para Carta 1\nFuerza/Resistencia: 2/2\nValor de Mercado: 10\n`;
    const expectedDescription2 = `\nID: 2\nNombre: Carta 2\nCoste de Mana: 2\nColor: Rojo\nTipo de Línea: Planeswalker\nRareza: Rara\nTexto de Reglas: Texto de reglas para Carta 2\nMarcas de Lealtad: 4\nValor de Mercado: 20\n`;
    const cleanedLoggedMessage = loggedMessage.replace(/\x1b\[[0-9;]*m/g, '');
    expect(cleanedLoggedMessage).to.include(expectedDescription1);
    expect(cleanedLoggedMessage).to.include(expectedDescription2);
  });
});