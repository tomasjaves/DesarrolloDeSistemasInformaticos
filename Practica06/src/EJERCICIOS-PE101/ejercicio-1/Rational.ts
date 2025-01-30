import { Arithmeticable } from "./Arithmeticable";

/**
 * Clase que representa un número racional
 * @class Rational
 * @implements {Arithmeticable<Rational>}
 * @property {number} numerator Numerador del número racional
 * @property {number} denominator Denominador del número racional
 * @method {number} getNumerator Devuelve el numerador del número racional
 * @method {number} getDenominator Devuelve el denominador del número racional
 * @method {Rational} add Suma dos números racionales
 * @method {Rational} subtract Resta dos números racionales
 * @method {Rational} multiply Multiplica dos números racionales
 * @method {Rational} divide Divide dos números racionales
 */
export class Rational implements Arithmeticable<Rational> {
  private numerator: number;
  private denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominador no puede ser 0");
    }
    this.numerator = numerator;
    this.denominator = denominator;
  }

  /**
   * Devuelve el numerador
   * @returns {number} Numerador del número racional
   */
  getNumerator(): number {
    return this.numerator;
  }

  /**
   * Devuelve el denominador
   * @returns {number} Denominador del número racional
   */
  getDenominator(): number {
    return this.denominator;
  }

  /**
   * Devuelve la suma de los valores racionales
   * @param {Rational} b Número racional a sumar
   * @returns {Rational} Suma de los valores racionales
   */
  add(b: Rational): Rational {
    return new Rational(
      this.numerator * b.denominator + b.numerator * this.denominator,
      this.denominator * b.denominator,
    );
  }

  /**
   * Devuelve la resta de los valores racionales
   * @param {Rational} b Número racional a restar
   * @returns {Rational} Resta de los valores racionales
   */
  subtract(b: Rational): Rational {
    return new Rational(
      this.numerator * b.denominator - b.numerator * this.denominator,
      this.denominator * b.denominator,
    );
  }

  /**
   * Devuelve la multiplicación de los valores racionales
   * @param {Rational} b Número racional a multiplicar
   * @returns {Rational} Multiplicación de los valores racionales
   */
  multiply(b: Rational): Rational {
    return new Rational(
      this.numerator * b.numerator,
      this.denominator * b.denominator,
    );
  }

  /**
   * Devuelve la división de los valores racionales
   * @param {Rational} b Número racional a dividir
   * @returns {Rational} División de los valores racionales
   */
  divide(b: Rational): Rational {
    return new Rational(
      this.numerator * b.denominator,
      this.denominator * b.numerator,
    );
  }
}
