class Person {
  constructor (name = 'Terry', age = 18) {
    this.name = name;
    this.age = age;
  }
  getGreeting () {
    return `Hi! I'm ${this.name}!`;
  }
  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`;
  }
  toString () {
    return JSON.stringify(this);
  }
}

class Child extends Person {
  constructor (age, name, like) {
    super(age, name);
    this.like = like;
  }
  getGreeting () {
    return `Hi!!!!!! My name is ${this.name}, I like ${this.like}!!!`;
  }
}

class Child2 extends Person {
  constructor (name, age, like) {
    super(age, name);
    this.like = like;
  }
  getGreeting () {
    return `I like ${this.like}`;
  }
}

var me = new Person('Terry', 27);

console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.toString());

var other = new Child('Terry2', 20, 'ES6');
console.log(other.getGreeting());
console.log(other.toString());

var other1 = new Child2('Terry3', 20, 'Go');
console.log(other1.getGreeting());
console.log(other1.toString());