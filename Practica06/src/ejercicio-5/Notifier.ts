import { NotificationService } from "./NotificationService";

/**
 * Clase que representa un notificador.
 * @class Notifier
 * @constructor
 * @property {NotificationService} notificationService - Servicio de notificaciones.
 * @method sendNotification Método que envía una notificación.
 */
export class Notifier {
  private notificationService: NotificationService;

  constructor(notificationSVC: NotificationService) {
    this.notificationService = notificationSVC;
  }

  /**
   * Método que envía una notificación.
   * @param {string} message - Mensaje a notificar.
   * @returns void
   */
  sendNotification(message: string): void {
    // Se notifica el mensaje por el servicio de notificaciones.
    this.notificationService.notify(message);
  }
}
