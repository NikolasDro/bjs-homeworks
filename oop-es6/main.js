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
        if (this.durability > 0 && this.durability > damage) {
            this.durability = this.durability - damage;
        }else{
            this.durability = 0;
        }
    }
    //метод рассчитывающий урон от удара данным оружием
    getDamage() {
        if (this.durability >= this.durabilityWearOut) {
            return this.attack;
        }else if (this.durability === 0) {
            return 0;
        }else{
            return this.attack / 2;
        }
    }
//метод показывающий, сломано ли оружие
    isBroken() {
        return this.durability == 0;
    }
}

class Hand extends Weapon {
    constructor() {
        super ('Рука', 1, Infinity, 1);
    }
};

class Bow extends Weapon {
    constructor() {
        super ('Лук', 10, 200, 3);
    }
};

class Sword extends Weapon {
    constructor() {
        super ('Меч', 25, 500, 1);
    }
};

class Knife extends Weapon {
    constructor() {
        super ('Нож', 5, 300, 1);
    }
};

class Staff extends Weapon {
    constructor() {
        super ('Посох', 8, 300, 2);
    }
};

class goldBow extends Bow {
    constructor (durability) {
        super(durability);
        this.name = 'Длинный лук'; 
        this.attack = 15;
        this.range = 4;
    }
};
  
class goldSword extends Sword {
    constructor (range) {
        super(range);
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
};
  
class goldStaff extends Staff {
    constructor (durability) {
        super(durability);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
};
  
const bow = new Bow();
const hand = new Hand ();
const goldbow = new goldBow();

/*
bow.takeDamage(70);
console.log(bow);
console.log(bow.getDamage());
bow.isBroken();

goldbow.takeDamage(70);
console.log(goldbow);
console.log(goldbow.getDamage());
goldbow.isBroken();

hand.takeDamage(70);
console.log(hand);
console.log(hand.getDamage());
hand.isBroken();
*/