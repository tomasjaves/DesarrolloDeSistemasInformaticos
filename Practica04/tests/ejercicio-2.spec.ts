// Importamos las funciones a testear
import 'mocha';
import { expect } from 'chai';
import { fromIntToActions, SeñalesCorporales } from '../src/ejercicio-2';

describe('fromIntToActions', () => {
    it('debería devolver [Agacharse, DarUnAplauso] para 192', () => {
        expect(fromIntToActions(192)).to.deep.equal([SeñalesCorporales.Agacharse, SeñalesCorporales.DarUnAplauso]);
    });

    it('debería devolver [Parpadear, DarUnAplauso] para 129', () => {
        expect(fromIntToActions(129)).to.deep.equal([SeñalesCorporales.Parpadear, SeñalesCorporales.DarUnAplauso]);
    });

    it('debería devolver undefined para 257', () => {
        expect(fromIntToActions(257)).to.deep.equal([SeñalesCorporales.Parpadear]);
    });

    it('debería devolver [] para 256', () => {
        expect(fromIntToActions(256)).to.deep.equal([]);
    });

    it('debería devolver [Parpadear, ParpadearDosVeces] para 515', () => {
        expect(fromIntToActions(515)).to.deep.equal([SeñalesCorporales.Parpadear, SeñalesCorporales.ParpadearDosVeces]);
    });

    it('debería devolver [MoverLaNariz, Saltar, Agacharse] para 84', () => {
        expect(fromIntToActions(84)).to.deep.equal([SeñalesCorporales.MoverLaNariz, SeñalesCorporales.Saltar, SeñalesCorporales.Agacharse]);
    });

    it('debería devolver undefined para -14', () => {
        expect(fromIntToActions(-14)).to.be.undefined;
    });
});
