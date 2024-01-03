import Bowerman from '../Bowerman';

const personBowerman = new Bowerman('Mary')

test('new Bowerman object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(result).toEqual(personBowerman);
});