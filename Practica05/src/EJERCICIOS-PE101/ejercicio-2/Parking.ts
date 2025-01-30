import { Coche } from "./Coche";
import { Moto } from "./Moto";

/**
 * Clase Parking que representa un parking con plazas limitadas para coches y motos.
 */
export class Parking {
  // Atributos de la clase
  private coches: Coche[] = [];
  private motos: Moto[] = [];
  private maxPlazasCoches: number;
  private maxPlazasMotos: number;

  /**
   * Constructor de la clase Parking
   * @param maxPlazasCoches Número máximo de plazas para coches
   * @param maxPlazasMotos Número máximo de plazas para motos
   */
  constructor(maxPlazasCoches: number, maxPlazasMotos: number) {
    this.maxPlazasCoches = maxPlazasCoches;
    this.maxPlazasMotos = maxPlazasMotos;
  }

  /**
   * Método que permite la entrada de un vehículo al parking
   * @param vehiculo Vehículo a estacionar
   * @returns true si se ha estacionado correctamente, false si no hay plazas disponibles
   */
  entrarVehiculo(vehiculo: Coche | Moto): boolean {
    // Comprobamos si el vehículo es un coche o una moto
    if (vehiculo instanceof Coche) {
      // Si hay plazas disponibles, estacionamos el coche
      if (this.coches.length < this.maxPlazasCoches) {
        this.coches.push(vehiculo);
        return true;
      }
    } else if (vehiculo instanceof Moto) {
      // Si hay plazas disponibles, estacionamos la moto
      if (this.motos.length < this.maxPlazasMotos) {
        this.motos.push(vehiculo);
        return true;
      }
    }
    return false;
  }

  /**
   * Método que permite la salida de un vehículo del parking
   * @param matricula Matrícula del vehículo a sacar
   * @returns true si se ha sacado correctamente, false si no se ha encontrado el vehículo
   */
  salirVehiculo(matricula: string): boolean {
    // Buscamos el vehículo por su matrícula
    let vehiculoIndex = this.coches.findIndex(
      (coche) => coche.matricula === matricula,
    );
    // Si lo encontramos, lo sacamos
    if (vehiculoIndex !== -1) {
      // Eliminamos el coche del array
      this.coches.splice(vehiculoIndex, 1);
      return true;
    }
    // Si no es un coche, buscamos en las motos
    vehiculoIndex = this.motos.findIndex(
      (moto) => moto.matricula === matricula,
    );
    // Si lo encontramos, lo sacamos
    if (vehiculoIndex !== -1) {
      // Eliminamos la moto del array
      this.motos.splice(vehiculoIndex, 1);
      return true;
    }
    return false;
  }

  /**
   * Método que devuelve el número de plazas disponibles para coches y motos
   * @returns Un objeto con el número de plazas disponibles para coches y motos
   */
  plazasDisponibles(): { coches: number; motos: number } {
    // Calculamos el número de plazas disponibles para coches y motos y las devolvemos
    return {
      coches: this.maxPlazasCoches - this.coches.length,
      motos: this.maxPlazasMotos - this.motos.length,
    };
  }

  /**
   * Método que devuelve un listado de los coches y motos estacionados
   * @returns Un objeto con un listado de coches y motos estacionados
   */
  listarVehiculos(): { coches: Coche[]; motos: Moto[] } {
    // Devolvemos un objeto con un listado de coches y motos
    return {
      coches: this.coches,
      motos: this.motos,
    };
  }
}
