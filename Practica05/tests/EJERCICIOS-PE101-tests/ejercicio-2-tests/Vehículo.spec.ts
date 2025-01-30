import { expect } from "chai";
import { Coche } from "../../../src/EJERCICIOS-PE101/ejercicio-2/Coche";
import { Moto } from "../../../src/EJERCICIOS-PE101/ejercicio-2/Moto";

describe("Vehiculo", () => {
  it("Coche debe tener todas las propiedades de Vehiculo", () => {
    const coche = new Coche("123ABC", "Toyota", "Corolla", new Date());
    expect(coche).to.have.property("matricula");
    expect(coche).to.have.property("marca");
    expect(coche).to.have.property("modelo");
    expect(coche).to.have.property("fechaHoraEntrada");
  });

  it("Moto debe tener todas las propiedades de Vehiculo", () => {
    const moto = new Moto("456DEF", "Honda", "CBR500", new Date());
    expect(moto).to.have.property("matricula");
    expect(moto).to.have.property("marca");
    expect(moto).to.have.property("modelo");
    expect(moto).to.have.property("fechaHoraEntrada");
  });
});
