class Animal {
  //   public name: string;
  //   species: string;
  //   sound: string;
  // #price : string;

  // if i use public parameters in constructor() then do not need to define type tow times;
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  makeSound() {
    return `the ${this.species} sound ${this.sound}`;
  }
}

// make object calls inostance
const cat = new Animal("biral", "cat", "meaw meaw");
const dog = new Animal("kutta", "dog", "ghew ghew");
console.log(cat);
console.log(dog);

console.log(cat.makeSound());
console.log(dog.makeSound());
