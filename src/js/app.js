export default class Character {

  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  set name(value) {
   if(typeof value !== 'string' || value.length < 2 || value.length > 10) {
     throw new Error ('введено некорректное значение');
   }
   this._name = value;
  }

  set type(value) {
    const types =['Bowerman','Swordsman','Magician','Daemon','Undead','Zombie'];
    let isValueInTypes = types.includes(value);
    if(typeof value !== 'string' || !isValueInTypes) {
      throw new Error ('введено некорректное значение');
    }
    this._type = value;
   }

  levelUp() {
    if(this.health <= 0) {
      throw new Error ('нельзя повысить левел умершего');
    }
    else {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence*0.2;
      this.health = 100;
    }
   }

  damage(points) {
    if(this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }

}