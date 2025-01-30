/**
 * Interfaz que representa un servicio de notificaciones.
 * @method notify Método que notifica un mensaje.
 */
export interface NotificationService {
  notify(message: string): void;
}
