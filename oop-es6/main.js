"use strict";
class Weapon {
    constructor (name, attack, durability, range) {
        this.name = name; //название
        this.attack = attack; //уровень атаки
        this.durability = durability; //прочность
        this.range = range; //дальность
        this.durabilityWearOut = this.durability * 30 / 100;
    }
    //метод добавляющий повреждение от соперника
    takeDamage(damage) {
        if (this.durability > 0) {
            this.durability = this.durability - damage;
        }else{
            this.durability = 0;
        }
    }
    //метод рассчитывающий урон от удара данным оружием
    getDamage() {
        if (this.durability > this.durabilityWearOut || this.durability === Infinity) {
            return this.attack;
        }else if (this.durability === 0) {
            return 0;
        }else{
            return this.attack / 2;
        }
    }
//метод показывающий, сломано ли оружие
    isBroken() {
        if (this.durability > 0) {
            return false;
        }else{
            return true;
        }
    }
}

class goldWeapon extends Weapon {

};

class Hand extends Weapon {

};

class Bow extends Weapon {

};

class Sword extends Weapon {

};

class Knife extends Weapon {

};

class Staff extends Weapon {

};

class goldBow extends Bow {
  constructor (name, goldName, attack, durability, range) {
    super(name, goldName, durability, range);
    this.goldName = goldName; //название gold
    this.name = name; //название
    this.attack = attack; //уровень атаки
    this.durability = durability; //прочность
    this.range = range; //дальность
  }
};

class goldSword extends Sword {
  constructor (name, goldName, attack, durability, range) {
    super(name, goldName, durability, range);
    this.name = name; //название
    this.goldName = goldName; //название gold
    this.attack = attack; //уровень атаки
    this.durability = durability; //прочность
    this.range = range; //дальность
  }
};

class goldStaff extends Staff {
  constructor (name, goldName, attack, durability, range) {
    super(name, goldName, durability, range);
    this.name = name; //название
    this.goldName = goldName; //название gold
    this.attack = attack; //уровень атаки
    this.durability = durability; //прочность
    this.range = range; //дальность
  }
};

const hand = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const upBow = new goldBow( 'Лук', 'Длинный лук', 15, 200, 4);
const upSword = new goldSword('Меч', 'Секира', 27, 800, 1);
const upStaff = new goldStaff('Посох', 'Посох Бури', 10, 300, 3);



/*
bow.takeDamage(10);
console.log(bow);
console.log(bow.getDamage());
*/