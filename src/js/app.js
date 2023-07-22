
class Character {

    constructor(name, type, health, level, attack, defence) {
  
     const typer = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
  
      if (typeof (name) !== 'string' || (name.length < 2 || name.length > 10)) {
        throw new Error('имя должно содержать символов  min - 2 , max - 10')
      } else {
        this.name = name;
      }
  
      if (typeof (type) !== 'string' || typer.includes(type) === false) {
         throw new Error('не верный тип')
      } else {
         this.type = type;
      }
  
      this.health = 100;
      this.level = 1;
      this.attack
      this.defence
      
    }

    levelUp() {
      if( this.health === 0) {
        throw new Error('нельзя повысить левел умершего')
      }
      this.level += 1;
      this.attack = this.attack*0.2;
      this.defence = this.defence*0.2;
      this.health = 100;
    }

    damage(points) {
      if (this.health >= 0) {
        this.health -= points * (1 - defence / 100)
      }
    }



  }
  
  class Bowman extends Character {
    constructor (name, type = "Bowman"){
      super(name, type);
      this.attack = 25;
      this.defence = 25;
      
    }
  };
  class Swordsman extends Character {
    constructor (name, type = "Swordsman"){
      super(name, type);
      this.attack = 40;
      this.defence = 40;
      
    }
  };
  
  class Magician extends Character {
    constructor (name, type = "Magician"){
      super(name, type);
      this.attack = 10;
      this.defence = 40;
      
    }
  };
  
  class Daemon extends Character {
    constructor (name, type = "Daemon"){
      super(name, type);
      this.attack = 10;
      this.defence = 40;
      
    }
  };
  
  class Undead extends Character {
    constructor (name, type = "Undead"){
      super(name, type);
      this.attack = 25;
      this.defence = 25;
      
    }
  };
  
    class Zombie extends Character {
    constructor (name, type = "Zombie"){
      super(name, type);
      this.attack = 40;
      this.defence = 10;
      
    }
  };
  const qwe = new Zombie('Andry')
  console.log(qwe)
