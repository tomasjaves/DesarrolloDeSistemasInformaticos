import 'mocha';
import { expect } from 'chai';
import { getPoints } from '../src/ejercicio-4';

describe('getPoints', () => {
    it('debería devolver undefined para un identificador de fase negativo', () => {
        expect(getPoints([2, 3, 7], -25)).to.be.undefined;
        expect(getPoints([2, 3, 7], -2)).to.be.undefined;
        expect(getPoints([2, 3, 7], -1)).to.be.undefined;
    });

    it('debería devolver undefined para un identificador de objeto negativo', () => {
        expect(getPoints([-2, 3, 7], 25)).to.be.undefined;
        expect(getPoints([-2, -3, 7], 25)).to.be.undefined;
        expect(getPoints([-2, -3, -7], 25)).to.be.undefined;
    });

    it('debería devolver undefined para un identificador de fase o de objeto negativo', () => {
        expect(getPoints([-2, 3, 7], -25)).to.be.undefined;
        expect(getPoints([2, -3, 7], -25)).to.be.undefined;
        expect(getPoints([2, 3, -7], -25)).to.be.undefined;
    });

    it('debería devolver 211 para [2, 3, 7] y 25', () => {
        expect(getPoints([2, 3, 7], 25)).to.equal(211);
    });

    it('debería devolver 0 para [2, 3, 7] y 2', () => {
        expect(getPoints([2, 3, 7], 2)).to.equal(0);
    });

    it('debería devolver 0 para [2, 3, 7] y 0', () => {
        expect(getPoints([2, 3, 7], 0)).to.equal(0);
    });

    it('debería devolver 0 para [] y 25', () => {
        expect(getPoints([], 25)).to.equal(0);
    });
});