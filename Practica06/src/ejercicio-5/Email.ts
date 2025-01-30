import { NotificationService } from "./NotificationService";

/**
 * Clase que representa un servicio de notificaciones por email.
 * @class EmailService
 * @implements NotificationService
 * @method notify Método que notifica un mensaje.
 */
export class Email implements NotificationService {
  /**
   * Método que notifica un mensaje.
   * @param message Mensaje a notificar.
   * @returns void
   */
  notify(message: string): void {
    // Se notifica el mensaje por email.
    console.log(`Enviando notificación via Email: ${message}`);
  }
}
