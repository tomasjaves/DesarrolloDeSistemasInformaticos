/**
 * Escriba una función hammingDist que calcule la distancia de Hamming entre dos cadenas de ADN,
 * las cuales solo pueden contener los caracteres C, A, G y T. La función deberá comprobar que las cadenas de ADN sean válidas,
 * esto es, que solo contengan los caracteres anteriores, y que, además, sean de la misma longitud.
 * Si lo anterior no ocurre, la función deberá devolver el valor undefined.
 * Por ejemplo, ante las cadenas 'GAGCCTACTAACGGGAT' y 'CATCGTAATGACGGCCT' la función deberá devolver el valor 7
 * (existen 7 posiciones en ambas cadenas donde las letras no coinciden).
 */

function hammingDist(dna1: string, dna2: string): number | undefined {
    const regex = /^[ACGT]+$/;
    // Se verifica que las cadenas tengan la misma longitud y que solo contengan los caracteres C, A, G y T
    if (dna1.length !== dna2.length || !regex.test(dna1) || !regex.test(dna2)) {
        return undefined;
    }

    let distance = 0;
    // Se usa la funcion split porque no se puede acceder a un string como si fuera un array
    dna1.split('').forEach((char, i) => {
        if (char !== dna2[i]) {
            distance++;
        }
    });
    return distance;
}

console.log(hammingDist('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')); // 7