{
  // inheritance OOP;
  class Person {
    // name: string;
    // age: number;
    // address: string;
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    makeSleep(numberOfHours: number) {
      console.log(`${this.name} make sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  class Teacher extends Person {
    #salary: string;
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string,
      salary: string
    ) {
      super(name, age, address);
      this.#salary = salary;
    }
    takeClass(numberOfClass: number) {
      console.log(`${this.name} take ${numberOfClass} classes`);
    }
    showSalary() {
      console.log(`the hidden salary ${this.#salary}`);
    }
  }
  const student = new Student("mr: student", 22, "uganda");
  const teacher = new Teacher("mr: teacher", 22, "uganda's", "teacher", "20k");
  //   console.log(student);
  //   student.makeSleep(2);
  console.log(teacher.showSalary());

  //
}
