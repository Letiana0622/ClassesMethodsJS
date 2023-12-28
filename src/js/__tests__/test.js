import Character from '../app';

const personCharacter = new Character('Mary', 'Daemon', 10, 10)

test('new Character object is created as expected', () => {
  const result = {
    _name: 'Mary',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10
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

const personCharacter2 = new Character('Mary', 'Daemon',10,10);
personCharacter2.levelUp();

test('levelUp method result', () => {
  const result = {
    _name: 'Mary',
    _type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12
  };

  expect(result).toEqual(personCharacter2);
});

const personCharacter3 = new Character('Mary', 'Daemon',10,10);
personCharacter3.damage(3000);

test('levelUp method condition', () => {
  expect(() => {
    personCharacter3.levelUp()
  }).toThrow(); 
});

test('damage() method result', () => {
  const result = 73.6;
  const points = 30;
  personCharacter2.damage(points);
  expect(result).toEqual(personCharacter2.health);
});

test('damage() method condition', () => {
  expect(personCharacter3.damage(1)).toBeUndefined();
});

