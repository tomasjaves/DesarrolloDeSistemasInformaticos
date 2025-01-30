"use strict";
/**
 * Un algoritmo RLE puede utilizarse para comprimir la información contenida en una cadena de caracteres.
 * Por ejemplo, la cadena 'AAAAAAAAABGGGGGGGGTHHHHHHHB' se puede comprimir como '9AB8GT7HB'.
 * Debido a lo anterior, no podrá utilizar caracteres numéricos en la cadena que desea codificar (no podría descodificarse adecuadamente).
 * Escriba una función encodeRLE que reciba una cadena de caracteres y devuelva la cadena de caracteres correspondiente tras el proceso
 * de compresión. Ante una entrada errónea haga que la función devuelva el valor undefined.
 * Escriba la función decodeRLE que lleve a cabo la operación de descompresión.
 */
function encodeRLE(str) {
    const regex = /^[0-9]+$/;
    if (regex.test(str)) {
        return undefined;
    }
    let encoded = '';
    let count = 1;
    str.split('').forEach((char, i) => {
        // Si el caracter actual es igual al siguiente, se incrementa el contador
        if (char === str[i + 1]) {
            ++count;
        }
        else {
            // Si el contador es 1, se añade el caracter a la cadena codificada
            encoded += count === 1 ? char : count + char;
            count = 1;
        }
    });
    return encoded;
}
function decodeRLE(str) {
    const letter = /[A-Z]/;
    let decoded = '';
    // Convertimos la cadena en un array para poder iterar sobre ella
    str.split('').forEach((char, i) => {
        // Si el caracter es una letra, se añade a la cadena decodificada
        if (letter.test(char)) {
            decoded += char;
        }
        else {
            // Iteramos tantas veces como el número que se encuentre en la cadena
            for (let j = 0; j < parseInt(char) - 1; j++) {
                decoded += str[i + 1];
            }
        }
    });
    return decoded;
}
console.log(encodeRLE('AAAAAAAAABGGGGGGGGTHHHHHHHB')); // 9AB8GT7HB
console.log(decodeRLE('9AB8GT7HB')); // AAAAAAAAABGGGGGGGGTHHHHHHHB
