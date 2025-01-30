/**
 * La distancia de Manhattan viene definida por aquella distancia entre dos puntos definidos en un espacio de n dimensiones.
 * Implemente una función manhattanDistance que reciba dos puntos como argumentos, que tengan el mismo número de coordenadas 
 * (n números enteros) y que devuelva la distancia de Manhattan entre ambos puntos. 
 * Algunos ejemplos: 
 * (1, 3) y (4, 10) = 10
 * (1, 1) y (1, 1) = 0
 * (-1, 3, 7) y (-5, 8, 7) = 9
 */

type Punto = number[];

function manhattanDistance(point1: Punto, point2: Punto): number {
  let distance = 0;
  // Coord se utiliza para recorrer cada coordenada de los puntos
  point1.forEach((coord, i) => { 
    distance += Math.abs(coord - point2[i]);
  });
  
  return distance;
}

console.log(manhattanDistance([1, 3], [4, 10])); // 10
console.log(manhattanDistance([1, 1], [1, 1])); // 0
console.log(manhattanDistance([-1, 3, 7], [-5, 8, 7])); // 9