import '@/utils/zero';

describe('zero', () => {
  it('should pad zeros to a string', () => {
    expect('5'.padZero()).toBe('05');
    expect('5'.padZero(3)).toBe('005');
    expect('123'.padZero(2)).toBe('123');
  });

  it('should pad zeros to a number', () => {
    expect((5).padZero()).toBe('05');
    expect((5).padZero(3)).toBe('005');
    expect((123).padZero(2)).toBe('123');
  });

  it('should pad zeros using alias "z"', () => {
    expect('5'.z()).toBe('05');
    expect('5'.z(3)).toBe('005');
    expect('123'.z(2)).toBe('123');
    expect((5).z()).toBe('05');
    expect((5).z(3)).toBe('005');
    expect((123).z(2)).toBe('123');
  });
});
