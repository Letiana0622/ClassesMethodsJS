import Daemon from '../Daemon';

test('new Daemon object is created as expected', () => {
  const personDaemon = new Daemon('Mary')
  const result = {
    _name: 'Mary',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(result).toEqual(personDaemon);
});