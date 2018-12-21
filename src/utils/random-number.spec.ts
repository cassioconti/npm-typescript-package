import { RandomNumber } from './random-number';

describe('RandomNumber', () => {
  it('should return a number 0 <= x < 200', () => {
    const randomNumber: RandomNumber = new RandomNumber();
    for (let i = 0; i < 100; i++) {
      const sumOfTwoNumbersBetweenZeroAndHundred = randomNumber.SumTwoRandomNumbers();
      checkNumber(sumOfTwoNumbersBetweenZeroAndHundred);
    }
  });

  function checkNumber(x: number): void {
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(200);
  }
});
