import { ArithmeticableCollection } from "./ArithmeticableCollection";
import { Rational } from "./Rational";
import { Complex } from "./Complex";

// Creamos una colección de números racionales y complejos
const racionales = new ArithmeticableCollection<Rational>();
const complejos = new ArithmeticableCollection<Complex>();

// Añadimos números racionales y complejos
racionales.addArithmeticable(new Rational(1, 2));
racionales.addArithmeticable(new Rational(3, 4));
complejos.addArithmeticable(new Complex(1, 2));
complejos.addArithmeticable(new Complex(3, 4));

// Mostramos el número de racionales y complejos
console.log("Número de racionales:", racionales.getNumberOfArithmeticables());
console.log("Número de complejos:", complejos.getNumberOfArithmeticables());

console.log();
// Mostramos los racionales y complejos
console.log("Racionales:");
for (let i = 0; i < racionales.getNumberOfArithmeticables(); i++) {
  console.log(racionales.getArithmeticable(i));
}

console.log();
console.log("Complejos:");
for (let i = 0; i < complejos.getNumberOfArithmeticables(); i++) {
  console.log(complejos.getArithmeticable(i));
}

console.log();
// Mostramos la suma de los racionales y complejos
for (let i = 0; i < racionales.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `Suma de racionales ${i + 1} y ${i + 2}:`,
    racionales
      .getArithmeticable(i)
      .add(
        racionales.getArithmeticable(i + 1),
      ),
  );
}

for (let i = 0; i < complejos.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `Suma de complejos ${i + 1} y ${i + 2}:`,
    complejos
      .getArithmeticable(i)
      .add(complejos.getArithmeticable(i + 1)),
  );
}

console.log();
// Mostramos la resta de los racionales y complejos
for (let i = 0; i < racionales.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `Resta de racionales ${i + 1} y ${i + 2}:`,
    racionales
      .getArithmeticable(i)
      .subtract(
        racionales.getArithmeticable(i + 1),
      ),
  );
}

for (let i = 0; i < complejos.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `Resta de complejos ${i + 1} y ${i + 2}:`,
    complejos
      .getArithmeticable(i)
      .subtract(
        complejos.getArithmeticable(i + 1),
      ),
  );
}

console.log();
// Mostramos la multiplicación de los racionales y complejos
for (let i = 0; i < racionales.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `Multiplicación de racionales ${i + 1} y ${i + 2}:`,
    racionales
      .getArithmeticable(i)
      .multiply(
        racionales.getArithmeticable(i + 1),
      ),
  );
}

for (let i = 0; i < complejos.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `Multiplicación de complejos ${i + 1} y ${i + 2}:`,
    complejos
      .getArithmeticable(i)
      .multiply(
        complejos.getArithmeticable(i + 1),
      ),
  );
}

console.log();
// Mostramos la división de los racionales y complejos
for (let i = 0; i < racionales.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `División de racionales ${i + 1} y ${i + 2}:`,
    racionales
      .getArithmeticable(i)
      .divide(
        racionales.getArithmeticable(i + 1),
      ),
  );
}

for (let i = 0; i < complejos.getNumberOfArithmeticables() - 1; i++) {
  console.log(
    `División de complejos ${i + 1} y ${i + 2}:`,
    complejos
      .getArithmeticable(i)
      .divide(
        complejos.getArithmeticable(i + 1),
      ),
  );
}
