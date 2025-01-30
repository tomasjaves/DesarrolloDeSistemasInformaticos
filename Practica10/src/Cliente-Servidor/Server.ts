import net from 'net';
import fs from 'fs';
import path from 'path';
import { EventEmitter } from 'events';
import { Card } from '../Cartas/ICard.js'
import { CardRequest } from '../Cartas/ICardRequest.js'
import { CardCollection } from '../Cartas/CardCollection.js';

const cardEventEmitter = new EventEmitter();
let cardCollections: { [key: string]: CardCollection } = {};

/**
 * @brief Evento para añadir una carta a la colección de un usuario.
 */
cardEventEmitter.on('add', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.addCard(request.carta);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para eliminar una carta de la colección de un usuario.
 */
cardEventEmitter.on('remove', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.removeCard(request.carta.id);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para actualizar una carta de la colección de un usuario.
 */
cardEventEmitter.on('update', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.updateCard(request.carta);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para leer una carta de la colección de un usuario.
 */
cardEventEmitter.on('read', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.readCard(request.carta.id);
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento para listar las cartas de la colección de un usuario.
 */
cardEventEmitter.on('list', (connection, request) => {
  const cardCollection = cardCollections[request.usuario] || new CardCollection(request.usuario);
  cardCollections[request.usuario] = cardCollection; // Guardamos la colección actualizada
  const answer = cardCollection.listCards();
  connection.write(answer, () => connection.end());
});

/**
 * @brief Evento por defecto.
 */
cardEventEmitter.on('default', (connection) => {
  connection.write('Comando no reconocido.\n');
  connection.end();
});

/**
 * @brief Servidor que permite añadir cartas a la colección de un usuario.
 */
export const server = net.createServer(connection => {
  let requestData = ''; // Variable para almacenar los datos recibidos

  connection.on('data', data => {
    requestData += data.toString(); // Concatenamos los datos recibidos

    // Verificamos si se ha recibido el delimitador
    try {
      const request = JSON.parse(requestData.trim()) as CardRequest; // Eliminamos espacios en blanco y convertimos a objeto JSON
      console.log('Cliente operando:', request.usuario);
      // Verificamos si ya hay una instancia de CardCollection para este usuario
      let cardCollections: { [key: string]: CardCollection } = {};

      // Si no existe la propiedad cardCollections en el objeto global, la creamos
      if (!cardCollections.hasOwnProperty(request.usuario)) {
        // Si no hay una instancia, la creamos y la almacenamos en el objeto cardCollections
        cardCollections[request.usuario] = new CardCollection(request.usuario);
      }
      
      // Emitimos un evento basado en el comando recibido o 'default' si el comando no se reconoce
      if (cardEventEmitter.listenerCount(request.comando) > 0) {
        cardEventEmitter.emit(request.comando, connection, request);
      } else {
        cardEventEmitter.emit('default', connection, request);
      }
 
    } catch (error) {
      connection.write('Error al procesar la petición: formato inválido.\n');
    }
    requestData = ''; // Reiniciamos la variable para la próxima petición
  });
});

// Escuchamos en el puerto 2424
server.listen(2424, () => {
  console.log('Servidor esperando conexiones...');
});