import { expect } from 'chai';
import { Plural } from './plural';

describe('getPlural function test', () => {
  let plural: Plural;

  before(() => {
    plural = new Plural();
  });

  it('should return Boys', () => {
    const result = plural.getPlural('Boy');
    expect(result).to.equal('Boys');
  });

  it('should return Girls', () => {
    const result = plural.getPlural('Girl');
    expect(result).to.equal('Girls');
  });

  it('should return Geese', () => {
    const result = plural.getPlural('Goose');
    expect(result).to.equal('Geese');
  });

  it('should return Toys', () => {
    const result = plural.getPlural('Toy');
    expect(result).to.equal('Toys');
  });

  it('should return Men', () => {
    const result = plural.getPlural('Man');
    expect(result).to.equal('Men');
  });
});
