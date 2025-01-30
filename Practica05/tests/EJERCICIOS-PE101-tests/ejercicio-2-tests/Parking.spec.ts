import "mocha";
import { expect } from "chai";
import { Coche } from "../../../src/EJERCICIOS-PE101/ejercicio-2/Coche";
import { Moto } from "../../../src/EJERCICIOS-PE101/ejercicio-2/Moto";
import { Parking } from "../../../src/EJERCICIOS-PE101/ejercicio-2/Parking";

describe("Parking - Funcionalidades Completas", () => {
  let parking: Parking;

  beforeEach(() => {
    // Un parking pequeño para tests
    parking = new Parking(2, 2);
  });

  it("debe listar correctamente los vehículos estacionados", () => {
    const coche = new Coche("789GHI", "Ford", "Fiesta", new Date());
    const moto = new Moto("012JKL", "Yamaha", "R1", new Date());
    parking.entrarVehiculo(coche);
    parking.entrarVehiculo(moto);
    const listado = parking.listarVehiculos();
    expect(listado.coches).to.deep.include(coche);
    expect(listado.motos).to.deep.include(moto);
  });

  it("no debe permitir la entrada de un vehículo si el parking está lleno", () => {
    // Llenamos el parking
    parking.entrarVehiculo(new Coche("111AAA", "BMW", "Serie 3", new Date()));
    parking.entrarVehiculo(new Coche("222BBB", "Audi", "A4", new Date()));
    // Intentamos añadir otro coche
    const resultado = parking.entrarVehiculo(
      new Coche("333CCC", "Mercedes", "Clase C", new Date()),
    );
    expect(resultado).to.be.false;
  });

  it("debe permitir la salida de un vehículo y actualizar las plazas correctamente", () => {
    const coche = new Coche("444DDD", "Tesla", "Model 3", new Date());
    parking.entrarVehiculo(coche);
    parking.salirVehiculo(coche.matricula);
    expect(parking.plazasDisponibles().coches).to.equal(2); // Verificamos que la plaza se haya liberado
  });

  it("debe retornar false al intentar sacar un vehículo con una matrícula no registrada", () => {
    // Crear instancia de Parking
    const parking = new Parking(10, 10); // Asume que Parking espera dos argumentos: maxPlazasCoches y maxPlazasMotos
    // Intentar sacar un vehículo que no existe
    const resultado = parking.salirVehiculo("MATRICULA_INEXISTENTE");
    // Verificar que el resultado es false
    expect(resultado).to.be.false;
  });
});
