import * as fs from 'fs';
import chalk from 'chalk';
import { Card } from './ICard.js';

/**
 * @class CardCollection
 * 
 * La colección se almacena en ficheros JSON en un directorio específico para cada usuario.
 * Cada carta se almacena en un fichero con el ID de la carta como nombre.
 * 
 * La colección se carga al instanciar la clase.
 * 
 * @property {Card[]} collection - Array de cartas.
 * @property {string} user - Nombre del usuario.
 * @method {getUserDirPath} - Obtener la ruta del directorio del usuario.
 * @method {getCardFilePath} - Obtener la ruta del archivo para una carta específica.
 * @method {loadCollection} - Cargar la colección desde ficheros.
 * @method {addCard} - Añadir una nueva carta.
 * @method {updateCard} - Actualizar una carta existente.
 * @method {removeCard} - Eliminar una carta.
 * @method {listCards} - Listar todas las cartas.
 */
export class CardCollection {
  private collection: Card[] = [];
  private user: string;

  /**
   * Constructor de la clase CardCollection.
   * @param {string} user - Nombre del usuario.
   */
  constructor(user: string) {
    this.user = user;
    this.loadCollection(); // Cargar la colección al instanciar
  }

  /**
   * Método para obtener el código hexadecimal de un color.
   * @param {string} colorName - Nombre del color.
   * @returns {string} - Código hexadecimal del color.
   */
  public getColorCode(colorName: string): string {
    const colorMap: { [key: string]: string } = {
      blanco: '#FFFFFF',
      azul: '#0000FF',
      negro: '#000000',
      rojo: '#FF0000',
      verde: '#00FF00',
      incoloro: '#CCCCCC', // Suponiendo un gris para incoloro
      multicolor: '#FF00FF' // Ejemplo para multicolor
    };
    return colorMap[colorName.toLowerCase()] || '#000000'; // Negro por defecto si no se encuentra
  }

  /**
   * Función que obtiene la carta con id específica ubicada en el directorio del usuario.
   * @param {number} id - ID de la carta.
   * @returns {string} - Carta ubicada en el directorio del usuario.
   */
  private getCardFilePath(id: number): string {
    return `${this.getUserDirPath()}/${id}.json`;
  }

  /**
   * Función que obtiene el directorio del usuario
   * @returns {string} - Directorio del usuario.
   */
  public getUserDirPath(): string {
    return `./data/${this.user}`;
  }

  /**
   * Función que retorna la colección de cartas.
   * @returns {Card[]} - Colección de cartas del usuario.
   */
  public getCards(): Card[] {
    return this.collection;
  }

