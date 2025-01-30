import { Furniture } from './furniture';

/**
 * Tipo que representa el tipo de transacción
 * Puede ser 'Venta', 'Compra' o 'Devolucion'
 */
export type TransactionType = 'Venta' | 'Compra' | 'Devolucion';

/**
 * Interfaz que representa una transacción
 * Se encarga de almacenar la información de una transacción
 * @param id: number
 * @param date: Date
 * @param price: number
 * @param quantity: number
 * @param transactiontype: TransactionType
 * @param furniture: Furniture
 */
export interface Transaction {
  id: number;
  date: Date;
  price: number;
  quantity: number;
  transactiontype: TransactionType;
  furniture: Furniture;
} 
