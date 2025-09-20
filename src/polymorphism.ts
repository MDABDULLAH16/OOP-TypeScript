{
  //Polymorphism

  class Person {
    getSleep() {
      console.log("I am sleeping for 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log("student should sleep 6 hour per day");
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log("developer should not sleep");
    }
  }

  const getSleepHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepHours(person1);
  getSleepHours(person2);
  getSleepHours(person3);

  // another example with Polymorphism

  class Shape {
    getArea() {
      return 0;
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius;
    }
  }
  class Square extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getAreaShape = (param: Shape) => {
    return console.log(param.getArea());
  };

  const shape = new Shape();
  const circle = new Circle(10);
  const square = new Square(10, 20);
  getAreaShape(shape);
  getAreaShape(circle);
  getAreaShape(square);
  //
}
