{
  //Abstraction OOP :  1:interface, 2: abstract;

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("car is starting");
    }
    stopEngine(): void {
      console.log("car is stopping");
    }
    move(): void {
      console.log("car is moving");
    }
  }

  const car1 = new Car();
  console.log(car1.startEngine());
  console.log(car1.stopEngine());
  console.log(car1.move());

  abstract class Technology {
    abstract game(): void;
    abstract movie(): void;
    abstract flash(): void;
  }

  class Mobile extends Technology {
    game(): void {
      console.log("30 minutes video game per day");
    }
    movie(): void {
      console.log("make some entertainment with movie");
    }
    flash(): void {
      console.log("turn on flash when load shedding");
    }
    test() {
      console.log("this is testing method");
    }
  }

  const mobile = new Mobile();
  console.log(mobile.movie());
  console.log(mobile.game());
  console.log(mobile.flash());
  console.log(mobile.test());

  //
}
