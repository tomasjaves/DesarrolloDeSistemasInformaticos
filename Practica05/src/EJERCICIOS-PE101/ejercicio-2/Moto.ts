import { Vehiculo } from "./Vehiculo";

/**
 * Clase que representa un vehículo de tipo moto.
 */
export class Moto extends Vehiculo {
  /**
   * Constructor de la clase Moto
   * @param matricula Matrícula de la moto
   * @param marca Marca de la moto
   * @param modelo Modelo de la moto
   * @param fechaHoraEntrada Fecha y hora de entrada de la moto
   */
  constructor(
    matricula: string,
    marca: string,
    modelo: string,
    fechaHoraEntrada: Date,
  ) {
    super(matricula, marca, modelo, fechaHoraEntrada);
  }
}
