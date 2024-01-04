import Magician from '../Magician';

test('new Magician object is created as expected', () => {
  const personMagician = new Magician('Mary')
  const result = {
    _name: 'Mary',
    _type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(result).toEqual(personMagician);
});