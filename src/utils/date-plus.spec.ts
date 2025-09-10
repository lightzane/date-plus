import '@/utils/date-plus';

describe('date plus', () => {
  it('should add months to a date', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const newDate = date.plus({ months: 5 });
    expect(newDate).toEqual(new Date('2023-06-01T00:00:00Z'));
  });

  it('should add days to a date', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const newDate = date.plus({ days: 5 });
    expect(newDate).toEqual(new Date('2023-01-06T00:00:00Z'));
  });

  it('should add hours to a date', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const newDate = date.plus({ hours: 2, mins: 30 });
    expect(newDate).toEqual(new Date('2023-01-01T02:30:00Z'));
  });

  it('should add minutes to a date', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const newDate = date.plus({ mins: 30 }).plus({ mins: 30 });
    expect(newDate).toEqual(new Date('2023-01-01T01:00:00Z'));
  });

  it('should add seconds to a date', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const newDate = date.plus({ secs: 45 });
    expect(newDate).toEqual(new Date('2023-01-01T00:00:45Z'));
  });

  it('should add milliseconds to a date', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const newDate = date.plus({ ms: 500 });
    expect(newDate).toEqual(new Date('2023-01-01T00:00:00.500Z'));
  });
});
