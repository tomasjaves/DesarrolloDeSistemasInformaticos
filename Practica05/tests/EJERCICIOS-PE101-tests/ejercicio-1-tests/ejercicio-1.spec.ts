import "mocha";
import { expect } from "chai";
import { checkAttack, ChessBoard } from "../../../src/EJERCICIOS-PE101/ejercicio-1/ejercicio-1";

// Describimos pruebas para la función checkAttack() que verifica si dos reinas pueden atacarse.
describe("checkAttack", () => {
  // Debería devolver true pues se pueden atacar las dos reinas.
  it("debería devolver true si las reinas pueden atacarse", () => {
    const board: ChessBoard  = [
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "N", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "B", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    expect(checkAttack(board)).to.equal(true);
  });

  // Debería devolver false pues las dos reinas no pueden atacarse.
  it("debería devolver false si las reinas no pueden atacarse", () => {
    const board: ChessBoard = [
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "N", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "B", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    expect(checkAttack(board)).to.equal(false);
  });

  // Debería devolver undefined pues es un tablero no válido.
  it("debería devolver undefined si el tablero no es válido", () => {
    const board: ChessBoard = [["-", "-", "-", "-", "-", "-", "-", "-"]];
    expect(checkAttack(board)).to.equal(undefined);
  });

  // Debería devolver undefined pues no se encuentran dos reinas en el tablero
  it("debería devolver undefined si no se encuentran dos reinas", () => {
    const board: ChessBoard = [
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "N", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    expect(checkAttack(board)).to.equal(undefined);
  });
});
