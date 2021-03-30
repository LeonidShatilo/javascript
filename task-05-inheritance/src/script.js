class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Stuff extends Entity {
  constructor(name, stuff) {
    super(name);
    this._stuff = stuff;
  }

  getStuff() {
    return this._stuff;
  }

  setStuff(value) {
    if (value instanceof Stuff) {
      this._stuff = stuff;
    } else {
      throw new Error(`The ${value} is not an instance of the Stuff class!`);
    }
  }
}

class Box extends Entity {
  constructor(name, stuff) {
    super(name);
    this._stuff = stuff ? stuff : [];
  }

  getBoxStuff() {
    return this._stuff;
  }

  setBoxStuff(value) {
    if (value instanceof Stuff) {
      this._stuff.push(value);
    } else {
      throw new Error(`The ${value} is not an instance of the Stuff class!`);
    }
  }
}

class User extends Entity {
  constructor(name, box) {
    super(name);
    this._box = box;
  }

  getBox() {
    return this._box;
  }

  setBox(value) {
    if (value instanceof Box) {
      this._box = value;
    } else {
      throw new Error(`The ${value} is not an instance of the Box class!`);
    }
  }

  introduce() {
    return `Hello, my name is ${this.name}! I own the ${
      this.getBox().name
    } box.`;
  }
}

let apple = new Stuff('fruit', 'apple');
let banana = new Stuff('fruit', 'banana');
let orange = new Stuff('fruit', 'orange');
let fruitBox = new Box('fruit', [apple, banana, orange]);

console.log(fruitBox.getBoxStuff());

let peach = new Stuff('fruit', 'peach');

fruitBox.setBoxStuff(peach);
console.log(fruitBox.getBoxStuff());

let kate = new User('Kate', fruitBox);

console.log(kate.getBox());
console.log(kate.introduce());
