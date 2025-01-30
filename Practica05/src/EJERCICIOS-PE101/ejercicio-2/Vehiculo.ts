/**
 * Clase abstracta Vehiculo que representa un vehículo con matrícula,
 * marca, modelo y fecha de entrada.
 */
export abstract class Vehiculo {
  // Atributos de la clase
  matricula: string;
  marca: string;
  modelo: string;
  fechaHoraEntrada: Date;
  // Constructor de la clase
  constructor(
    matricula: string,
    marca: string,
    modelo: string,
    fechaHoraEntrada: Date,
  ) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.fechaHoraEntrada = fechaHoraEntrada;
  }
}
