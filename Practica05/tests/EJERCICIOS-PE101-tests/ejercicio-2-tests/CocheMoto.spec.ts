import { expect } from "chai";
import { Coche } from "../../../src/EJERCICIOS-PE101/ejercicio-2/Coche";
import { Moto } from "../../../src/EJERCICIOS-PE101/ejercicio-2/Moto";

describe("Pruebas de Vehículos", () => {
  describe("Coche", () => {
    it("debe crear una instancia de Coche correctamente", () => {
      const fechaHoraEntrada = new Date();
      // Instancia de Coche
      const coche = new Coche("ABC123", "Toyota", "Corolla", fechaHoraEntrada);

      expect(coche).to.be.instanceOf(Coche);
      expect(coche.matricula).to.equal("ABC123");
      expect(coche.marca).to.equal("Toyota");
      expect(coche.modelo).to.equal("Corolla");
      expect(coche.fechaHoraEntrada).to.equal(fechaHoraEntrada);
    });
  });

  describe("Moto", () => {
    it("debe crear una instancia de Moto correctamente", () => {
      const fechaHoraEntrada = new Date();
      const moto = new Moto("XYZ789", "Honda", "CBR500", fechaHoraEntrada);

      expect(moto).to.be.instanceOf(Moto);
      expect(moto.matricula).to.equal("XYZ789");
      expect(moto.marca).to.equal("Honda");
      expect(moto.modelo).to.equal("CBR500");
      expect(moto.fechaHoraEntrada).to.equal(fechaHoraEntrada);
    });
  });
});
