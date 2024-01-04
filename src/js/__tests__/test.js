import Character from '../app';
import Bowerman from '../Bowerman';

test('new Character object is created as expected', () => {
  const personCharacter = new Character('Mary', 'Daemon')
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

test('levelUp method result', () => {
  const personCharacter2 = new Bowerman('Mary');
  personCharacter2.levelUp();
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

test('levelUp method condition', () => {
  const personCharacter3 = new Bowerman('Mary');
  personCharacter3.damage(3000);
  expect(() => {
    personCharacter3.levelUp()
  }).toThrow(); 
});

test('damage() method result', () => {
  const personCharacter2 = new Bowerman('Mary');
  personCharacter2.levelUp();
  const result = 79;
  const points = 30;
  personCharacter2.damage(points);
  expect(result).toEqual(personCharacter2.health);
});

test('damage() method condition', () => {
  const personCharacter3 = new Bowerman('Mary');
  personCharacter3.damage(3000);
  expect(personCharacter3.damage(1)).toBeUndefined();
});

