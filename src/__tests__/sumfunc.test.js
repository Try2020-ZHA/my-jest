import sum from '../func/sum';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(sum(2,2)).toBe(4);
  });
});