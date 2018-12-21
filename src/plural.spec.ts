import { Plural } from './plural';

describe('getPlural function test', () => {
  let plural: Plural;

  beforeAll(() => {
    plural = new Plural();
  });

  it('should return Boys', () => {
    const result = plural.getPlural('Boy');
    expect(result).toBe('Boys');
  });

  it('should return Girls', () => {
    const result = plural.getPlural('Girl');
    expect(result).toBe('Girls');
  });

  it('should return Geese', () => {
    const result = plural.getPlural('Goose');
    expect(result).toBe('Geese');
  });

  it('should return Toys', () => {
    const result = plural.getPlural('Toy');
    expect(result).toBe('Toys');
  });

  it('should return Men', () => {
    const result = plural.getPlural('Man');
    expect(result).toBe('Men');
  });
});
