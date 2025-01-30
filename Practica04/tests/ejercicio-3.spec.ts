import 'mocha';
import { expect } from 'chai';
import { getScore } from '../src/ejercicio-3'; // Asegúrate de actualizar esta ruta

describe('getScore', () => {
    it('debería devolver [] para una lista vacía', () => {
        expect(getScore([])).to.deep.equal([]);
    });

    it('debería devolver [undefined, 12, 11, undefined, 5] para ["kilo", "almendras", "llano", "wenceslao", "ratón"]', () => {
        const result = getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón']);
        expect(result).to.deep.equal([undefined, 12, 11, undefined, 5]);
    });

    it('debería manejar palabras con letras acentuadas correctamente', () => {
        expect(getScore(['ratón'])).to.deep.equal([5]);
        expect(getScore(['árbol'])).to.deep.equal([7]);
    });

    it('debería devolver undefined para palabras con "k" o "w"', () => {
        expect(getScore(['kilo'])).to.deep.equal([undefined]);
        expect(getScore(['wenceslao'])).to.deep.equal([undefined]);
    });

    it('debería calcular correctamente la puntuación de palabras complejas', () => {
        expect(getScore(['chispa', 'jirafa', 'llama', 'carro'])).to.deep.equal([11, 16, 13, 13]);
    });
    
    it('debería calcular correctamente la puntuación de palabras con "Q"', () => {
        expect(getScore(['quijote'])).to.deep.equal([18]);
        expect(getScore(['queso'])).to.deep.equal([9]);
        expect(getScore(['química'])).to.deep.equal([15]);
    });

    it('debería calcular correctamente la puntuación de palabras con "X"', () => {
        expect(getScore(['examen'])).to.deep.equal([15]);
        expect(getScore(['extra'])).to.deep.equal([12]);
        expect(getScore(['exquisito'])).to.deep.equal([20]);
    });

    it('debería calcular correctamente la puntuación de palabras con "Z"', () => {
        expect(getScore(['zapato'])).to.deep.equal([17]);
        expect(getScore(['zorro'])).to.deep.equal([20]);
        expect(getScore(['zurdo'])).to.deep.equal([15]);
    });

    it('debería calcular correctamente la puntuación de palabras con combinación "RR"', () => {
        expect(getScore(['carro'])).to.deep.equal([13]);
        expect(getScore(['arroz'])).to.deep.equal([20]);
        expect(getScore(['perro'])).to.deep.equal([13]);
    });

    it('debería devolver undefined para palabras con letras no permitidas como "K" o "W" dentro de palabras complejas', () => {
        expect(getScore(['kárstico'])).to.deep.equal([undefined]);
        expect(getScore(['swing'])).to.deep.equal([undefined]);
        expect(getScore(['kárstico', 'swing'])).to.deep.equal([undefined, undefined]);
    });

    it('debería manejar correctamente palabras con múltiples letras acentuadas', () => {
        expect(getScore(['árbol'])).to.deep.equal([7]);
        expect(getScore(['canción'])).to.deep.equal([11]);
        expect(getScore(['canción', 'árbol'])).to.deep.equal([11, 7]);
    });

    it('debería calcular correctamente la puntuación para palabras que incluyen "CH" y otras letras de alto valor', () => {
        expect(getScore(['chichon'])).to.deep.equal([13]);
        expect(getScore(['chichon', 'chispa'])).to.deep.equal([13, 11]);
        expect(getScore(['chichon', 'chispa', 'rechoncho'])).to.deep.equal([13, 11, 15]);
    });

    it('debería devolver una puntuación correcta para palabras con "LL"', () => {
        expect(getScore(['llave'])).to.deep.equal([14]);
        expect(getScore(['llama'])).to.deep.equal([13]);
        expect(getScore(['llave', 'llama'])).to.deep.equal([14, 13]);

    });

    it('debería manejar correctamente palabras con combinaciones de letras especiales seguidas de letras acentuadas', () => {
        expect(getScore(['chárter'])).to.deep.equal([10]);
        expect(getScore(['llénalo'])).to.deep.equal([13]);
        expect(getScore(['chárter', 'llénalo'])).to.deep.equal([10, 13]);
    });
});
