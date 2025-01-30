import { Email } from "./Email";
import { SMS } from "./SMS";
import { Notifier } from "./Notifier";

// Creamos un notificador de email.
const emailNotifier = new Notifier(new Email());
// Enviamos una notificación.
emailNotifier.sendNotification("Hello World!");

// Creamos un notificador de mensaje corto.
const shortMessageNotifier = new Notifier(new SMS());
// Enviamos una notificación.
shortMessageNotifier.sendNotification("Hello World!");