  /**
   * Función que carga una colección específica (en caso de existencia).
   * @returns {void}
   */
  public loadCollection(): void {
    const userDirPath = this.getUserDirPath();
    if (!fs.existsSync(userDirPath)) {
      fs.mkdirSync(userDirPath, { recursive: true });
    } else {
      const fileNames = fs.readdirSync(userDirPath);
      this.collection = fileNames.map(fileName => {
        const filePath = `${userDirPath}/${fileName}`;
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent) as Card;
      });
    }
  }

  /**
   * Función que añade una nueva carta a la colección.
   * @param {Card} card - Carta a añadir.
   * @returns {void}
   */
  public addCard(card: Card): string {
    if (this.collection.some(c => c.id === card.id)) {
      return chalk.red(`La carta con ID ${card.id} ya existe en la colección de ${this.user}.`);
    } else {
      this.collection.push(card);
      fs.writeFileSync(this.getCardFilePath(card.id), JSON.stringify(card, null, 2));
      return chalk.green(`Nueva carta añadida a la colección de ${this.user}.`);
    }
  }

  /**
   * Función que actualiza una carta existente en la colección.
   * @param {Card} updatedCard - Carta actualizada.
   * @returns {void}
   */
  public updateCard(updatedCard: Card): string {
    const cardIndex = this.collection.findIndex(c => c.id === updatedCard.id);
    if (cardIndex === -1) {
      return chalk.red(`La carta con ID ${updatedCard.id} no existe en la colección de ${this.user}.`);
    } else {
      this.collection[cardIndex] = updatedCard;
      fs.writeFileSync(this.getCardFilePath(updatedCard.id), JSON.stringify(updatedCard, null, 2));
      return chalk.green(`Carta actualizada en la colección de ${this.user}.`);
    }
  }

  /**
   * Función que elimina una carta de la colección.
   * @param {number} id - ID de la carta a eliminar.
   * @returns {void}
   */
  public removeCard(id: number): string {
    const cardIndex = this.collection.findIndex(c => c.id === id);
    if (cardIndex === -1) {
      return chalk.red(`La carta con ID ${id} no existe en la colección de ${this.user}.`);
    } else {
      this.collection.splice(cardIndex, 1);
      fs.unlinkSync(this.getCardFilePath(id));
      return chalk.green(`Carta eliminada de la colección de ${this.user}.`);
    }
  }

  /**
   * Función que lista todas las cartas de la colección.
   * @returns {void}
   */
  public listCards(): string {
    let cards = '';

    cards += chalk.bold(`\nColección de cartas de ${this.user}\n`);
    this.collection.forEach(card => {
      const colorCode = this.getColorCode(card.color);
      cards += chalk.white('--------------------------------\n');
      cards += chalk.bold(chalk.white(`ID: ${card.id}`)) + '\n';
      cards += `Nombre: ${card.nombre}` + '\n';
      cards += `Coste de Mana: ${card.costeMana}\n`;
      cards += `Color: ${chalk.hex(colorCode)(card.color)}\n`;
      cards += `Tipo de Línea: ${card.líneaTipo}\n`;
      cards += `Rareza: ${card.rareza}\n`;
      cards += `Texto de Reglas: ${card.textoReglas}\n`;
      if (card.líneaTipo === 'Criatura' && card.fuerzaResistencia) {
        cards += `Fuerza/Resistencia: ${card.fuerzaResistencia[0]}/${card.fuerzaResistencia[1]}\n`;
      }
      if (card.marcasLealtad && card.líneaTipo === 'Planeswalker') {
        cards += `Marcas de Lealtad: ${card.marcasLealtad}\n`;
      }
      cards += `Valor de Mercado: ${card.valorMercado}\n`;
      cards += '--------------------------------\n';
    });

    return cards;
  }

  /**
   * Función que lee una carta específica de la colección.
   * @param {number} id - ID de la carta a leer.
   * @returns {void}
   */
  public readCard(id: number): string {
    const card = this.collection.find(c => c.id === id);
    let cardInfo = '';
    
    // Si la carta no existe
    if (!card) {
      // Se retorna un mensaje de error
      return chalk.red(`La carta con ID ${id} no existe en la colección de ${this.user}.`);
    } else {
      const colorCode = this.getColorCode(card.color);
      cardInfo += chalk.bold(`\nInformación de la carta con ID ${id}\n`);
      cardInfo += `Nombre: ${card.nombre}` + '\n';
      cardInfo += `Coste de Mana: ${card.costeMana}\n`;
      cardInfo += `Color: ${chalk.hex(colorCode)(card.color)}\n`;
      cardInfo += `Tipo de Línea: ${card.líneaTipo}\n`;
      cardInfo += `Rareza: ${card.rareza}\n`;
      cardInfo += `Texto de Reglas: ${card.textoReglas}\n`;
      if (card.líneaTipo === 'Criatura' && card.fuerzaResistencia) {
        cardInfo += `Fuerza/Resistencia: ${card.fuerzaResistencia[0]}/${card.fuerzaResistencia[1]}\n`;
      }
      if (card.marcasLealtad && card.líneaTipo === 'Planeswalker') {
        cardInfo += `Marcas de Lealtad: ${card.marcasLealtad}\n`;
      }
      cardInfo += `Valor de Mercado: ${card.valorMercado}\n`;
    }

    return cardInfo;

  }
}
