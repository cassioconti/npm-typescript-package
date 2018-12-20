import { expect } from 'chai';
import { Greeter } from './greeter';

describe('Greeter tests', () => {
  it('should contain my name', () => {
    const greeter: Greeter = new Greeter();
    const result = greeter.greet('Cassio');
    expect(result).to.be.eq('Hello Cassio!');
  });
});
