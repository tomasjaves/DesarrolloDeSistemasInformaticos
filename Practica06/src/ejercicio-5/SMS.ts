import { NotificationService } from "./NotificationService";

/**
 * Clase que representa un servicio de notificaciones por SMS.
 * @class SMSService
 * @implements NotificationService
 * @method notify Método que notifica un mensaje.
 */
export class SMS implements NotificationService {
  /**
   * Método que notifica un mensaje.
   * @param message Mensaje a notificar.
   * @returns void
   */
  notify(message: string): void {
    // Se notifica el mensaje por SMS.
    console.log(`Enviando notificación via SMS: ${message}`);
  }
}
