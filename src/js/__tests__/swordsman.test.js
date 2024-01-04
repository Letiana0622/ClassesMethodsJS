import Swordsman from '../Swordsman';

test('new Swordsman object is created as expected', () => {
  const personSwordsman = new Swordsman('Mary')
  const result = {
    _name: 'Mary',
    _type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(result).toEqual(personSwordsman);
});
