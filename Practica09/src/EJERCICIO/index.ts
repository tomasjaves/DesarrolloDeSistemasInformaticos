// index.js
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { CardCollection } from './CardCollection.js';
import { Card } from './ICard.js';
import { Color } from './EColor.js';
import { TipoLinea } from './ETipoLinea.js';
import { Rareza } from './ERareza.js';

yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Añade una nueva carta a la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' },
      nombre: { describe: 'Nombre de la carta', demandOption: true, type: 'string' },
      costeMana: { describe: 'Coste de mana', demandOption: true, type: 'number' },
      color: { describe: 'Color de la carta', demandOption: true, type: 'string', choices: Object.values(Color) },
      líneaTipo: { describe: 'Línea o tipo de la carta', demandOption: true, type: 'string', choices: Object.values(TipoLinea) },
      rareza: { describe: 'Rareza de la carta', demandOption: true, type: 'string', choices: Object.values(Rareza) },
      textoReglas: { describe: 'Texto de reglas de la carta', demandOption: true, type: 'string' },
      fuerzaResistencia: { describe: 'Fuerza y resistencia de la carta', type: 'array', default: [] },
      marcasLealtad: { describe: 'Marcas de lealtad de la carta', type: 'number' },
      valorMercado: { describe: 'Valor de mercado de la carta', demandOption: true, type: 'number' }
    },
    handler(argv) {
      const collection = new CardCollection(argv.user);
      const card: Card = {
        id: argv.id,
        nombre: argv.nombre,
        costeMana: argv.costeMana,
        color: argv.color,
        líneaTipo: argv.líneaTipo,
        rareza: argv.rareza,
        textoReglas: argv.textoReglas,
        fuerzaResistencia: argv.fuerzaResistencia,
        marcasLealtad: argv.marcasLealtad,
        valorMercado: argv.valorMercado
      };
      collection.addCard(card);
    }
  })
  .command({
    command: 'list',
    describe: 'Lista todas las cartas de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' }
    },
    handler(argv) {
      const collection = new CardCollection(argv.user);
      collection.listCards();
    }
  })
  // Agrega aquí comandos adicionales para 'update', 'read', 'remove'
  .command({
    command: 'update',
    describe: 'Actualiza una carta de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' },
      nombre: { describe: 'Nombre de la carta', type: 'string' },
      costeMana: { describe: 'Coste de mana', type: 'number' },
      color: { describe: 'Color de la carta', type: 'string', choices: Object.values(Color) },
      líneaTipo: { describe: 'Línea o tipo de la carta', type: 'string', choices: Object.values(TipoLinea) },
      rareza: { describe: 'Rareza de la carta', type: 'string', choices: Object.values(Rareza) },
      textoReglas: { describe: 'Texto de reglas de la carta', type: 'string' },
      fuerzaResistencia: { describe: 'Fuerza y resistencia de la carta', type: 'array', default: [] }, // Cambio aquí
      marcasLealtad: { describe: 'Marcas de lealtad de la carta', type: 'number' },
      valorMercado: { describe: 'Valor de mercado de la carta', type: 'number' }
    },
    handler(argv) {
      const collection = new CardCollection(argv.user);
      const card: Card = {
        id: argv.id,
        nombre: argv.nombre,
        costeMana: argv.costeMana,
        color: argv.color,
        líneaTipo: argv.líneaTipo,
        rareza: argv.rareza,
        textoReglas: argv.textoReglas,
        fuerzaResistencia: argv.fuerzaResistencia,
        marcasLealtad: argv.marcasLealtad,
        valorMercado: argv.valorMercado
      };
      collection.updateCard(card);
    }
  })  
  .command({
    command: 'read',
    describe: 'Lee una carta de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' }
    },
    handler(argv) {
      const collection = new CardCollection(argv.user);
      collection.readCard(argv.id);
    }
  })
  .command({
    command: 'remove',
    describe: 'Elimina una carta de la colección de un usuario',
    builder: {
      user: { describe: 'Nombre del usuario', demandOption: true, type: 'string' },
      id: { describe: 'ID de la carta', demandOption: true, type: 'number' }
    },
    handler(argv) {
      const collection = new CardCollection(argv.user);
      collection.removeCard(argv.id);
    }
  })
  .help()
  .parse();
