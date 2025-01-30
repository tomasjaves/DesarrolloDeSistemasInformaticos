import { Card } from "../Cartas/ICard.js";

export interface CardRequest {
  usuario: string;
  comando: string;
  carta: Card;
}
