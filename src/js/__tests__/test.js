import Character from '../app';
import Bowerman from '../Bowerman';

const personCharacter = new Character('Mary', 'Daemon')

test('new Character object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined
  };

  expect(result).toEqual(personCharacter);
});

test.each([ 
  ['too short name', 'M', 'Daemon'], 
  ['too long name', 'Мммммммммммммммм', 'Daemon'], 
  ['not correct type','Mary', 'Dddddddddddddd'], 
])( 
  ('should through error in case of %s'), 
  (errorType, name, type) => { 
    expect(() => {
      new Character(name, type);
    }).toThrow(); 
  }
);

const personCharacter2 = new Bowerman('Mary');
personCharacter2.levelUp();

test('levelUp method result', () => {
  const result = {
    _name: 'Mary',
    _type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  };

  expect(result).toEqual(personCharacter2);
});

const personCharacter3 = new Bowerman('Mary');
personCharacter3.damage(3000);

test('levelUp method condition', () => {
  expect(() => {
    personCharacter3.levelUp()
  }).toThrow(); 
});

test('damage() method result', () => {
  const result = 79;
  const points = 30;
  personCharacter2.damage(points);
  expect(result).toEqual(personCharacter2.health);
});

test('damage() method condition', () => {
  expect(personCharacter3.damage(1)).toBeUndefined();
});

