import 'mocha';
import { expect } from 'chai';
import { Dish, selectDishesByNutritionalValue, selectDishesByUnhealthyScore, selectDishesByNutritionUnhealthyRatio, selectDishesWithMaxUnhealthyScore } from '../src/ejercicio-10';

describe('Estrategias de Selección de Menú', () => {
  const maxUnhealthyScore = 25;
  const dishes: Dish[] = [[80, 10], [60, 5], [40, 3], [20, 2]];

  describe('Seleccionar Platos por Valor Nutricional', () => {
    it('debería seleccionar platos maximizando el valor nutricional sin exceder el máximo de insalubridad', () => {
      const selectedDishes = selectDishesByNutritionalValue(dishes, maxUnhealthyScore);
      expect(selectedDishes).to.deep.include.members([[80, 10], [60, 5]]);
    });
  });

  describe('Seleccionar Platos por Grado de Insalubridad', () => {
    it('debería seleccionar platos con el menor grado de insalubridad primero sin exceder el máximo de insalubridad', () => {
      const selectedDishes = selectDishesByUnhealthyScore(dishes, maxUnhealthyScore);
      expect(selectedDishes).to.deep.include.members([[60, 5], [80, 10]]);
    });
  });

  describe('Seleccionar Platos por Relación Valor Nutricional/Grado de Insalubridad', () => {
    it('debería seleccionar platos con la mejor relación valor nutricional a grado de insalubridad sin exceder el máximo de insalubridad', () => {
      const selectedDishes = selectDishesByNutritionUnhealthyRatio(dishes, maxUnhealthyScore);
      expect(selectedDishes).to.deep.include.members([[80, 10], [60, 5]]);
    });
  });

  describe('Caso de Prueba para Exceder el Máximo de Insalubridad', () => {
    it('debería detener la selección de platos cuando agregar otro exceda el máximo de insalubridad', () => {
      const maxUnhealthyScoreAdjusted = 15;
      const selectedDishes = selectDishesByNutritionalValue(dishes, maxUnhealthyScoreAdjusted);
      expect(selectedDishes.length).to.be.lessThan(dishes.length);
      let totalUnhealthyScore = selectedDishes.reduce((acc, dish) => acc + dish[1], 0);
      expect(totalUnhealthyScore).to.be.at.most(maxUnhealthyScoreAdjusted);
    });
  });
  
});
