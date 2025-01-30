import { Vehiculo } from "./Vehiculo";

/**
 * Clase que representa un vehículo de tipo coche.
 */
export class Coche extends Vehiculo {
  /**
   * Constructor de la clase Coche
   * @param matricula Matrícula del coche
   * @param marca Marca del coche
   * @param modelo Modelo del coche
   * @param fechaHoraEntrada Fecha y hora de entrada del coche
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
