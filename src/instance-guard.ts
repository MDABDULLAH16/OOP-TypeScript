{
  // instance type guard in typescript

  class Animal {
    constructor(public name: string) {}
    sound() {
      console.log(`${this.name} animal can make sound`);
    }
  }

  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
    makeMew() {
      console.log(`${this.name} can mew mew`);
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
    makeBark() {
      console.log(`${this.name} can ghew ghew`);
    }
  }
  //you should return type safe
  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const makeSound = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.sound();
    }
  };

  const dog = new Dog("dog");
  const cat = new Cat("cat");
  makeSound(dog);
  makeSound(cat);

  //
}
